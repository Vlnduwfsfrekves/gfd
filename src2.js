let fh = document.querySelectorAll('div')
function animate(){
    fh.forEach(element=>{
        const randomWidth=Math.floor(Math.random()*70)+30
        const randomHeight=Math.floor(Math.random()*70)+30
        element.style.width=`${randomWidth}px`
        element.style.height=`${randomHeight}px`
    })
}
setInterval(animate,1000)