import { model, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'


const reservationSchema = new Schema(
	{
		idClient: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		table:{
			type: Number,
			required: [true, 'You need to select a table.'],
		},
		dateReservation: Date,
		peopleAmount: {
			type: Number,
			minlength: 2,
			maxlength: 6
		},
		description: {
			type: String,
			minlength: 1,
			maxlength: 250
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

reservationSchema.plugin(mongoosePaginate)
export const Reservation = model<any>('Reservation', reservationSchema)
