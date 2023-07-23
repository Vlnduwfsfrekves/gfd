const gameArea=document.querySelector('.game-area')
const pointsDisplay=document.getElementById('points')
let points=0
let timer
const gameDuration=30
function getRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function updatePoints(){
    pointsDisplay.textContent = points;
}
function createTarget() {
    const target=document.createElement('div')
    target.classList.add('target')
    target.style.top=`${getRandomNumber(0, gameArea.clientHeight - 50)}px`
    target.style.left=`${getRandomNumber(0, gameArea.clientWidth - 50)}px`
    target.addEventListener('click',()=>{
    points++
    updatePoints()
    gameArea.removeChild(target)
})
    gameArea.appendChild(target)
}
function startGame(){
    points=0
    updatePoints()
    timer=setInterval(()=>{
    createTarget()
},1000)

setTimeout(()=>{
    clearInterval(timer)
    alert(`Game Over! Your score: ${points}`)
},gameDuration*1000)
}
startGame()