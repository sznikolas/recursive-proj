//első canvas
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
canvas.width = 760;
canvas.height  = 470;

let counter = 1;

let parapa = ["", "lépés 2 lehetséges, helyezzük a (2)huszárt (1,2)-re", 
"lépés 1 nem lehetséges, próbáljuk a következőt",
"lépés 2 nem lehetséges, próbáljuk a következőt","lépés 3 nem lehetséges, próbáljuk a következőt","lépés 4 nem lehetséges, próbáljuk a következőt",
"lépés 5 lehetséges, helyezzük a (3)huszárt (2,0)-ra",

"lépés 1 nem lehetséges, próbáljuk a következőt",
"lépés 2 nem lehetséges, próbáljuk a következőt","lépés 3 lehetséges, helyezzük a (4)huszárt (0,1)-re",


"lépés 1 nem lehetséges, próbáljuk a következőt","lépés 2 nem lehetséges, próbáljuk a következőt",
"lépés 3 nem lehetséges, próbáljuk a következőt","lépés 4 lehetséges, helyezzük a (5)huszárt (2,2)-re",


"lépés 1 nem lehetséges, próbáljuk a következőt","lépés 2 nem lehetséges, próbáljuk a következőt","lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt","lépés 5 nem lehetséges, próbáljuk a következőt","lépés 6 lehetséges, helyezzük a (6)huszárt (1,0)-ra",

"lépés 1 lehetséges, helyezzük a (7)huszárt (0,2)-re",

"lépés 1 nem lehetséges, próbáljuk a következőt", "lépés 2 nem lehetséges, próbáljuk a következőt", "lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt", "lépés 7 lehetséges, helyezzük a (8)huszárt (2,1)-re", 

"lépés 1 nem lehetséges, próbáljuk a következőt", "lépés 2 nem lehetséges, próbáljuk a következőt", "lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(8)",


"(lépés 1-7 volt) lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(7)",


"(lépés 1 volt) lépés 2 nem lehetséges, próbáljuk a következőt", "lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(6)",

"(lépés 1-6 volt) lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(5)",

"(lépés 1-4 volt) lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(4)",

"(lépés 1-3 volt) lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(3)",

"(lépés 1-5 volt) lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(2)",

"(lépés 1-2 volt) lépés 3 nem lehetséges, próbáljuk a következőt","lépés 4 lehetséges, helyezzük a (2)huszárt (2,1)-re",

"lépés 1 nem lehetséges, próbáljuk a következőt",
"lépés 2 nem lehetséges, próbáljuk a következőt","lépés 3 lehetséges, helyezzük a (3)huszárt (0,2)-re",

"lépés 1 nem lehetséges, próbáljuk a következőt","lépés 2 nem lehetséges, próbáljuk a következőt","lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt","lépés 5 lehetséges, helyezzük a (4)huszárt (1,0)-ra",

"lépés 1 nem lehetséges, próbáljuk a következőt","lépés 2 lehetséges, helyezzük a (5)huszárt (2,2)-re",

"lépés 1 nem lehetséges, próbáljuk a következőt", "lépés 2 nem lehetséges, próbáljuk a következőt", "lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 lehetséges, helyezzük a (6)huszárt (0,1)-re",

"lépés 1 nem lehetséges, próbáljuk a következőt", "lépés 2 nem lehetséges, próbáljuk a következőt", "lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 lehetséges, helyezzük a (7)huszárt (2,0)-ra",

"lépés 1 lehetséges, helyezzük a (8)huszárt (1,2)-re",

"lépés 1 nem lehetséges, próbáljuk a következőt", "lépés 2 nem lehetséges, próbáljuk a következőt", "lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(8)",

"(lépés 1 volt) lépés 2 nem lehetséges, próbáljuk a következőt", "lépés 3 nem lehetséges, próbáljuk a következőt",
"lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(7)",

"(lépés 1-7 volt) lépés 8 nem lehetséges, próbáljuk a következőt", "nincs több lehetséges lépés, ezért BACKTRACK(6)",

"(lépés 1-8 volt) nincs több lehetséges lépés, ezért BACKTRACK(5)",

"(lépés 1-2 volt) lépés 3 nem lehetséges, próbáljuk a következőt","lépés 4 nem lehetséges, próbáljuk a következőt", 
"lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(4)",


"(lépés 1-5 volt) lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(3)",

"(lépés 1-3 volt) lépés 4 nem lehetséges, próbáljuk a következőt", "lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés, ezért BACKTRACK(2)",

"(lépés 1-4 volt) lépés 5 nem lehetséges, próbáljuk a következőt",
"lépés 6 nem lehetséges, próbáljuk a következőt","lépés 7 nem lehetséges, próbáljuk a következőt","lépés 8 nem lehetséges, próbáljuk a következőt",
"nincs több lehetséges lépés", "Ebben a 3x3-as táblában nincs huszárral bejárható út!",

];



