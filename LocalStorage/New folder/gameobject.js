class GameObject
{
    constructor()
    {
        this.x= canvas.width/2
        this.y= canvas.height/2
        this.w =100
        this.h =100
        this.vx = Math.floor(Math.random()*-21) +10
        this.vy = Math.floor(Math.random()*-21) +10
       
        
       var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
         
     this.color= colorArray[Math.floor(colorArray.length * Math.random())]
    }
    
    drawRect()
    {
       ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle*Math.PI/180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.w/2,-this.h/2,this.w,this.h);
        ctx.restore();
    }
    
    move()
    {
        this.x += this.vx
        this.y += this.vy
    }
    
    
}