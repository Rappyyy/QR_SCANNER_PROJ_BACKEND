const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001; // Choose a port for your backend

app.use(bodyParser.json());
app.use(cors()); // enables CORS for all routes

// Function to handle successful QR code data
const handleScannedQR = (scanResult) => {
  // Perform any backend processing with the scanned QR code data
  // For example, you can log it or save it to a database
  console.log("Scanned QR Code:", scanResult);
};

// Define a POST endpoint to handle scanned QR code data
app.post("/api/scanned-qr", (req, res) => {
  const { scanResult } = req.body;

  // Call the function to handle successful QR code data
  handleScannedQR(scanResult);

  // Respond to the frontend
  res.json({ message: "QR code data received successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
