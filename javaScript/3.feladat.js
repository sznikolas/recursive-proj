//első canvas
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
canvas.width = 450;
canvas.height  = 450;

let counter = 1;

let taskComments = ["Tudunk lépni lefelé? -Igen",

"lépés lefelé ", "Tudunk lépni lefelé? - Nem", 

"Tudunk lépni jobbra? - Igen","lépés jobbra",

"Tudunk lépni lefelé? - Igen","lépés lefelé ",

"Tudunk lépni lefelé? - Igen","lépés lefelé ",

"Tudunk lépni lefelé? - Igen","lépés lefelé ",

"Tudunk lépni lefelé? - Nem", "Tudunk lépni jobbra? - Igen", "lépés jobbra",

"Tudunk lépni lefelé? - Nem", "Tudunk lépni jobbra? - Nem", "Tudunk lépni felfelé? - Nem", "Tudunk lépni balra? - Nem", "BACKTRACK",

"Tudunk lépni felfelé? - Nem", "Tudunk lépni balra? - Nem", "BACKTRACK",

"Tudunk lépni jobbra? - Nem", "Tudunk lépni felfelé? - Nem", "Tudunk lépni balra? - Igen", "lépés balra",

"Tudunk lépni lefelé? - Nem", "Tudunk lépni jobbra? - Nem", "Tudunk lépni felfelé? - Nem", "Tudunk lépni balra? - Nem", "BACKTRACK",

 "BACKTRACK",

 "Tudunk lépni jobbra? - Nem", "Tudunk lépni felfelé? - Nem", "Tudunk lépni balra? - Nem", "BACKTRACK",

"Tudunk lépni jobbra? - Igen", "lépés jobbra",

 "Tudunk lépni lefelé? - Nem", "Tudunk lépni jobbra? - Igen", "lépés jobbra",

 "Tudunk lépni lefelé? -Igen", "lépés lefelé ",

 "Tudunk lépni lefelé? -Igen", "lépés lefelé ",

 "Tudunk lépni lefelé? - Nem", "Tudunk lépni jobbra? - Igen", "lépés jobbra",

 "Tudunk lépni lefelé? -Igen", "lépés lefelé ",

 "Az egér sikeresen megtalálta a kijáratot!",];


let buttonState = "START";

let isAllowed = false;

const rat = new Image();
rat.src = "images/Rat.png";

//canvas1
let myAnim;


//canvas1
function animate(){
    c.fillStyle = '#093344';


    //0
    if (counter === 1) {
        c.drawImage(rat,0,0);

    };
    //1
    if (counter === 2) {
        c.clearRect(0,0,90,90);
        c.drawImage(rat,0,90);
       // c.fillRect(5,5,80,80);

    };

    if (counter === 5) {
        c.fillRect(5,95,80,80);
        c.drawImage(rat,90,90);      
    };

    if (counter === 7) {
        c.fillRect(95,95,80,80);
        c.drawImage(rat,90,180);      

    };

    if (counter === 9) {
        
        c.fillRect(95,185,80,80);
        c.drawImage(rat,90,270);      

    };

    if (counter === 11) {
        c.fillRect(95,275,80,80);
        c.drawImage(rat,90,360);      

    };

    if (counter === 14) {
        c.fillRect(95,365,80,80);
        c.drawImage(rat,180,360);      

    };

    if (counter === 19) {

        c.fillStyle ='#593181';
        c.fillRect(185,365,80,80);
        c.drawImage(rat,90,360);      

    };

    if (counter === 22) {
        c.fillStyle ='#593181';
        c.fillRect(95,365,80,80);
        c.drawImage(rat,90,270);      

    };

    if (counter === 26) {
        c.fillStyle ='#593181';
        c.fillRect(95,275,80,80);
        c.drawImage(rat,0,270);      

    };

    if (counter === 31) {
        c.fillStyle ='#593181';
        c.fillRect(5,275,80,80);
        c.drawImage(rat,90,270);      

    };

    if (counter === 32) {
        c.fillStyle ='#593181';
        c.fillRect(95,275,80,80);
        c.drawImage(rat,90,180);      

    };

    if (counter === 36) {
        c.fillStyle ='#593181';
        c.fillRect(95,185,80,80);
        c.drawImage(rat,90,90);      

    };

    if (counter === 38) {
        c.fillRect(95,95,80,80);
        c.drawImage(rat,180,90);      

    };

    if (counter === 41) {
        c.fillRect(185,95,80,80);
        c.drawImage(rat,270,90);      

    };

    if (counter === 43) {
        c.fillRect(275,95,80,80);
        c.drawImage(rat,270,180);      

    };

    if (counter === 45) {
        c.fillRect(275,185,80,80);
        c.drawImage(rat,270,270);      

    };

    if (counter === 48) {
        c.fillRect(275,275,80,80);
        c.drawImage(rat,360,270);      

    };

    if (counter === 50) {
        c.fillRect(365,275,80,80);
        c.drawImage(rat,360,360);      

    };





    //c.drawImage(rat,corX[counter],corY[counter]);
    myAnim = requestAnimationFrame(animate); 
}
myAnim = requestAnimationFrame(animate);
animate();


//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = taskComments[counter];   
    counter++; 
     if(counter >=50){
        szoveg.innerText = taskComments[counter]= "Az egér sikeresen megtalálta a kijáratot!";
    } 
}


//Canvas 1 reset
document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(rat,0,0);
    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "Tudunk lépni lefelé? - Igen";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}



//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=51; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = taskComments[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
            if(counter >=51){
                szoveg.innerText = taskComments[counter]="35. lépés: Az N királynőt sikeresen lehelyeztük!";
            }  
        }
    }
// A várakozáshoz szükséges constans
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))   



/*  visszalepesek..
    document.getElementById('stepPrev').onclick = function(){
    c.beginPath();  
    c.clearRect(corX[counter],corY[counter],90, 90);
    counter--;
    //uj a sarga kockakhoz
    alrdyCounter--;
} */


/* document.getElementById('stopBtn').onclick = function(){
    isAllowed = false;
} */

//Canvas1-hez
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