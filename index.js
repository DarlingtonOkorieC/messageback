const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')





const app = express()





const messages = require('./db/messages')

app.use(morgan('tiny'))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:false }))

app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages)
    })
})

app.post('/messages', (req, res) =>{
    messages.create(req.body).then((mess) =>{
        res.json(mess)
    }).catch((error)=>{
        res.status(500)
        res.json(error)
    })
})

app.get('/', (req, res) =>{
    res.json({message: 'Full stack message board.'})
})

const port = process.env.PORT || 8000



app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})