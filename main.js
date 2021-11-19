noseX = 0;
noseY= 0;
difference = 0;
rightWristX = 0;
rightWristY = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);   
    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose',gotPoses);
}
function modelloaded(){
    console.log("Model Loaded!");
    
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("noseX = "+ noseX + "noseY = "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "differnce = " + difference);

    }
}
function draw(){
    document.getElementById("square_side").innerHTML = "Width And Height Of A Square Will Be = " + difference + "px";
    background("#ffe0ff");
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}