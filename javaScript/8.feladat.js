//első canvas
let canvas = document.getElementById('canvas9');
let c = canvas.getContext('2d');
canvas.width = 500;
canvas.height  = 300;

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
"18. lépés: ",
"19. lépés: ",
"20. lépés: ",
"21. lépés: ",
"22. lépés: ",
"23. lépés: ",
"24. lépés: ",
"25. lépés: ",
"26. lépés: ",
"27. lépés: ", 
"29. lépés: ", 
"30. lépés: ",
"31. lépés: ",
"32. lépés: ",
"33. lépés: ",
"34. lépés: ", 
"35. lépés: ", 
"36. lépés: ",
"37. lépés: ",
"A sorbarendezés sikeresen megtörtént!"];

let counter = 1;
let buttonState = "START";
let isAllowed = false;

// int arr[] = { 3, 5, 8, 4, 1, 9, -2 };
const bubble1 = new Image();
const bubble2 = new Image();
const bubble3 = new Image();
const bubble4 = new Image();
const bubble5 = new Image();
const bubble8 = new Image();
const bubble9 = new Image();
const bubble10 = new Image();


const bubblee = new Image();

bubble1.src = "images/bubble1.png";
bubble2.src = "images/bubble2.png";
bubble3.src = "images/bubble3.png";
bubble4.src = "images/bubble4.png";
bubble5.src = "images/bubble5.png";
bubble8.src = "images/bubble8.png";
bubble9.src = "images/bubble9.png";
bubble10.src = "images/bubble10.png";
bubblee.src = "images/bubblee.png";




let myAnim;