//második canvas
let canvas2 = document.getElementById('canvas1_2');
let c2 = canvas2.getContext('2d');
canvas2.width = 450;
canvas2.height  = 450;

let counter2 = 0;
let alrdyCounter=0;
let corX = [0,90,180,360,270,   90,180,0,90,270,    360,270,90,0,180,   360,270,90,0,180,   360,270,360,180,0];
let corY = [0,180,360,270,90,   0,180,270,90,0,     180,360,270,90,0,   90,270,360,180,90,  0,180,360,270,360];

let alrdyX = [0+5,90+5,180+5,360+5,270+5,   90+5,180+5,0+5,90+5,270+5,    360+5,270+5,90+5,0+5,180+5,   360+5,270+5,90+5,0+5,180+5,   360+5,270+5,360+5,180+5,]; 
let alrdY = [0+5,180+5,360+5,270+5,90+5,   0+5,180+5,270+5,90+5,0+5,     180+5,360+5,270+5,90+5,0+5,   90+5,270+5,360+5,180+5,90+5,  0+5,180+5,360+5,270+5,];


let buttonState = "START";
let buttonState2 = "START";
let isAllowed = false;
let isAllowed2 = false;


const knight = new Image();
knight.src = "images/knight8.png";


const Knight_01 = new Image();
const Knight_02 = new Image();
const Knight_03 = new Image();
const Knight_04 = new Image();
const Knight_05 = new Image();
const Knight_06 = new Image();
const Knight_07 = new Image();
const Knight_08 = new Image();
const pointr = new Image();

Knight_01.src = "images/Knight_01.png";
Knight_02.src = "images/Knight_02.png";
Knight_03.src = "images/Knight_03.png";
Knight_04.src = "images/Knight_04.png";
Knight_05.src = "images/Knight_05.png";
Knight_06.src = "images/Knight_06.png";
Knight_07.src = "images/Knight_07.png";
Knight_08.src = "images/Knight_08.png";
pointr.src = "images/pointr.png";

//canvas1
let myAnim;
//canvas2
let myAnim2;

