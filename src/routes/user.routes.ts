import { Router } from 'express'
import { check } from 'express-validator'
import { isAdmin, authJwt } from '../middlewares'
import * as userController from '../controllers/user.controller'

const router = Router()

/* Methods */

router.post(
	'/',
	check('email', 'Email not valid').isEmail(),
	check('password', 'Password field is empty').not().isEmpty(),
	userController.createUser
)

router.get(
	'/:userId',
	check('userId', 'The user ID in not correct').isMongoId(),
	authJwt.verifyToken,
	userController.getUserById
)

router.put(
	'/:userId',
	check('userId', 'The user ID in not correct').isMongoId(),
	authJwt.verifyToken,
	userController.updateUser
)

router.delete(
	'/:userId',
	check('userId', 'The user ID in not correct').isMongoId(),
	authJwt.verifyToken,
	userController.deleteUser
)


// Admin Only
router.get(
	'/',
	authJwt.verifyToken,
	isAdmin,
	userController.getAllUsers
)



export default router
