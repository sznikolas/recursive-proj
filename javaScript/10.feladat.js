//első canvas
let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
canvas.width = 540;
canvas.height  = 540;

let counter = 0;

let parapa = [
"1. lepes", "2. lepes", "3. lepes", "4. lepes", "5. lepes", "6. lepes", "7. lepes", "8. lepes", "9. lepes", "10. lepes", 
"11. lepes", "12. lepes", "13. lepes", "14. lepes", "15. lepes", "16. lepes", "17. lepes", "18. lepes", "19. lepes", "20. lepes", 
"21. lepes", "22. lepes", "23. lepes", "24. lepes", "25. lepes", "26. lepes", "27. lepes", "28. lepes", "29. lepes", "30. lepes", 
"31. lepes", "32. lepes", "33. lepes", "34. lepes", "35. lepes", "36. lepes", "37. lepes", "38. lepes", "39. lepes", "40. lepes", 
"41. lepes", "42. lepes", "43. lepes", "44. lepes", "45. lepes", "46. lepes", "47. lepes", "48. lepes", "49. lepes", "50. lepes", 
"51. lepes", "52. lepes",
"53. A szudokút sikeresen megoldottuk!"];

let buttonState = "START";
let isAllowed = false;

/* const knight = new Image();
knight.src = "images/knight7.png"; */

let myAnim;


function animate(){

    if (counter === 0) {
    c.clearRect(0,0,canvas.width,canvas.height);
    c.font='normal 29px Lucida Console'; 
//c.fillRect(0,0,600,600)
    c.fillStyle = "black";
    c.fillText("3", 60,82);
    c.fillText("6", 110,82);
    c.fillText("8", 160,82);

    c.fillText("1", 210,82);
    c.fillText("9", 260,82);
    c.fillText("2", 310,82);

    c.fillText("7", 360,82);
    c.fillText("4", 410,82);
    c.fillText("5", 460,82);


    c.fillText("5", 60,132);
    c.fillText("2", 110,132);
    c.fillText("4", 160,132);

    c.fillText("6", 210,132);
    c.fillText("8", 260,132);
    c.fillText("7", 310,132);

    c.fillText("3", 360,132);
    c.fillText("1", 410,132);
    c.fillText("9", 460,132);


    c.fillText("1", 60,182);
    c.fillText("9", 110,182);
    c.fillText("7", 160,182);

    c.fillText("5", 210,182);
    c.fillText("3", 260,182);
    c.fillText("4", 310,182);

    c.fillText("2", 360,182);
    c.fillText("8", 410,182);
    c.fillText("6", 460,182);

    //uj subproblem
    c.fillText("7", 60,232);
    c.fillText("8", 110,232);
    c.fillText("5", 160,232);

    c.fillText("9", 210,232);
    //c.fillText("6", 260,232);
    c.fillText("1", 310,232);

    //c.fillText("4", 360,232);
    //c.fillText("2", 410,232);
    c.fillText("3", 460,232);


    c.fillText("9", 60,282);
    //c.fillText("1", 110,282);
    c.fillText("2", 160,282);

    //c.fillText("4", 210,282);
    c.fillText("5", 260,282);
    //c.fillText("3", 310,282);

    c.fillText("8", 360,282);
    //c.fillText("6", 410,282);
    c.fillText("7", 460,282);


    c.fillText("4", 60,332);
    //c.fillText("3", 110,332);
    //c.fillText("6", 160,332);

    c.fillText("2", 210,332);
    //c.fillText("7", 260,332);
    //c.fillText("8", 310,332);

    //c.fillText("9", 360,332);
    //c.fillText("5", 410,332);
    //c.fillText("1", 460,332);
    
    //uj subproblem
    //c.fillText("6", 60,380);
    //c.fillText("4", 110,380);
    //c.fillText("3", 160,380);

    //c.fillText("8", 210,380);
    //c.fillText("1", 260,380);
    //c.fillText("9", 310,380);

    c.fillText("5", 360,380);
    //c.fillText("7", 410,380);
    c.fillText("2", 460,380);


    //c.fillText("2", 60,430);
    c.fillText("5", 110,430);
    //c.fillText("9", 160,430);

    //c.fillText("7", 210,430);
    c.fillText("4", 260,430);
    c.fillText("6", 310,430);

    //c.fillText("1", 360,430);
    //c.fillText("3", 410,430);
    //c.fillText("8", 460,430);


    c.fillText("8", 60,480);
    //c.fillText("7", 110,480);
    //c.fillText("1", 160,480);

    c.fillText("3", 210,480);
    //c.fillText("2", 260,480);
    //c.fillText("5", 310,480);

    //c.fillText("6", 360,480);
    c.fillText("9", 410,480);
    //c.fillText("4", 460,480);

    };

if (counter === 1) { 

c.fillStyle = "green";
c.fillText("6", 260,232);
    
};

if (counter === 2) {  
c.fillText("6", 260,232);
c.fillText("4", 360,232); 

};

if (counter === 3) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);

    
    };

