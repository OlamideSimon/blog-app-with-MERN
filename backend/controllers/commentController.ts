import { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import Blogs from '../models/Blogs'
import Comments from '../models/Comments'


// @desc    get all comments
// @route   GET api/comments/:id
// @access  public
const getComments = expressAsyncHandler( async(req: Request, res: Response) => {
    const blog = await Blogs.findById(req.params.id);
    if(!blog) {
        res.status(401);
        throw new Error('Blog doesn\'t exist');
    };

    const comments = await Comments.find({blog: req.params.id}).sort({"createdAt": -1});
    res.status(200).json(comments);
})


// @desc    post a comment
// @route   POST api/comments/:id
// @access  private
const postComment = expressAsyncHandler( async(req: Request, res:Response) => {
    const { name, email, comment } = req.body;
    const blog = await Blogs.findById(req.params.id)

    if (!blog) {
        res.status(400)
        throw new Error('Blog doesn\'t exist')
    }

    if(!comment || !name || !email) {
        res.status(400)
        throw new Error('All fields are required')
    }

    const add = Comments.create({
        name,
        email,
        comment,
        blog: req.params.id
    })

    res.status(200).send(add)
})


// @desc    delete a comment
// @route   DELETE api/comments/:id/:CId
// @access  private
const deleteComment = expressAsyncHandler( async(req: Request, res: Response) => {
    const comment = await Comments.findById(req.params.CId)
    const blog = await Blogs.findById(req.params.id)

    if (!blog) {
        res.status(401)
        throw new Error('Blog doesn\'t exist')
    }

    if(!comment) {
        res.status(401)
        throw new Error('Comment does not exist')
    }

    const delComment = await Comments.findByIdAndDelete(req.params.CId)

    res.status(200).send(delComment)
})


export {
    getComments,
    postComment,
    deleteComment
}