

song1 = "";
song2 = "";
LEFTWX = 0;
RIGHTWX = 0;
LEFTWY = 0;
RIGHTWY = 0;
SLW = 0;
SRW = 0;

 function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
 }

 function setup(){
    Canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }

 function modelLoaded()
{
   console.log("posenet is loaded -ish");
}

function gotPoses(){
   if(result,length > 0){
      console.log(results);
      scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftwrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = "+ scoreRightWrist + "ScoreLeftWrist = " + scoreLeftwrist);

      leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
   }
}
 function draw() {
    image(video, 0, 0, 600, 500);
    canvas = createCanvas();
    song1 = song1;
    
    fill("red");
    stroke("red");
   

    if (SLW > 0.2){
      circle(LeftWristX,lwftwristY,20);
      song2.stop();
      if (song1==false){
         song1.play();
         document.getElementById("song_name").innerHTML = "SONG1 NAME"
      }
    }
    if (SRW > 0.2){
      circle(rightWristX,rightwristY,20);
      song1.stop();
      if (song2==false){
         song2.play();
         document.getElementById("song_name").innerHTML = "SONG2 NAME"
      }
    }
 }