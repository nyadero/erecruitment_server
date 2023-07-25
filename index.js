const express = require("express");
const cors = require("cors")
const app = express();
const db = require("./models");
const notFound = require("./errors/notFound")

// port 
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json({limit: "500mb"}));
app.use(express.urlencoded({extended: true, limit: "500mb", parameterLimit: 10000000}));

// home page
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the e-recruitment backend api" });
})

// authentication routes
app.use("/authentication", require("./routes/authRoutes"));

// use notFound error handler
app.use(notFound); 

db.sequelize.sync().then(() => {
    // listen to the port
    app.listen(PORT, () => {
        console.log(`App running on http://localhost:${PORT}`);
    })
})
