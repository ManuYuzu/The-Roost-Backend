import jwt from 'jsonwebtoken'
import config from '../config'

import { User } from '../models/user.model'


// any provisionales
export const verifyToken = async (req: any, res: any, next: any) => {
	const token = req.headers.token
	if (!token) return res.status(403).json({ msg: 'Token not provided' })

	try {
		// any provisional
		const decoded: any = jwt.verify(token, config.SECRET)
		req.userId = decoded.id
		const user = await User.findById(req.userId)
		if (!user) return res.status(401).json({ msg: 'User not found' })
		res.locals.user = user

		next()
	} catch (error) {
		return res.status(403).json({ msg: 'Unauthorized' })
	}
}