if (counter === 4) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);

    
    };

if (counter === 5) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);

    
    };

if (counter === 6) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);


    
    };

if (counter === 7) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);


    };

if (counter === 8) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);

    
    };
    
if (counter === 9) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);

    
    };

if (counter === 10) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);

    
    };

if (counter === 11) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);

    
    };

if (counter === 12) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("1", 360,332);

    
    };

if (counter === 13) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("1", 360,332);
    c.fillText("5", 410,332);

    
    };

if (counter === 14) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("1", 360,332);
    c.fillText("5", 410,332);
    c.fillRect(450,300,35,35);
    
    };

    
if (counter === 15) {  
    c.fillStyle="red";
    c.fillText("1", 360,332);
    c.fillText("5", 410,332);
    c.fillRect(450,300,35,35);
    c.fillStyle="green";
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);   
    };

if (counter === 16) {  
    
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    
    };

if (counter === 17) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    
    };

if (counter === 18) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    
    };

if (counter === 19) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    
    };

if (counter === 20) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    
    };

if (counter === 21) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("1", 160,380);
    
    };

if (counter === 22) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("1", 160,380);
    c.fillText("7", 210,380);
    
    };

if (counter === 23) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("1", 160,380);
    c.fillText("7", 210,380);
    c.fillRect(250,350,35,35);
    
    };

    
if (counter === 24) {  

    c.fillStyle="red";
    c.fillText("7", 210,380);
    c.fillRect(250,350,35,35);

    c.fillStyle="green";
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("1", 160,380);
   
    };

if (counter === 25) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("1", 160,380);
    c.fillText("8", 210,380);
    
    };

if (counter === 26) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("1", 160,380);
    c.fillText("8", 210,380);
    c.fillRect(250,350,35,35);
    
    };

if (counter === 27) {  
    c.fillStyle="red";
    c.fillText("8", 210,380);
    c.fillRect(250,350,35,35);
    c.fillText("1", 160,380);

    c.fillStyle="green";
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    
    };

if (counter === 28) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    
    };

if (counter === 29) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("7", 210,380);
    
    };

if (counter === 30) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("7", 210,380);
    c.fillText("1", 260,380);
    
    };

if (counter === 31) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("7", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    
    };

if (counter === 32) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("7", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillRect(400,350,35,35);
    
    };

if (counter === 33) {  
    c.fillStyle="red";
    c.fillText("7", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillRect(400,350,35,35);

    c.fillStyle="green";
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    
    };

if (counter === 34) {  
    
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    
    };

if (counter === 35) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    
    };

if (counter === 36) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    
    };

if (counter === 37) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    
    };

if (counter === 38) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    
    };

if (counter === 39) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("1", 160,430);
    
    };

if (counter === 40) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("1", 160,430);
    c.fillText("7", 210,430);

    };

if (counter === 41) {  

    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("1", 160,430);
    c.fillText("7", 210,430);
    c.fillRect(350,400,35,35);

    };

if (counter === 42) {  

    c.fillStyle="red";
    c.fillText("1", 160,430);
    c.fillText("7", 210,430);
    c.fillRect(350,400,35,35);

    c.fillStyle="green";
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    };

if (counter === 43) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    };

if (counter === 44) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    };

if (counter === 45) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    };

if (counter === 46) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    c.fillText("3", 410,430);
    };

if (counter === 47) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    c.fillText("3", 410,430);
    c.fillText("8", 460,430);
    };

if (counter === 48) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    c.fillText("3", 410,430);
    c.fillText("8", 460,430);
    c.fillText("7", 110,480);
    };

if (counter === 49) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    c.fillText("3", 410,430);
    c.fillText("8", 460,430);
    c.fillText("7", 110,480);
    c.fillText("1", 160,480);
    };

if (counter === 50) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    c.fillText("3", 410,430);
    c.fillText("8", 460,430);
    c.fillText("7", 110,480);
    c.fillText("1", 160,480);
    c.fillText("2", 260,480);
    };

if (counter === 51) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    c.fillText("3", 410,430);
    c.fillText("8", 460,430);
    c.fillText("7", 110,480);
    c.fillText("1", 160,480);
    c.fillText("2", 260,480);
    c.fillText("5", 310,480);
    };

if (counter === 52) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    c.fillText("3", 410,430);
    c.fillText("8", 460,430);
    c.fillText("7", 110,480);
    c.fillText("1", 160,480);
    c.fillText("2", 260,480);
    c.fillText("5", 310,480);
    c.fillText("6", 360,480);
    };

