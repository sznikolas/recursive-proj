//első canvas
let canvas = document.getElementById('canvas6');
let c = canvas.getContext('2d');
canvas.width = 500;
canvas.height  = 650;


let parapa = ["", 
"m = l + (r - l) / 2", 
"Keressük meg a tömbök középpontját és osszuk két részre", 
"m = l + (r - l) / 2", 
"Keressük meg a tömbök középpontját és osszuk két részre", 
"m = l + (r - l) / 2", 

"Miután a tömböt a legkisebb egységekre osztottuk, az elemek összehasonlítása alapján megkezdődik az összefésülés",
"8 > 7",
"Rendezve összefésüljük",
"Rendezve összefésüljük",
"6 > 1",
"Rendezve összefésüljük",
"Rendezve összefésüljük",
"0 < 9",
"Rendezve összefésüljük",
"Rendezve összefésüljük",
"A  2-es egyedülálló elem, ezért változatlanul hagyjuk",

"A tömb elemeinek összehasonlítása alapján megkezdődik az összefésülés",
"7 > 1, rendezve összefésüljük",
"7 > 6, rendezve összefésüljük",
"7 < 8, rendezve összefésüljük",
"Rendezve összefésüljük",


"0 < 2, rendezve összefésüljük",
"9 > 2, rendezve összefésüljük",
"Rendezve összefésüljük",


"A tömb elemeinek összehasonlítása alapján megkezdődik az összefésülés",
"1 > 0, rendezve összefésüljük",
"1 < 2, rendezve összefésüljük", 
"6 > 2, rendezve összefésüljük", 
"6 < 9, rendezve összefésüljük",
"7 < 9, rendezve összefésüljük",
"8 < 9, rendezve összefésüljük",
"Rendezve összefésüljük",

"1 > 0, rendezve összefésüljük",
"1 < 2, rendezve összefésüljük", 
"6 > 2, rendezve összefésüljük", 
"6 < 9, rendezve összefésüljük",
"7 < 9, rendezve összefésüljük",
"8 < 9, rendezve összefésüljük",
"7 < 9, rendezve összefésüljük",
"8 < 9, rendezve összefésüljük",
"adasdasdasdasd",
"8 < 9, rendezve összefésüljük",


"A sorbarendezés sikeresen megtörtént!"];

let counter = 1;
let buttonState = "START";
let isAllowed = false;


const quick0 = new Image();
const quick1 = new Image();
const quick2 = new Image();
const quick6 = new Image();
const quick7 = new Image();
const quick8 = new Image();
const quick9 = new Image();
const pivot = new Image();
const pointer1 = new Image();
const pointer2 = new Image();
const csere = new Image();
const felosztas1 = new Image();
const felosztas2 = new Image();
const felosztas3 = new Image();
const felosztas4 = new Image();
const felosztas5 = new Image();




quick0.src = "images/quick0.png";
quick1.src = "images/quick1.png";
quick2.src = "images/quick2.png";
quick6.src = "images/quick6.png";
quick7.src = "images/quick7.png";
quick8.src = "images/quick8.png";
quick9.src = "images/quick9.png";
pivot.src = "images/pivot.png";
pointer1.src = "images/pointer1.png";
pointer2.src = "images/pointer2.png";
csere.src = "images/csere.png";
felosztas1.src = "images/felosztas1.png";
felosztas2.src = "images/felosztas2.png";
felosztas3.src = "images/felosztas3.png";
felosztas4.src = "images/felosztas4.png";
felosztas5.src = "images/felosztas5.png";




let myAnim;


