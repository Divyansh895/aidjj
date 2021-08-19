song="";


function setup() {
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    
}

function modelLoaded() {
    console.log('PoseNet is Initialized'
    );
}

function  draw() {
    image(video,0,0,600,500);

    fill("#FF0000");
    stroke("#FF0000");

}

function preload() {
    song=loadSound("jadi buti.mp3");
}


function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function stop() {
    song.pause();
    song.setVolume(0);
    song.rate(0);
}

