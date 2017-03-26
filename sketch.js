var Puff = [];
var button = [];

//Puff text
function preload(){
  Puff = loadStrings("assets/Puff.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight); //You can controle the size of the canvas

 for (var i = 0; i < 10; i++) {
  button[i] = createButton('Please Enter'); //Create button named "Please Enter"
  button[i].position(); //Position of the button
  button[i].mousePressed(addText); //Add text when mouse is pressed

  }
}

function draw() {
	button[0].position(10, 10);
  button[1].position(110, 10);
  button[2].position(210, 10);
  button[3].position(310, 10);
  button[4].position(410, 10);
  button[5].position(510, 10);
  button[6].position(610, 10);
  button[7].position(710, 10);
  button[8].position(810, 10);
  button[9].position(910, 10);

}
//Options for the textstyle
function addText(){
  textStyle(ITALIC); //Kursiv
  textSize(20);
  fill(102, 153, 153);
  stroke(0, 153, 115);
  strokeWeight(2);

 var ind = floor(random(Puff.length));
  text(Puff[0], random(width), random(height), random(width), random(height));
//Random since the mouse is used to click on the buttons

  shuffle(Puff, true);
 }
