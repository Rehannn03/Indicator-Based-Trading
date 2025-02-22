class TradingStrategy {
    constructor(params){
        this.params=params
    }

    check(data){
        throw new Error('Not Implemented')
    }
}

export default TradingStrategy;