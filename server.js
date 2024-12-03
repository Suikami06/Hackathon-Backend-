const express = require('express')
const app = express();
require("dotenv").config()

//import routes

const personalInfoRoutes = require("./routes/infoRoutes");
const educationRoutes = require("./routes/educationRoutes");
const bioRoutes = require("./routes/bioRoutes");
const languageRoutes = require("./routes/languageRoutes");
const experienceRoutes = require("./routes/experienceRoutes");
const socialMediaRoutes = require("./routes/socialMediaRoutes");
const topicsRoutes = require("./routes/topicsRoutes");



const {DbConnect} = require('./config/Database') 

const cors = require('cors');

const PORT = process.env.PORT || 3000

app.use(express.json());


app.use(cors({
    origin:"*"
}))

app.listen(PORT,()=>{

    console.log(`App is listening at ${PORT}`);
})

// API Routes
app.use("/api/personal-info", personalInfoRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/bio", bioRoutes);
app.use("/api/languages", languageRoutes);
app.use("/api/experience", experienceRoutes);
app.use("/api/social-media", socialMediaRoutes);
app.use("/api/topics", topicsRoutes);


DbConnect();