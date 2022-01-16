//első canvas
let canvas = document.getElementById('canvas2');
let c = canvas.getContext('2d');
canvas.width = 540;
canvas.height  = 450;

let counter = 1;

let parapa = ["", "Helyezzük a második királynőt a 2. sorba úgy, hogy ne tudja megtámadni őt az első sorban lévő királynő.", 
"(1,0) nem lehetséges","(1,1) nem lehetséges","(1,2) lehetséges",

"Helyezzük a harmadik királynőt a 3. sorba úgy, hogy ne tudja megtámadni őt az első két sorban lévő királynő.",
"(2,0) nem lehetséges","(2,1) nem lehetséges","(2,2) nem lehetséges","(2,3) nem lehetséges",
"A 3. sorba elhelyezés nem lehetséges, ezért BACKTRACK a 2. sorba.", 

"Helyezze a második királynőt a 2. sor egy másik biztonságos cellájába.",
"(1,3) lehetséges",

"Helyezzük a harmadik királynőt a 3. sorba úgy, hogy ne tudja megtámadni őt az első két sorban lévő királynő.",
"(2,0) nem lehetséges","(2,1) lehetséges",

"Helyezze a negyedik királynőt a 4. sorba úgy, hogy ne tudja megtámadni őt az első három sorban lévő királynő.",
"(3,0) nem lehetséges","(3,1) nem lehetséges","(3,2) nem lehetséges","(3,3) nem lehetséges",
"A 4. sorba elhelyezés nem lehetséges, ezért BACKTRACK a 3. sorba.",

"Helyezze a harmadik királynőt a 3.sor egy másik biztonságos cellájába.",
"(2,2) nem lehetséges","(2,3) nem lehetséges",

"A 3. sorba elhelyezés nem lehetséges, ezért BACKTRACK a 2. sorba.", 
"Helyezze a második királynőt a 2. sor egy másik biztonságos cellájába.",
"A 2. sorba elhelyezés nem lehetséges, ezért BACKTRACK a 1. sorba.", 

"Helyezze az első királynőt az 1. sor egy másik biztonságos cellájába.",
"(0,1) lehetséges",

"Helyezzük a második királynőt a 2. sorba úgy, hogy ne tudja megtámadni őt az első sorban lévő királynő.",
"(1,0) nem lehetséges","(1,1) nem lehetséges","(1,2) nem lehetséges","(1,3) lehetséges",

"Helyezzük a harmadik királynőt a 3. sorba úgy, hogy ne tudja megtámadni őt az első két sorban lévő királynő.",
"(2,0) lehetséges",

"Helyezze a negyedik királynőt a 4. sorba úgy, hogy ne tudja megtámadni őt az első három sorban lévő királynő.",
"(3,0) nem lehetséges","(3,1) nem lehetséges","(3,2) lehetséges",

"A 4 királynő lehelyezése sikeresen megtörtént!",];

let buttonState = "START";

let isAllowed = false;

const knight = new Image();
knight.src = "images/Queen2.png";

const noQueen = new Image();
noQueen.src = "images/noQueen.png";

//canvas1
let myAnim;


