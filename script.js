let boxes = document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgConatainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");


let turnX=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame=() =>{
    turnX=true;
    anableBoxes();
    msgConatainer.classList.add("hide");
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("clicked");
        if(turnX){
            box.innerHTML="X";
            box.style.color="blue";
            turnX=false;
        }else{
            box.innerHTML="O";
            box.style.color="#f72585";
            turnX=true;
        }
        box.disabled = true;
        checkWinner();
    });

});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const anableBoxes = () =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


const showWinner= (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgConatainer.classList.remove("hide");
    disableBoxes();
}

// const showWinner1= () =>{
//     boxes.forEach(box,()=>{
//         if(box.innerText !=""){
//             msg.innerText="Match is Draw!,";
//             msgConatainer.classList.remove("hide");
//             disableBoxes();
//         }
//     })
    
// }


const checkWinner =()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winer",pos1Val);
                showWinner(pos1Val);
            }
            // else{
            //     showWinner1();
            // }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);