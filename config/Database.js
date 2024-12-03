const mongoose = require('mongoose');

require("dotenv").config();



exports.DbConnect = ()=>{

    mongoose.connect(process.env.DB_URL)
    .then(console.log("database connected successfully"))
    .catch((err)=>{

        console.error(err);
        process.exit(1);

    })
}