import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

// Routes imports
import authRoutes from './routes/auth.routes'

const app = express();

app.get('/', (req: any, res: any) => {
  res.send('The sedulous hyena ate the antelope!');
});

// Settings
app
	.set('port', process.env.PORT || 3000)

app
	.use(cors())
	.use(helmet())
	.use(morgan('dev'))
	.use(express.json())

	// Routes
app
	.use('/api/auth', authRoutes)

export default app
