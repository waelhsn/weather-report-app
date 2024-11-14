const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cities = require('./cities');

const app = express();
const port = 3000;

const key = process.env.API_KEY;
if (!key) {
    throw new Error("No API key found. Please set the API_KEY environment variable.");
}

// Serve static files from the public directory
app.use(express.static('public'));

// API endpoint to fetch weather data
app.get('/api/weather', async (req, res) => {
    try {
        const weatherData = await Promise.all(
            cities.map(async (city) => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&APPID=${key}`;
                const response = await axios.get(url);
                return {
                    city: response.data.name,
                    temperature: response.data.main.temp,
                    description: response.data.weather[0].description,
                };
            })
        );

        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
