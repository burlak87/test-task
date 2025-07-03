import Router from 'express'
import PostController from './PostController.js'
import NotificationController from './NotificationController.js'

const router = new Router()

app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
app.post('/posts', PostController.create)
app.put('/posts', PostController.update)
app.delete('/posts/:id', PostController.delete)

app.post('/notification', NotificationController.sending)

export default router;