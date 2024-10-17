const express = require('express');
const axios = require('axios'); // Make sure to install axios

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/assets', async (req, res) => {
    const playerId = req.query.playerId;

    try {
        // Fetch clothing items (shirts, pants, t-shirts)
        const clothingResponse = await axios.get(`https://inventory.roblox.com/v1/users/${playerId}/assets?assetTypeId=11&assetTypeId=12&assetTypeId=13`);
        const clothingItems = clothingResponse.data.data;

        // Fetch game passes
        const gamePassResponse = await axios.get(`https://inventory.roblox.com/v1/users/${playerId}/assets?assetTypeId=34`);
        const gamePassItems = gamePassResponse.data.data;

        res.json({
            message: `Assets for player ID ${playerId}`,
            clothing: clothingItems,
            gamePasses: gamePassItems
        });
    } catch (error) {
        console.error(`Error fetching assets for player ID ${playerId}:`, error);
        res.status(500).json({ message: "An error occurred while fetching assets." });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
