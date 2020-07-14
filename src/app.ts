import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import routes from './routes/index';

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(routes)

export default app