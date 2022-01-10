//első canvas
let canvas = document.getElementById('canvas10');
let c = canvas.getContext('2d');
canvas.width = 300;
canvas.height  = 450;

let counter = 1;

let parapa = ["", 
"2. lépés: ", 
"3. lépés: ", 
"4. lépés: ",
"5. lépés: ",
"6. lépés: ",
"7. lépés: ",
"8. lépés: ",
"9. lépés: ",
"10. lépés: ",
"11. lépés: ",
"12. lépés: ",
"13. lépés: ",
"14. lépés: ",
"15. lépés: ",
"16. lépés: ",
"17. lépés: ",

"Az 5 faktoriális eredménye: 120!"];


let buttonState = "START";

let isAllowed = false;

const faktorial1 = new Image();
const faktorial2 = new Image();
const faktorial3 = new Image();
const faktorial4 = new Image();
const faktorial5 = new Image();
const faktorial6 = new Image();
const faktorial7 = new Image();
const faktorial8 = new Image();
const faktorial9 = new Image();
const faktorial10 = new Image();
const faktorial11 = new Image();
const faktorial12 = new Image();
const faktorial13 = new Image();





faktorial1.src = "images/faktorial1.png";
faktorial2.src = "images/faktorial2.png";
faktorial3.src = "images/faktorial3.png";
faktorial4.src = "images/faktorial4.png";
faktorial5.src = "images/faktorial5.png";
faktorial6.src = "images/faktorial6.png";
faktorial7.src = "images/faktorial7.png";
faktorial8.src = "images/faktorial8.png";
faktorial9.src = "images/faktorial9.png";
faktorial10.src = "images/faktorial10.png";
faktorial11.src = "images/faktorial11.png";
faktorial12.src = "images/faktorial12.png";
faktorial13.src = "images/faktorial13.png";




//canvas1
let myAnim;


//canvas1
function animate(){
    
    if (counter === 1) {
        c.drawImage(faktorial1,30,10);   
    };


    if (counter === 2) {
        c.drawImage(faktorial2,30,95);   
    };

    if (counter === 3) {
        c.drawImage(faktorial3,30,180);   
    };


    if (counter === 4) {
        c.drawImage(faktorial4,30,265);   
    };

    if (counter === 5) {
        c.drawImage(faktorial5,30,350);   
    };


    if (counter === 6) {
        c.clearRect(30,350,240,75);
    };

    if (counter === 7) {
        c.drawImage(faktorial6,30,265);   
    };

    if (counter === 8) {
        c.drawImage(faktorial7,30,265);   
    };

    if (counter === 9) {
        c.clearRect(30,265,240,75);
    };

    if (counter === 10) {
        c.drawImage(faktorial8,30,180);   
    };

    if (counter === 11) {
        c.drawImage(faktorial9,30,180);   
    };

    if (counter === 12) {
        c.clearRect(30,180,240,75);
    };



    if (counter === 13) {
        c.drawImage(faktorial10,30,95);   
    };

    if (counter === 14) {
        c.drawImage(faktorial11,30,95);   
    };

    if (counter === 15) {
        c.clearRect(30,95,240,75);
    };


    if (counter === 16) {
        c.drawImage(faktorial12,30,10);   
    };

    if (counter === 17) {
        c.drawImage(faktorial13,30,10);   
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
     if(counter >=18){
        szoveg.innerText = parapa[counter]="Az 5 faktoriális eredménye: 120!";
    }  
}


//Canvas 1 reset
document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(faktorial1,30,10);   
    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}



//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=17; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
             if(counter >=18){
                szoveg.innerText = parapa[counter]="Az 5 faktoriális eredménye: 120!";
            } 
        }
    }
// A várakozáshoz szükséges constans
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))   


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


