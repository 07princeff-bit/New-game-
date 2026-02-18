let player = document.getElementById("player");
let leftBtn = document.getElementById("leftBtn");
let rightBtn = document.getElementById("rightBtn");
let jumpBtn = document.getElementById("jumpBtn");

let x = 50;
let y = 60;
let velocity = 0;
let gravity = 0.6;
let isJumping = false;

function update(){
    velocity -= gravity;
    y += velocity;

    if(y <= 60){
        y = 60;
        isJumping = false;
    }

    player.style.bottom = y + "px";
    player.style.left = x + "px";

    requestAnimationFrame(update);
}
update();

// Keyboard Controls
document.addEventListener("keydown", e=>{
    if(e.key === "ArrowLeft") x -= 10;
    if(e.key === "ArrowRight") x += 10;
    if(e.key === "ArrowUp" && !isJumping){
        velocity = 12;
        isJumping = true;
    }
});

// 📱 Touch Controls
leftBtn.addEventListener("touchstart", ()=> x -= 20);
rightBtn.addEventListener("touchstart", ()=> x += 20);
jumpBtn.addEventListener("touchstart", ()=>{
    if(!isJumping){
        velocity = 12;
        isJumping = true;
    }
});
