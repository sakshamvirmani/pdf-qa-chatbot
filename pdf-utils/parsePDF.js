const pdfParse = require('pdf-parse');

/**
 * Extract text from a PDF buffer.
 * @param {Buffer} buffer - Raw PDF data.
 * @returns {Promise<string>} Resolves with plain text from the PDF.
 */
async function parsePDF(buffer) {
  if (!Buffer.isBuffer(buffer)) {
    throw new TypeError('Buffer expected');
  }
  const data = await pdfParse(buffer);
  return data.text;
}

module.exports = { parsePDF };
