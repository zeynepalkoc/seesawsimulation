let objects = [];

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
 updatenextWeightDisplay();


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

  const center = rect.width / 2;
  const distance = clickX - center;

  objects.push({ weight: currentWeight, distance: distance });
   
   objectsContainer.appendChild(ball);

   const angle = calculateAngle();
   plank.style.transform=`translateX(-50%) rotate(${angle}deg)`;
   tiltAngle.textContent= `${angle.toFixed(1)}°`;
  
   updateWeightDisplay();
   console.log("ball added");

   currentWeight=generateRandomWeight();
  updatenextWeightDisplay();
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

