import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({ip});
});

app.listen(80, function () {
  console.log('App listening on port 80!');
});