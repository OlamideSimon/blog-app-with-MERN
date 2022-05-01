import { Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import Blogs from "../models/Blogs";
import fs from 'fs'
import path from "path";


// @desc get blogs
// @route  GET api/blogs
// @access public
const getBlogs = expressAsyncHandler( async(req: Request, res: Response) => {
    const blogs = await Blogs.find();

    res.status(200).json(blogs)
})


// @desc add a blog
// @route  POST api/blogs
// @access private
const addBlogs = expressAsyncHandler( async(req: Request, res: Response) => {
    const { title, body, description} = req.body

    if(!title || !body || !description ) {
        res.status(400)

        throw new Error('Enter all Fields')
    }

    const blog = await Blogs.create({
        title,
        body,
        description,
        user: req.user.id,
    })

    res.status(200).send(blog)
})


// @desc edit a blog
// @route  POST api/blogs/:id
// @access private
const edit = expressAsyncHandler(async(req: Request, res: Response) => {
    const blog = await Blogs.findById(req.params.id)

    if(!blog) {
        res.status(401)
        throw new Error(`Blog with id ${req.params.id} doesn't exist`)
    }

    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(blog.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const update = await Blogs.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(update)
})


// @desc Delete a blog
// @route DELETE api/blogs/:id
// @access Private
const deleteBlog = expressAsyncHandler( async(req: Request, res: Response) => {
    const blog = await Blogs.findById(req.params.id)

    if(!blog) {
        res.status(401)
        throw new Error(`Blog with id ${req.params.id} doesn't exist`)
    }

    if(blog.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Not Authorized')
    }

    const delBlog = await Blogs.findByIdAndDelete(req.params.id)

    res.status(200).json(delBlog)
})


export {
    getBlogs,
    addBlogs,
    edit,
    deleteBlog
}