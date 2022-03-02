const path = require('path');
var {createLogger,format, transports} = require('winston');
require('winston-daily-rotate-file');

var transport = new transports.DailyRotateFile({
  filename: path.join("logs",'application-%DATE%.log'),
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d'
});
var logger = createLogger({
    transports:[transport],
    format:format.combine(
        format.prettyPrint(),
        format.timestamp()
    )
})
if(process.env.NODE_ENV!='production'){
    logger.add(new transports.Console());
}
module.exports=logger;