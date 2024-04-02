import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'

import authRoute from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import userRoute from './routes/user.route.js'

import connectToMongoDB from './db/connectToMongoDB.js'
import { app, server } from './socket/socket.js'

dotenv.config()

const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/messages', messageRoute)
app.use('/api/users', userRoute)

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

const PORT = process.env.PORT || 4000
server.listen(PORT, () => {
  connectToMongoDB()
  console.log(`Server is running on port ${PORT}`)
})
