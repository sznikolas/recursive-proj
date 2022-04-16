//első canvas
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
canvas.width = 500;
canvas.height  = 450;

let counter = 1;

let taskComments = ["faktoriális(7) megoldása", 
"rekurzív függvényhívás fakt(7)", 
"rekurzív függvényhívás fakt(6)", 
"rekurzív függvényhívás fakt(5)",
"rekurzív függvényhívás fakt(4)",
"rekurzív függvényhívás fakt(3)",
"rekurzív függvényhívás fakt(2)",
"rekurzív függvényhívás fakt(1)",
"elértük a base case-t",
"visszatérés a rekurzív függvényből",
"visszatérés a rekurzív függvényből",
"visszatérés a rekurzív függvényből",
"visszatérés a rekurzív függvényből",
"visszatérés a rekurzív függvényből",
"visszatérés a rekurzív függvényből",
"visszatérés a rekurzív függvényből",
"visszatértünk a rekurzív hívásokból",

"A 7 faktoriális eredménye: 5040!"];


let buttonState = "START";

let isAllowed = false;

const faktorial0 = new Image();
const faktorial1 = new Image();
const faktorial2 = new Image();
const faktorial3 = new Image();
const faktorial4 = new Image();
const faktorial5 = new Image();
const faktorial6 = new Image();
const faktorial7 = new Image();


faktorial0.src = "images/faktorialis0.png";
faktorial1.src = "images/faktorialis1.png";
faktorial2.src = "images/faktorialis2.png";
faktorial3.src = "images/faktorialis3.png";
faktorial4.src = "images/faktorialis4.png";
faktorial5.src = "images/faktorialis5.png";
faktorial6.src = "images/faktorialis6.png";
faktorial7.src = "images/faktorialis7.png";


//canvas1
let myAnim;


