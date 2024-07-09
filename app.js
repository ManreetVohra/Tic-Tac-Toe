let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newgame");
let msgcon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn = true;//playerO
let count=0;

let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetgame =()=>{
    turn =true;
    enableboxes();
    msgcon.classList.add("hide");
    count=0;
};

boxes.forEach((el)=>{
    el.addEventListener("click",()=>{
        if(turn){
            el.innerText="O";
            turn=false;
        }else{
            el.innerText="X";
            turn=true;
        }
        el.disabled=true;
        count++;
        
        checkWinner(count);
    });
});

const enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    disableboxes();
    msgcon.classList.remove("hide");
};

const showDraw=()=>{
    msg.innerText=`Oops! It's a draw`;
    msgcon.classList.remove("hide");
};

//boxes is a collection of buttons so we can traverse by their index
const checkWinner=(count)=>{
    for(let pattern of winningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        let flag=false;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                flag=true;
            }
        }

        if(count===9 && flag==false){
            showDraw();
        }
    }
};

newbtn.addEventListener("click",resetgame);

resetbtn.addEventListener("click",resetgame);




