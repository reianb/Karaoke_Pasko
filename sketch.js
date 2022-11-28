var cnv;
let bckgrndimg;
let mic;
let karaokeImg;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload() {
  bckgrndimg = loadImage("assets/karaokeNoSound.png");
  karaokeImg = loadImage("assets/karaoke0.png");
}

function setup() {
  cnv = createCanvas(1000, 800);
  centerCanvas();
  imageMode(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(60);
  image(bckgrndimg,500,400);

  let micLevel = mic.getLevel();
    if(micLevel > .25){
      changeImg();
    }
}

function changeImg() {
  image(karaokeImg,500,400);
  console.log("works");
}
