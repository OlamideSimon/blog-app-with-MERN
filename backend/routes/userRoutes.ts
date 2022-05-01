import { Router } from 'express'
import { deleteUser, getMe, login, register, update } from '../controllers/userController'
import { protect } from '../middlewares/authMiddleware'

const router = Router()

router.route('/').post(register)
router.route('/login').post(login)
router.route('/me').get(protect, getMe)
router.route('/update/:id').post(protect, update)
router.route('/delete/:id').delete(protect, deleteUser)

export default router;