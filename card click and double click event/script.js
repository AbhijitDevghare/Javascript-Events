
// Follow button click event

let followButton=document.getElementById("followButton");

followButton.addEventListener('click',()=>{


    if(followButton.innerText=="Follow")
    {
        let txt="Following"
        followButton.innerText=txt;
    }
    else{
        let txt="Follow"
        followButton.innerText=txt;
    }
 
    
})




// Message Box DoubleClick event
let counter=0;
let seccounter=0;

function mess()
 {
    if(counter==0)
    {
      
        let inputBox=document.createElement("input")
        inputBox.style.height="50px"
        inputBox.style.width="400px"
        inputBox.classList="messageBox"    
        inputBox.value="Message : "   
        document.getElementById("messageBox").appendChild(inputBox)
    
        let sendButton=document.createElement("button")
        sendButton.innerText="Send";
        sendButton.classList="send";
        sendButton.setAttribute("onclick","sendButtonClick()")
        document.getElementById("messageBox").appendChild(sendButton)

        counter=1;
    }
    
}

   
  
    