export const isAdmin = async (req: any, res: any, next: any) => {
	try {
		const { role } = res.locals.user
		if (role === 'admin') {
			next()
		}
		return res.status(403).json({ msg: 'Admin permits needed' })

	} catch (error) {
		return res.status(500).send({ msg: error })
	}
}
