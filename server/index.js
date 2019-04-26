require('dotenv').config()
const express = require('express')
const massive = require('massive')

const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Database connected')
}).catch(err => console.log(err))

//middleware
app.use(express.json())

//endpoints
app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.createHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})