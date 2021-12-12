import { validationResult } from 'express-validator'


// anys provisionales
export const validate = (req: any, res: any, next: any) => {
	const error = validationResult(req)
	if (!error.isEmpty()) return res.status(400).json(error)

	next()
}
