import twilio from "twilio";
import "dotenv/config";

import reddit from "./reddit.js";

const redditClient = new reddit();
const twilioClient = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

const sendRedditPosts = async () => {
    const posts = await redditClient.fetchPosts();

    twilioClient.messages
        .create({
            body: posts,
            to: "+19166905047",
            from: process.env.TWILIO_NUMBER,
        })
        .then((message) => console.log(message));
};

sendRedditPosts();
