import technicalIndicators from 'technicalindicators'
import TradingStrategy from './tradingStrategy.js'


class RsiStrategy extends TradingStrategy{
    constructor(params){
        super(params)
        this.previousRsi=null
    }

    calculateRsi(closes){
        return technicalIndicators.RSI.calculate({
            values:closes,
            period:this.params.period
        })
    }

    check(data){
        const closes=data.map(d=>d[4])
        const rsiValue=this.calculateRsi(closes)
        const currentRsi=rsiValue[rsiValue.length-1] || 0

        const signal={
            action:null,
            price:data[data.length-1][4],
            timestamp:data[data.length-1][0]
        }

        if(this.previousRsi!==null){
            if(this.previousRsi<this.params.sell && currentRsi>=this.params.sell){
                signal.action='BUY'
                console.log(this.previousRsi)
        } else if(this.previousRsi>this.params.buy && currentRsi<=this.params.buy){
            signal.action='SELL'
        }
    }
    this.previousRsi=currentRsi
    return signal
    }
}

export default RsiStrategy;