//canvas1
function animate(){
    //c.fillStyle = 'rgb(62, 96, 150)';


    //0
    if (counter === 1) {
        c.drawImage(knight,90,90);

    };
    //1
    if (counter === 2) {
        c.drawImage(knight,90,180);
       
        };


    if (counter === 3) {
        c.clearRect(90,180,90,90);
    c.drawImage(noQueen,90,180);
    c.drawImage(knight,180,180);
   
    };

    if (counter === 4) {
        c.clearRect(180,180,90,90);
        c.drawImage(noQueen,180,180);  
        c.drawImage(knight,270,180);   

    };

    if (counter === 5) {
        c.drawImage(knight,270,180);
        

    };
    if (counter === 6) {
        c.drawImage(knight,90,270); 
        

    };


    
    if (counter === 7) {
        c.clearRect(90,270,90,90);
        c.drawImage(noQueen,90,270);
        c.drawImage(knight,180,270); 
    };

    if (counter === 8) {
        c.clearRect(180,270,90,90);
        c.drawImage(noQueen,180,270);
        c.drawImage(knight,270,270); 

    };

    if (counter === 9) {
        c.clearRect(270,270,90,90);
        c.drawImage(noQueen,270,270);
        c.drawImage(knight,360,270); 
    };

    if (counter === 10) {
        c.clearRect(360,270,90,90);
        c.drawImage(noQueen,360,270);

    };

    if (counter === 11) {
        c.clearRect(90,270,360,90);

    };

    if (counter === 12) {
        c.clearRect(270,180,90,90);
       
        c.drawImage(noQueen,270,180);
    };

    if (counter === 13) {
        
        c.drawImage(knight,360,180);
        
    };

    if (counter === 14) {
        c.clearRect(270,180,90,90);
        c.drawImage(knight,360,180);
        c.drawImage(noQueen,270,180);

        c.drawImage(knight,90,270);  
    };

    if (counter === 15) {
        c.clearRect(90,270,90,90);
        c.drawImage(noQueen,90,270);
        c.drawImage(knight,180,270);
    };
    
    if (counter === 16) {
        
        c.drawImage(knight,180,270);

    };

    if (counter === 17) {

        c.drawImage(knight,90,360);  

    };

    if (counter === 18) {  
        c.clearRect(90,360,90,90);    
        c.drawImage(noQueen,90,360);
        c.drawImage(knight,180,360);  
    };

    if (counter === 19) {
        c.clearRect(180,360,90,90); 
        c.drawImage(noQueen,180,360);
        c.drawImage(knight,270,360);  
    };

    if (counter === 20) {
        c.clearRect(270,360,90,90); 
        c.drawImage(noQueen,270,360);
        c.drawImage(knight,360,360);  
    };

    if (counter === 21) {
        c.clearRect(360,360,90,90); 
        c.drawImage(noQueen,360,360);
    };

    if (counter === 22) {
        
        c.clearRect(90,360,360,90);
        
    
    };

    if (counter === 23) { 
        c.drawImage(knight,270,270);     
        c.clearRect(180,270,90,90);
        c.drawImage(noQueen,180,270);
    };

    if (counter === 24) {
        c.clearRect(270,270,90,90);
        c.drawImage(noQueen,270,270);
        c.drawImage(knight,360,270);    
    };

    if (counter === 25) {
        c.clearRect(360,270,90,90);
        c.drawImage(noQueen,360,270);
    };

    if (counter === 26) {
        c.clearRect(90,270,360,90);

    };

    if (counter === 27) {
        c.clearRect(360,180,90,90);
        c.drawImage(noQueen,360,180);

    };



    if (counter === 28) {
        c.clearRect(90,180,360,90);

    };

    if (counter === 29) {    
        c.clearRect(90,90,90,90);
        c.drawImage(noQueen,90,90);
        c.drawImage(knight,180,90);
    };

    if (counter === 31) {    
        c.drawImage(knight,90,180);
    };

    if (counter === 32) {
        c.clearRect(90,180,90,90);
        c.drawImage(noQueen,90,180);
        c.drawImage(knight,180,180);
    };

    if (counter === 33) {
        c.clearRect(180,180,90,90);
        c.drawImage(noQueen,180,180);
        c.drawImage(knight,270,180);
    };

    if (counter === 34) {
        c.clearRect(270,180,90,90);
        c.drawImage(noQueen,270,180);
        c.drawImage(knight,360,180);
    };

    if (counter === 35) {
        c.drawImage(knight,360,180);
    };

    if (counter === 36) {
        c.drawImage(knight,90,270);
    };
    if (counter === 38) {
        c.drawImage(knight,90,360);
    };

    if (counter === 39) {
        c.clearRect(90,360,90,90);
        c.drawImage(noQueen,90,360);
        c.drawImage(knight,180,360);
    };

    if (counter === 40) {
        c.clearRect(180,360,90,90);
        c.drawImage(noQueen,180,360); 
        c.drawImage(knight,270,360);    
    };

    if (counter === 41) {   
        c.drawImage(knight,270,360);
    };

  
   

    //c.drawImage(knight,corX[counter],corY[counter]);
    myAnim = requestAnimationFrame(animate); 
}
myAnim = requestAnimationFrame(animate);
animate();


//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = parapa[counter];   
    counter++; 
     if(counter >=41){
        szoveg.innerText = parapa[counter]="A 4 királynő lehelyezése sikeresen megtörtént!";
    } 
}


//Canvas 1 reset
document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(knight,90,90);
    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "Helyezzük a királynőt a (0,0) négyzetbe.";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}


//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=42; x++){        
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(knight,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
            if(counter >=42){
                szoveg.innerText = parapa[counter]="A 4 királynő lehelyezése sikeresen megtörtént!";
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