import { model, Schema } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'


const orderSchema = new Schema(
	{
		idClient: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		idProduct: {
			type: Schema.Types.ObjectId,
			ref: 'Product'
		},
		date: new Date(),
		status: {
			type: String,
			enum: ['Recieved', 'Confirmed', 'Preparing', 'Sent', 'Cancelled'],
			default: 'Recieved'
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
)


orderSchema.plugin(mongoosePaginate)
export const Order = model<any>('Order', orderSchema)
