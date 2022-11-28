var cnv;
let bckgrndimg;
let mic;
let karaokeImg0;
let karaokeImg1;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload() {
  bckgrndimg = loadImage("assets/karaokeNoSound.png");
  karaokeImg0 = loadImage("assets/karaoke0.png");
  karaokeImg1 = loadImage("assets/karaoke1.png");
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
    if(micLevel > .05 && micLevel < .25){
      lowVol();
    } else if(micLevel > .25 && micLevel <.45){
      medVol();
    }

}

function lowVol() {
  image(karaokeImg0,500,400);
}

function medVol() {
  image(karaokeImg0,500,400);
}
