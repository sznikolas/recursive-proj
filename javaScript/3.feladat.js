//első canvas
let canvas = document.getElementById('canvas2');
let c = canvas.getContext('2d');
canvas.width = 450;
canvas.height  = 450;

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

    if (counter === 3) {
        c.fillRect(5,95,80,80);
        c.drawImage(rat,90,90);      
    };

    if (counter === 4) {
        c.fillRect(95,95,80,80);
        c.drawImage(rat,90,180);      

    };

    if (counter === 5) {
        c.fillRect(95,185,80,80);
        c.drawImage(rat,90,270);      

    };

    if (counter === 6) {
        c.fillRect(95,275,80,80);
        c.drawImage(rat,90,360);      

    };

    if (counter === 7) {
        c.fillRect(95,365,80,80);
        c.drawImage(rat,180,360);      

    };

    if (counter === 8) {
        c.fillRect(185,365,80,80);
        c.drawImage(rat,90,360);      

    };

    if (counter === 9) {
        c.fillRect(95,365,80,80);
        c.drawImage(rat,90,270);      

    };

    if (counter === 10) {
        c.fillRect(95,275,80,80);
        c.drawImage(rat,0,270);      

    };

    if (counter === 11) {
        c.fillRect(5,275,80,80);
        c.drawImage(rat,90,270);      

    };

    if (counter === 12) {
        c.fillRect(95,275,80,80);
        c.drawImage(rat,90,180);      

    };

    if (counter === 13) {
        c.fillRect(95,185,80,80);
        c.drawImage(rat,90,90);      

    };

    if (counter === 14) {
        c.fillRect(95,95,80,80);
        c.drawImage(rat,180,90);      

    };

    if (counter === 15) {
        c.fillRect(185,95,80,80);
        c.drawImage(rat,270,90);      

    };

    if (counter === 16) {
        c.fillRect(275,95,80,80);
        c.drawImage(rat,270,180);      

    };

    if (counter === 17) {
        c.fillRect(275,185,80,80);
        c.drawImage(rat,270,270);      

    };

    if (counter === 18) {
        c.fillRect(275,275,80,80);
        c.drawImage(rat,360,270);      

    };

    if (counter === 19) {
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
    //szoveg.innerText = parapa[counter];   
    counter++; 
/*      if(counter >=34){
        szoveg.innerText = parapa[counter]="35. lépés: Az N királynőt sikeresen lehelyeztük!";
    }  */
}


//Canvas 1 reset
document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(rat,0,0);
    counter = 1;
    //label resetelese
    //document.getElementById("label1").innerHTML = "1. lépés: előre";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}



//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=57; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                //szoveg.innerText = parapa[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
/*             if(counter >=34){
                szoveg.innerText = parapa[counter]="35. lépés: Az N királynőt sikeresen lehelyeztük!";
            }  */ 
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