const formvalue = document.getElementById("email");
const rednotice =document.getElementById("invalid") ;
const cont=document.getElementById("container")
       
const succ=document.getElementById("succ")

function myFunction() {
    
    
    for (let i = 0; i < formvalue.value.length; i++) {
        const at = formvalue.value[i];
        if (at =="@"){
            cont.style.display = "none" ;
            succ.style.display = "block"
        }
        else{
            rednotice.style.display = "block"
        }
        
    }
       
    }

    function tek(){
        
        document.getElementById("container").style.display ="flex"
        document.getElementById("invalid").style.display = "none"
        document.getElementById("succ").style.display = "none"

    }