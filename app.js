const plank=document.getElementById("plank");
const leftWeight=document.getElementById("leftweight");
const rightWeight=document.getElementById("rightweight");
const nextWeight=document.getElementById("nextweight");
const tiltAngle=document.getElementById("tiltangle");
const resetButton=document.getElementById("reset");

function generateRandomWeight(){
    return Math.floor(Math.random()*10)+1;
}

let currentWeight= generateRandomWeight();

nextWeight.textContent = `${currentWeight} kg`;

Plank.addEventListener("click",handlePlankClick);

function handlePlankClick(e){
    console.log("plank clicked", e);
}

 