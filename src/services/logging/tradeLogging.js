import { createLogger,format,transports } from "winston";

class TradeLogger{
    constructor(){
        this.logger=createLogger({
            level:'info',
            format:format.combine(
                format.timestamp(),
                format.json()
            ),
            transports:[
                new transports.File({filename:'logs/trades.log'})
            ]
        })
    }

    logTrade(trade){
        this.logger.info({
            message:'Trade Logged',
            ...trade
        })
    }
}


const tradeLog=new TradeLogger();
export default tradeLog;