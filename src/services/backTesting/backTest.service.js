import RsiStrategy from '../strategies/rsiStrategy.js'
import moment from 'moment'
class BackTestService{
    constructor(marketDataService){
        this.marketDataService=marketDataService
    }

    async backTest(user,symbol,timeframe,days){
        const since=moment().subtract(days,'days').valueOf()
        const data=await this.marketDataService.getHistoricalData(symbol,timeframe,since)
        const trades=[]
        const strategies = {
            RSI: new RsiStrategy(user.strategies.RSI),
          };
        let position=null
        for(let i=user.strategies.RSI.period;i<data.length;i++){
            const window=data.slice(0,i+1)
            const signal = Object.entries(strategies).map(([name, strategy]) => ({
                strategy: name,
                ...strategy.check(window)
              }));
            const buySignal=signal.find(s=>s.action==='BUY')
            const sellSignal=signal.find(s=>s.action==='SELL')

            if(buySignal && !position){
                position={
                    strategy:buySignal.strategy,
                    entry:buySignal.price,
                    entryTime:buySignal.timestamp
                }
            } else if(sellSignal && position){
                trades.push({
                    ...position,
                    exit:sellSignal.price,
                    exitTime:sellSignal.timestamp
                })
                position=null
            }
        }
        return trades
    }
}

export default BackTestService;