//első canvas
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
canvas.width = 550;
canvas.height  = 550;

let counter = 0;

let parapa = ["asd", 
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
"visszatértünk a rekurzív hívásokból",

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
        c.fillText("hello", 90,110);
       

    };

    if (counter === 1) {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.font='normal 30px Lucida Console'; 

        c.fillStyle = "black";
        c.fillText("szudoku", 90,110);
       

    };
  
    myAnim = requestAnimationFrame(animate); 
};

myAnim = requestAnimationFrame(animate);

//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = parapa[counter];   
    counter++; 
     if(counter >=19){
        szoveg.innerText = parapa[counter]="A karakterláncot sikeresen megfordítottuk!";
    }  
}


document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width,canvas.height);
        
    counter = 0;
    //label resetelese
    document.getElementById("label1").innerHTML = "asd";
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