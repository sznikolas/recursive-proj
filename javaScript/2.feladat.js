//első canvas
let canvas = document.getElementById('canvas2');
let c = canvas.getContext('2d');
canvas.width = 580;
canvas.height  = 500;

let canvas3 = document.getElementById('canvas3');
let c3 = canvas3.getContext('2d');
canvas3.width = 580;
canvas3.height  = 500;


let counter = 1;
let counter2 = 1;

let parapa = ["", "Helyezzük a második királynőt a 2. oszlopba úgy, hogy ne tudja megtámadni őt az első oszlopban lévő királynő.", 
"(0,1) nem lehetséges","(1,1) nem lehetséges","(2,1) lehetséges",

"Helyezzük a harmadik királynőt a 3. oszlopba úgy, hogy ne tudja megtámadni őt az első két oszlopban lévő királynő.",
"(0,2) nem lehetséges","(1,2) nem lehetséges","(2,2) nem lehetséges","(3,2) nem lehetséges",
"A 3. oszlopba elhelyezés nem lehetséges, ezért BACKTRACK a 2. oszlopba.", 

"Helyezze a második királynőt a 2. oszlop egy másik biztonságos cellájába.",
"(3,1) lehetséges",

"Helyezzük a harmadik királynőt a 3. oszlopba úgy, hogy ne tudja megtámadni őt az első két oszlopban lévő királynő.",
"(0,2) nem lehetséges","(1,2) lehetséges",

"Helyezze a negyedik királynőt a 4. oszlopba úgy, hogy ne tudja megtámadni őt az első három oszlopban lévő királynő.",
"(0,3) nem lehetséges","(1,3) nem lehetséges","(2,3) nem lehetséges","(3,3) nem lehetséges",
"A 4. oszlopba elhelyezés nem lehetséges, ezért BACKTRACK a 3. oszlopba.",

"Helyezze a harmadik királynőt a 3.oszlop egy másik biztonságos cellájába.",
"(2,2) nem lehetséges","(3,2) nem lehetséges",

"A 3. oszlopba elhelyezés nem lehetséges, ezért BACKTRACK a 2. oszlopba.", 
"Helyezze a második királynőt a 2. oszlop egy másik biztonságos cellájába.",
"A 2. oszlopba elhelyezés nem lehetséges, ezért BACKTRACK a 1. oszlopba.", 

"Helyezze az első királynőt az 1. oszlop egy másik biztonságos cellájába.",
"(1,0) lehetséges",

"Helyezzük a második királynőt a 2. oszlopba úgy, hogy ne tudja megtámadni őt az első oszlopban lévő királynő.",
"(0,1) nem lehetséges","(1,1) nem lehetséges","(2,1) nem lehetséges","(3,1) lehetséges",

"Helyezzük a harmadik királynőt a 3. oszlopba úgy, hogy ne tudja megtámadni őt az első két oszlopban lévő királynő.",
"(0,2) lehetséges",

"Helyezze a negyedik királynőt a 4. oszlopba úgy, hogy ne tudja megtámadni őt az első három oszlopban lévő királynő.",
"(0,3) nem lehetséges","(1,3) nem lehetséges","(2,3) lehetséges",

"A 4 királynő lehelyezése sikeresen megtörtént!",];

let buttonState = "START";
let buttonState2 = "START";

let isAllowed = false;
let isAllowed2 = false;

const knight = new Image();
knight.src = "images/Queen2.png";

const noQueen = new Image();
noQueen.src = "images/noQueen.png";

//canvas1
let myAnim;
let myAnim2;


