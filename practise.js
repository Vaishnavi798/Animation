var contxt;
var x=100;
var y=100;
var vx=5;
var vy=5;
var time;
function init()
{
  contxt= Canvas.getContext('2d');
 time= setInterval(draw,10);
}

function draw()
{
  contxt.clearRect(0,0, 500,400);
  contxt.beginPath();
  contxt.fillStyle="#c2f924";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  contxt.arc(x,y,20,0,Math.PI*2,true);
  contxt.closePath();
  contxt.fill();
  // Boundary Logic
if( x<0 || x>500) vx=-vx; 
if( y<0 || y>400) vy=-vy; 
x+=vx; 
y+=vy;
}
function stop() {
  clearInterval(time);
  x=10;
  y=10;
}