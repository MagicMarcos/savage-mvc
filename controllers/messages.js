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
            await Message.create({name: req.body.name, msg: req.body.msg, thumbUp: 0 })
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
                      thumbUp:req.body.thumbUp + 1,
                    }
                  }, {
                  
                  })
            console.log('Post has been liked')
            res.json('Post was liked')

            
        }catch(err){
            console.log(err)
        }
    },
    dislikeMessage: async (req, res)=>{
        try{
            await Message.findOneAndUpdate({name: req.body.name, msg: req.body.msg},{
                    $set: {
                      thumbUp:req.body.thumbUp - 1,
                    }
                  }, {
                  
                  })
            console.log('Post has been disliked')
            res.json('Post was disliked')

            
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


  