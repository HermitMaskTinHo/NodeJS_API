var express = require('express')
import { createConnection, Any } from 'typeorm'

const app = express()
const port = 4444

createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root123",
    database: "nodejs_api",
    synchronize: true,
    entities: ['./entity/*.ts'],
    logging: true
}).then(() => {
    console.log('Database Connected')
    app.use(require('./routes/index'))

    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}).catch((err) => {
    console.log(err)
})