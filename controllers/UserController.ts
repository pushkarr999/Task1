import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
const { ObjectId } = require('mongodb');
import User from '../models/User';
import {generateToken, generateRefreshToken} from '../utils/generateToken';

// @Desc Get all users
// @Route /api/auth
// @Method GET
export const getAll = asyncHandler(async (req: Request, res: Response) => {

    const users = await User.find({}).select('-password');
    res.status(201).json({ success: true, count: users.length, users });

})

// @Desc Login 
// @Route /api/auth/
// @Method POST
export const login = asyncHandler (async (req: Request, res: Response) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user) {
        res.status(401);
        throw new Error("User not found");
    }

    if(await user.comparePassword(password)) {

        res.status(201).json({ success: true, user: {
            id: user._id,
            email: user.email,
            fullName: user.fullName,
            token: generateToken(user._id),
            refreshToken : generateRefreshToken()
        }})

    } else {
        res.status(401);
        throw new Error("Email or password incorrect");
    }

})

// @Desc Register
// @Route /api/auth/register
// @Method POST
export const register = asyncHandler(async (req: Request, res: Response) => {

    const { email, fullName, password } = req.body;
    const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const pwdExp: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/i;
    const result: boolean = expression.test(email);
    const resultPwd: boolean = pwdExp.test(password);
    const check = await User.findOne({email});

    if(!check){
        if(result){
            if(resultPwd){
        const t = generateRefreshToken();
        const user = new User({
            email, fullName, password, t
        });
        await user.save();

        res.status(201).json({ success: true, user: {
            email: user.email,
            fullName: user.fullName,
            token: generateToken(user._id),
            refreshToken : user.refreshToken
        } });
        }
        else{
            res.json({
                message : "Choose stronger password"
            })
        }
        }else{
            res.json({
                message : "Invalid email"
            })
        }
    }else{
        res.json({
            message : "User exists"
        })
    }

})

export const refreshTokenH = asyncHandler(async (req: Request, res: Response) => {
    const {refreshToken} = req.body;
    const check = await User.findOne({refreshToken}) 
    const id = check?._id;
    if(check){
        User.findByIdAndUpdate(id, { $set : {
            token : generateToken(id),
            refreshToken : generateRefreshToken()
        }})
        .then(() => {
            res.json(
                { message: "Access token refreshed!"}
            )
        })
        .catch(error => {
            res.json(
                { message: "ID not found"}
            )
        })

    }else{
        res.json({
            message : "Incorrect refresh token"
        })
    }
    
})

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user) {
        res.status(401);
        throw new Error("User not found");
    }

    if(await user.comparePassword(password)) {
        user.delete();
        res.json(
            { message: "User deleted"}
        )
    } else {
        res.status(401);
        throw new Error("Password incorrect");
    }
})