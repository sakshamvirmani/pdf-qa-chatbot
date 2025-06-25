// functions/chunkText.js

/**
 * Split plain text into an array of chunks of roughly `size` words each.
 * @param {string} text - The text to chunk
 * @param {number} [size=300] - Approximate number of words per chunk
 * @returns {string[]} Array of text chunks
 */
function chunkText(text, size = 300) {
  if (!text || typeof text !== 'string') {
    return [];
  }

  const words = text.trim().split(/\s+/);
  const chunks = [];
  for (let i = 0; i < words.length; i += size) {
    const chunkWords = words.slice(i, i + size);
    chunks.push(chunkWords.join(' '));
  }
  return chunks;
}

module.exports = { chunkText };
