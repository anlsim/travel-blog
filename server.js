const express = require('express');
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const citiesRoute = require("./routes/cities");
const commentsRoute = require("./routes/comments");
const galleryRoute = require("./routes/gallery");
const PORT = process.env.PORT || 8000

dotenv.config();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    })
    .then(console.log("Connected To MONGO"))
    .catch(err=>console.log(err));
    app.use("/api/auth", authRoute);   
    app.use("/api/users", usersRoute);   
    app.use("/api/posts", postsRoute); 
    app.use("/api/cities", citiesRoute); 
    app.use("/api/comments", commentsRoute); 
    app.use("/api/gallery", galleryRoute); 

    if(process.env.NODE_ENV === "production"){
        app.use(express.static(path.join(__dirname, "client", "build")))

        app.get("*", (req, res) =>{
            res.sendFile(path.join(__dirname, "client", "build", "index.html"));
        });
    }
    

    else{
        app.get("/", (req, res)=> {
            res.send("Api Running");
        })
    }


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

