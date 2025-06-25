---

## 📁 `/docs/README.md`
**Purpose:** Documentation and architecture details

```md
# Docs

## Architecture Overview

- PDF uploads → Cloud Storage
- Upload triggers a Cloud Function
- PDF parsed and embedded via Vertex AI
- Embeddings stored in memory (or vector store)
- Question asked → top-k chunks fetched → answer generated via prompt
- Answers + questions logged in Firestore

## Prompt Template

See: `vertex-utils/promptHelpers.js`
```
