// gemini-utils/geminiHelpers.js

function buildSummaryPrompt(text) {
  return `Summarize the following PDF text for later retrieval:\n\n${text}\n`;
}

function buildQAPrompt(question, context) {
  return `You are a helpful assistant. Use only the context below to answer the question. If the answer isn't in the text, say you don't know.\n\nContext:\n${context}\n\nQuestion:\n${question}\n\nAnswer:`;
}

module.exports = { buildSummaryPrompt, buildQAPrompt };
