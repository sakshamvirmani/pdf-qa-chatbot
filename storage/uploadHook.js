// storage/uploadHook.js

// This would be deployed as a GCP function triggered on PDF upload
exports.onPDFUpload = (event, context) => {
  const file = event.name;
  console.log(`New file uploaded: ${file}`);
  // TODO: Add parsing + embedding logic
};
