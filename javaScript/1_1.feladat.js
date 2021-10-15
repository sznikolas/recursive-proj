let canvas = document.getElementById('canvas1_1');
let c = canvas.getContext('2d');
canvas.width = 450;
canvas.height  = 450;

let counter = 1;

let parapa = ["", "2. lépés: előre", "3. lépés: előre", "4. lépés: előre","5. lépés: előre","6. lépés: előre","7. lépés: előre","8. lépés: előre",
"9. lépés: előre","10. lépés: előre","11. lépés: előre","12. lépés: előre","13. lépés: előre","14. lépés: előre","15. lépés: előre","16. lépés: előre","17. lépés: előre",
"18. lépés: előre","19. lépés: előre","20. lépés: előre","21. lépés: előre","22. lépés: előre",

"23. lépés: nincs bejárható megoldás, ezért BACKTRACKING az előző elágazásig","24. lépés: backtracking, megtaláltuk az elágazást","25. lépés: előre",
"26. lépés: nincs bejárható megoldás, ezért BACKTRACKING az előző elágazásig, ami még nem volt",
"27. lépés: backtracking", "28. lépés: backtracking", "29. lépés: backtracking", "30. lépés: backtracking","31. lépés: backtracking",
"32. lépés: backtracking, megtaláltuk az elágazást","33. lépés: előre","34. lépés: nincs bejárható megoldás, ezért BACKTRACKING az előző elágazásig","35. lépés: backtracking",
"36. lépés: backtracking",




"37. lépés: backtracking, megtaláltuk az elágazást","38. lépés: előre",
"39. lépés: előre","40. lépés: előre",
"41. lépés: nincs bejárható megoldás, ezért BACKTRACKING az előző elágazásig, ami még nem volt","42. lépés: backtracking, megtaláltuk az elágazást","43. lépés: előre",
"44. lépés: előre","45. lépés: előre",
"46. lépés: nincs bejárható megoldás, ezért BACKTRACKING az előző elágazásig, ami még nem volt","47. lépés: backtracking",
"48. lépés: backtracking","49. lépés: backtracking","50. lépés: backtracking","51. lépés: backtracking,megtaláltuk az elágazást","52. lépés: előre",
"53. lépés: előre","54. lépés: előre","55. lépés: előre","56. lépés: előre","57. lépés: a huszár körbejárta a pályát!"];


let buttonState = "START";


let isAllowed = false;
const knight = new Image();
knight.src = "images/knight8.png";
let myAnim;

