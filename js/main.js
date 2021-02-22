
import Helpers from './helpers.js';
const HELPERS = new Helpers();
import Game from './classes/game.js';
import Fence from './classes/fence.js';
import Car from './classes/car.js'

const GAME_WIDTH = 800;  // ширина поля в пикселях
const GAME_HEIGHT = 600; // высота поля в пикселях

const BLOCK_SIZE = 20;   // размер одной клетки поля в пикселях

const GAME_HEIGHT_IN_BLOCKS = GAME_HEIGHT / BLOCK_SIZE - 1; // ширина поля в клетках
const GAME_WIDTH_IN_BLOCKS = GAME_WIDTH / BLOCK_SIZE - 1;   // высота поля в клетках

const TIME_INTERVAL = 400 // интервал времени перерисовки игрового экрана в милисекундах

const COLOR_BACKGROUND = "#c5f0a7";
const COLOR_SNAKE = "#000000";
const COLOR_APPLE = "#8aa173"

const GAME = new Game({})

function gameInitialization() {
    
    for(let i = 0; i < GAME.numberOfFences; i++) {
        const FENCE = new Fence({
            length: GAME_HEIGHT_IN_BLOCKS,
        })
        GAME.BORDERS.push(FENCE)        
    }

    GAME.BORDERS[0].gatherItemFromParts(0, 0)
    GAME.BORDERS[1].gatherItemFromParts(GAME_WIDTH_IN_BLOCKS, 0)


    GAME.setBases(-1, GAME_WIDTH_IN_BLOCKS - 2)
    for(let i = 0; i < GAME.botBases.length; i++) {
        const BOT = new Car({})
        BOT.gatherCarFromParts()  
        BOT.itemParts.forEach(part => {
            part.x += GAME.botBases[i]  
        })
         
        GAME.BOTS.push(BOT)  
             
    }
    console.log(GAME);
}

gameInitialization()

//gameLoop();


function gameLoop() {
    HELPERS.clearField();
    GAME.BOTS.forEach(bot => {
        
        bot.itemParts.forEach(part => {           
            HELPERS.drawCarSegment(part.x, part.y) 
        })
        bot.move(GAME_HEIGHT_IN_BLOCKS)
        bot.reborn(GAME_HEIGHT_IN_BLOCKS)
    })
  
 

    GAME.BORDERS.forEach(border => {
      for(let i = 0; i < border.itemParts.length; i++) {
          if(i % 4 !== 0) {
            HELPERS.drawFenceSegment(border.itemParts[i].x, border.itemParts[i].y)
          
          }          
      }
      border.move(GAME_HEIGHT_IN_BLOCKS)
    })



    setTimeout(gameLoop, TIME_INTERVAL)
}