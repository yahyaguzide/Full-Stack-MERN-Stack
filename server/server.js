import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb/lib/mongo_client'

const app = express()
devBundle.compile(app) // only in dev should this be used

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if(err) {
        console.log(err)
    }
    console.info('Server started on port %s.', port)
})

/* const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/p1'
MongoClient.connect(url, (err, db) => {
    console.log("Connected successfully to MongoDB server")
    db.close
}) */