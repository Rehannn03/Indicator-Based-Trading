import ccxt from "ccxt";


class MarketDataService{
    constructor(){
        this.exchange=new ccxt.binance()
    }


    async getHistoricalData(symbol,timeframe,since,limit=1000){
        try {
            return await this.exchange.fetchOHLCV(symbol,timeframe,since,limit)
        } catch (error) {
            throw new Error('Market Data Error',error.message)
        }
    }
}

export default MarketDataService;