const express = require('express')
const router = express.Router()
const messagesController = require('../controllers/messages')

router.get('/', messagesController.getMessages)
// whats after the forward slash is the action from the form in the ejs 
router.post('/messages', messagesController.createMessages)

// property is inside of a fetch in the main js 
router.put('/messages/likeMessage', messagesController.likeMessage)
router.put('/messages/dislikeMessage', messagesController.dislikeMessage)
// property is inside the main js 
router.delete('/messages/deleteMessage', messagesController.deleteMessage)

module.exports = router