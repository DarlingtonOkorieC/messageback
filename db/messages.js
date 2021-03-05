const Joi = require('joi')
const db = require('./connection')









const messages = db.get('messages')

const schema = Joi.object().keys({
    username: Joi.string().alphanum().required(),
    subject: Joi.string().required(),
    message: Joi.string().max(500).required(),
    imageUrl: Joi.string().uri().trim()
    

})


function getAll(){
    return messages.find()
}

function create(message) {
    if(!message.username) message.username = 'Anonymous'
    const results = schema.validate(message)
    if (results.error == null){
        console.log(message)
        message.created = new Date()
        return messages.insert(message)
    }else{
        console.log(results.error)
        return Promise.reject(results.error)
    }
    
}

module.exports = {
    getAll,
    create
}