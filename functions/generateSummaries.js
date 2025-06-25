// functions/generateSummaries.js

const axios = require('axios');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

/**
 * Call the Gemini API to return a 1-2 sentence summary of the provided text.
 * @param {string} chunk
 * @returns {Promise<string>} summary text
 */
async function summarizeChunk(chunk) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
  const prompt = `Summarize the following text in 1-2 sentences:\n\n${chunk}`;
  try {
    const response = await axios.post(url, {
      contents: [{ parts: [{ text: prompt }] }]
    });
    return response.data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
  } catch (err) {
    console.error('Error summarizing chunk', err.response?.data || err.message);
    return '';
  }
}

/**
 * Generate summaries for an array of text chunks.
 * @param {string[]} chunks
 * @returns {Promise<Array<{chunk: string, summary: string}>>}
 */
async function generateSummaries(chunks) {
  const results = await Promise.all(
    chunks.map(async (chunk) => ({ chunk, summary: await summarizeChunk(chunk) }))
  );
  return results;
}

module.exports = { summarizeChunk, generateSummaries };
