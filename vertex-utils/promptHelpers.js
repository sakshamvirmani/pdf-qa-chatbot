// vertex-utils/promptHelpers.js

function buildPrompt(question, contextChunk) {
  return `You are a helpful assistant. Use the context below to answer the question.

Context:
${contextChunk}

Question:
${question}

Answer:`;
}

module.exports = { buildPrompt };
