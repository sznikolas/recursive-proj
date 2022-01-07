//első canvas
let canvas = document.getElementById('canvas4');
let c = canvas.getContext('2d');
canvas.width = 565;
canvas.height  = 300;

let counter = 1;

let parapa = ["", 
"5. lemez mozgatása A-ról C-re nem lehetséges",
"4. lemez mozgatása A-ról B-re nem lehetséges",
"3. lemez mozgatása A-ról C-re nem lehetséges",
"2. lemez mozgatása A-ról B-re nem lehetséges",
"1. lemez mozgatása A-ról C-re lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"2. lemez mozgatása A-ról B-re lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása C-ről B-re lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 3-as lemezzel, ahol abbahagytuk.",
"3. lemez mozgatása A-ról C-re lehetséges, folytassuk a kisebb lemezzel",
"2. lemez mozgatása B-ről C-re nem lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása B-ről A-ra lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"2. lemez mozgatása B-ről C-re lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása A-ról C-re lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 3-as lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 4-es lemezzel, ahol abbahagytuk.",
"4. lemez mozgatása A-ról B-re lehetséges, folytassuk a kisebb lemezzel",
"3. lemez mozgatása C-ről B-re nem lehetséges, folytassuk a kisebb lemezzel",
"2. lemez mozgatása C-ről A-ra nem lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása C-ről B-re lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"2. lemez mozgatása C-ről A-ra lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása B-ről A-ra lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 3-as lemezzel, ahol abbahagytuk.",
"3. lemez mozgatása C-ről B-re lehetséges, folytassuk a kisebb lemezzel",
"2. lemez mozgatása A-ról B-re nem lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása A-ról C-re lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"2. lemez mozgatása A-ról B-re lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása C-ről B-re lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 3-as lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 4-es lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 5-ös lemezzel, ahol abbahagytuk.",
"5. lemez mozgatása A-ról C-re lehetséges, folytassuk a kisebb lemezzel",
"4. lemez mozgatása B-ről C-re nem lehetséges, folytassuk a kisebb lemezzel",
"3. lemez mozgatása B-ről A-ra nem lehetséges, folytassuk a kisebb lemezzel",
"2. lemez mozgatása B-ről C-re nem lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása B-ről A-ra lehetséges",

"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"2. lemez mozgatása B-ről C-re lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása A-ról C-re lehetséges",
"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 3-as lemezzel, ahol abbahagytuk.",
"3. lemez mozgatása B-ről A-ra lehetséges, folytassuk a kisebb lemezzel",

"2. lemez mozgatása C-ről A-ra nem lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása C-ről B-re lehetséges",

"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"2. lemez mozgatása C-ről A-ra lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása B-ről A-ra lehetséges",

"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 3-as lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 4-es lemezzel, ahol abbahagytuk.",
"4. lemez mozgatása B-ről C-re lehetséges, folytassuk a kisebb lemezzel",

"3. lemez mozgatása A-ról C-re nem lehetséges, folytassuk a kisebb lemezzel",
"2. lemez mozgatása A-ról B-re nem lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása A-ról C-re lehetséges",

"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"2. lemez mozgatása A-ról B-re lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása C-ről B-re lehetséges",

"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"Visszatérés a rekurzív hívásból, folytassuk a 3-as lemezzel, ahol abbahagytuk.",
"3. lemez mozgatása A-ról C-re lehetséges, folytassuk a kisebb lemezzel",

"2. lemez mozgatása B-ről C-re nem lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása B-ről A-ra lehetséges",

"Visszatérés a rekurzív hívásból, folytassuk a 2-es lemezzel, ahol abbahagytuk.",
"2. lemez mozgatása B-ről C-re lehetséges, folytassuk a kisebb lemezzel",
"1. lemez mozgatása A-ról C-re lehetséges",

"A lemezek áthelyezése sikeresen megtörtént!"];


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
    if (counter === 6) {
/*      c.drawImage(disc1,228,160); B oszlop 5. szint
        c.drawImage(disc2,228,180); B oszlop 4. szint
        c.drawImage(disc3,228,200); B oszlop 3. szint
        c.drawImage(disc4,228,220); B oszlop 2. szint
        c.drawImage(disc5,228,240); B oszlop 1. szint
        */
        c.clearRect(48,160,100,20);
        c.drawImage(disc1,408,240);
    };

    if (counter === 8) {
/*      c.drawImage(disc1,408,160); C oszlop 5. szint
        c.drawImage(disc2,408,180); C oszlop 4. szint
        c.drawImage(disc3,408,200); C oszlop 3. szint
        c.drawImage(disc4,408,220); C oszlop 2. szint
        c.drawImage(disc5,408,240); C oszlop 1. szint
        */
        c.clearRect(48,180,100,20);
        c.drawImage(disc2,228,240);   
    };

    if (counter === 9) {
        c.clearRect(408,240,100,20);
        c.drawImage(disc1,228,220);     

    };

    if (counter === 12) {
        c.clearRect(48,200,100,20);
        c.drawImage(disc3,408,240);     

    };

    if (counter === 14) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc1,48,200);     

    };

    if (counter === 16) {
        c.clearRect(228,240,100,20);
        c.drawImage(disc2,408,220);     

    };

    if (counter === 17) {
        c.clearRect(48,200,100,20);
        c.drawImage(disc1,408,200);     

    };

    if (counter === 21) {
        c.clearRect(48,220,100,20);
        c.drawImage(disc4,228,240);     

    };

    if (counter === 24) {
        c.clearRect(408,200,100,20);
        c.drawImage(disc1,228,220);     

    };

    if (counter === 26) {
        c.clearRect(408,220,100,20);
        c.drawImage(disc2,48,220);     

    };

    if (counter === 27) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc1,48,200);     

    };

    if (counter === 30) {
        c.clearRect(408,240,100,20);
        c.drawImage(disc3,228,220);     

    };

    if (counter === 32) {
        c.clearRect(48,200,100,20);
        c.drawImage(disc1,408,240);   

    };

    if (counter === 34) {
        c.clearRect(48,220,100,20);
        c.drawImage(disc2,228,200);   

    };

    if (counter === 35) {
        c.clearRect(408,240,100,20);
        c.drawImage(disc1,228,180);   

    };

    if (counter === 40) {
        c.clearRect(48,240,100,20);
        c.drawImage(disc5,408,240);   

    };

    if (counter === 44) {
        c.clearRect(228,180,100,20);
        c.drawImage(disc1,48,240);   

    };

    if (counter === 46) {
        c.clearRect(228,200,100,20);
        c.drawImage(disc2,408,220);   

    };

