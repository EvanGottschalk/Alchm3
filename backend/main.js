// Backend (Node.js with Express)
// server.js
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

// Route to handle DALL-E requests
app.post('/api/generate-image', async (req, res) => {
    try {
        console.log("Received prompt:", req.body.prompt); // Log the incoming prompt
        
        if (!process.env.OPENAI_API_KEY) {
            console.error("API key is missing!");
            return res.status(500).json({ error: "API key is not configured" });
        }

        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "dall-e-3",
                prompt: req.body.prompt,
                n: 1,
                size: "1024x1024"
            })
        });

        const data = await response.json();
        console.log("OpenAI response:", data); // Log the OpenAI response

        if (data.error) {
            console.error("OpenAI API error:", data.error);
            return res.status(500).json({ error: data.error.message });
        }

        res.json(data);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ error: error.message });
    }
});



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});