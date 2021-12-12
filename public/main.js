var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', likeMessage)
})
      
async function likeMessage(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        try{
          const response = await fetch('messages/likeMessage', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', dislikeMessage)
})

async function dislikeMessage(){
  const name = this.parentNode.parentNode.childNodes[1].innerText
  const msg = this.parentNode.parentNode.childNodes[3].innerText
  const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
  try{
    const response = await fetch('messages/dislikeMessage', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': name,
      'msg': msg,
      'thumbUp':thumbUp
    })
  })
  const data = await response.json()
  console.log(data)
  location.reload()
}catch(err){
  console.log(err)
}
}

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', deleteMessage)
})
      
async function deleteMessage(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        try{
          const response = await fetch('messages/deleteMessage', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}