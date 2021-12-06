//első canvas
let canvas = document.getElementById('canvas2');
let c = canvas.getContext('2d');
canvas.width = 360;
canvas.height  = 360;

let counter = 1;

let parapa = ["", "2. lépés: ", "3. lépés: ", "4. lépés: ","5. lépés: ","6. lépés: ","7. lépés: ","8. lépés: ",
"9. lépés: ","10. lépés: ","11. lépés: ","12. lépés: ","13. lépés: ","14. lépés: ","15. lépés: ","16. lépés: ","17. lépés: ",
"18. lépés: ","19. lépés: ","20. lépés: ","21. lépés: ","22. lépés: ",

"23. lépés: ","24. lépés: ","25. lépés: ",
"26. lépés: ",
"27. lépés: ", "29. lépés: ", "30. lépés: ","31. lépés: ",
"32. lépés: ","33. lépés: ","34. lépés: ","35. lépés: Az N királynőt sikeresen lehelyeztük!"];



/* //második canvas
let canvas2 = document.getElementById('canvas1_2');
let c2 = canvas2.getContext('2d');
canvas2.width = 360;
canvas2.height  = 360;

let counter2 = 0;
let alrdyCounter=0;
let corX = [0,90,180,360,270,   90,180,0,90,270,    360,270,90,0,180,   360,270,90,0,180,   360,270,360,180,0];
let corY = [0,180,360,270,90,   0,180,270,90,0,     180,360,270,90,0,   90,270,360,180,90,  0,180,360,270,360];

let alrdyX = [0+5,90+5,180+5,360+5,270+5,   90+5,180+5,0+5,90+5,270+5,    360+5,270+5,90+5,0+5,180+5,   360+5,270+5,90+5,0+5,180+5,   360+5,270+5,360+5,180+5,]; 
let alrdY = [0+5,180+5,360+5,270+5,90+5,   0+5,180+5,270+5,90+5,0+5,     180+5,360+5,270+5,90+5,0+5,   90+5,270+5,360+5,180+5,90+5,  0+5,180+5,360+5,270+5,]; */


let buttonState = "START";

let isAllowed = false;

const knight = new Image();
knight.src = "images/Queen2.png";

//canvas1
let myAnim;


//canvas1
function animate(){
    //c.fillStyle = 'rgb(62, 96, 150)';


    //0
    if (counter === 1) {
        c.drawImage(knight,0,0);

    };
    //1
    if (counter === 2) {
        c.drawImage(knight,180,90);
       // c.fillRect(5,5,80,80);

    };

    if (counter === 3) {
        c.drawImage(knight,90,270);      

    };

    if (counter === 4) {
             
        c.clearRect(90,270,90,90)
    };

    if (counter === 5) {
        c.clearRect(180,90,90,90);   
    };

    if (counter === 6) {
             
        c.drawImage(knight,270,90);  
    };

    if (counter === 7) {
             
        c.drawImage(knight,90,180);  
    };

    if (counter === 8) {
             
        c.clearRect(90,180,90,90); 
    };

    if (counter === 9) {
             
        c.drawImage(knight,180,270);  
    };

    if (counter === 10) {
             
        c.clearRect(180,270,90,90);; 
    };

    if (counter === 11) {
             
        c.clearRect(270,90,90,90);; 
    };

    if (counter === 12) {
             
        c.drawImage(knight,90,180);  
    };

    if (counter === 13) {
             
        c.drawImage(knight,270,90);  
    };

    if (counter === 14) {
             
        c.clearRect(270,90,90,90);; 
    };

    if (counter === 15) {
             
        c.clearRect(90,180,90,90);; 
    };

    if (counter === 16) {
             
        c.drawImage(knight,270,180);  
    };

    if (counter === 17) {
             
        c.drawImage(knight,90,270);  
    };

    if (counter === 18) {
             
        c.clearRect(90,270,90,90); 
    };

    if (counter === 19) {
             
        c.clearRect(270,180,90,90);;
    };

    if (counter === 20) {
             
        c.drawImage(knight,90,270);  
    };

    if (counter === 21) {
             
        c.drawImage(knight,180,90);  
    };

    if (counter === 22) {
             
        c.clearRect(180,90,90,90); 
    };

    if (counter === 23) {
             
        c.drawImage(knight,270,180);  
    };

    if (counter === 24) {
             
        c.clearRect(270,180,90,90);
    };

    if (counter === 25) {
             
        c.clearRect(90,270,90,90);
    };

    if (counter === 26) {
             
        c.drawImage(knight,180,270);  
    };

    if (counter === 27) {
             
        c.drawImage(knight,270,90);  
    };

    if (counter === 28) {
             
        c.clearRect(270,90,90,90);; 
    };

    if (counter === 29) {
             
        c.clearRect(180,270,90,90); 
    };

    if (counter === 30) {
             
        c.clearRect(0,0,90,90);
    };

    if (counter === 31) {
             
        c.drawImage(knight,90,0);  
    };

    if (counter === 32) {
             
        c.drawImage(knight,270,90);  
    };

    if (counter === 33) {
             
        c.drawImage(knight,0,180);  
    };

    if (counter === 34) {
             
        c.drawImage(knight,180,270);  
    };
    

    //c.drawImage(knight,corX[counter],corY[counter]);
    myAnim = requestAnimationFrame(animate); 
}
myAnim = requestAnimationFrame(animate);
animate();


