let canvas = document.getElementById('canvas1');
let c = canvas.getContext('2d');
canvas.width = 720;
canvas.height  = 720;

let corX = [0,90,180,   270,450,630,540,630,540,360,  450,540,630,450,630,540,630,450,540,630,   450,540,360,450,540,360,270,450,630,540,   
        360,180,360,270,90,0,180,0,180,270,   360,180,0,90,270,180,90,0,90,270,   90,0,180,360,270,180,0,90,0,90,     270,360,450,630];
    
let corY = [0,180,360,    540,630,540,360,180,0,90,   270,450,630,540,450,270,90,0,180,360,    450,630,540,360,540,450,270,180,270,90,    
        0,90,180,0,90,270,180,90,0,180,   360,270,360,540,630,450,630,450,270,360,   450,630,540,630,450,630,540,360,180,0,   90,270,90,0];

let alrdyX = [0+5,90+5,180+5,   270+5,450+5,630+5,540+5,630+5,540+5,360+5,  450+5,540+5,630+5,450+5,630+5,540+5,630+5,450+5,540+5,630+5,   450+5,540+5,360+5,450+5,540+5,360+5,270+5,450+5
    ,630+5,540+5,   
            360+5,180+5,360+5,270+5,90+5,0+5,180+5,0+5,180+5,270+5,   360+5,180+5,0+5,90+5,270+5,180+5,90+5,0+5,90+5,270+5,   90+5,0+5,180+5,360+5,270+5,180+5,0+5,90+5,0+5,90+5
            ,270+5,360+5,450+5,630+5];
        
let alrdY = [0+5,180+5,360+5,    540+5,630+5,540+5,360+5,180+5,0+5,90+5,   270+5,450+5,630+5,540+5,450+5,270+5,90+5,0+5,180+5,360+5,    450+5,630+5,540+5,360+5,540+5,450+5,270+5,180+5
    ,270+5,90+5,0+5,90+5,180+5,0+5,90+5,270+5,180+5,90+5,0+5,180+5,   360+5,270+5,360+5,540+5,630+5,450+5,630+5,450+5,270+5,360+5
    ,450+5,630+5,540+5,630+5,450+5,630+5,540+5,360+5,180+5,0+5,90+5,270+5,90+5,0+5];
    


let alrdyCounter=0;

let counter = 0;



let possibleStepsCounter = 0;

let possibleStepCorX = [[90,180],[360,480]    ];
let possibleStepCorY = [[180,90], [480,360]    ];
/* let possibleStepCorX = [  90,180  ];
let possibleStepCorY = [ 180,90]; */
let buttonState = "START";


/* const player = {
    width:90,
    height:90,
 
}; */

let isAllowed = false;
const knight = new Image();
knight.src = "images/knight8.png";
let myAnim;

function animate(){
    //if(tombCounter >= xasd.length  && tombCounter >= yasd.length ){tombCounter = 0}
    c.beginPath();
    c.fillStyle = "rgb(62, 96, 150)";
    //c.fillRect(corX[counter-1],corY[counter-1],90, 90);
    //uj a sarga kockakhoz
    c.fillRect(alrdyX[alrdyCounter-1],alrdY[alrdyCounter-1],80, 80);


    c.stroke();
    c.closePath();

    c.drawImage(knight,corX[counter],corY[counter]);
    myAnim = requestAnimationFrame(animate); 
}

myAnim = requestAnimationFrame(animate);
animate();

document.getElementById('stepFrwd').onclick = function(){
    counter++;
    //uj a sarga kockakhoz
    alrdyCounter++;
    myAnim = requestAnimationFrame(animate); 
}

document.getElementById('stepPrev').onclick = function(){
    c.beginPath();  
    c.clearRect(corX[counter],corY[counter],90, 90);
    counter--;
    //uj a sarga kockakhoz
    alrdyCounter--;
}

document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(knight,corX[0],corY[0]);
    counter = 0;
    //uj a sarga kockakhoz
    alrdyCounter=0;
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
                //uj a sarga kockakhoz
                alrdyCounter++;
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