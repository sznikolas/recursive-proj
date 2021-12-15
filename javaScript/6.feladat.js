//első canvas
let canvas = document.getElementById('canvas6');
let c = canvas.getContext('2d');
canvas.width = 500;
canvas.height  = 610;


let parapa = ["", "2. lépés: ", "3. lépés: ", "4. lépés: ","5. lépés: ","6. lépés: ","7. lépés: ","8. lépés: ",
"9. lépés: ","10. lépés: ","11. lépés: ","12. lépés: ","13. lépés: ","14. lépés: ","15. lépés: ","16. lépés: ","17. lépés: ",
"18. lépés: ","19. lépés: ","20. lépés: ","21. lépés: ","22. lépés: ",

"23. lépés: ","24. lépés: ","25. lépés: ",
"26. lépés: ",
"27. lépés: ", "29. lépés: ", "30. lépés: ","31. lépés: ",
"32. lépés: ","33. lépés: ","34. lépés: ","35. lépés: ","36. lépés: ","37. lépés: ","38. lépés: A sorbarendezés sikeres"];

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
        szoveg.innerText = parapa[counter]="38. lépés: A sorbarendezés sikeres";
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
        c.drawImage(quick8,80,80);  
        c.drawImage(quick7,130,80);
        c.drawImage(quick2,180,80);
        c.drawImage(quick1,230,80);
        c.drawImage(quick0,280,80);
        c.drawImage(quick9,330,80);
        c.drawImage(quick6,380,80);

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
                szoveg.innerText = parapa[counter]="38. lépés: A sorbarendezés sikeres";
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