if (counter === 53) {  
    c.fillText("6", 260,232);
    c.fillText("4", 360,232);  
    c.fillText("2", 410,232);
    c.fillText("1", 110,282);
    c.fillText("4", 210,282);
    c.fillText("3", 310,282);
    c.fillText("6", 410,282);
    c.fillText("3", 110,332);
    c.fillText("6", 160,332);
    c.fillText("7", 260,332);
    c.fillText("8", 310,332);
    c.fillText("9", 360,332);
    c.fillText("5", 410,332);
    c.fillText("1", 460,332);
    c.fillText("6", 60,380);
    c.fillText("4", 110,380);
    c.fillText("3", 160,380);
    c.fillText("8", 210,380);
    c.fillText("1", 260,380);
    c.fillText("9", 310,380);
    c.fillText("7", 410,380);
    c.fillText("2", 60,430);
    c.fillText("9", 160,430);
    c.fillText("7", 210,430);
    c.fillText("1", 360,430);
    c.fillText("3", 410,430);
    c.fillText("8", 460,430);
    c.fillText("7", 110,480);
    c.fillText("1", 160,480);
    c.fillText("2", 260,480);
    c.fillText("5", 310,480);
    c.fillText("6", 360,480);
    c.fillText("4", 460,480);
    };

    myAnim = requestAnimationFrame(animate); 
};

myAnim = requestAnimationFrame(animate);

//Előrelépések 1-es canvason
document.getElementById('stepFrwd').onclick = function(){
    let szoveg = document.getElementById('label1'); 

    if (counter < 53) {
    c.clearRect(245,200,40,40);
    c.clearRect(345,200,40,40);
    c.clearRect(395,200,40,40);

    c.clearRect(100,250,40,40);
    c.clearRect(200,250,40,40);
    c.clearRect(300,250,40,40);
    c.clearRect(400,250,40,40);

    c.clearRect(100,300,40,40);
    c.clearRect(150,300,40,40);
    c.clearRect(250,300,40,40);
    c.clearRect(300,300,40,40);
    c.clearRect(350,300,40,40);
    c.clearRect(400,300,40,40);
    c.clearRect(450,300,40,40);

    c.clearRect(50,350,40,40);
    c.clearRect(100,350,40,40);
    c.clearRect(150,350,40,40);
    c.clearRect(200,350,40,40);
    c.clearRect(250,350,40,40);
    c.clearRect(300,350,40,40);
    c.clearRect(400,350,40,40);

    c.clearRect(50,400,40,40);
    c.clearRect(150,400,40,40);
    c.clearRect(200,400,40,40);
    c.clearRect(350,400,40,40);
    c.clearRect(400,400,40,40);
    c.clearRect(450,400,40,40);

    c.clearRect(100,450,40,40);
    c.clearRect(150,450,40,40);
    c.clearRect(250,450,40,40);
    c.clearRect(300,450,40,40);
    c.clearRect(350,450,40,40);
    c.clearRect(450,450,40,40);
    };
    szoveg.innerText = parapa[counter];   
    counter++; 
     if(counter >=53){
        szoveg.innerText = parapa[counter]="A szudokút sikeresen megoldottuk!";
    }  
}

document.getElementById('resetAnim').onclick = function(){
    isAllowed = false;
    c.clearRect(0,0,canvas.width,canvas.height);
        
    counter = 0;
    //label resetelese
    document.getElementById("label1").innerHTML = "oldjuk meg";
    let idk = document.getElementById("startAnim");
    idk.value = "Start"
    buttonState="START";   
}

//canvas 1 lejatszas
const startAnim = async () => {
    // A lépések automatikus lejátszása várakozással (startAnim)
    let slider = document.getElementById('myRange');
        for(var x = 0; x<=52; x++){
    
    c.clearRect(245,200,40,40);
    c.clearRect(345,200,40,40);
    c.clearRect(395,200,40,40);

    c.clearRect(100,250,40,40);
    c.clearRect(200,250,40,40);
    c.clearRect(300,250,40,40);
    c.clearRect(400,250,40,40);

    c.clearRect(100,300,40,40);
    c.clearRect(150,300,40,40);
    c.clearRect(250,300,40,40);
    c.clearRect(300,300,40,40);
    c.clearRect(350,300,40,40);
    c.clearRect(400,300,40,40);
    c.clearRect(450,300,40,40);

    c.clearRect(50,350,40,40);
    c.clearRect(100,350,40,40);
    c.clearRect(150,350,40,40);
    c.clearRect(200,350,40,40);
    c.clearRect(250,350,40,40);
    c.clearRect(300,350,40,40);
    c.clearRect(400,350,40,40);

    c.clearRect(50,400,40,40);
    c.clearRect(150,400,40,40);
    c.clearRect(200,400,40,40);
    c.clearRect(350,400,40,40);
    c.clearRect(400,400,40,40);
    c.clearRect(450,400,40,40);

    c.clearRect(100,450,40,40);
    c.clearRect(150,450,40,40);
    c.clearRect(250,450,40,40);
    c.clearRect(300,450,40,40);
    c.clearRect(350,450,40,40);
    c.clearRect(450,450,40,40);
            
            if(isAllowed){
                let szoveg = document.getElementById('label1');
                szoveg.innerText = parapa[counter];  
                
                counter++;
                await sleep(1000/slider.value);       
            }
             if(counter >=53){
                szoveg.innerText = parapa[counter]="A szudokút sikeresen megoldottuk!";
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