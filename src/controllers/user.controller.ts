import { User } from '../models/user.model'
import { hashPwd } from '../helpers/hash'

export const createUser = async (req: any, res: any) => {

	try {
		const { email, password, name, surname, phone } = req.body

		const newUser = new User ({
			email,
			password: await hashPwd(password),
			name,
			surname,
			phone
		})
		const savedUser = await newUser.save()
		return res.status(200).json(savedUser)

	} catch (err: any) {
		return res
			.status(500)
			.json({ error: err.message || err });
	}
}

export const getAllUsers = async (req: any, res: any) => {

	try {
		const { page, perPage } = req.query
		const settings = {
			page: parseInt(page, 10) || 1,
			limit: parseInt(perPage, 10) || 10
		}
		const users = await User.paginate({}, settings)
		return res.status(200).json(users)

	} catch (err: any) {
		return res
			.status(500)
			.json({ error: err.message || err });
	}
}

export const getUserById = async (req: any, res: any) => {

	try {
		const user = await  User.findById(req.params.userId)
		return res.status(200).json(user)

	} catch (err: any) {
		return res
			.status(500)
			.json({ error: err.message || err });
	}
}

export const updateUser = async (req: any, res: any) => {

	try {
		const user = await User.findByIdAndUpdate(
			req.params.userId,
			req.body,
			{ new: true }
		)
		const userUpdated = await user.save()
		return res.status(200).json(userUpdated)

	} catch (err: any) {
		return res
			.status(500)
			.json({ error: err.message || err });
	}
}

export const deleteUser = async (req: any, res: any) => {

	try {
		await User.findByIdAndDelete(req.params.userId)
		// id o _id ?
		// await User.findByIdAndDelete(res.locals.user._id)
		return res.status(200).json({ message: 'User deleted' })

	} catch (err: any) {
		return res
			.status(500)
			.json({ error: err.message || err });
	}
}

// template

// export const 'name' = async (req: any, res: any) => {

// 	try {
//

// 	} catch (err: any) {
// 		return res
// 			.status(500)
// 			.json({ error: err.message || err });
// 	}
// }
