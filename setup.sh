#!/bin/bash

echo "📦 Setting up AI-Powered PDF Q&A Chatbot project..."

# Go to project root
cd "$(dirname "$0")"

# 1. Setup frontend (Next.js)
echo "➡️ Setting up frontend..."
mkdir -p frontend
cd frontend
npx create-next-app@latest . --typescript --use-npm --no-eslint --no-tailwind --no-src || true
npm install firebase
cd ..

# 2. Setup Cloud Functions
echo "➡️ Setting up backend Cloud Functions..."
mkdir -p functions
cd functions
npm init -y
npm install firebase-functions firebase-admin
touch index.js
cd ..

# 3. Setup vertex-utils
echo "➡️ Setting up Vertex AI utils..."
mkdir -p vertex-utils
touch vertex-utils/promptHelpers.js

# 4. Setup Firestore and Storage logic
mkdir -p firestore storage
touch firestore/firestore.rules
touch storage/uploadHook.js

# 5. Docs directory
mkdir -p docs
touch docs/README.md

# 6. Git ignore
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore

echo "✅ Setup complete. You can now open this project in Codex or any editor."
