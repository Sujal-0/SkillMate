//what will happen when user signup
// import { request } from "express";
import User from "../models/UserModel.js";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
// import { renameSync, unlinkSync } from "fs";

const COOKIE_MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000; // 3 days in ms
const TOKEN_EXPIRES_IN = "3d"; // suitable format for jsonwebtoken

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, {
        expiresIn: TOKEN_EXPIRES_IN,
    });
}

export const signup = async (request, response, next) => {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            return response.status(400).send("Email and password are required");
        }
        const user = await User.create({ email, password });
        response.cookie("jwt", createToken(email, user.id), {
            maxAge: COOKIE_MAX_AGE_MS,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
        });
        return response.status(201).json({
            user: {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup,
            },
        });
    } catch (error) {
        console.error(error.stack || error);
        // Handle duplicate email error from Mongo
        if (error.code === 11000) {
            return response.status(409).send("Email already exists");
        }
        return response.status(500).send(error.message || "Internal server error");
    }
}


export const login = async (request, response, next) => {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            return response.status(400).send("Email and password are required");
        }
        const user = await User.findOne({ email });
        if (!user) {
            return response.status(404).send("User not found");
        }
        const auth = await compare(password, user.password);
        if (!auth) {
            return response.status(400).send("Invalid credentials");
        }
        response.cookie("jwt", createToken(email, user.id), {
            maxAge: COOKIE_MAX_AGE_MS,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
        });
        return response.status(200).json({
            user: {
                id: user.id,
                email: user.email,
                profileSetup: user.profileSetup,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image,
                color: user.color,
            },
        });
    } catch (error) {
        console.error(error.stack || error);
        return response.status(500).send(error.message || "Internal server error");
    }
}

export const getUserInfo = async (request, response, next) => {
    
    try {
        // console.log(request.userId);
        const userData = await User.findById(request.userId);
        if (!userData) {
            return response.status(404).send("User with this id not found");
        }
        return response.status(200).json({
            id: userData.id,
            email: userData.email,
            profileSetup: userData.profileSetup,
            firstName: userData.firstName,
            lastName: userData.lastName,
            image: userData.image,
            color: userData.color,
        });
       
        
    } catch (error) {
        console.error(error.stack || error);
        return response.status(500).send(error.message || "Internal server error");
    }
}




export const logout = async (request, response, next) => {
    try {
       response.cookie("jwt", "", {
            maxAge: 1,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
        });
        return response.status(200).send("Logged out successfully");
    } catch (error) {
        console.log({ error });
        return response.status(500).send("Internal server error");
    }
}