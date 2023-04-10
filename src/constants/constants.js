import { gpt3, bank, restaurant } from "./images";

export const projects = [
    {
        title: 'GPT-3 Template',
        description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
            image: gpt3,
            tags: ['React', 'Node', "AnimationCss"],
        source: 'https://github.com/Tomas-Garnero/GTP3-Template-PROYECT',
        visit: 'https://gpt3-template.onrender.com',
        id: 0,
    },
    {
        title: 'Modern Bank Template',
        description:"While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
        image: bank,
        tags: ['React', 'JavaScript'],
        source: 'https://github.com/Tomas-Garnero/ModernBankApp-PROJECT',
        visit: 'https://modernbank-app.onrender.com/',
        id: 1,
    },
    {
        title: 'WebRTC App',
        description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
            image: restaurant,
            tags: ['React', 'WebRTC'],
        source: 'https://github.com/Tomas-Garnero/MyRestaurant-PROYECT',
        visit: 'https://myrestaurant-template.onrender.com/',
        id: 2,
    },
];

export const TimeLineData = [
    { year: 2021, text: 'Started my journey' },
    { year: 2022, text: 'Worked as a freelance dev' },
    { year: 2023, text: 'Shared my projects with the world' },
];

export const data = [
    { number: 20, text: 'Open Source Projects'},
    { number: 1000, text: 'Students', },
    { number: 1900, text: 'Github Followers', },
    { number: 5000, text: 'Github Stars', }
];