function animate(){
    //00
    if (counter === 1) {       
        c.drawImage(quick8,110,80);  
        c.drawImage(quick7,150,80);
        c.drawImage(quick6,190,80);
        c.drawImage(quick1,230,80);

        c.drawImage(quick0,270,80);
        c.drawImage(quick9,310,80);
        c.drawImage(quick2,350,80);
    };

    if (counter === 2) {
        c.drawImage(felosztas1,100,125);
    };

    if (counter === 3) { 
        c.drawImage(quick8,90,160);  
        c.drawImage(quick7,130,160);
        c.drawImage(quick6,170,160);
        c.drawImage(quick1,210,160);
    };

    if (counter === 4) {
        c.drawImage(felosztas2,83,200);
    };

    if (counter === 5) {  
        c.drawImage(quick8,40,240);  
        c.drawImage(quick7,80,240);
    };

    if (counter === 6) {
        c.drawImage(felosztas3,32,280);
    };

    if (counter === 7) {
        c.drawImage(quick8,35,320);
        c.drawImage(quick7,85,320);
    };

    if (counter === 8) {    
        c.drawImage(pointer1,45,300);
        c.drawImage(pointer1,95,300);
    };

    if (counter === 9) {    
        c.drawImage(quick7,40,400);
        c.clearRect(95,300,20,20);
    };

    if (counter === 10) {
        c.drawImage(quick8,80,400);
        c.clearRect(45,300,20,20);
    };

    if (counter === 11) {
        c.drawImage(quick6,160,240);
        c.drawImage(quick1,200,240); 
    };

    if (counter === 12) {
        c.drawImage(felosztas3,152,280);
    };

    if (counter === 13) {
        c.drawImage(quick6,155,320);
        c.drawImage(quick1,205,320);
    };

    if (counter === 14) {    
        c.drawImage(pointer1,165,300);
        c.drawImage(pointer1,215,300);
    };

    if (counter === 15) {
        c.drawImage(quick1,160,400);
        c.clearRect(215,300,20,20);
    };

    if (counter === 16) {
        c.drawImage(quick6,200,400);
        c.clearRect(165,300,20,20);
    };

    if (counter === 17) {    
        c.drawImage(pointer1,170,380);
        c.drawImage(pointer1,50,380);
    };

    if (counter === 18) {   
        c.drawImage(quick1,90,480);
        c.clearRect(170,380,20,20);
        c.drawImage(pointer1,210,380);
    };    

    if (counter === 19) {
        c.drawImage(quick6,130,480);
        c.clearRect(210,380,20,20);
        c.drawImage(pointer1,90,380);
    };    
    
    if (counter === 20) {
        c.drawImage(quick7,170,480);
        c.clearRect(50,380,20,20);
    };    
    
    if (counter === 21) {
        c.drawImage(quick8,210,480);
        c.clearRect(90,380,20,20);
    };

    if (counter === 22) {
        c.drawImage(quick0,290,160);
        c.drawImage(quick9,330,160);
        c.drawImage(quick2,370,160);
    };

    if (counter === 23) {
        c.drawImage(felosztas4,285,200);
    };

    if (counter === 24) {    
        c.drawImage(quick0,300,240);
        c.drawImage(quick9,340,240);
    };

    if (counter === 25) {    
        c.drawImage(felosztas3,292,280);
    };

    if (counter === 26) {    
        c.drawImage(quick0,295,320);
        c.drawImage(quick9,345,320);
    };

    if (counter === 27) {    
        c.drawImage(pointer1,305,300);
        c.drawImage(pointer1,355,300);
    };

    if (counter === 28) {
        c.drawImage(quick0,300,400);
        c.clearRect(305,300,20,20);
    };

    if (counter === 29) {
        c.drawImage(quick9,340,400);
        c.clearRect(355,300,20,20);
    };

    if (counter === 30) {    
      
        c.drawImage(quick2,420,240);
    };

    if (counter === 31) {
        c.drawImage(felosztas5,419,280);
    };

    if (counter === 32) {
        c.drawImage(quick2,420,400);
    };

    if (counter === 33) {    
        c.drawImage(pointer1,310,380);
        c.drawImage(pointer1,430,380);
    };
    
    if (counter === 34) {
        c.drawImage(quick0,290,480);
        c.clearRect(310,380,20,20);
        c.drawImage(pointer1,350,380);
    };    
    
    if (counter === 35) {
        c.drawImage(quick2,330,480);
        c.clearRect(430,380,20,20);
    };    
    
    if (counter === 36) {
        c.drawImage(quick9,370,480);
        c.clearRect(350,380,20,20);
    };

    if (counter === 37) {    
        c.drawImage(pointer1,100,460);
        c.drawImage(pointer1,300,460);
    };

    if (counter === 38) {   
        c.drawImage(quick0,120,560);
        c.clearRect(300,460,20,20);
        c.drawImage(pointer1,340,460);
    };

    if (counter === 39) {
        c.drawImage(quick1,160,560);
        c.clearRect(100,460,20,20);
        c.drawImage(pointer1,140,460);
    };

    if (counter === 40) {
        c.drawImage(quick2,200,560);
        c.clearRect(340,460,20,20);
        c.drawImage(pointer1,380,460);
    };

    if (counter === 41) {
        c.drawImage(quick6,240,560);
        c.clearRect(140,460,20,20);
        c.drawImage(pointer1,180,460);
    };

    if (counter === 42) {
        c.drawImage(quick7,280,560);
        c.clearRect(180,460,20,20);
        c.drawImage(pointer1,220,460);
    };

    if (counter === 43) {
        c.drawImage(quick8,320,560);
        c.clearRect(220,460,20,20);
    };

    if (counter === 44) {
        c.drawImage(quick9,360,560);
        c.clearRect(380,460,20,20);
    };


    myAnim = requestAnimationFrame(animate); 
}

myAnim = requestAnimationFrame(animate);
animate();



//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = parapa[counter];   

    counter++; 
     if(counter >=44){
        szoveg.innerText = parapa[counter]="A sorbarendezés sikeresen megtörtént!";
    }  
}


/* document.getElementById('stepPrev').onclick = function(){
    c.beginPath();  
    c.clearRect(corX[counter],corY[counter],90, 90);
    c.stroke();
    c.closePath();
    counter--;
} */

document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(quick8,110,80);  
    c.drawImage(quick7,150,80);
    c.drawImage(quick6,190,80);
    c.drawImage(quick1,230,80);

    c.drawImage(quick0,270,80);
    c.drawImage(quick9,310,80);
    c.drawImage(quick2,350,80);

    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "Keressük meg a tömb középpontját és osszuk két részre";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}

//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=43; x++){
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
             if(counter >=44){
                szoveg.innerText = parapa[counter]="A sorbarendezés sikeresen megtörtént!";
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