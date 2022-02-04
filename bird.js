 function Bird(){
    this.x= 50;
    this.y = height/2;

    this.flap = -12;
    this.gravity = 0.5;
    this.velocity= 0;


this.paint = function (){

fill (255);
ellipse (this.x, this.y, 32, 32);

}


this.up = function (){

this.velocity += this.flap;


}


this.fall = function(){

    this.velocity  += this.gravity; //no entiendo esta funcion debo volver a ella.
    this.y += this.velocity;        // creo que la velocidad va aumentando constantemente ya que se le suma la gravedad y asi la posicion de Y va bajando rapidamente porque cambia constantemente.



}


this.stop = function(){

    let maxdown;
    maxdown =height-15;

    let maxup;
    maxup = 0;


    if (this.y>maxdown){

        this.y = maxdown;
        this.velocity = 0;

    }


    if (this.y<maxup){

        this.y = maxup;
        this.velocity = 0;

    }


}

 }