//canvas1
function animate(){
    //c.fillStyle = 'rgb(62, 96, 150)';


    //0
    if (counter === 1) {
        c.drawImage(knight,90,90);

    };
    //1
    if (counter === 2) {
        c.drawImage(knight,180,90);
       
        };


    if (counter === 3) {
        c.clearRect(180,90,90,90);
    c.drawImage(noQueen,180,90);
    c.drawImage(knight,180,180);
   
    };

    if (counter === 4) {
        c.clearRect(180,180,90,90);
        c.drawImage(noQueen,180,180);  
        c.drawImage(knight,180,270);   

    };

    if (counter === 5) {
        c.drawImage(knight,180,270);   
    
    };

    if (counter === 6) {
        c.drawImage(knight,270,90);
        

    };
    if (counter === 7) {
        c.clearRect(270,90,90,90);
        c.drawImage(noQueen,270,90);  
        c.drawImage(knight,270,180);  
    };

    
    if (counter === 8) {
        c.clearRect(270,180,90,90);
        c.drawImage(noQueen,270,180);  
        c.drawImage(knight,270,270);  
    };

    if (counter === 9) {
        c.clearRect(270,270,90,90);
        c.drawImage(noQueen,270,270);  
        c.drawImage(knight,270,360);  

    };

    if (counter === 10) {
        c.clearRect(270,360,360,90);
        c.drawImage(noQueen,270,360);  
    };

    if (counter === 11) {
        c.clearRect(270,90,90,360);

    };

    if (counter === 12) {
        c.clearRect(180,270,90,90);
        c.drawImage(noQueen,180,270);  

    };

    if (counter === 13) {
        c.drawImage(knight,180,360); 
        
    };

    if (counter === 14) {
        c.drawImage(knight,270,90);
        
        
    };

  
    if (counter === 15) {
        c.clearRect(270,90,90,90);
        c.drawImage(noQueen,270,90);  
        c.drawImage(knight,270,180);  
    };
    
    if (counter === 16) {
        c.drawImage(knight,270,180);  
        

    };

    if (counter === 17) {
        c.drawImage(knight,360,90);  
        

    };

    if (counter === 18) {  
        c.clearRect(360,90,90,90);
        c.drawImage(noQueen,360,90);  
        c.drawImage(knight,360,180);  
    };

    if (counter === 19) {
        c.clearRect(360,180,90,90);
        c.drawImage(noQueen,360,180);  
        c.drawImage(knight,360,270);  
    };

    if (counter === 20) {
        c.clearRect(360,270,90,90);
        c.drawImage(noQueen,360,270);  
        c.drawImage(knight,360,360);  
    };

    if (counter === 21) {
        c.clearRect(360,360,90,90);
        c.drawImage(noQueen,360,360);  
        
    };

    if (counter === 22) {
        
        c.clearRect(360,90,90,360);
        
    
    };

    if (counter === 23) { 
        c.clearRect(270,180,90,90);
        c.drawImage(noQueen,270,180);  
        c.drawImage(knight,270,270);  
    };

    if (counter === 24) {
        c.clearRect(270,270,90,90);
        c.drawImage(noQueen,270,270);  
        c.drawImage(knight,270,360);  
    };

    if (counter === 25) {
        c.clearRect(270,360,90,90);
        c.drawImage(noQueen,270,360);  
        
    };

    if (counter === 26) {
        c.clearRect(270,90,90,360);

    };

    if (counter === 27) {
        c.clearRect(180,360,90,90);
        c.drawImage(noQueen,180,360);  

    };



    if (counter === 28) {
        c.clearRect(180,90,90,360);

    };

    if (counter === 29) {    
        c.clearRect(90,90,90,90);
        c.drawImage(noQueen,90,90);  
        c.drawImage(knight,90,180);  
    };

    if (counter === 30) {  
        c.drawImage(knight,90,180);  
        
    };
    if (counter === 31) {  
        c.drawImage(knight,180,90); 
        
    };

    if (counter === 32) {
        c.clearRect(180,90,90,90);
        c.drawImage(noQueen,180,90);  
        c.drawImage(knight,180,180);  
    };

    if (counter === 33) {
        c.clearRect(180,180,90,90);
        c.drawImage(noQueen,180,180);  
        c.drawImage(knight,180,270);  
    };

    if (counter === 34) {
        c.clearRect(180,270,90,90);
        c.drawImage(noQueen,180,270);  
        c.drawImage(knight,180,360);    
    };

    if (counter === 35) {
        c.drawImage(knight,180,360); 
    };

    if (counter === 36) {
        c.drawImage(knight,270,90); 
    };

    if (counter === 37) {
        c.drawImage(knight,270,90); 
    };

    if (counter === 38) {
        c.drawImage(knight,360,90); 
    };

    if (counter === 39) {
        c.clearRect(360,90,90,90);
        c.drawImage(noQueen,360,90);  
        c.drawImage(knight,360,180);  
    };

    if (counter === 40) {
        c.clearRect(360,180,90,90);
        c.drawImage(noQueen,360,180);  
        c.drawImage(knight,360,270);     
    };

    if (counter === 41) {   
        c.drawImage(knight,360,270);  
    };

  
   

    //c.drawImage(knight,corX[counter],corY[counter]);
    myAnim = requestAnimationFrame(animate); 
}
myAnim = requestAnimationFrame(animate);
animate();

