

var Bola = [];
var quantidade = 100;


function setup() {
  createCanvas(400, 400);
  for(i=0;i<quantidade;i++)
  {
    var tam = random(20);
    Bola[i] = new Ball(random(width-tam,tam),
                       random(height-tam,tam),
                       random(-5,5),
                       random(-5,5),
                       tam
                      );
  }  
  
}

function draw() {
  background(220);
  
 
 for(i=0;i<quantidade;i++)
  {
    Bola[i].desenha();
    Bola[i].wallcollide();
  }  

}

function Ball(posx,posy,velx,vely,tam){
  var i ,  j;
  
  this.posy = posy;
  this.posx = posx;
  
  this.velx = velx;
  this.vely = vely;
  
  this.tam = tam;
  
  this.desenha =  function() {
    
    this.posx= this.posx + this.velx;
    this.posy= this.posy + this.vely ;
    
    ellipse(this.posx,this.posy,this.tam);
    
  }
  
  this.wallcollide = function(){
    
    if(this.posx + this.tam > width   ||  this.posx - this.tam < 0)
    {
      this.velx *= (-1);
    }
    
    if(this.posy + this.tam > height  ||   this.posy - this.tam < 0)
    {
      this.vely *= (-1);
    }
    
    
  }
  
  this.colisoes = function(){
    
    for(i=0;i<Ball.length;i++)
      for(j=i+1; j<Ball.length;j++){
            
            
      }
  }
 
  
}