/* //canvas2
function animate2(){
    c2.beginPath();
    c2.fillStyle = "rgb(62, 96, 150)";
    c2.fillRect(alrdyX[alrdyCounter-1],alrdY[alrdyCounter-1],80, 80);
    c2.stroke();
    c2.closePath();
    c2.drawImage(knight,corX[counter2],corY[counter2]);
    myAnim2 = requestAnimationFrame(animate2); 
}
myAnim2 = requestAnimationFrame(animate2);
animate2(); */



//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = parapa[counter];   
    counter++; 
     if(counter >=34){
        szoveg.innerText = parapa[counter]="35. lépés: Az N királynőt sikeresen lehelyeztük!";
    } 
}

/* //Előrelépések 2-es canvason
document.getElementById('stepFrwd2').onclick = function(){
    counter2++; 
    alrdyCounter++;
    myAnim2 = requestAnimationFrame(animate2);
}
 */
/* document.getElementById('stepPrev').onclick = function(){
    counter--;
} */


//Canvas 1 reset
document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(knight,0,0);
    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "1. lépés: előre";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}

/* //Canvas 2 reset
document.getElementById('resetAnim2').onclick = function(){
    isAllowed2 = false;
    c2.clearRect(0,0,canvas2.width, canvas2.height);
    c2.drawImage(knight,corX[0],corY[0]);
    counter2 = 0;
    alrdyCounter=0;
    let idk2 = document.getElementById("startAnim2");
    idk2.value = "Start"
    buttonState2="START";  
}
 */


//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=57; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(knight,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
            if(counter >=34){
                szoveg.innerText = parapa[counter]="35. lépés: Az N királynőt sikeresen lehelyeztük!";
            }  
        }
    }
// A várakozáshoz szükséges constans
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))   



/* //canvas 2 lejatszas
const startAnim2 = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange2');
        for(var x = 0; x<corX.length; x++){
            if(isAllowed2){
                c2.drawImage(knight,corX[counter2],corY[counter2]);
                counter2++;
                //uj a sarga kockakhoz
                alrdyCounter++;
                await sleep2(1000/slider.value);       
            }  
            if(counter2 >=24){
                counter2=24;
            } 
        }
    }
const sleep2 = (delay2) => new Promise((resolve2) => setTimeout(resolve2,delay2)) */



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

/* //Canvas2-hez
document.getElementById('startAnim2').onclick = function(){
    if(buttonState2 === "START"){isAllowed2=true}
    if(buttonState2 === "STOP"){isAllowed2=false}
    startAnim2();
    change2()
}
    

change2 = function(){
    let elem2 = document.getElementById("startAnim2");
    if (elem2.value=="Stop") {elem2.value = "Start";buttonState2="START"}
    else {elem2.value = "Stop";buttonState2="STOP"}
} */

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})