function animate(){
    //00
    if (counter === 1) {
        
        c.drawImage(bubble10,80,80); 
        c.drawImage(bubble5,130,80);
        c.drawImage(bubble8,180,80);
        c.drawImage(bubble4,230,80);
        c.drawImage(bubble1,280,80);
        c.drawImage(bubble9,330,80);
        c.drawImage(bubble3,380,80); 

    

    };

    if (counter === 2) {


        c.drawImage(bubblee,95,50);
/*       c.drawImage(bubblee,145,50);   2
        c.drawImage(bubblee,195,50);    3
        c.drawImage(bubblee,245,50);    4
        c.drawImage(bubblee,295,50);    5
        c.drawImage(bubblee,345,50);    6 
        */

    };

    if (counter === 3) {
        c.clearRect(80,80,40,200);
        c.clearRect(13,80,40,200);
        c.drawImage(bubble10,130,80); 
        c.drawImage(bubble5,80,80);
        

    };

    if (counter === 4) {
        c.clearRect(95,50,60,30);
        c.drawImage(bubblee,145,50); 

    };

    if (counter === 5) {
        c.clearRect(180,80,40,200);
        c.clearRect(130,80,40,200);
        c.drawImage(bubble10,180,80); 
        c.drawImage(bubble8,130,80);
        
    };

    if (counter === 6) {
        c.clearRect(145,50,60,30);
        c.drawImage(bubblee,195,50);      

    };

    if (counter === 7) {
        c.clearRect(180,80,40,200);
        c.clearRect(230,80,40,200);
        c.drawImage(bubble4,180,80); 
        c.drawImage(bubble10,230,80);

    };

    if (counter === 8) {
        c.clearRect(195,50,60,30);
        c.drawImage(bubblee,245,50);       

    };

    if (counter === 9) {
        c.clearRect(280,80,40,200);
        c.clearRect(230,80,40,200);
        c.drawImage(bubble1,230,80); 
        c.drawImage(bubble10,280,80);  
        
    };

    if (counter === 10) {
        c.clearRect(245,50,60,30);
        c.drawImage(bubblee,295,50);       

    };

    if (counter === 11) {
        c.clearRect(280,80,40,200);
        c.clearRect(330,80,40,200);
        c.drawImage(bubble10,330,80); 
        c.drawImage(bubble9,280,80);   

    };

    if (counter === 12) {
        c.clearRect(295,50,60,30);
        c.drawImage(bubblee,345,50);       

    };

    if (counter === 13) {
        c.clearRect(380,80,40,200);
        c.clearRect(330,80,40,200);
        c.drawImage(bubble10,380,80); 
        c.drawImage(bubble3,330,80);   

    };

    if (counter === 14) {
        c.clearRect(345,50,60,30);
        c.drawImage(bubblee,95,50);       

    };

    if (counter === 15) {
        c.clearRect(95,50,60,30);
        c.drawImage(bubblee,145,50);    

    };

    if (counter === 16) {
        c.clearRect(180,80,40,200);
        c.clearRect(130,80,40,200);
        c.drawImage(bubble8,180,80); 
        c.drawImage(bubble4,130,80);      

    };

    if (counter === 17) {
        c.clearRect(145,50,60,30);
        c.drawImage(bubblee,195,50);    

    };

    if (counter === 18) {
        c.clearRect(180,80,40,200);
        c.clearRect(230,80,40,200);
        c.drawImage(bubble8,230,80); 
        c.drawImage(bubble1,180,80);      

    };

    if (counter === 19) {
        c.clearRect(195,50,60,30);
        c.drawImage(bubblee,245,50);    

    };

    if (counter === 20) {
        c.clearRect(245,50,60,30);
        c.drawImage(bubblee,295,50);    

    };

    if (counter === 21) {
        c.clearRect(280,80,40,200);
        c.clearRect(330,80,40,200);
        c.drawImage(bubble9,330,80); 
        c.drawImage(bubble3,280,80);      

    };

    if (counter === 22) {
        c.clearRect(295,50,60,30);
        c.drawImage(bubblee,95,50);    

    };

    if (counter === 23) {
        c.clearRect(80,80,40,200);
        c.clearRect(130,80,40,200);
        c.drawImage(bubble5,130,80); 
        c.drawImage(bubble4,80,80);      

    };

    if (counter === 24) {
        c.clearRect(95,50,60,30);
        c.drawImage(bubblee,145,50);    

    };

    if (counter === 25) {
        c.clearRect(180,80,40,200);
        c.clearRect(130,80,40,200);
        c.drawImage(bubble5,180,80); 
        c.drawImage(bubble1,130,80);      

    };

    if (counter === 26) {
        c.clearRect(145,50,60,30);
        c.drawImage(bubblee,195,50);    

    };

    if (counter === 27) {
        c.clearRect(195,50,60,30);
        c.drawImage(bubblee,245,50);    

    };

    if (counter === 28) {
        c.clearRect(280,80,40,200);
        c.clearRect(230,80,40,200);
        c.drawImage(bubble8,280,80); 
        c.drawImage(bubble3,230,80);      

    };

    if (counter === 29) {
        c.clearRect(245,50,60,30);
        c.drawImage(bubblee,95,50);    

    };

    if (counter === 30) {
        c.clearRect(80,80,40,200);
        c.clearRect(130,80,40,200);
        c.drawImage(bubble1,80,80); 
        c.drawImage(bubble4,130,80);      

    };

    if (counter === 31) {
        c.clearRect(95,50,60,30);
        c.drawImage(bubblee,145,50);    

    };

    if (counter === 32) {
        c.clearRect(145,50,60,30);
        c.drawImage(bubblee,195,50);    

    };

    if (counter === 33) {
        c.clearRect(180,80,40,200);
        c.clearRect(230,80,40,200);
        c.drawImage(bubble5,230,80); 
        c.drawImage(bubble3,180,80);     

    };

    if (counter === 34) {
        c.clearRect(195,50,60,30);
        c.drawImage(bubblee,95,50);    

    };

    if (counter === 35) {
        c.clearRect(95,50,60,30);
        c.drawImage(bubblee,145,50);    

    };

    if (counter === 36) {
        c.clearRect(180,80,40,200);
        c.clearRect(130,80,40,200);
        c.drawImage(bubble4,180,80); 
        c.drawImage(bubble3,130,80);     

    };

    if (counter === 37) {
        c.clearRect(145,50,60,30);
        c.drawImage(bubblee,95,50);    

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
     if(counter >=37){
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
    c.drawImage(bubble10,80,80); 
    c.drawImage(bubble5,130,80);
    c.drawImage(bubble8,180,80);
    c.drawImage(bubble4,230,80);
    c.drawImage(bubble1,280,80);
    c.drawImage(bubble9,330,80);
    c.drawImage(bubble3,380,80);

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
        for(var x = 0; x<=37; x++){
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
             if(counter >=37){
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