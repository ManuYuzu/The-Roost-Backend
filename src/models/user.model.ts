import { model, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const addressSchema = new Schema(
	{
		firstName: {
			type: String,
			minlength: 2,
			maxlength: 24
		},
		lastName: {
			type: String,
			minlength: 2,
			maxlength: 24
		},
		address1: {
			type: String,
			minlength: 2,
			maxlength: 50
		},
		address2: {
			type: String,
			minlength: 2,
			maxlength: 50
		},
		city:	{
			type: String,
			minlength: 2,
			maxlength: 30
		},
		state: {
			type: String,
			minlength: 2,
			maxlength: 30
		},
		country: {
			type: String,
			minlength: 2,
			maxlength: 30
		},
		zipCode: {
			type: String,
			minlength: 2,
			maxlength: 10
		},
		phone:{
			type: String,
			minlength: 5,
			maxlength: 15
		}
	}
)

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, 'Email is required'],
			unique: [true, 'This email is arleady in use']
		},
		password: {
			type: String,
			required: [true, 'Password is required'],
			select: false
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user'
		},
		name: {
			type: String,
			minlength: 2,
			maxlength: 24
		},
		surname: {
			type: String,
			minlength: 2,
			maxlength: 24
		},
		phone: {
			type: String,
			minlength: 5,
			maxlength: 15
		},
		address: [addressSchema]
	},
	{
		timestamps: true,
		versionKey: false
	}
)

userSchema.plugin(mongoosePaginate)

export const User = model<any>('User', userSchema)
