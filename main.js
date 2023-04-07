nosex = 0
nosey = 0

function setup(){


    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotResult);
}

function draw(){

    image(video,0,0,400,400)
    // fill("pink");
        // circle(nosex - 135,nosey - 50,30);
        image(clown ,nosex - 145 ,nosey - 30,30,30);
}


function  take_snapshot(){
    save("myFilter.png");
}


function modelLoaded(){
    console.log("PoseNet Is Initialized");
}

function gotResult(result)
{

    if(result.length > 0)
    {
        console.log("nose x =" + result[0].pose.nose.x);
        console.log("nose y =" + result[0].pose.nose.y);
        nosex = result[0].pose.nose.x;
        nosey = result[0].pose.nose.y;
        
    }
}

function preload()
{
    clown = loadImage("https://i.postimg.cc/d1Yc2Pg3/5-57900-lip-clip-art-transparent-background-lips-png-png.jpg")

}


