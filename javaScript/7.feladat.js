//első canvas
let canvas = document.getElementById('canvas7');
let c = canvas.getContext('2d');
canvas.width = 480;//900 a pszeudoval
canvas.height  = 610;


let parapa = [
"Quicksort",
"pivot -> utolsó elem, J = arr[0], I = arr[-1]", 
"arr[J] > pivot, J++", 
"arr[J] > pivot, J++", 
"arr[J] > pivot, J++",
"arr[J] < pivot, I++", 
"arr[I] csere arr[J]", 
"J++", 
"arr[J] < pivot, I++", 
"arr[I] csere arr[J]",
"J++", 
"arr[J] > pivot, J++", 
"J = arr[high] ezért kilépünk a ciklusból", 
"arr[I+1] csere pivot", 
"A 2-es a helyére került",

"quicksortot a bal felén", 
"arr[J] <= arr[high-1]", 
"arr[I+1] csere pivot", 
"arr[I+1] csere pivot", 
"A 0 a helyére került",
"Az 1-es a helyére került", 


"quicksortot a jobb felén", 
"arr[J] > pivot, J++", 
"arr[J] > pivot, J++", 
"arr[J] > pivot, J++",
"J = arr[high] ezért kilépünk a ciklusból", 
"arr[I+1] csere pivot", 
"A 6-os a helyére került", 


"quicksortot a jobb felén", 
"arr[J] < pivot, I++", 
"arr[I] csere arr[J]", 
"J++", 

"arr[J] > pivot, J++", 
"J = arr[high] ezért kilépünk a ciklusból", 
"arr[I+1] csere pivot",
"A 8-as a helyére került", 
"A 7-es és a 9-es a helyére került", 


"A sorbarendezés sikeresen megtörtént!"];

let counter = 1;
let counterBack = 38;
let pszeudo=0;
let buttonState = "START";
let isAllowed = false;
let szoveg = document.getElementById('label1');

// int arr[] = { 3, 5, 8, 4, 1, 9, -2 };
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
const pszeudoNyil = new Image();
const I = new Image();
const J = new Image();




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
pszeudoNyil.src = "images/pszeudoNyil.png";
I.src = "images/I.png";
J.src = "images/J.png";




let myAnim;