//canvas1
function animate(){
    //c.fillStyle = 'rgb(62, 96, 150)';
    //c.fillStyle =  '#093344';


    //0
    if (counter === 1) {
        c.drawImage(Knight_01,40,90);
        c.drawImage(pointr,335,90);
        

    };
    //1
    if (counter === 2) {
        c.drawImage(Knight_02,220,180);  
        c.clearRect(335,90,30,30); 
        c.drawImage(pointr,335,190);

    };
    if (counter === 3) {
        c.clearRect(335,190,30,30); 
        c.drawImage(pointr,335,90);
    };

    if (counter === 4) {
        c.clearRect(335,90,30,30); 
    c.drawImage(pointr,335,190);	
    };

    if (counter === 5) {
        c.clearRect(335,190,30,30);  
    c.drawImage(pointr,335,290);
    };

    if (counter === 6) {
        c.clearRect(335,290,30,30); 
    c.drawImage(pointr,335,390);
    };

    //2
    if (counter === 7) {

    c.clearRect(335,390,30,30);  
    c.drawImage(pointr,530,90);
    c.drawImage(Knight_03,40,270);
    };

    if (counter === 8) {
        c.clearRect(530,90,30,30); 
        c.drawImage(pointr,335,90);

    };
    if (counter === 9) {   
        c.clearRect(335,90,30,30); 
        c.drawImage(pointr,335,190); 
    };
 
    //3
    if (counter === 10) {
        c.clearRect(335,190,30,30);  
    c.drawImage(pointr,335,290);
        c.drawImage(Knight_04,130,90);
    };

    if (counter === 11) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,90);
    };
    if (counter === 12) {
        c.clearRect(335,90,30,30); 
c.drawImage(pointr,335,190);
        
    };
    if (counter === 13) {
        c.clearRect(335,190,30,30);  
c.drawImage(pointr,335,290);
        
    };

    //4
    if (counter === 14) {
        c.drawImage(Knight_05,220,270);
        c.clearRect(335,290,30,30); 
c.drawImage(pointr,335,390);
        
    };

    if (counter === 15) {
        c.clearRect(335,390,30,30); 
        c.drawImage(pointr,335,90);
        
    };
    if (counter === 16) {
        c.clearRect(335,90,30,30); 
c.drawImage(pointr,335,190);
        
    };
    if (counter === 17) {
        c.clearRect(335,190,30,30);  
c.drawImage(pointr,335,290);
        
    };
    if (counter === 18) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);  
        
    };
    if (counter === 19) {
        c.clearRect(335,390,30,30);  
c.drawImage(pointr,530,90);
        
    };
    

    //5
    if (counter === 20) {
        c.drawImage(Knight_06,40,180);
        c.clearRect(530,90,30,30);  
c.drawImage(pointr,530,190);
        
    };

    //6
    if (counter === 21) {
        c.clearRect(530,190,30,30);
        c.drawImage(pointr,335,90);
        c.drawImage(Knight_07,220,90);
        
    };
    if (counter === 22) {
        
        
    };
    if (counter === 23) {
        c.clearRect(335,90,30,30); 
c.drawImage(pointr,335,190);
        
    };
    if (counter === 24) {
        c.clearRect(335,190,30,30);  
c.drawImage(pointr,335,290);
        
    };
    if (counter === 25) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);  
        
    };
    if (counter === 26) {
        c.clearRect(335,390,30,30);  
c.drawImage(pointr,530,90);
        
    };
    if (counter === 27) {
        c.clearRect(530,90,30,30);  
c.drawImage(pointr,530,190);
        
    };

    //7
    if (counter === 28) {
        c.drawImage(Knight_08,130,270);
        c.clearRect(530,190,30,30);  
c.drawImage(pointr,530,290);
        
    };

    if (counter === 29) {
        c.clearRect(530,290,30,30);
        c.drawImage(pointr,335,90);
        
    };
    if (counter === 30) {
        c.clearRect(335,90,30,30); 
        c.drawImage(pointr,335,190);
        
    };
    if (counter === 31) {
        c.clearRect(335,190,30,30);  
        c.drawImage(pointr,335,290);
        
    };
    if (counter === 32) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);
        
    };
    if (counter === 33) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
        
    };
    if (counter === 34) {

        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
        
    };
    if (counter === 35) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
        
    };
    if (counter === 36) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
        
    };
    if (counter === 37) {
        c.clearRect(530,390,30,30); 
        
    };


    if (counter === 38) {
        c.drawImage(pointr,530,390);
        c.clearRect(130,270,90,90);//(8)
    };

    if (counter === 39) {
        c.clearRect(530,390,30,30); 
    };
    if (counter === 40) {
        
        c.clearRect(220,90,90,90);//(7)
        c.drawImage(pointr,335,190);
        
    };
    if (counter === 41) {
        
        c.clearRect(335,190,30,30);  
c.drawImage(pointr,335,290);
        
    };
    if (counter === 42) {

        c.clearRect(335,290,30,30); 
c.drawImage(pointr,335,390);
        
    };
    if (counter === 43) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90); 
        
        
    };
    if (counter === 44) {
        
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);  
        
    };
    if (counter === 45) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290); 
        
        
    };
    if (counter === 46) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390); 
        
        
    };
    if (counter === 47) {
        
        c.clearRect(530,390,30,30); 
        
    };

    if (counter === 48) {
        c.drawImage(pointr,530,290);
        c.clearRect(40,180,90,90);//(6)
     
    };    
    
    if (counter === 49) {
        c.clearRect(530,290,30,30);  
c.drawImage(pointr,530,390);
     
    };
    if (counter === 50) {
        c.clearRect(530,390,30,30); 
     
    };



    if (counter === 51) {
        c.clearRect(220,270,90,90);//(5)
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
    };

    if (counter === 52) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
    
    };
    if (counter === 53) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };
    if (counter === 54) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };
    if (counter === 55) {
        c.clearRect(530,390,30,30);
    
    };
        
    
    if (counter === 56) {
        
        c.clearRect(130,90,90,90);//(4)
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);
        
    };
    if (counter === 57) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);	
    };
    if (counter === 58) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
    
    };
    if (counter === 59) {
        c.clearRect(530,190,30,30);  
c.drawImage(pointr,530,290);
    
    };
    if (counter === 60) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };
    if (counter === 61) {
        c.clearRect(530,390,30,30); 
    
    };

    if (counter === 62) {
        c.clearRect(40,270,90,90);//(3)
        c.clearRect(530,90,30,30);  
c.drawImage(pointr,530,190);
        
    };
    if (counter === 63) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };
    if (counter === 64) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };
    if (counter === 65) {
        c.clearRect(530,390,30,30);
    
    };
    if (counter === 66) {
        c.clearRect(220,180,90,90);//(2)
        c.clearRect(335,190,30,30);  
c.drawImage(pointr,335,290);
        
    };
    if (counter === 67) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);
    
    };

    if (counter === 68) {
        c.clearRect(335,390,30,30);
        c.drawImage(Knight_02,130,270); 
        c.drawImage(pointr,335,90);
    };

    if (counter === 69) {
        c.clearRect(335,90,30,30); 
c.drawImage(pointr,335,190);
    
    };

    if (counter === 70) {
        c.clearRect(335,190,30,30);  
        c.drawImage(pointr,335,290);
    
    };

    if (counter === 71) {
        c.clearRect(335,290,30,30); 
    c.drawImage(pointr,335,390);
        
        c.drawImage(Knight_03,220,90); 
        c.clearRect(335,390,30,30);
        c.drawImage(pointr,335,90);
    };
    if (counter === 72) {
        c.clearRect(335,90,30,30); 
        c.drawImage(pointr,335,190);
    };
    if (counter === 73) {
        c.clearRect(335,190,30,30);  
        c.drawImage(pointr,335,290);
    
    };
    if (counter === 74) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);
    
    };
    if (counter === 75) {
        
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
    };
    if (counter === 76) {
        
        c.drawImage(Knight_04,40,180); 
        c.clearRect(530,90,30,30); 
        c.drawImage(pointr,335,90);
    };
    if (counter === 77) {
        c.clearRect(335,90,30,30); 
c.drawImage(pointr,335,190);
    };

    if (counter === 78) {
        c.clearRect(335,190,30,30);
        c.drawImage(pointr,335,90);
        c.drawImage(Knight_05,220,270); 
    };
    if (counter === 79) {
        c.clearRect(335,90,30,30); 
        c.drawImage(pointr,335,190);
    
    };
    if (counter === 80) {
        c.clearRect(335,190,30,30);  
        c.drawImage(pointr,335,290);
    
    };
    if (counter === 81) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);
    
    };
    if (counter === 82) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
    
    };
    if (counter === 83) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
    
    };
    if (counter === 84) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };
    if (counter === 85) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };

    if (counter === 86) {
        c.clearRect(530,390,30,30); 
        c.drawImage(pointr,335,90);
        c.drawImage(Knight_06,130,90); 
    };
    if (counter === 87) {
        c.clearRect(335,90,30,30); 
        c.drawImage(pointr,335,190);
    
    };
    if (counter === 88) {
        c.clearRect(335,190,30,30);  
        c.drawImage(pointr,335,290);
    
    };
    if (counter === 89) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);
    
    };
    if (counter === 90) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
    
    };
    if (counter === 91) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
    
    };
    if (counter === 92) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };

    if (counter === 93) {
        c.clearRect(530,290,30,30); 
        c.drawImage(pointr,335,90);
        c.drawImage(Knight_07,40,270); 
    };

    if (counter === 94) {
        
        c.drawImage(Knight_08,220,180); 
    };
    if (counter === 95) {
        c.clearRect(335,90,30,30); 
        c.drawImage(pointr,335,190);
    
    };
    if (counter === 96) {
        c.clearRect(335,190,30,30);  
        c.drawImage(pointr,335,290);
    
    };
    if (counter === 97) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);
    
    };
    if (counter === 98) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
    
    };
    if (counter === 99) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
    
    };
    if (counter === 100) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };
    if (counter === 101) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };
    if (counter === 102) {
        c.clearRect(530,390,30,30); 
    
    };

    if (counter === 103) {
        
        c.clearRect(220,180,90,90);
        c.clearRect(335,90,30,30); 
        c.drawImage(pointr,335,190);
    };
    if (counter === 104) {
        c.clearRect(335,190,30,30);  
        c.drawImage(pointr,335,290);
    
    };
    if (counter === 105) {
        c.clearRect(335,290,30,30); 
        c.drawImage(pointr,335,390);
    
    };
    if (counter === 106) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
    
    };
    if (counter === 107) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
    
    };
    if (counter === 108) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };
    if (counter === 109) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };
    if (counter === 110) {
        c.clearRect(530,390,30,30); 
        c.clearRect(40,270,90,90);
    
    };

    if (counter === 111) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390); 
    };
    if (counter === 112) {
        c.clearRect(530,390,30,30);  
    
    };

    if (counter === 113) {
        
        c.clearRect(130,90,90,90);
    };

    if (counter === 114) {
        
        c.clearRect(220,270,90,90);

        c.clearRect(335,190,30,30);  
        c.drawImage(pointr,335,290);
    };
    
    if (counter === 115) {
    c.clearRect(335,290,30,30); 
    c.drawImage(pointr,335,390);
    
    };
    if (counter === 116) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
    
    };
    if (counter === 117) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
    
    };
    if (counter === 118) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };
    if (counter === 119) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };
    if (counter === 120) {
        c.clearRect(530,390,30,30);
    
    };

    if (counter === 121) {
        
        c.clearRect(40,180,90,90);
        c.clearRect(530,90,30,30);  
c.drawImage(pointr,530,190);
    };
    if (counter === 122) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };
    if (counter === 123) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };
    if (counter === 124) {
        c.clearRect(530,390,30,30);
    
    };

    if (counter === 125) {
        
        c.clearRect(220,90,90,90);
        c.clearRect(335,290,30,30); 
c.drawImage(pointr,335,390);
    };
    if (counter === 126) {
        c.clearRect(335,390,30,30);  
        c.drawImage(pointr,530,90);
    
    };
    if (counter === 127) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);
    
    };
    if (counter === 128) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);
    
    };
    if (counter === 129) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);
    
    };
    if (counter === 130) {
        c.clearRect(530,390,30,30);
    
    };
    if (counter === 131) {
        
        c.clearRect(130,270,90,90);
        c.clearRect(335,390,30,30);  
c.drawImage(pointr,530,90);

    };

    if (counter === 132) {
        c.clearRect(530,90,30,30);  
        c.drawImage(pointr,530,190);

    };
    if (counter === 133) {
        c.clearRect(530,190,30,30);  
        c.drawImage(pointr,530,290);

    };

    if (counter === 134) {
        c.clearRect(530,290,30,30);  
        c.drawImage(pointr,530,390);

    };
    if (counter === 135) {
        c.clearRect(530,390,30,30);  

    };



    myAnim = requestAnimationFrame(animate); 
}
//myAnim = requestAnimationFrame(animate);
animate();


