import express from 'express'
import morgan from 'morgan'

import paymentsRouter from './routes/payments.router.js'

const app = express()

// set up
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('combined'))

// routes 
app.use(paymentsRouter)

app.get('/*', (req, res) => {
  res.status(404).json({ error: 'not found' })
})

export default app
