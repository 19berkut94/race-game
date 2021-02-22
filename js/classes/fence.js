import GameItem from './game-item.js'

export default class Fence extends GameItem {
    constructor(options) {
        super(options)
        this.itemParts = []
        this.type = 'fence'
    }
}