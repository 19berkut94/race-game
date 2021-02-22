export default class GameItem{
    constructor(options) {
        this.length = options.length
        this.type = options.type
        this.itemParts = []
        this.movingStep = 1
        this.run = false
        this.direction = 'down'
        this.heightInSquares = options.heightInSquares
 
    }

    gatherItemFromParts(x, y) {
        for (let i = 0; i < this.length; i++) {
          let obj = {
            type: this.type,
            x: x,
            y: y + i,
          };
          this.itemParts[i] = obj;
        }
        
      }

    move(fieldHeight) {
      for(let i = 0; i < this.itemParts.length; i++) {
        switch (this.direction) {
          case "left":
            this.itemParts[i].x -= this.movingStep;
            break;
          case "right":
            this.itemParts[i].x += this.movingStep;
            break;
          case "up":
            this.itemParts[i].y -= this.movingStep;
            break;
          case "down":
            this.itemParts[i].y += this.movingStep;
            break;
        }
        if(this.itemParts[i].y > fieldHeight && this.type === 'fence') {
          this.itemParts[i].y = 0
        }        
      }
      
            
        

         
    }
}