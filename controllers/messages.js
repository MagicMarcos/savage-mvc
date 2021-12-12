const Message = require('../models/Message')

module.exports = {
    getMessages: async (req,res)=>{
        try{
         const messages = await Message.find()
            res.render('index.ejs', {
              messages : messages 
            })
        }catch(err){
            console.log(err)
        }
    },
    createMessages: async (req, res)=>{
        try{
            await Message.create({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0, })
            console.log('Message has been posted!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },
    likeMessage: async (req, res)=>{
        try{
            await Message.findOneAndUpdate({name: req.body.name, msg: req.body.msg},{
                    $set: {
                      thumbUp:req.body.thumbUp + 1
                    }
                  }, {
                  
                  })
            console.log('Post has been liked')
            res.json('Post was liked')

            
        }catch(err){
            console.log(err)
        }
    },
    deleteMessage: async (req, res)=>{
        try{
            await Message.findOneAndDelete({name: req.body.name, msg: req.body.msg})
            console.log('Deleted message')
            res.json('Deleted it')
        }catch(err){
            console.log(err)
        }
    }
}    

// app.get('/', (req, res) => {
//     db.collection('messages').find().toArray((err, result) => {
//       if (err) return console.log(err)
//       res.render('index.ejs', {messages: result})
//     })
//   })
  
//   app.post('/messages', (req, res) => {
//     db.collection('messages').insertOne({name: req.body.name, msg: req.body.msg, thumbUp: 0, thumbDown:0}, (err, result) => {
//       if (err) return console.log(err)
//       console.log('saved to database')
//       res.redirect('/')
//     })
//   })
  
//   app.put('/messages', (req, res) => {
//     db.collection('messages')
//     .findOneAndUpdate({name: req.body.name, msg: req.body.msg}, {
//       $set: {
//         thumbUp:req.body.thumbUp + 1
//       }
//     }, {
//       sort: {_id: -1},
//       upsert: true
//     }, (err, result) => {
//       if (err) return res.send(err)
//       res.send(result)
//     })
//   })
  
//   app.delete('/messages', (req, res) => {
//     db.collection('messages').findOneAndDelete({name: req.body.name, msg: req.body.msg}, (err, result) => {
//       if (err) return res.send(500, err)
//       res.send('Message deleted!')
//     })
//   })
  