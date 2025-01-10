let boxes=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".msg-conatiner");
let msg=document.querySelector("#msg");
let nwGame=document.querySelector("#nw-btn");
let resetBtn=document.querySelector("#reset");
let turno=true;
let c=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno)
            {
                box.innerText="o";
                turno=false;
                c++;
            }
        else
        {
             box.innerText='x'
             turno=true;
             c++;
        }
        box.disabled=true;
        checkWinner();
        
           
    });
});
const checkWinner=()=>{
    for (pattern of winPatterns)
        {
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val==pos2val && pos2val==pos3val)
                {
                    showWinner();
                }
        }
}
}

const showWinner=()=>
    {    
           msg.innerText="congratulation! you won";
           msgContainer.classList.remove("hide");
       disablebox();
    }
    const disablebox=()=>
        {
            boxes.forEach((box)=>
                {
                    box.disabled=true;  
                });
           
        } 
        const resetGame=()=>{
            turno=true;
            enableBox();
            msgContainer.classList.add("hide");
         }
         const enableBox=()=>
             {
                 boxes.forEach((box)=>
                     {
                         box.disabled=false; 
                         box.innerText=""; 
                     });
                
             } 
nwGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);