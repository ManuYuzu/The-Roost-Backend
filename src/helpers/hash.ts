import bcrypt from 'bcryptjs'

export const hashPwd = async (password: string) => {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(password, salt)
}

export const verifyPwd = async (password: string, inputPassword: string) => {
	return await bcrypt.compare(password, inputPassword)
}
