import MarketDataService from "./services/market-data/marketData.service.js";
import BackTestService from "./services/backTesting/backTest.service.js";
import tradeLog from './services/logging/tradeLogging.js'
import userData from '../config/users.json' assert {type:'json'}

const {users}=userData
async function main(){
    const marketDataService=new MarketDataService()
    const backTestService=new BackTestService(marketDataService)

    for(const user of users){
        const trades=await backTestService.backTest(
            user,
            'BTC/USDT',
            '1h',
            1
        )

        trades.forEach(trade=>{
            tradeLog.logTrade({
                userID:user.id,
                ...trade
            })
        })
    }
}

main().catch(console.error)