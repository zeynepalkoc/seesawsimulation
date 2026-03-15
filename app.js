const plank=document.getElementById("plank");
const leftWeight=document.getElementById("leftweight");
const rightWeight=document.getElementById("rightweight");
const nextWeight=document.getElementById("nextweight");
const tiltAngle=document.getElementById("tiltangle");
const resetButton=document.getElementById("reset");
const objectsContainer=document.getElementById("objects-container");
function generateRandomWeight(){
    return Math.floor(Math.random()*10)+1;
}

let currentWeight= generateRandomWeight();

nextWeight.textContent = `${currentWeight} kg`;

plank.addEventListener("click", handlePlankClick);

function handlePlankClick(event){
   const rect = plank.getBoundingClientRect();
   const clickX = event.clientX - rect.left;
  
   const ball=document.createElement("div");
   ball.className="object";
   ball.textContent = `${currentWeight} kg`;

   const size=20 + currentWeight*5;
   ball.style.width = `${size}px`;
   ball.style.height = `${size}px`;

   ball.style.left = `${clickX - size/2}px`;
   ball.style.top = `-50px`;
   
   objectsContainer.appendChild(ball);

   console.log("ball added");

}

 