//canvas1
function animate(){
    
    if (counter === 1) {
        c.clearRect(0,0,canvas.height,canvas.width);
        c.drawImage(faktorial7,160,290);
        c.font='normal 20px Lucida Console'; 
        c.fillText("<-- top", 360,315);
        c.fillText("fakt(7) = n x fakt(n - 1)", 100,425);  


    };


    if (counter === 2) {
        c.clearRect(0,0,canvas.height,canvas.width);
    
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);
        
        
        c.fillText("n = 7", 90,275);
        c.fillText("<-- top", 360,275);
        c.fillText("fakt(6) = n x fakt(n - 1)", 100,425);  
	    
    };

    if (counter === 3) {
        c.clearRect(0,0,canvas.height,canvas.width);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);
        //c.font='normal 20px Lucida Console'; 
        
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);
        
    
        c.fillText("<-- top", 360, 235);
        c.fillText("fakt(5) = n x fakt(n - 1)", 100,425);  

    };


    if (counter === 4) {
        c.clearRect(0,0,canvas.height,canvas.width);
  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 195);
        c.fillText("fakt(4) = n x fakt(n - 1)", 100,425);  

    };

    if (counter === 5) {
        c.clearRect(0,0,canvas.height,canvas.width);

        c.drawImage(faktorial3,160,130);  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);

        c.fillText("n = 4", 90, 155);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 155);
        c.fillText("fakt(3) = n x fakt(n - 1)", 100,425);  
  
    };


    if (counter === 6) {
        c.clearRect(0,0,canvas.height,canvas.width);

        c.drawImage(faktorial2,160,90);  
        c.drawImage(faktorial3,160,130);  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);
        

        c.fillText("n = 3", 90, 115);
        c.fillText("n = 4", 90, 155);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 115);
        c.fillText("fakt(2) = n x fakt(n - 1)", 100,425);  

    };

    if (counter === 7) {
        c.clearRect(0,0,canvas.height,canvas.width);

        c.drawImage(faktorial1,160,50);  
        c.drawImage(faktorial2,160,90);  
        c.drawImage(faktorial3,160,130);  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);

        c.fillText("n = 2", 90, 75);
        c.fillText("n = 3", 90, 115);
        c.fillText("n = 4", 90, 155);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 75);
        c.fillText("fakt(1) = n x fakt(n - 1)", 100,425);  

        
    };

    if (counter === 8) {
        c.clearRect(0,0,canvas.height,canvas.width);
	c.drawImage(faktorial0,160,10);
        c.drawImage(faktorial1,160,50);  
        c.drawImage(faktorial2,160,90);  
        c.drawImage(faktorial3,160,130);  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);

        c.fillText("n = 1", 90, 35);
        c.fillText("n = 2", 90, 75);
        c.fillText("n = 3", 90, 115);
        c.fillText("n = 4", 90, 155);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 35);
        c.fillText("if n = 1 return 1", 150,425);  
 
    };

    if (counter === 9) {
        c.clearRect(0,0,canvas.height,canvas.width);
        c.drawImage(faktorial0,160,10);
            c.drawImage(faktorial1,160,50);  
            c.drawImage(faktorial2,160,90);  
            c.drawImage(faktorial3,160,130);  
            c.drawImage(faktorial4,160,170);
            c.drawImage(faktorial5,160,210);
            c.drawImage(faktorial6,160,250);
            c.drawImage(faktorial7,160,290);
    
            c.fillText("n = 1", 90, 35);
            c.fillText("n = 2", 90, 75);
            c.fillText("n = 3", 90, 115);
            c.fillText("n = 4", 90, 155);
            c.fillText("n = 5", 90, 195);
            c.fillText("n = 6", 90, 235);
            c.fillText("n = 7", 90,275);
    
            c.fillText("<-- top", 360, 35);

        //c.fillText("n = fakt(0) = 0 x fakt(- 1) = 0", 75,395);  
        c.fillText("base case reached", 150,425);
 
    };

    if (counter === 10) {
        c.clearRect(0,0,canvas.height,canvas.width);
        c.drawImage(faktorial0,160,10);
            c.drawImage(faktorial1,160,50);  
            c.drawImage(faktorial2,160,90);  
            c.drawImage(faktorial3,160,130);  
            c.drawImage(faktorial4,160,170);
            c.drawImage(faktorial5,160,210);
            c.drawImage(faktorial6,160,250);
            c.drawImage(faktorial7,160,290);
    
            c.fillText("n = 1", 90, 35);
            c.fillText("n = 2", 90, 75);
            c.fillText("n = 3", 90, 115);
            c.fillText("n = 4", 90, 155);
            c.fillText("n = 5", 90, 195);
            c.fillText("n = 6", 90, 235);
            c.fillText("n = 7", 90,275);
    
            c.fillText("<-- top", 360, 35);

        c.fillText("faktoriális(0) = 1", 150,395);  
        c.fillText("return 1 x 1 = 1", 150,425);  
    };

    if (counter === 11) {
        c.clearRect(0,0,canvas.height,canvas.width);

        c.drawImage(faktorial1,160,50);  
        c.drawImage(faktorial2,160,90);  
        c.drawImage(faktorial3,160,130);  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);

        c.fillText("n = 2", 90, 75);
        c.fillText("n = 3", 90, 115);
        c.fillText("n = 4", 90, 155);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 75);
        c.fillText("faktoriális(1) = 1", 150,395);  
        c.fillText("return 2 x 1 = 2", 150,425);
    };

    if (counter === 12) {
        c.clearRect(0,0,canvas.height,canvas.width);

        c.drawImage(faktorial2,160,90);  
        c.drawImage(faktorial3,160,130);  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);
    

        c.fillText("n = 3", 90, 115);
        c.fillText("n = 4", 90, 155);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 115);
        c.fillText("faktoriális(2) = 2", 150,395);  
        c.fillText("return 3 x 2 = 6", 150,425);
    };



    if (counter === 13) {
        c.clearRect(0,0,canvas.height,canvas.width);

        c.drawImage(faktorial3,160,130);  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);

        c.fillText("n = 4", 90, 155);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 155);
        c.fillText("faktoriális(3) = 6", 150,395);  
        c.fillText("return 4 x 6 = 24", 150,425);   
    };

    if (counter === 14) {
        c.clearRect(0,0,canvas.height,canvas.width);
  
        c.drawImage(faktorial4,160,170);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);
        c.fillText("n = 5", 90, 195);
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);

        c.fillText("<-- top", 360, 195);
        c.fillText("faktoriális(4) = 24", 150,395);  
        c.fillText("return 5 x 24 = 120", 150,425);
    };

    if (counter === 15) {
        c.clearRect(0,0,canvas.height,canvas.width);
        c.drawImage(faktorial5,160,210);
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);
     
        
        c.fillText("n = 6", 90, 235);
        c.fillText("n = 7", 90,275);
        
    
        c.fillText("<-- top", 360, 235);
        c.fillText("faktoriális(5) = 120", 150,395);  
        c.fillText("return 6 x 120 = 720", 150,425);
    };


    if (counter === 16) {
        c.clearRect(0,0,canvas.height,canvas.width);
    
        c.drawImage(faktorial6,160,250);
        c.drawImage(faktorial7,160,290);
        
        
        c.fillText("n = 7", 90,275);
        c.fillText("<-- top", 360,275); 
        c.fillText("faktoriális(6) = 720", 150,395);  
        c.fillText("return 7 x 720 = 5040", 150,425);
    };

    if (counter === 17) {
        c.clearRect(0,0,canvas.height,canvas.width);
        c.drawImage(faktorial7,160,290);
        
        c.fillText("faktoriális(7) = 5040", 150,425);    
    };

    if (counter === 18) {
        c.clearRect(0,0,canvas.height,canvas.width);
        c.drawImage(faktorial7,160,290);
        c.fillText("faktoriális(7) = 5040", 150,425);

    };
    
    myAnim = requestAnimationFrame(animate); 
}
myAnim = requestAnimationFrame(animate);
//animate();


//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = taskComments[counter];   
    counter++; 
     if(counter >=18){
        szoveg.innerText = taskComments[counter]="A 7 faktoriális eredménye: 5040!";
    }  
}


//Canvas 1 reset
document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height); 
        c.drawImage(faktorial7,160,290);
        c.font='normal 20px Lucida Console'; 
        c.fillText("<-- top", 360,315);

    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "faktoriális(7) megoldása";
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
                szoveg.innerText = taskComments[counter];  
                //c.drawImage(rat,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
             if(counter >=18){
                szoveg.innerText = taskComments[counter]="A 7 faktoriális eredménye: 5040!";
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


