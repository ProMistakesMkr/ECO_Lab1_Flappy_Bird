
let pajaro;
function setup (){
  
createCanvas(480,720);

pajaro = new Bird;

}


function draw (){

background (0);
pajaro.fall();
pajaro.stop();
pajaro.paint();

}

function keyPressed(){

    if (key == ' '){

        pajaro.up();


    }


}