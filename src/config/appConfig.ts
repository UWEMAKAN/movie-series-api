import fs from 'fs';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import appRoot from 'app-root-path';
import compression from 'compression';

const config = (app: any) => {
  const accessLogStream = fs.createWriteStream(`${appRoot}/dist/logs/access.log`, { flags: 'a' });

  app.use(compression());
  app.use(morgan((tokens, req, res) => [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    `${tokens['response-time'](req, res)} ms`,
    tokens['user-agent'](req, res)
  ].join('\t\t'), {
    stream: accessLogStream,
    skip: (req, res) => res.statusCode === 404 || req.url === '/'
  }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));
};

export default config;
