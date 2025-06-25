// functions/index.js
require("dotenv").config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const functions = require('firebase-functions');

// Simple test endpoint
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Cloud Functions!");
});
