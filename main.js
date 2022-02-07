canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var background_image="https://timesofindia.indiatimes.com/thumb/msid-61502796,imgsize-454625,width-400,resizemode-4/61502796.jpg";
var car1_width=120;
var car1_height=70;
var car1_img="https://www.clipartmax.com/png/middle/1-14122_the-animated-car-gif-png.png";
var car1_x=10;
var car1_y=10;

var car2_width=120;
var car2_height=70;
var car2_img="https://www.pngitem.com/pimgs/m/96-969641_car-taxi-cab-cab-yellow-vehicle-auto-automobile.png";
var car2_x=10;
var car2_y=100;
function add(){
  background_imgTag=new Image();
  background_imgTag.onload = uploadBackground;
  background_imgTag.src= background_image;
  
car1_imgTag=new Image();
  car1_imgTag.onload = uploadcar1;
  car1_imgTag.src= car1_img;
  
  car2_imgTag=new Image();
  car2_imgTag.onload = uploadcar2;
  car2_imgTag.src= car2_img;
}

function uploadBackground() { ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height); }

function uploadcar1(){
  ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}


function uploadcar2(){
  ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
  var keyPressed=e.keyCode
console.log(keyPressed);
if(keyPressed == '38')
{ car1_up(); 
 console.log("up arrow key"); 
}
  if(keyPressed == '40')
{ car1_down(); 
 console.log("down arrow key"); 
}
if(keyPressed == '37')
{ car1_left(); 
 console.log("left arrow key"); 
}
if(keyPressed == '39')
{ car1_right(); 
 console.log("right arrow key"); 
}

if(keyPressed == '97')
{ car2_left(); 
 console.log("a letter key"); 
}
if(keyPressed == '100')
{ car2_right(); 
 console.log("d letter key"); 
}
if(keyPressed == '119')
{ car2_up(); 
 console.log("w letter key"); 
}
if(keyPressed == '115')
{ car2_down(); 
 console.log("s letter key"); 
}
}
function car1_up(){
    if (car1_y>0) {
        car1_y= car1_y-10;
       uploadcar1();
       uploadcar2();
       uploadBackground();

       
    }
}
function car1_down(){
    if (car1_y<500) {
        car1_y= car1_y+10;
       uploadcar1();
       uploadcar2();
       uploadBackground();
       
       
    }
}
function car1_left(){
    if (car1_x>0) {
        car1_x= car1_x-10;
       uploadcar1();
       uploadcar2();
       uploadBackground();
       
       
    }
}
function car1_right(){
    if (car1_x<700) {
        car1_x= car1_x+10;
       uploadcar1();
       uploadcar2();
       uploadBackground();
       
       
    }
}
function car2_up(){
    if (car2_y>0) {
        car2_y= car2_y-10;
       uploadcar1();
       uploadcar2();
       uploadBackground();

       
    }
}
function car2_down(){
    if (car2_y<500) {
        car2_y= car2_y+10;
       uploadcar1();
       uploadcar2();
       uploadBackground();
       
       
    }
}
function car2_left(){
    if (car2_x>0) {
        car2_x= car2_x-10;
       uploadcar1();
       uploadcar2();
       uploadBackground();
       
       
    }
}
function car2_right(){
    if (car2_x<700) {
        car2_x= car2_x+10;
       uploadcar1();
       uploadcar2();
       uploadBackground();
       
       
    }
}