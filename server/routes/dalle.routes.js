import express from "express";
import * as dotenv from 'dotenv';
import OpenAI from 'openai'; 

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E Routes" });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ message: "Prompt is required." });
        }

        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        const image = response.data.data[0].b64_json;

        res.status(200).json({ photo: image });

    } catch (error) {
        console.error("Error generating image:", error);

        if (error.response && error.response.status === 400 && error.response.data.error.code === 'billing_hard_limit_reached') {
            return res.status(402).json({ message: "Billing limit reached. Please upgrade your plan to continue using the service." });
        }

        res.status(500).json({ message: "An error occurred while processing your request. Please try again later." });
    }
});

export default router;
