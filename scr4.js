let timer
function startTimer(){
    const timeInput=document.getElementById('timeInput')
    const timeInSeconds=parseInt(timeInput.value)
    if(isNaN(timeInSeconds) || timeInSeconds<=0){
        alert('Please enter a valid positive number of seconds.')
        return
    }
    clearTimeout(timer)
    timer=setTimeout(()=>{
        const outputElement=document.getElementById('output')
        outputElement.textContent=`Time's up! ${timeInSeconds} seconds have elapsed.`
    },timeInSeconds*1000)
}