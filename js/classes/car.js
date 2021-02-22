

import GameItem from './game-item.js';

export default class Car extends GameItem {
    constructor(options) {
        super(options);
        this.x = options.x
        this.y = options.y
        this.widthInSquares = 3
        this.heightInSquares = 4
        this.movingStep = 3
        this.type = 'car'

        this.map = [
            [0, 1, 0],
            [1, 1, 1],
            [0, 1, 0],
            [1, 0, 1]
        ]     
    }

    gatherCarFromParts() {
        for(let i = 0; i < this.map.length; i++) {
            for(let k = 0; k < this.map[i].length; k++) {
                if(this.map[i][k] === 1) {
                    let part = {
                        x: k,
                        y: i,
                    }
                    this.itemParts.push(part)
                }
            }
        }
    }

    reborn(fieldHeight) {
        if(this.itemParts[0].y > fieldHeight) {
         this.itemParts.forEach(part => {
             part.y -= (fieldHeight + this.heightInSquares)
         })
        }
    }
}