function animate(){
    //00
    if (counter === 1) {
        
        c.drawImage(quick8,80,80);
        
        c.drawImage(quick7,130,80);
        c.drawImage(quick6,180,80);
        c.drawImage(quick1,230,80);
        c.drawImage(quick0,280,80);
        c.drawImage(quick9,330,80);
        c.drawImage(quick2,380,80);

        //c.drawImage(pszeudoNyil, 490,115); //1    1
        //c.clearRect(490,115,40,30);//1

        //c.drawImage(pszeudoNyil, 490,170);//2    2
        //c.clearRect(490,170,40,30);//2

        //c.drawImage(pszeudoNyil, 490,230);//3    3
        //c.clearRect(490,230,40,30);//3

        //c.drawImage(pszeudoNyil, 490,290);//4    4
        //c.clearRect(490,290,40,30);//4

        //c.drawImage(pszeudoNyil, 490,345);//4    5
        //c.clearRect(490,345,40,30);//5

        //c.drawImage(pszeudoNyil, 490,410);//6    6
        //c.clearRect(490,410,40,30);//6

    };

    if (counter === 2) {
        
        c.drawImage(pivot,370,40);
        
        

        c.drawImage(J,90,50);
        c.drawImage(I,50,50);
        c.clearRect(490,115,40,30);
        

    };

    if (counter === 3) {
        
        /* c.drawImage(J,90,50);
        c.drawImage(I,40,50);
        c.clearRect(490,115,40,30);
        c.drawImage(pszeudoNyil, 490,170); */
    };

    if (counter === 4) {
        
        c.drawImage(J,140,50);
        c.clearRect(90,50,40,30);
        

    };
    
    if (counter === 5) {
        c.clearRect(140,55,20,20);
        c.drawImage(J,190,50);

    };

    if (counter === 6) {
        c.clearRect(190,55,20,20);
        c.drawImage(J,240,50);

        

    };



    if (counter === 7) {
        c.drawImage(I,90,50);
        c.clearRect(50,50,40,30);

        c.clearRect(490,230,40,30);//3
        

        c.drawImage(csere,220,25);

    };

    if (counter === 8) {
        


        c.clearRect(220,25,60,20);
        c.clearRect(80,80,40,40);
        c.clearRect(230,80,40,40);
        c.drawImage(quick1,80,80);
        c.drawImage(quick8,230,80);
        

    };

    if (counter === 9) {
        c.clearRect(490,290,40,30);//4
        

        
        c.clearRect(240,55,20,20);
  
        
        c.drawImage(J,290,50);  

    };

    if (counter === 10) {
        c.clearRect(90,40,20,40);
        c.drawImage(I,140,50);
        c.drawImage(csere,220,25);

    };

    if (counter === 11) {
        c.clearRect(220,25,60,20);
        c.drawImage(quick0,130,80);
        c.drawImage(quick7,280,80);

    };

    if (counter === 12) {

        
        c.clearRect(290,55,20,20);
      
        c.drawImage(J,340,50);  

    };




    if (counter === 13) {

        
        
        c.clearRect(340,55,20,20);

    };

    if (counter === 14) {
        
        c.drawImage(csere,220,25);

    };

    if (counter === 15) {
        c.clearRect(140,40,20,40);
        
        c.clearRect(220,25,60,20);
        c.clearRect(340,55,20,20);
        c.drawImage(quick2,180,80);
        c.drawImage(quick6,380,80); 

        c.clearRect(190,40,20,40);
        c.clearRect(370,40,60,40);
        c.drawImage(pivot,170,40); 

    };

    if (counter === 16) {

        c.drawImage(quick1,80,200);
        c.drawImage(quick0,130,200); 
        c.drawImage(pivot,120,160); 


        
        /* c.drawImage(quick8,230,200);
        c.drawImage(quick7,280,200); 
        c.drawImage(quick9,330,200);
        c.drawImage(quick6,380,200); 
        c.drawImage(pivot,370,160);  */

    };

    if (counter === 17) {
        
        c.drawImage(J,90,170);
        c.drawImage(I,50,170);

        //c.drawImage(pointer2,240,160);

    };

    if (counter === 18) {
        
        c.clearRect(90,170,20,30);
        

    };

    if (counter === 19) {
        c.drawImage(csere,100,140);
        
        

    };

    if (counter === 20) {

        c.clearRect(50,170,20,30);

        c.clearRect(100,140,60,20);
        c.drawImage(quick1,130,200);
        c.drawImage(quick0,80,200); 
        c.clearRect(90,160,20,40);
        c.clearRect(120,160,60,40);
        c.drawImage(pivot,70,160); 

    };

    if (counter === 21) {
        
        c.drawImage(quick1,130,320);
        //c.drawImage(pivot,120,280); 
       

    };

    if (counter === 22) {
        
        c.drawImage(quick8,230,200);
        c.drawImage(quick7,280,200); 
        c.drawImage(quick9,330,200);
        c.drawImage(quick6,380,200); 
        c.drawImage(pivot,370,160); 

    };

    if (counter === 23) {
        
        c.drawImage(J,240,170);
        c.drawImage(I,200,170);
       

    };

    if (counter === 24) {

        c.clearRect(240,170,20,30);
        c.drawImage(J,290,170);
       

    };

    if (counter === 25) {
        c.clearRect(290,175,20,20);
        c.drawImage(J,340,170);
       

    };

    if (counter === 26) {
        c.clearRect(340,175,20,20);
          

    };

    if (counter === 27) {
        
        c.drawImage(csere,300,140);

    };

    if (counter === 28) {

        c.clearRect(200,170,20,30);

        c.clearRect(300,140,60,20);
        
        c.clearRect(370,160,60,40);

        c.drawImage(quick6,230,200);
        c.drawImage(quick8,380,200); 

        c.clearRect(240,160,20,40);
        c.drawImage(pivot,220,160); 

    };

    if (counter === 29) {
        c.drawImage(quick7,280,320); 
        c.drawImage(quick9,330,320);
        c.drawImage(quick8,380,320); 
        c.drawImage(pivot,370,280);
          
    };

    if (counter === 30) {
        
        
        c.drawImage(J,290,290);
        c.drawImage(I,250,290);
        
          
    };



    if (counter === 31) {
        c.clearRect(250,290,20,30);
        c.drawImage(I,280,290);
        c.drawImage(csere,320,260);
          
    };

    if (counter === 32) {
        
        c.clearRect(320,260,60,20);
        
          
    };

    if (counter === 33) {
    
        c.clearRect(290,290,20,30);
        c.drawImage(J,340,290);
    };

    if (counter === 34) {
        c.clearRect(340,290,20,30);
        
    }

    if (counter === 35) {
        c.drawImage(csere,320,260);
        
     
        
 /*        c.clearRect(320,260,60,20);
        c.clearRect(290,280,20,40);
        c.clearRect(370,280,60,40);
        c.drawImage(pivot,320,280);
        c.drawImage(quick9,380,320);
        c.drawImage(quick8,330,320);  */

    };
    if (counter === 36) {
        c.clearRect(280,290,20,30);
       
        c.clearRect(320,260,60,20);

        c.clearRect(290,280,20,40);
        c.clearRect(370,280,60,40);
        c.drawImage(pivot,320,280);
        c.drawImage(quick9,380,320);
        c.drawImage(quick8,330,320); 

    };

    if (counter === 37) {
        c.clearRect(320,260,60,20);
        c.drawImage(quick7,280,440);
        c.drawImage(quick9,380,440); 

    };
/*     if (counter === 39) {
        c.drawImage(pivot,270,400);
        c.drawImage(pivot,370,400); 

    }; */


    if (counter === 38) {
        c.drawImage(quick0,80,560);
        c.drawImage(quick1,130,560);
        c.drawImage(quick2,180,560);
        c.drawImage(quick6,230,560);
        c.drawImage(quick7,280,560);
        c.drawImage(quick8,330,560);
        c.drawImage(quick9,380,560);

    };

    myAnim = requestAnimationFrame(animate); 
}

