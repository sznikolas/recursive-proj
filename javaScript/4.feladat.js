//első canvas
let canvas = document.getElementById('canvas4');
let c = canvas.getContext('2d');
canvas.width = 565;
canvas.height  = 300;

let counter = 1;

let parapa = ["", "2. lépés: ", "3. lépés: ", "4. lépés: ","5. lépés: ","6. lépés: ","7. lépés: ","8. lépés: ",
"9. lépés: ","10. lépés: ","11. lépés: ","12. lépés: ","13. lépés: ","14. lépés: ","15. lépés: ","16. lépés: ","17. lépés: ",
"18. lépés: ","19. lépés: ","20. lépés: ","21. lépés: ","22. lépés: ",

"23. lépés: ","24. lépés: ","25. lépés: ",
"26. lépés: ",
"27. lépés: ", "29. lépés: ", "30. lépés: ","31. lépés: ",
"32. lépés: ","33. lépés: A diszkek áthelyezése sikeresen megtörtént!" ];



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

const disc1 = new Image();
const disc2 = new Image();
const disc3 = new Image();
const disc4 = new Image();
const disc5 = new Image();
disc1.src = "images/diszk1.png";
disc2.src = "images/diszk2.png";
disc3.src = "images/diszk3.png";
disc4.src = "images/diszk4.png";
disc5.src = "images/diszk5.png";



//canvas1
let myAnim;


//canvas1
function animate(){
    //0
    if (counter === 1) {
        c.drawImage(disc1,48,160); 
        c.drawImage(disc2,48,180);
        c.drawImage(disc3,48,200);
        c.drawImage(disc4,48,220);
        c.drawImage(disc5,48,240);
/*      c.drawImage(disc1,48,160); A oszlop 5. szint
        c.drawImage(disc2,48,180); A oszlop 4. szint
        c.drawImage(disc3,48,200); A oszlop 3. szint
        c.drawImage(disc4,48,220); A oszlop 2. szint
        c.drawImage(disc5,48,240); A oszlop 1. szint
        */

    };
    //1
    if (counter === 2) {
/*      c.drawImage(disc1,228,160); B oszlop 5. szint
        c.drawImage(disc2,228,180); B oszlop 4. szint
        c.drawImage(disc3,228,200); B oszlop 3. szint
        c.drawImage(disc4,228,220); B oszlop 2. szint
        c.drawImage(disc5,228,240); B oszlop 1. szint
        */
        c.clearRect(48,160,100,20);
        c.drawImage(disc1,408,240);
    };

    if (counter === 3) {
/*      c.drawImage(disc1,408,160); C oszlop 5. szint
        c.drawImage(disc2,408,180); C oszlop 4. szint
        c.drawImage(disc3,408,200); C oszlop 3. szint
        c.drawImage(disc4,408,220); C oszlop 2. szint
        c.drawImage(disc5,408,240); C oszlop 1. szint
        */
        c.clearRect(48,180,100,20);
        c.drawImage(disc2,228,240);   
    };

    if (counter === 4) {
        c.clearRect(408,240,100,20);
        c.drawImage(disc1,228,220);     

    };

    if (counter === 5) {
        c.clearRect(48,200,100,20);
        c.drawImage(disc3,408,240);     

    };

    if (counter === 6) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc1,48,200);     

    };

    if (counter === 7) {
        c.clearRect(228,240,100,20);
        c.drawImage(disc2,408,220);     

    };

    if (counter === 8) {
        c.clearRect(48,200,100,20);
        c.drawImage(disc1,408,200);     

    };

    if (counter === 9) {
        c.clearRect(48,220,100,20);
        c.drawImage(disc4,228,240);     

    };

    if (counter === 10) {
        c.clearRect(408,200,100,20);
        c.drawImage(disc1,228,220);     

    };

    if (counter === 11) {
        c.clearRect(408,220,100,20);
        c.drawImage(disc2,48,220);     

    };

    if (counter === 12) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc1,48,200);     

    };

    if (counter === 13) {
        c.clearRect(408,240,100,20);
        c.drawImage(disc3,228,220);     

    };

    if (counter === 14) {
        c.clearRect(48,200,100,20);
        c.drawImage(disc1,408,240);   

    };

    if (counter === 15) {
        c.clearRect(48,220,100,20);
        c.drawImage(disc2,228,200);   

    };

    if (counter === 16) {
        c.clearRect(408,240,100,20);
        c.drawImage(disc1,228,180);   

    };

    if (counter === 17) {
        c.clearRect(48,240,100,20);
        c.drawImage(disc5,408,240);   

    };

    if (counter === 18) {
        c.clearRect(228,180,100,20);
        c.drawImage(disc1,48,240);   

    };

    if (counter === 19) {
        c.clearRect(228,200,100,20);
        c.drawImage(disc2,408,220);   

    };

    if (counter === 19) {
        c.clearRect(228,200,100,20);
        c.drawImage(disc2,408,220);   

    };

    
    if (counter === 20) {
        c.clearRect(48,240,100,20);
        c.drawImage(disc1,408,200);   

    };

    if (counter === 21) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc3,48,240);   

    };

    if (counter === 22) {
        c.clearRect(408,200,100,20);
        c.drawImage(disc1,228,220);   

    };

    if (counter === 23) {
        c.clearRect(408,220,100,20);
        c.drawImage(disc2,48,220);   

    };

    if (counter === 24) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc1,48,200);   

    };

    if (counter === 25) {
        c.clearRect(228,240,100,20);
        c.drawImage(disc4,408,220);   

    };

    if (counter === 26) {
        c.clearRect(48,200,100,20);
        c.drawImage(disc1,408,200);   

    };
    
    if (counter === 27) {
        c.clearRect(48,220,100,20);
        c.drawImage(disc2,228,240);   

    };

    if (counter === 28) {
        c.clearRect(408,200,100,20);
        c.drawImage(disc1,228,220);   

    };

    if (counter === 29) {
        c.clearRect(48,240,100,20);
        c.drawImage(disc3,408,200);   

    };

    if (counter === 30) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc1,48,240);   

    };

    if (counter === 31) {
        c.clearRect(228,240,100,20);
        c.drawImage(disc2,408,180);   

    };

    if (counter === 32) {
        c.clearRect(48,240,100,20);
        c.drawImage(disc1,408,160);   

    };



    //c.drawImage(rat,corX[counter],corY[counter]);
    myAnim = requestAnimationFrame(animate); 
}
myAnim = requestAnimationFrame(animate);
animate();


//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = parapa[counter];   
    counter++; 
     if(counter >=32){
        szoveg.innerText = parapa[counter]="33. lépés: A diszkek áthelyezése sikeresen megtörtént!";
    }  
}


//Canvas 1 reset
document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(disc1,48,160);
    c.drawImage(disc2,48,180);
    c.drawImage(disc3,48,200);
    c.drawImage(disc4,48,220);
    c.drawImage(disc5,48,240);
    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "1. lépés: előre";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}



//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=32; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
             if(counter >=32){
                szoveg.innerText = parapa[counter]="33. lépés: A diszkek áthelyezése sikeresen megtörtént!";
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