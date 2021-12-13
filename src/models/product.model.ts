import { model, Schema} from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const productSchema = new Schema(
	{
		reference: {
			type: String,
			minlength: 3,
			maxlength: 50
		},
		name: {
			type: String,
			minlength: 2,
			maxlength: 50
		},
		description: {
			type: String,
			minlength: 1,
			maxlength: 250
		},
		/* TODO: Revisar tipo de dato - Double ? */
		price:{
			type: Number,
			minlength: 1
		},
		type: {
			coffee : {
				type: String,
				enum: ['Espresso', 'Blue Mountain', 'Mocha', 'Blend', 'Decaffeinated', 'Kilimanjaro'],
				default: 'Espresso'
			},
			tea:{
				type: String,
				enum: ['Matcha', 'Green', 'Red', 'Blue', 'Black', 'White']
			}
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
)

productSchema.plugin(mongoosePaginate)
export const Product = model<any>('Product', productSchema)
