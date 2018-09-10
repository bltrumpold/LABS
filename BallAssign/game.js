var canvas = document.querySelector("canvas") 
var ctx = canvas.getContext("2d")

var timer = setInterval(main,1000/60)

var box = new GameObject()
box.vy =5

var menu = document.querySelector("#menu")
var start = document.querySelector("#start")
var quit = document.querySelector("#quit")

var currentState = "off"

var states = []
states ["off"] = function(){ctx.clearRect(0,0,canvas.width, canvas.height)}
states ["on"] = function() {run()}   

start.addEventListener("click", startGame)
quit.addEventListener("click", quitGame)

function startGame()
{
    currentState = "on"
    start.disabled = true
    quit.disabled = false
    
}
   
var s = []    
    
for (var i=0; i<100; i++)
{
    s[i]= new GameObject();
    s[i].x = canvas.width/2
    s[i].y = canvas.height/2
    s[i].vy = Math.random()*10+-5;
    s[i].vx = Math.random()*10+-5;
    s[i].w=10
    s[i].h=10
}   
          
function run()
{
   for (var i =0; i < s.length; i++)
   {
        s[i].drawRect()
        s[i].move()
       
       if(s[i].x > canvas.width-s[i].w/2)
        {
            s[i].vx = -s[i].vx;
        }
        if(s[i].x < 0 + s[i].w/2)
        {
            s[i].vx = -s[i].vx;
        } 
       
       if(s[i].y > canvas.height-s[i].h/2)
        {
            s[i].vy = -s[i].vy;
        }
        if(s[i].y < 0 + s[i].h/2)
        {
            s[i].vy = -s[i].vy;
        } 
        
    }
    
} 


function main()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    run()
    states[currentState]()
    
}    

function quitGame()
{
    currentState = "off"
    
    start.disabled = false
    quit.disabled = true
}