function animate2(){
    //c.fillStyle = 'rgb(62, 96, 150)';


    //0
    if (counter2 === 1) {
        c3.drawImage(knight,90,90);

    };
    //1
    if (counter2 === 2) {
        c3.drawImage(knight,90,180);
       
        };


    if (counter2 === 3) {
        c3.clearRect(90,180,90,90);
        c3.drawImage(noQueen,90,180);
        c3.drawImage(knight,180,180);
   
    };

    if (counter2 === 4) {
        c3.clearRect(180,180,90,90);
        c3.drawImage(noQueen,180,180);  
        c3.drawImage(knight,270,180);   

    };

    if (counter2 === 5) {
        c3.drawImage(knight,270,180);
        

    };
    if (counter2 === 6) {
        c3.drawImage(knight,90,270); 
        

    };


    
    if (counter2 === 7) {
        c3.clearRect(90,270,90,90);
        c3.drawImage(noQueen,90,270);
        c3.drawImage(knight,180,270); 
    };

    if (counter2 === 8) {
        c3.clearRect(180,270,90,90);
        c3.drawImage(noQueen,180,270);
        c3.drawImage(knight,270,270); 

    };

    if (counter2 === 9) {
        c3.clearRect(270,270,90,90);
        c3.drawImage(noQueen,270,270);
        c3.drawImage(knight,360,270); 
    };

    if (counter2 === 10) {
        c3.clearRect(360,270,90,90);
        c3.drawImage(noQueen,360,270);

    };

    if (counter2 === 11) {
        c3.clearRect(90,270,360,90);

    };

    if (counter2 === 12) {
        c3.clearRect(270,180,90,90);
       
        c3.drawImage(noQueen,270,180);
    };

    if (counter2 === 13) {
        
        c3.drawImage(knight,360,180);
        
    };

    if (counter2 === 14) {
        c3.clearRect(270,180,90,90);
        c3.drawImage(knight,360,180);
        c3.drawImage(noQueen,270,180);

        c3.drawImage(knight,90,270);  
    };

    if (counter2 === 15) {
        c3.clearRect(90,270,90,90);
        c3.drawImage(noQueen,90,270);
        c3.drawImage(knight,180,270);
    };
    
    if (counter2 === 16) {
        
        c3.drawImage(knight,180,270);

    };

    if (counter2 === 17) {

        c3.drawImage(knight,90,360);  

    };

    if (counter2 === 18) {  
        c3.clearRect(90,360,90,90);    
        c3.drawImage(noQueen,90,360);
        c3.drawImage(knight,180,360);  
    };

    if (counter2 === 19) {
        c3.clearRect(180,360,90,90); 
        c3.drawImage(noQueen,180,360);
        c3.drawImage(knight,270,360);  
    };

    if (counter2 === 20) {
        c3.clearRect(270,360,90,90); 
        c3.drawImage(noQueen,270,360);
        c3.drawImage(knight,360,360);  
    };

    if (counter2 === 21) {
        c3.clearRect(360,360,90,90); 
        c3.drawImage(noQueen,360,360);
    };

    if (counter2 === 22) {
        
        c3.clearRect(90,360,360,90);
        
    
    };

    if (counter2 === 23) { 
        c3.drawImage(knight,270,270);     
        c3.clearRect(180,270,90,90);
        c3.drawImage(noQueen,180,270);
    };

    if (counter2 === 24) {
        c3.clearRect(270,270,90,90);
        c3.drawImage(noQueen,270,270);
        c3.drawImage(knight,360,270);    
    };

    if (counter2 === 25) {
        c3.clearRect(360,270,90,90);
        c3.drawImage(noQueen,360,270);
    };

    if (counter2 === 26) {
        c3.clearRect(90,270,360,90);

    };

    if (counter2 === 27) {
        c3.clearRect(360,180,90,90);
        c3.drawImage(noQueen,360,180);

    };



    if (counter2 === 28) {
        c3.clearRect(90,180,360,90);

    };

    if (counter2 === 29) {    
        c3.clearRect(90,90,90,90);
        c3.drawImage(noQueen,90,90);
        c3.drawImage(knight,180,90);
    };

    if (counter2 === 30) {    
        
    };

    if (counter2 === 31) {    
        c3.drawImage(knight,90,180);
    };

    if (counter2 === 32) {
        c3.clearRect(90,180,90,90);
        c3.drawImage(noQueen,90,180);
        c3.drawImage(knight,180,180);
    };

    if (counter2 === 33) {
        c3.clearRect(180,180,90,90);
        c3.drawImage(noQueen,180,180);
        c3.drawImage(knight,270,180);
    };

    if (counter2 === 34) {
        c3.clearRect(270,180,90,90);
        c3.drawImage(noQueen,270,180);
        c3.drawImage(knight,360,180);
    };

    if (counter2 === 35) {
        c3.drawImage(knight,360,180);
    };

    if (counter2 === 36) {
        c3.drawImage(knight,90,270);
    };

    if (counter2 === 37) {
        
    };
    if (counter2 === 38) {
        c3.drawImage(knight,90,360);
    };

    if (counter2 === 39) {
        c3.clearRect(90,360,90,90);
        c3.drawImage(noQueen,90,360);
        c3.drawImage(knight,180,360);
    };

    if (counter2 === 40) {
        c3.clearRect(180,360,90,90);
        c3.drawImage(noQueen,180,360); 
        c3.drawImage(knight,270,360);    
    };

    if (counter2 === 41) {   
        c3.drawImage(knight,270,360);
    };

  
   

    //c.drawImage(knight,corX[counter],corY[counter]);
    myAnim2 = requestAnimationFrame(animate2); 
}
myAnim2 = requestAnimationFrame(animate2);
animate2();

