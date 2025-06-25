// functions/index.js
const functions = require('firebase-functions');

// Simple test endpoint
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Cloud Functions!");
});
