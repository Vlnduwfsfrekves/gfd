let n = 0
let int = setInterval(function(){
    if(n<=5){
        n++
        console.log(8);
    }else{
        clearInterval(int)
    }
},1000)