myAnim = requestAnimationFrame(animate);
animate();



//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){  
    pszeudo++;
    szoveg.innerText = parapa[pszeudo]; 
    counter++; 
    if(pszeudo >=38){
        szoveg.innerText = parapa[pszeudo]="A sorbarendezés sikeresen megtörtént!";
    } 

}


/* document.getElementById('stepPrev').onclick = function(){
    counter--;  
    counterBack--;  
    pszeudo--;
    szoveg.innerText = parapa[pszeudo]; 
     
} */

document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
        c.drawImage(quick8,80,80);  
        c.drawImage(quick7,130,80);
        c.drawImage(quick2,180,80);
        c.drawImage(quick1,230,80);
        c.drawImage(quick0,280,80);
        c.drawImage(quick9,330,80);
        c.drawImage(quick6,380,80);

    counter = 1;
    pszeudo=0
    //label resetelese
    document.getElementById("label1").innerHTML = "Quicksort";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}

//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=38; x++){
            if(isAllowed){
                pszeudo++;           
                szoveg.innerText = parapa[pszeudo];                 
                counter++;
                await sleep(1000/slider.value);       
            }
             if(pszeudo >=38){
                szoveg.innerText = parapa[pszeudo]="A sorbarendezés sikeresen megtörtént!";
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