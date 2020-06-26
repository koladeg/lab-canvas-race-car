
  // document.getElementById('start-button').onclick = (e) => {
  //   console.log(e.timeStamp)
  //   startGame();
  // };

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.dir(canvas)

let road = new Image()
road.src ='images/road.png'


let car = new Image()
let carXaxis = 225
let carYaxis = 575
car.src ='images/car.png' 

let obstacles = []
let obstaclesYaxis = 0
let load = 1

  
// function startGame() {
//  }
 let animationID

 let numberofLoops = 0

 function animate() {
  animationID =  window.requestAnimationFrame(animate)
  ctx.clearRect(0 , 0, canvas.width, canvas.height) 
  // console.log(`${numberofLoops++}`)
  // if(numberofLoops >= 500){
  //   window.cancelAnimationFrame(animationID)
  // }
  if (carXaxis > 360){ carXaxis -= 5}
  if (carXaxis < 93){ carXaxis += 3}

  ctx.drawImage(road,100,10,300,800)
  ctx.drawImage(car,carXaxis,carYaxis,50,100)
  drawObstacles()
  
}


function drawObstacles(){
  obstacles.forEach( obstacle => { 
    ctx.fillRect(obstacle.x, obstacle.y += Math.random() * (8 - 5) + 5, obstacle.width, obstacle.height)
  })
  if(carYaxis > obstacles.x || carXaxis < obstacles.x+obstacles.width || carYaxis > obstacles.y || carYaxis < obstacles.y+obstacles.height) {
    load --
    if (load <= 0) {
      window.cancelAnimationFrame(animationID)
    }
    }
  let newObs = {
    x: Math.random() * (320 - 95) + 95,
    y: 0,
    width: Math.random() * (150 - 30) + 30,
    height: 30
  }
  obstacles.push(newObs)
}
setInterval( drawObstacles, 2000)
function movecar(e){
  if(e.key === 'ArrowRight'){
    carXaxis += 10
  }if(e.key === 'ArrowLeft'){
    carXaxis -= 10
  }
}

document.onkeydown = movecar

animate()
