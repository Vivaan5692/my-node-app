const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to get marketplace items for a player
app.get('/api/marketplace', async (req, res) => {
    const playerId = req.query.playerId;

    if (!playerId) {
        return res.status(400).json({ message: "Player ID is required." });
    }

    try {
        // Replace with actual method to fetch the user's items
        const response = await axios.get(`https://api.roblox.com/marketplace/user-owns-item?userId=${playerId}`);

        // This is a placeholder; adjust based on actual response structure
        const items = response.data;

        if (!items || items.length === 0) {
            return res.status(404).json({ message: "No marketplace items found for this player." });
        }

        return res.json(items);
    } catch (error) {
        console.error(error); // Log error for debugging
        return res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
