class User{
    constructor(id,strategies){
        this.id=id
        this.strategies=strategies
    }

    getStrategyParams(strategy){
        return this.strategies[strategy]
    }
}