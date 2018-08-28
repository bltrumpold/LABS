var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d")

var timer = setInterval(main,1000/60)

var box = new GameObject()
box.vy =5

var menu = document.querySelector("#menu")
var start = document.querySelector("#start")
var quit = document.querySelector("#quit")




//--------------------------------------------------------

var ex = [];
var s =[];

for (var i=0; i<100; i++)
{
    s[i]= new GameObject();
    s[i].x = canvas.width/2
    s[i].y = canvas.height/2
    s[i].w=10
    s[i].h=10
}     
    

    
ex[0]=function()
{
    for (var i =0; i < s.length; i++)
    {
        s[i].drawRect()
        s[i].move()
        
        if(s[i].y > canvas.height)
        {
            s[i].y =0
        }
      
    }
    
}// ex end

ex[0]=function()
{
    for (var i =0; i < s.length; i++)
    {
        s[i].drawRect()
        s[i].move()
        if(s[i].y > canvas.height)
        {
             
            s[i].y =0
        }
      
    }
    
} 
function main()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    ex[0]()
}    
    