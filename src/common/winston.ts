import appRoot from 'app-root-path';
import winston from 'winston';

const options = {
  file: {
    level: 'info',
    filename: `${appRoot}/dist/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false // do not exit on handled exceptions
});

const write = (message: string) => {
  // use the 'info' log level so the output will be picked up by both transports
  // (file and console)
  logger.info(message);
}
// create a stream object with and pass a 'write' function that will be used by `morgan`
logger.stream({ start: -1 }).on('log', write);

export default logger;
