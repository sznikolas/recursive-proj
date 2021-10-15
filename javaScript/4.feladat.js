let canvas = document.getElementById('canvas4');
let c = canvas.getContext('2d');
canvas.width = 720;
canvas.height  = 720;

let corX = [0,90,180,270,450,630,540,630,540,360,  450,540,630,450,630,540,630,450,540,630,   450,540,360,450,540,360,270,450,630,540,   
        360,180,360,270,90,0,180,0,180,270,   360,180,0,90,270,180,90,0,90,270,   90,0,180,360,270,180,0,90,0,90,     270,360,450,630];
    
let corY = [0,180,360,540,630,540,360,180,0,90,   270,450,630,540,450,270,90,0,180,360,    450,630,540,360,540,450,270,180,270,90,    
        0,90,180,0,90,270,180,90,0,180,   360,270,360,540,630,450,630,450,270,360,   450,630,540,630,450,630,540,360,180,0,   90,270,90,0];

let counter = 0;
let alrdyX = [0];
let alrdyY = [0];


let tombCounter = 0;
//let xasd = [0,90,180,270] ;
//let yasd = [0,90,180,270] ;
let buttonState = "START";


/* const player = {
    width:90,
    height:90,
 
}; */

let isAllowed = false;
const knight = new Image();
knight.src = "images/knight7.png";
let myAnim;
function animate(){
    //if(tombCounter >= xasd.length  && tombCounter >= yasd.length ){tombCounter = 0}
    c.beginPath();
    c.fillStyle = "rgba(255, 255, 0, .11)";
    c.fillRect(corX[counter-1],corY[counter-1],90, 90);
    c.stroke();
    c.closePath();
    c.drawImage(knight,corX[counter],corY[counter]);
    myAnim = requestAnimationFrame(animate); 
}

myAnim = requestAnimationFrame(animate);
animate();

document.getElementById('stepFrwd').onclick = function(){
    counter++;
    myAnim = requestAnimationFrame(animate); 
}

document.getElementById('stepPrev').onclick = function(){
    c.beginPath();  
    c.clearRect(corX[counter],corY[counter],90, 90);
    c.stroke();
    c.closePath();
    counter--;
}

document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(knight,corX[0],corY[0]);
    counter = 0;
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}

const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<corX.length; x++){
            if(isAllowed){
                c.drawImage(knight,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }  
        }
    }
    
// A várakozáshoz szükséges constans
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))

/* document.getElementById('stopBtn').onclick = function(){
    isAllowed = false;
} */


document.getElementById('startAnim').onclick = function(){
    if(buttonState === "START"){isAllowed=true}
    if(buttonState === "STOP"){isAllowed=false}
    startAnim();
    change()
}
    

change = function(){
    let elem = document.getElementById("startAnim");
    if (elem.value=="Stop") {elem.value = "Start";buttonState="START"}
    else {elem.value = "Stop";buttonState="STOP"}
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})