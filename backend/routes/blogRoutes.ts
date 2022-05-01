import { Router } from 'express'
import { Request } from 'express'
import { addBlogs, deleteBlog, edit, getBlogs } from '../controllers/blogController'
import {protect} from '../middlewares/authMiddleware'

const router = Router()


router.route('/').get(getBlogs).post(protect, addBlogs)
router.route('/:id').post(protect, edit).delete(protect, deleteBlog)

export default router