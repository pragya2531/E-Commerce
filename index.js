// Import the Express module
import express from "express";
// Create an instance of an Express app
const app = express();

// Define the server port
const port = 3000;



// importing the routes
import { router } from './routes/index.js'

// Define a simple route
app.use('/', router);
// everything that starts with / means every possible API route

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