/*     if (counter === 47) {
        c.clearRect(228,200,100,20);
        c.drawImage(disc2,408,220);   

    }; */

    
    if (counter === 47) {
        c.clearRect(48,240,100,20);
        c.drawImage(disc1,408,200);   

    };

    if (counter === 50) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc3,48,240);   

    };

    if (counter === 52) {
        c.clearRect(408,200,100,20);
        c.drawImage(disc1,228,220);   

    };

    if (counter === 54) {
        c.clearRect(408,220,100,20);
        c.drawImage(disc2,48,220);   

    };

    if (counter === 55) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc1,48,200);   

    };

    if (counter === 59) {
        c.clearRect(228,240,100,20);
        c.drawImage(disc4,408,220);   

    };

    if (counter === 62) {
        c.clearRect(48,200,100,20);
        c.drawImage(disc1,408,200);   

    };
    
    if (counter === 64) {
        c.clearRect(48,220,100,20);
        c.drawImage(disc2,228,240);   

    };

    if (counter === 65) {
        c.clearRect(408,200,100,20);
        c.drawImage(disc1,228,220);   

    };

    if (counter === 68) {
        c.clearRect(48,240,100,20);
        c.drawImage(disc3,408,200);   

    };

    if (counter === 70) {
        c.clearRect(228,220,100,20);
        c.drawImage(disc1,48,240);   

    };

    if (counter === 72) {
        c.clearRect(228,240,100,20);
        c.drawImage(disc2,408,180);   

    };

    if (counter === 73) {
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
     if(counter >=74){
        szoveg.innerText = parapa[counter]="A lemezek áthelyezése sikeresen megtörtént!";
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
    document.getElementById("label1").innerHTML = "";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}



//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=73; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
             if(counter >=74){
                szoveg.innerText = parapa[counter]="A lemezek áthelyezése sikeresen megtörtént!";
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