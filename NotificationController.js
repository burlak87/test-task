import notificationService from './notificationService.js'

class NotificationController {
    async sending(req, res) {
        try {
            const token = ''
            const notification = await notificationService.sending(req.body, token)
            res.json(notification)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}