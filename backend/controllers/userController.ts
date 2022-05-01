import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { ObjectId } from "mongodb";
import Users from "../models/Users";
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// @desc register user
// @route  POST api/users
// @access public
const register = expressAsyncHandler( async(req: Request, res:Response) => {
    const {userName, email, password} = req.body;

    if(!userName || !email || !password) {
        res.status(400)
        throw new Error('All fields are required')
    }

    const userExist = await Users.findOne({email})
    if(userExist) {
        res.status(400)
        throw new Error('User already exists!!')
    }

    const userNameExist = await Users.findOne({userName})
    if(userNameExist) {
        res.status(400)
        throw new Error(`Username ${userName} already exist`)
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await Users.create({
        userName,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            name: user.userName,
            email: user.email,
            token: generateToken(user.id)
        })
    }
})


// @desc get user data
// @route  GET api/users/me
// @access private
const getMe = expressAsyncHandler( async(req: Request, res: Response) => {
    res.status(200).json(req.user)
})


// @desc login
// @route POST api/users/login
// @access public
const login = expressAsyncHandler( async(req: Request, res: Response) => {
    const { email, password } = req.body

    const user = await Users.findOne({email})
    if(user && (await bcrypt.compare(password, user.password))) {
        res.send({
            _id: user.id,
            name: user.userName,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('User does not Exist')
    }
})


// @desc update uder details
// @route POST api/users/me/update
// @access private
const update = expressAsyncHandler( async(req: Request, res: Response) => {
    const user = await Users.findById(req.params.id)
    if(!user) {
        res.status(401)
        throw new Error('User doesn\'t exist')
    }

    const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updateUser)
})


// @desc delete user
// @route DELETE api/users/me/delete
// @access private
const deleteUser = expressAsyncHandler( async(req: Request, res: Response) => {
    const user = await Users.findById(req.params.id)

    if(!user) {
        res.status(401)
        throw new Error('User doesn\'t exist')
    }

    const delUser = await Users.findByIdAndDelete(req.params.id)

    res.status(200).json(delUser)
})


// Generate JWT
const generateToken = (id: ObjectId) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '24h'})
}


export {
    register,
    getMe,
    login,
    update,
    deleteUser
}