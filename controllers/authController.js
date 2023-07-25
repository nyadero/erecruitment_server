const { Op } = require("sequelize");
const asyncWrapper = require("../middlewares/asyncWrapper");
const {User} = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// secret key
const SECRET_KEY = "0be43392-0d5d-436f-8d48-7d4476f923c1"

// sign up
exports.signUp = asyncWrapper(async(req, res, next) => {
    console.log("registering user", req.body);
    const {name, email, password, confirmPassword} = req.body;
    if(name == "" || email=="" || password == "" || confirmPassword == "") return res.json({message: "All fields are required", type: "error"});
    // find if user exists
    const userExists =  await User.findOne({where: {name, email}})
    if(userExists) return res.json({message: "User name and email already taken", type: "error"}).status(200)
    // compare password
    if(password != confirmPassword) return res.json({message: "Passwords do not match", type:"error"}).status(200);
    // hash password
    const hashedPassword = bcrypt.hashSync(password, 16);
    // insert user into the Users table
    const user = await User.create({...req.body, password: hashedPassword});
    // generate payload
    const payload = {name: user.name, email: user.email, id: user.id};
    // generate token
    const token = await jwt.sign(payload, SECRET_KEY, {expiresIn: "7d"});
    // send results back to the  frontend
    res.json({user, token, message: "registered successfully", type: "success"}).status(201);
})

// signin user
exports.signIn = asyncWrapper(async(req, res, next) => {
    console.log(req.body);
    const {email, password} = req.body;
    // find if user exists
    const userExists = await User.findOne({where: {email}})
    if(!userExists) return res.json({message: "No such user exists in our database", type: "error"})
    // compare passwords
    const passwordsMatch = await bcrypt.compare(password, userExists?.password)
    if(!passwordsMatch) return res.json({message: "Incorrect login credentials", type: "error"})
     // generate payload
    const payload = {name: userExists.name, email: userExists.email, id: userExists.id};
    // generate token
    const token = await jwt.sign(payload, SECRET_KEY, {expiresIn: "7d"});
    // send results back to the  frontend
    res.json({user:userExists, token, message: "Login successful", type: "success"});
})