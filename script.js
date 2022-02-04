let enemy=document.querySelector(".enemy");
let myShip=document.querySelector(".myShip");
let Start=document.querySelector(".Start");

let snarad=document.querySelector(".snarad");

function enemys() {
    let a=parseInt(enemy.style.marginLeft);
    a=a+10;
    enemy.style.marginLeft=`${a}px`;
}
Start.addEventListener("click", function(){
    setInterval(enemys,1000);
    setInterval(shoots,1000);
})
function shoots() {
    let b=parseInt(snarad.style.marginLeft);
    b=b-10;
    snarad.style.marginLeft=`${b}px`;
    if(enemy.style.marginLeft===snarad.style.marginLeft){
        enemy.style.marginLeft="10px";
    }
    console.log(enemy.style.marginLeft,snarad.style.marginLeft);
}

Shoot.addEventListener("click", function(){
    
    
    
})
