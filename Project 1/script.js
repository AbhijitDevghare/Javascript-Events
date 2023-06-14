function changeColor()
{
    document.body.style.backgroundColor=randomColor()
}

const randomColor=()=>{
let val="0123456789ABCDEF";
let cons="#";

for(i=0;i<6;i++){
    cons=cons+val[Math.floor(Math.random()*16)]
}

return cons;

}

function resetColor(){
    document.body.style.backgroundColor="#e209f5"
}


// Math.random() =>Returns The number between - 0 and 1 but not 1