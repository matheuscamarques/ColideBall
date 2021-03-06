/*


    Autor: Matheus de Camargo Marques
    Email: mmarques.1997@alunos.utfpr.edu.br
    Engenharia da Computação - UTFPR 

    


*/

var quantidade = 100;
var Bola = [];
var tam; //DIAMETRO

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  for(i=0;i<quantidade;i++)
  {
    tam = random(3,30);
    Bola[i] = new Ball(random(width-tam,tam),
                       random(height-tam,tam),
                       random(-1,1),
                       random(-1,1),
                       tam
                      );
   }  
  
}

function draw() {
  background(0);
  
 
 for(i=0;i<quantidade;i++)
  {
    Bola[i].desenha();
    Bola[i].wallcollide();
 
  }  
  
  colisao();
  //mmarques.1997@alunos.utfpr.edu.br
  var textsize = 20;
  strokeWeight(5); 
  stroke('black'); 
  fill('green');
  textSize(textsize);
  text('Autor: Matheus de Camargo Marques', 10, textsize+2);
  text('Email: mmarques.1997@alunos.utfpr.edu.br', 10, textsize*2+2);
  text('Curso: Engenharia da Computação - UTFPR', 10, textsize*3+2);
   text("FPS " +  int(getFrameRate()), width-textsize*10, 20); 
   noStroke();
  
}

function colisao(){

  var distancia_centros;
  var x,y;

  
  for(i=0;i<quantidade;i++){
    for(j=i+1;j<quantidade;j++)
      {
          x = Bola[i].posx - Bola[j].posx ;
          y = Bola[i].posy - Bola[j].posy ;
          distancia_centros = x*x + y*y ;
         // alert(distancia_centros);
          
          if(distancia_centros <= (Bola[i].tam/2*Bola[j].tam/2)*4)
           {
              //Atualiza vel
              var colisao = distancia_centros;
              
              var pvx1 = ((Bola[i].velx * x) + (Bola[i].vely * y)) * x/colisao;
              var pvy1 = ((Bola[i].velx * x) + (Bola[i].vely * y)) * y/colisao;
              var pvx2 = ((Bola[j].velx * x) + (Bola[j].vely * y)) * x/colisao;
              var pvy2 = ((Bola[j].velx * x) + (Bola[j].vely * y)) * y/colisao;
            
              Bola[i].velx -= (pvx1 - pvx2);
              Bola[i].vely -= (pvy1 - pvy2);
              
              Bola[j].velx -= (pvx2 - pvx1);
              Bola[j].vely -= (pvy2 - pvy1);
              
              if(x != 0 && y !=0){
                  
                Bola[i].posx += x / Math.abs(x);
                Bola[i].posy += y / Math.abs(y);
              
                Bola[j].posx -= x / Math.abs(x);
                Bola[j].posy -= y / Math.abs(y);
                
              }
           }
          
      } 
  }
}

function Ball(posx,posy,velx,vely,tam){
  var i ,  j;
  
  this.posy = posy;
  this.posx = posx;
  
  this.velx = velx;
  this.vely = vely;
  
  this.tam = tam;
  
  this.R = random(255);
  this.G = random(255);
  this.B = random(255);
  
  this.desenha =  function() {
    
    this.posx= this.posx + this.velx;
    this.posy= this.posy + this.vely ;
    
    fill(this.R,this.G,this.B);
    ellipse(this.posx,this.posy,this.tam);
    
  }
  
  this.wallcollide = function(){
    
    if(this.posx + this.tam/2 > width   ||  this.posx - this.tam/2 < 0)
    {
      this.velx *= (-1);
    }
    
    if(this.posy + this.tam/2 > height  ||   this.posy - this.tam/2 < 0)
    {
      this.vely *= (-1);
    }
    
    
  }
  
  
 
  
}
