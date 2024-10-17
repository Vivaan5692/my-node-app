const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define the /api/assets endpoint
app.get('/api/assets', (req, res) => {
    const playerId = req.query.playerId;

    // Logic to fetch assets using the playerId
    // Replace with your actual logic here
    res.json({ message: `Assets for player ID ${playerId}` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
