import express from 'express'
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';
import TelegramBot from 'node-telegram-bot-api';

const PORT = 5000
const DB_URL = 'mongodb+srv://noobikcfb:N0G3o6A2ZZjrfOjW@cluster0.aynxjpc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const TOKEN = ''
const CHATID = ''
const BOT = new TelegramBot(TOKEN, {polling: true})

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api-v1', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
