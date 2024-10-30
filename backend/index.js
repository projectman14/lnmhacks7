import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { main } from './config/connectDatabase.js'
import router from './routes/index.js'
import { setupChangeStream } from './controllers/raiseQuery.js'  // Import the setupChangeStream
dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'test success'
    })
})

app.use('/api', router)

// Modified server startup to include setupChangeStream
main().then(async () => {
    try {
        // Initialize the change stream after database connection
        await setupChangeStream();
        console.log('MongoDB change stream initialized successfully');
        
        app.listen(PORT, () => {
            console.log('server started at ' + PORT)
        })
    } catch (error) {
        console.error('Error setting up change stream:', error);
        // You might want to decide whether to start the server if change stream fails
        app.listen(PORT, () => {
            console.log('server started at ' + PORT, 'but change stream failed to initialize')
        })
    }
})

export default app