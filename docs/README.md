---

## 📁 `/docs/README.md`
**Purpose:** Documentation and architecture details

```md
# Docs

## Architecture Overview

- PDF uploads → Cloud Storage
- Upload triggers a Cloud Function
- PDF parsed and summarized via Gemini API
- Embeddings stored in memory (or vector store)
- Question asked → top-k chunks fetched → answer generated via prompt
- Answers + questions logged in Firestore

## Prompt Template

See: `gemini-utils/geminiHelpers.js`
```
