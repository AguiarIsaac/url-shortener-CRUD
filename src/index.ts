import { URLController } from './controller/URLController'
import  express  from 'express'
import { mongoConnection } from './database/mongoConnection'

const api = express()

// Confs da Aplicação
api.use(express.json())
api.use(express.urlencoded({ extended: true }))

const database = new mongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => {
    console.log('application running on port 5000')
})