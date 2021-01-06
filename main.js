var mouse_event = "empty";
var last_position_of_X , last_position_of_Y;

canvas = document.getElementById ("myCanvas");
ctx = canvas.getContext("2d");

var color = "black";
var width_of_line = 9;

canvas.addEventListener("mousedown",myMouse_down);

function myMouse_down(e){

color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
mouse_event = "mousedown";

}

canvas.addEventListener("mouseup",myMouse_up);

function myMouse_up (e){

mouse_event = "mouseup";

}

canvas.addEventListener("mouseleave",myMouse_leave);

function myMouse_leave(e){

mouse_event = "mouseleave";

}

canvas.addEventListener("mousemove",myMouse_move);

function myMouse_move(e){

current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

if(mouse_event=="mousedown"){

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;

console.log ("last position of X and Y cordinates are:");
console.log ("X = "+last_position_of_X+"Y ="+ last_position_of_Y);


console.log ("current position of X and Y cordinates are:");
console.log ("X = " + current_position_of_mouse_X + "Y =" + current_position_of_mouse_Y);

ctx.arc(current_position_of_mouse_X,current_position_of_mouse_Y,40,0,2*Math.PI);
ctx.stroke();


}

last_position_of_X = current_position_of_mouse_X;
last_position_of_Y = current_position_of_mouse_Y;

}

function cleararea(){

ctx.clearRect(0,0,canvas.width,canvas.height);

}

function my_touchmove(e){

 current_position_of_mouse_X = e.touches[0].clientX - canvas.offsetLeft;
 current_position_of_mouse_Y = e.touches[0].clientY - canvas.offsetTop;
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.lineWidth = width_of_line;
 ctx.moveTo(last_position_of_X,last_position_of_Y);
 ctx.lineTo(current_position_of_mouse_Y,current_position_of_mouse_X);
 ctx.stroke();


 last_position_of_Y = current_position_of_mouse_Y;
 last_position_of_X = current_position_of_mouse_X;

}