//Előrelépések 2-es canvason
document.getElementById('stepFrwd2').onclick = function(){
    animate2();
    
    counter2++; 

}

//Canvas 2 reset
document.getElementById('resetAnim2').onclick = function(){
    isAllowed2 = false;
    c3.clearRect(0,0,canvas3.width, canvas3.height);
    c3.drawImage(knight,90,90);
    counter2 = 0;
    let idk2 = document.getElementById("startAnim2");
    idk2.value = "Start"
    buttonState2="START";  
}

//canvas 2 lejatszas
const startAnim2 = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider2 = document.getElementById('myRange2');
        for(var a = 0; a<=42; a++){        
            if(isAllowed2){
                counter2++;
                await sleep2(1000/slider2.value);       
            }    
        }
    }
// A várakozáshoz szükséges constans
const sleep2 = (delay2) => new Promise((resolve) => setTimeout(resolve,delay2));

//Canvas2-hez
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
}




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
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay)); 

//Canvas1-hez
document.getElementById('startAnim').onclick = function(){
    if(buttonState === "START"){isAllowed=true}
    if(buttonState === "STOP"){isAllowed=false}
    startAnim();
    change()
};

change = function(){
    let elem = document.getElementById("startAnim");
    if (elem.value=="Stop") {elem.value = "Start";buttonState="START"}
    else {elem.value = "Stop";buttonState="STOP"}
};

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
});





