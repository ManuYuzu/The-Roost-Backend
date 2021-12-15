import { User } from '../models/user.model'
import { verifyPwd } from '../helpers/hash'
import jwt from 'jsonwebtoken'
import config from '../config'

// los any son provisionales
export const login = async (req: any, res: any) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email }).select('email password')
		if (!user) return res.status(400).json({ message: 'User not found' })

		const validatePassword = await verifyPwd(password, user.password)
		if (!validatePassword) return res.status(401).json({ message: 'Invalid password' })

		const token = jwt.sign(
			{ id: user._id },
			config.SECRET,
			{ expiresIn: '365d' }
		)

		res.status(200).json({ token })
	} catch (error) {
		res.status(500).json(error)
	}
}
