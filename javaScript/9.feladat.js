//első canvas
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
canvas.width = 550;
canvas.height  = 350;

let counter = 0;

let parapa = ["L < H, ezért felcseréljük őket", 
"csere", 
"R és Ó cseréje megtörtént", 
"hívjuk a revere függvényt (L+1)-re és (H-1)-re",

"L < H, ezért felcseréljük őket",
"csere",
"E és I cseréje megtörtént",
"hívjuk a revere függvényt (L+1)-re és (H-1)-re",

"L < H, ezért felcseréljük őket",
"csere",
"K és Z cseréje megtörtént",
"hívjuk a revere függvényt (L+1)-re és (H-1)-re",

"L < H, ezért felcseréljük őket",
"csere",
"U és R cseréje megtörtént",
"hívjuk a revere függvényt (L+1)-re és (H-1)-re",

"L > H ezért nincs több csere",
"elértük a base case-t",

"A karakterláncot sikeresen megfordítottuk!"];

let buttonState = "START";
let isAllowed = false;

/* const knight = new Image();
knight.src = "images/knight7.png"; */

let myAnim;


function animate(){

    if (counter === 0) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.font='normal 30px Lucida Console'; 

        c.fillStyle = "black";
        c.fillText("r", 90,110);
        c.fillText("e", 140,110);
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillText("i", 390,110);
        c.fillText("ó", 438,110);

    };

    if (counter === 1) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.font='normal 30px Lucida Console'; 
        c.fillStyle = "red";
        c.fillText("L", 90,55);
        c.fillText("▼", 90,75);

        c.fillText("H", 440,55);  
        c.fillText("▼", 440,75); 
    
        c.fillText("r", 90,110);
        c.fillStyle = "black";
        c.fillText("e", 140,110);
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillText("i", 390,110);
        c.fillStyle = "red";
        c.fillText("ó", 438,110);
	    
    };

    if (counter === 2) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 90,55);
        c.fillText("▼", 90,75);

        c.fillText("H", 440,55);  
        c.fillText("▼", 440,75); 
    
        c.fillText("r", 90,110);
        c.fillStyle = "black";
        c.fillText("e", 140,110);
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillText("i", 390,110);
        c.fillStyle = "red";
        c.fillText("ó", 438,110);

        c.fillStyle = "black";
        c.fillText("csere", 225,155);
	    
    };
    
    if (counter === 3) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 90,55);
        c.fillText("▼", 90,75);

        c.fillText("H", 440,55);  
        c.fillText("▼", 440,75); 
    
        c.fillText("ó", 90,110);
        c.fillStyle = "black";
        c.fillText("e", 140,110);
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillText("i", 390,110);
        c.fillStyle = "red";
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("csere", 225,155);

        c.fillStyle = "red";
        c.fillText("r", 440,255);
        c.fillText("ó", 90,255);   
    };

    if (counter === 4) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 90,55);
        c.fillText("▼", 90,75);

        c.fillText("H", 440,55);  
        c.fillText("▼", 440,75); 

        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("e", 140,110);
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillText("i", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("L++, H--", 205,155);

        c.fillText("r", 440,255);
        c.fillText("ó", 90,255);
    };


    if (counter === 5) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 140,55);
        c.fillText("▼", 140,75);

        c.fillText("H", 390,55);  
        c.fillText("▼", 390,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillStyle = "red";
        c.fillText("e", 140,110);
        c.fillStyle = "black";
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillStyle = "red";
        c.fillText("i", 390,110);
        c.fillStyle = "black";
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("L++, H--", 205,155);
	    
    };

    if (counter === 6) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 140,55);
        c.fillText("▼", 140,75);

        c.fillText("H", 390,55);  
        c.fillText("▼", 390,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillStyle = "red";
        c.fillText("e", 140,110);
        c.fillStyle = "black";
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillStyle = "red";
        c.fillText("i", 390,110);
        c.fillStyle = "black";
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("csere", 225,155);
	    
    };

    if (counter === 7) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 140,55);
        c.fillText("▼", 140,75);

        c.fillText("H", 390,55);  
        c.fillText("▼", 390,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillStyle = "red";
        c.fillText("i", 140,110);
        c.fillStyle = "black";
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillStyle = "red";
        c.fillText("e", 390,110);
        c.fillStyle = "black";
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("ó", 90,255);
        c.fillStyle = "red";
        c.fillText("e", 390,255);
        c.fillText("i", 140,255);

        c.fillStyle = "black";
        c.fillText("csere", 225,155);
	    
    };

    if (counter === 8) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 140,55);
        c.fillText("▼", 140,75);

        c.fillText("H", 390,55);  
        c.fillText("▼", 390,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("L++, H--", 205,155);
	    
    };

    if (counter === 9) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 190,55);
        c.fillText("▼", 190,75);

        c.fillText("H", 340,55);  
        c.fillText("▼", 340,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillStyle = "red";
        c.fillText("k", 190,110);
        c.fillStyle = "black";
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillStyle = "red";
        c.fillText("z", 340,110);
        c.fillStyle = "black";
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("L++, H--", 205,155);
	    
    };

    
    if (counter === 10) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 190,55);
        c.fillText("▼", 190,75);

        c.fillText("H", 340,55);  
        c.fillText("▼", 340,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillStyle = "red";
        c.fillText("k", 190,110);
        c.fillStyle = "black";
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillStyle = "red";
        c.fillText("z", 340,110);
        c.fillStyle = "black";
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("csere", 225,155);
	    
    };

    if (counter === 11) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 190,55);
        c.fillText("▼", 190,75);

        c.fillText("H", 340,55);  
        c.fillText("▼", 340,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillStyle = "red";
        c.fillText("z", 190,110);
        c.fillStyle = "black";
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillStyle = "red";
        c.fillText("k", 340,110);
        c.fillStyle = "black";
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);
        c.fillStyle = "red";
        c.fillText("k", 340,255);
        c.fillText("z", 190,255);


        c.fillStyle = "black";
        c.fillText("csere", 225,155);
	    
    };

    if (counter === 12) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 190,55);
        c.fillText("▼", 190,75);

        c.fillText("H", 340,55);  
        c.fillText("▼", 340,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("z", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("k", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("k", 340,255);
        c.fillText("z", 190,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("L++, H--", 205,155);
	    
    };

    if (counter === 13) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 240,55);
        c.fillText("▼", 240,75);

        c.fillText("H", 290,55);  
        c.fillText("▼", 290,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("z", 190,110);
        c.fillStyle = "red";
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillStyle = "black";
        c.fillText("k", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("k", 340,255);
        c.fillText("z", 190,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("L++, H--", 205,155);
	    
    };

    if (counter === 14) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 240,55);
        c.fillText("▼", 240,75);

        c.fillText("H", 290,55);  
        c.fillText("▼", 290,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("z", 190,110);
        c.fillStyle = "red";
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillStyle = "black";
        c.fillText("k", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("k", 340,255);
        c.fillText("z", 190,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("csere", 225,155);
	    
    };

    if (counter === 15) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 240,55);
        c.fillText("▼", 240,75);

        c.fillText("H", 290,55);  
        c.fillText("▼", 290,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("z", 190,110);
        c.fillStyle = "red";
        c.fillText("r", 240,110);
        c.fillText("u", 290,110);
        c.fillStyle = "black";
        c.fillText("k", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("k", 340,255);
        c.fillText("z", 190,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);
        c.fillStyle = "red";
        c.fillText("u", 290,255);
        c.fillText("r", 240,255);


        c.fillStyle = "black";
        c.fillText("csere", 225,155);
	    
    };

    if (counter === 16) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 240,55);
        c.fillText("▼", 240,75);

        c.fillText("H", 290,55);  
        c.fillText("▼", 290,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("z", 190,110);
        c.fillText("r", 240,110);
        c.fillText("u", 290,110);
        c.fillText("k", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("k", 340,255);
        c.fillText("u", 290,255);
        c.fillText("r", 240,255);
        c.fillText("z", 190,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("L++, H--", 205,155);
	    
    };

    if (counter === 17) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.fillStyle = "red";
        c.fillText("L", 290,55);
        c.fillText("▼", 290,75);

        c.fillText("H", 240,55);  
        c.fillText("▼", 240,75);
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("z", 190,110);
        c.fillText("r", 240,110);
        c.fillText("u", 290,110);
        c.fillStyle = "black";
        c.fillText("k", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("k", 340,255);
        c.fillText("u", 290,255);
        c.fillText("r", 240,255);
        c.fillText("z", 190,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("base case: L < H", 130,155);
	    
    };

    if (counter === 18) {
        c.clearRect(0,0,canvas.width,canvas.height);
/*         c.fillStyle = "red";
        c.fillText("L", 290,55);
        c.fillText("▼", 290,75);

        c.fillText("H", 240,55);  
        c.fillText("▼", 240,75); */
    
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("z", 190,110);
        c.fillText("r", 240,110);
        c.fillText("u", 290,110);
        c.fillStyle = "black";
        c.fillText("k", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("k", 340,255);
        c.fillText("u", 290,255);
        c.fillText("r", 240,255);
        c.fillText("z", 190,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.fillStyle = "black";
        c.fillText("elértük a base case-t", 85,155);
	    
    };

    if (counter === 19) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.font='normal 30px Lucida Console'; 
        c.fillStyle = "black";
        c.fillText("ó", 90,110);
        c.fillText("i", 140,110);
        c.fillText("z", 190,110);
        c.fillText("r", 240,110);
        c.fillText("u", 290,110);
        c.fillText("k", 340,110);
        c.fillText("e", 390,110);
        c.fillText("r", 438,110);

        c.fillStyle = "black";
        c.fillText("r", 440,255);
        c.fillText("e", 390,255);
        c.fillText("k", 340,255);
        c.fillText("u", 290,255);
        c.fillText("r", 240,255);
        c.fillText("z", 190,255);
        c.fillText("i", 140,255);
        c.fillText("ó", 90,255);

        c.font='normal 20px Lucida Console'; 
        c.fillText("a karakterláncot sikeresen megfordítottuk", 30,155);
	    
    };  
    myAnim = requestAnimationFrame(animate); 
}

myAnim = requestAnimationFrame(animate);

//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = parapa[counter];   
    counter++; 
     if(counter >=19){
        szoveg.innerText = parapa[counter]="a karakterláncot sikeresen megfordítottuk!";
    }  
}


document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width,canvas.height);
        c.font='normal 30px Lucida Console'; 
        c.fillStyle = "black";
        c.fillText("r", 90,110);
        c.fillText("e", 140,110);
        c.fillText("k", 190,110);
        c.fillText("u", 240,110);
        c.fillText("r", 290,110);
        c.fillText("z", 340,110);
        c.fillText("i", 390,110);
        c.fillText("ó", 438,110);
    counter = 0;
    //label resetelese
    document.getElementById("label1").innerHTML = "hívjuk a reverse függvényt a megadott string-re";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";   
}

//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=18; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
             if(counter >=19){
                szoveg.innerText = parapa[counter]="A karakterláncot sikeresen megfordítottuk!";
            } 
        }
    }
// A várakozáshoz szükséges constans
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))   


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