function animate(){
    c.fillStyle = 'rgb(62, 96, 150)';


    //0
    if (counter === 1) {
        c.drawImage(knight,0,0);

    };
    //1
    if (counter === 2) {
        c.drawImage(knight,90,180);
        c.fillRect(5,5,80,80);

    };

    //2
    if (counter === 3) {
        c.drawImage(knight,180,360);
        c.fillRect(90+5,180+5,90-10,90-10);

    };

    //3
    if (counter === 4) {
        c.drawImage(knight,360,270);
        c.fillRect(180+5,360+5,90-10,90-10);

    };

    //4
    if (counter === 5) {
        c.drawImage(knight,270,90);
        c.fillRect(360+5,270+5,90-10,90-10);
    };

    //5
    if (counter === 6) {
        c.drawImage(knight,90,0);
        c.fillRect(270+5,90+5,90-10,90-10);
    };

    //6
    if (counter === 7) {
        c.drawImage(knight,180,180);
        c.fillRect(90+5,0+5,90-10,90-10);
    };

    //7
    if (counter === 8) {
        c.drawImage(knight,0,270);
        c.fillRect(180+5,180+5,90-10,90-10);
    };

    //8
    if (counter === 9) {
        c.drawImage(knight,90,90);
        c.fillRect(0+5,270+5,90-10,90-10);
    };

    //9
    if (counter === 10) {
        c.drawImage(knight,270,0);
        c.fillRect(90+5,90+5,90-10,90-10);
    };

    //10
    if (counter === 11) {
        c.drawImage(knight,360,180);
        c.fillRect(270+5,0+5,90-10,90-10);
    };

    //11
    if (counter === 12) {
        c.drawImage(knight,270,360);
        c.fillRect(360+5,180+5,90-10,90-10);
    };

    //12
    if (counter === 13) {
        c.drawImage(knight,90,270);
        c.fillRect(270+5,360+5,90-10,90-10);
    };

    //13
    if (counter === 14) {
        c.drawImage(knight,0,90);
        c.fillRect(90+5,270+5,90-10,90-10);
    };

    //14
    if (counter === 15) {
        c.drawImage(knight,180,0);
        c.fillRect(0+5,90+5,90-10,90-10);
    };

    //15
    if (counter === 16) {
        c.drawImage(knight,360,90);
        c.fillRect(180+5,0+5,90-10,90-10);
    };

    //16
    if (counter === 17) {
        c.drawImage(knight,270,270);
        c.fillRect(360+5,90+5,90-10,90-10);
    };

//elso hiba 19esre lepek
    if (counter === 18) {
        c.drawImage(knight,180,90);
        c.fillRect(270+5,270+5,90-10,90-10);
    };

    //20
    if (counter === 19) {
        c.drawImage(knight,360,0);
        c.fillRect(180+5,90+5,90-10,90-10);
    };

    //21
    if (counter === 20) {
        c.drawImage(knight,270,180);
        c.fillRect(360+5,0+5,90-10,90-10);
    };

    //22
    if (counter === 21) {
        c.drawImage(knight,360,360);
        c.fillRect(270+5,180+5,90-10,90-10);
    };

    //23
    if (counter === 22) {
        c.drawImage(knight,180,270);
        c.fillRect(360+5,360+5,90-10,90-10);
    };

    //24
    if (counter === 23) {
        c.drawImage(knight,0,360);
        c.fillRect(180+5,270+5,90-10,90-10);
    };

    //elso visszalepes 23-ra
    if (counter === 24) {
        c.clearRect(180,270,90,90)
        c.drawImage(knight,180,270);
        c.clearRect(0,360,90,90)
    };

    //masik ut, 18-asra lep
    if (counter === 25) {
        c.drawImage(knight,0,180);
        c.fillRect(180+5,270+5,90-10,90-10);
    };

    //17-re
    if (counter === 26) {
        c.drawImage(knight,90,360);
        c.fillRect(0+5,180+5,90-10,90-10);
    };

    // visszalepes, 18-ra
    if (counter === 27) {
        c.clearRect(0,180,90,90)
        c.drawImage(knight,0,180);
        c.clearRect(90,360,90,90)
    };

    //visszalepes 23-ra
    if (counter === 28) {
        c.clearRect(180,270,90,90)
        c.drawImage(knight,180,270);
        c.clearRect(0,180,90,90)
    };

    //visszalepes 22-re
    if (counter === 29) {
        c.clearRect(360,360,90,90)
        c.drawImage(knight,360,360);
        c.clearRect(180,270,90,90)
    };

    //visszalepes 21-re
    if (counter === 30) {
        c.clearRect(270,180,90,90)
        c.drawImage(knight,270,180);
        c.clearRect(360,360,90,90)
    };

    //visszalepes 20-ra
    if (counter === 31) {
        c.clearRect(360,0,90,90)
        c.drawImage(knight,360,0);
        c.clearRect(270,180,90,90)
    };

    //visszalepes 19-re 
    if (counter === 32) {
        c.clearRect(180,90,90,90)
        c.drawImage(knight,180,90);
        c.clearRect(360,0,90,90)
    };

    //elorelepes 18-ra
    if (counter === 33) {
        c.drawImage(knight,0,180);
        c.fillRect(180+5,90+5,90-10,90-10)

    };

       //elorelepes 17-re
       if (counter === 34) {
        c.drawImage(knight,90,360);
        c.fillRect(0+5,180+5,90-10,90-10)

    };

    //visszalepes 18-ra
    if (counter === 35) {
        c.clearRect(0,180,90,90);
        c.drawImage(knight,0,180);
        c.clearRect(90,360,90,90);
    };

    //visszalepes 19-re ---------hibas
    if (counter === 36) {
        c.clearRect(180,90,90,90)
        c.drawImage(knight,180,90);
        c.clearRect(0,180,90,90)
    };


    //visszalepes 16-ra
    if (counter === 37) {
        c.clearRect(270,270,90,90)
        c.drawImage(knight,270,270);
        c.clearRect(180,90,90,90)
    };

    //elorelepes 17-re
    if (counter === 38) {
        c.drawImage(knight,90,360);
        c.fillRect(270+5,270+5,90-10,90-10)

    };

    //elorelepes 18ra
    if (counter === 39) {
        c.drawImage(knight,0,180);
        c.fillRect(90+5,360+5,90-10,90-10)
    };

    //elore 23-ra
    if (counter === 40) {
        c.drawImage(knight,180,270);
        c.fillRect(0+5,180+5,90-10,90-10);
    };

    //elore 24-re
    if (counter === 41) {
        c.drawImage(knight,0,360);
        c.fillRect(180+5,270+5,90-10,90-10)
    };

    //visszalepes 23-ra
    if (counter === 42) {
        c.clearRect(180,270,90,90)
        c.drawImage(knight,180,270);
        c.clearRect(0,360,90,90)
    };

    //elorelepes 22-re
    if (counter === 43) {
        c.drawImage(knight,360,360);
        c.fillRect(180+5,270+5,90-10,90-10)
    };

    //elorelepes 21-re
    if (counter === 44) {
        c.drawImage(knight,270,180);
        c.fillRect(360+5,360+5,90-10,90-10)
    };

    //elorelepes 20-ra
    if (counter === 45) {
        c.drawImage(knight,360,0);
        c.fillRect(270+5,180+5,90-10,90-10)
    };

    //elorelepes 19-re
    if (counter === 46) {
        c.drawImage(knight,180,90);
        c.fillRect(360+5,0+5,90-10,90-10)
    };

    //visszalepes 20-ra
    if (counter === 47) {
        c.clearRect(360,0,90,90)
        c.drawImage(knight,360,0);
        c.clearRect(180,90,90,90)
    };

    //visszalepes 21-re
    if (counter === 48) {
        c.clearRect(270,180,90,90)
        c.drawImage(knight,270,180);
        c.clearRect(360,0,90,90)
    };

    //visszalepes 22-re
    if (counter === 49) {
        c.clearRect(360,360,90,90)
        c.drawImage(knight,360,360);
        c.clearRect(270,180,90,90)
    };

    //visszalepes 23-ra
    if (counter === 50) {
        c.clearRect(180,270,90,90)
        c.drawImage(knight,180,270);
        c.clearRect(360,360,90,90)
    };

    //visszalepes 18-ra
    if (counter === 51) {
        c.clearRect(0,180,90,90)
        c.drawImage(knight,0,180);
        c.clearRect(180,270,90,90)
    };

    //elore haladas a vegeig, 19-esre
    if (counter === 52) {
        c.drawImage(knight,180,90);
        c.fillRect(0+5,180+5,90-10,90-10)
    };

    //elorelepes 20-asra
    if (counter === 53) {
        c.drawImage(knight,360,0);
        c.fillRect(180+5,90+5,90-10,90-10)
    };

    //elorelepes 21-re
    if (counter === 54) {
        c.drawImage(knight,270,180);
        c.fillRect(360+5,0+5,90-10,90-10)
    };

    //elorelepes 22-re
    if (counter === 55) {
        c.drawImage(knight,360,360);
        c.fillRect(270+5,180+5,90-10,90-10)
    };

    //elorelepes 23-re
    if (counter === 56) {
        c.drawImage(knight,180,270);
        c.fillRect(360+5,360+5,90-10,90-10)
    };

    //elorelepes 24-re
    if (counter === 57) {
        c.drawImage(knight,0,360);
        c.fillRect(180+5,270+5,90-10,90-10)
    };

    //c.drawImage(knight,corX[counter],corY[counter]);
    myAnim = requestAnimationFrame(animate); 
}

myAnim = requestAnimationFrame(animate);
animate();

document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = parapa[counter];   
    counter++; 
    if(counter >=57){
        szoveg.innerText = parapa[counter]="A huszár körbejárta a pályát!";
    }
}

/* document.getElementById('stepPrev').onclick = function(){
    counter--;
} */

document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(knight,0,0);
    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "1. lépés: előre";

    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}

const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=57; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(knight,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
            if(counter >=57){
                szoveg.innerText = parapa[counter]="A huszár körbejárta a pályát!";
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