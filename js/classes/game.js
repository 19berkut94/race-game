export default class Game {
    constructor(options) {
        this.numberOfFences = 2
        this.numberOfBots = 3
        this.BORDERS = []
        this.BOTS = []

        this.botBases = []
        this.botWidthInSquares = 3
        this.botHeightInSquares = 4
    }   

    setBases(min, max) {
        for(let i = min; i < max; i++) {
            i += this.botWidthInSquares

            if(i < max) {
                this.botBases.push(i)
            }
          
            
        }
    }
}