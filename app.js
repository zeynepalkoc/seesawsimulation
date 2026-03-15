let objects = [];

const plank=document.getElementById("plank");
const leftWeight=document.getElementById("leftweight");
const rightWeight=document.getElementById("rightweight");
const nextWeight=document.getElementById("nextweight");
const tiltAngle=document.getElementById("tiltangle");
const resetButton=document.getElementById("reset");
const objectsContainer=document.getElementById("objects-container");
const previewBall=document.getElementById("preview-ball");
const previewText = document.getElementById("preview-text");

function updatePreviewBall(positionX){
   const size =20 + currentWeight * 5;
   
    previewText.textContent = `${currentWeight} kg`;
    previewBall.style.width = `${size}px`;
    previewBall.style.height = `${size}px`;
    previewBall.style.left = `${positionX - size / 2}px`;
previewBall.style.top = `-${size * 1.30}px`;
}

function generateRandomWeight(){
    return Math.floor(Math.random()*10)+1;
}

 let currentWeight= generateRandomWeight();
 updatenextWeightDisplay();
plank.addEventListener("click", handlePlankClick);
resetButton.addEventListener("click", resetSimulation);

plank.addEventListener("mouseenter", function(){
    updatePreviewBall(plank.offsetWidth / 2);
    previewBall.style.opacity = "0.25";
});

plank.addEventListener("mouseleave", function(){
    previewBall.style.opacity = "0";
});

plank.addEventListener("mousemove", function(event){
    const rect = plank.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;

    if(mouseX < 0){
        mouseX = 0;
    }

    if(mouseX > rect.width){
        mouseX = rect.width;
    }

    updatePreviewBall(mouseX);
});
console.log("click çalıştı");
function handlePlankClick(event){
   const rect = plank.getBoundingClientRect();
const clickX = event.clientX - rect.left;

const ball = document.createElement("div");
ball.className = "object";
ball.textContent = `${currentWeight} kg`;

const size = 20 + currentWeight * 5;
ball.style.width = `${size}px`;
ball.style.height = `${size}px`;

const center = rect.width / 2;
const distance = clickX - center;

ball.style.left = `${center + distance - size/2}px`;
ball.style.top = `-${size * 0.25}px`;

  objects.push({ weight: currentWeight, distance: distance });
   
   objectsContainer.appendChild(ball);

   const angle = calculateAngle();
  plank.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
   tiltAngle.textContent= `${angle.toFixed(1)}°`;
  
   updateWeightDisplay();
   console.log("ball added");

   currentWeight=generateRandomWeight();
  updatenextWeightDisplay();
updatePreviewBall(rect.width / 2);
  
   const torque = calculateTourqueDifference();
   console.log(torque);

 }

function calculateAngle(){
    let leftTorque=0;
    let rightTorque=0;

    objects.forEach(function(obj){
        const distance =Math.abs(obj.distance);
if(obj.distance<0){
    leftTorque += obj.weight * distance;
}else{
    rightTorque += obj.weight * distance;
}
    });
    const difference = rightTorque - leftTorque;
    let angle= difference / 10;
if(angle>30) angle=30;
if(angle<-30) angle=-30;
return angle;
}

 
function updateWeightDisplay(){
    let leftWeightTotal=0;
    let rightWeightTotal=0;

    objects.forEach(function(obj){
        if(obj.distance<0){
            leftWeightTotal += obj.weight;

        }
        else{
            rightWeightTotal += obj.weight;
        }
    });
    leftWeight.textContent = `${leftWeightTotal} kg`;
    rightWeight.textContent = `${rightWeightTotal} kg`;
}
 
function updatenextWeightDisplay(){
    nextWeight.textContent = `${currentWeight} kg`;
}
function calculateTourqueDifference(){
    let leftTourque=0;
    let rightTourque=0;

    objects.forEach(function(obj){ const distance= Math.abs(obj.distance);
        if (obj.distance<0){
        leftTourque += obj.weight * distance;
        }
        else{
            rightTourque += obj.weight * distance;
        } 
    });
       


    return rightTourque - leftTourque;
  }

  function resetSimulation()
  {
    objects=[];
objectsContainer.innerHTML="";
const logArea=document.getElementById("log-area");
if(logArea){
    logArea.innerHTML = "";
}
plank.style.transform = `translate(-50%, -50%) rotate(0deg)`;
leftWeight.textContent=`0 kg`;
rightWeight.textContent=`0 kg`;
tiltAngle.textContent=`0.0°`;
currentWeight=generateRandomWeight();
updateWeightDisplay();


previewBall.style.opacity = "0";

  }
