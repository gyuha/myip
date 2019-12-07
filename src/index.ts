import * as express from 'express';
import * as cors from 'cors';
import * as requestIp from 'request-ip';

const app = express();
app.use(cors());
app.use(requestIp.mw())

app.get('/', function (req: any, res) {
  const ip = req.clientIp;
  res.json({ip});
});

app.listen(80, function () {
  console.log('App listening on port 80!');
});