//canvas2
function animate2(){
    //c2.beginPath();
    c2.fillStyle =  '#093344';
    c2.fillRect(alrdyX[alrdyCounter-1],alrdY[alrdyCounter-1],80, 80);
    /* c2.stroke();
    c2.closePath(); */
    c2.drawImage(knight,corX[counter2],corY[counter2]);
    
    myAnim2 = requestAnimationFrame(animate2); 
}
//myAnim2 = requestAnimationFrame(animate2);
animate2();



//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1');
    szoveg.innerText = parapa[counter];   
    counter++; 
    if(counter >=136){
        szoveg.innerText = parapa[counter]="Ebben a 3x3-as táblában nincs huszárral bejárható út!";
    }
}

//Előrelépések 2-es canvason
document.getElementById('stepFrwd2').onclick = function(){
    counter2++; 
    alrdyCounter++;
    myAnim2 = requestAnimationFrame(animate2);
    
}


//Canvas 1 reset
document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width, canvas.height);
    c.drawImage(Knight_01,40,90);
    counter = 1;
    //label resetelese
    document.getElementById("label1").innerHTML = "lépés 1 nem lehetséges, próbáljuk a következőt";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";  
}

//Canvas 2 reset
document.getElementById('resetAnim2').onclick = function(){
    isAllowed2 = false;
    c2.clearRect(0,0,canvas2.width, canvas2.height);
    c2.drawImage(knight,corX[0],corY[0]);
    counter2 = 0;
    alrdyCounter=0;
    let idk2 = document.getElementById("startAnim2");
    idk2.value = "Start"
    buttonState2="START";  
}



//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=136; x++){
 
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                //c.drawImage(knight,corX[counter],corY[counter]);
                counter++;
                await sleep(1000/slider.value);       
            }
            if(counter >=136){
                szoveg.innerText = parapa[counter]="Ebben a 3x3-as táblában nincs huszárral bejárható út!";
            }  
        }
    }
// A várakozáshoz szükséges constans
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve,delay))   



//canvas 2 lejatszas
const startAnim2 = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange2');
        for(var x = 0; x<corX.length; x++){
            if(isAllowed2){
                c2.drawImage(knight,corX[counter2],corY[counter2]);
                counter2++;
                //uj a sarga kockakhoz
                alrdyCounter++;
                await sleep2(1000/slider.value);       
            }  
            if(counter2 >=24){
                counter2=24;
            } 
        }
    }
const sleep2 = (delay2) => new Promise((resolve2) => setTimeout(resolve2,delay2))



/* document.getElementById('stopBtn').onclick = function(){
    isAllowed = false;
} */

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

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
})