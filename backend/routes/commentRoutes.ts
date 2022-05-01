import { Router } from 'express'
import { deleteComment, getComments, postComment } from '../controllers/commentController'
import { protect } from '../middlewares/authMiddleware';

const router = Router()

router.route('/:id').get(getComments).post(postComment)
router.route('/:id/:CId').delete(protect, deleteComment)

export default router;