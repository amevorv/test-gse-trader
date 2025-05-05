const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/gse/live', async (req, res) => {
    try {
        const response = await axios.get('https://dev.kwayisi.org/apis/gse/live');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
