const express = require("express");
const app = express();

const PORT = 3000;

/**
 * Routes.
 */
const charactersRouter = require("./routes/characters");

/**
 * Express middleware.
 */
// parses incoming requests with JSON payloads
app.use(express.json());
// parses incoming requests with urlencoded payloads
// extended: true - parsing the URL-encoded data with the querystring library
app.use(express.urlencoded({ extended: true }));

// Add this after the middleware part
app.use("/api", charactersRouter);

function onStart() {
  console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

module.exports = app;
