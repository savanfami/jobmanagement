import express from 'express'
import morgan from 'morgan'
import { PORT } from './config/connection.js'
import cors from 'cors'
// import cookieParser from 'cookie-parser'
import routes from './routes/routes.js'
// import { errorHandler } from './utils/common/errorHandler'


const app = express()

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
  };


  app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))



app.use('/api', routes);



// app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`server listening on PORT http://localhost:${PORT}`)
})

export default app