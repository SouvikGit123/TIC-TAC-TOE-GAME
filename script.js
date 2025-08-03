let boxes=document.querySelectorAll(".box");
let rest = document.querySelector(".rest-btn");
let newbtn = document.querySelector(".new");
let msgx = document.querySelector(".msgk");
let msgy = document.querySelector(".msg");
let t0 = true;
const win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const rg = () => {
    t0=true;
    enbox();
    msgx.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("BOX IS CLICKED");
        if(t0){
            box.innerText="O";
            t0 = false;
        }
        else{
            box.innerText="X";
            t0 = true; 
        }
        box.disabled = true;
        checkWinner();
    });
});
const disbox = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};
const enbox = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
    msgy.innerText =`Congratulations! Winner is ${winner}`;
    msgx.classList.remove("hide");
    disbox();
};
const checkWinner = () => {
for(let p of win){
    let p1v = boxes[p[0]].innerText;
    let p2v = boxes[p[1]].innerText;
    let p3v = boxes[p[2]].innerText;
if(p1v != "" && p2v != "" && p3v != "")
{
    if(p1v === p2v && p2v === p3v)
    {
        console.log("Winner is",p1v);

        showWinner(p1v);
    }
}

}
};
newbtn.addEventListener("click",rg);
rest.addEventListener("click",rg);
