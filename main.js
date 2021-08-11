Webcam.set({
width:310,
height:300,
image_format:'png',
png_quality:90
});
Webcam.attach("#camera");
function takesnapshot(){
    console.log("hello")
Webcam.snap(function (data_uri){

    document.getElementById("result").innerHTML='<img src='+data_uri+' id="captured_image">'
});
}
console.log('ml5',ml5.version);
classifier=ml5.imageClassifier('MobileNet',modelLoaded)
function modelLoaded(){
    console.log("model Loaded")
    
}
function check(){
    image=document.getElementById("captured_image")
    classifier.classify(image,gotresult)
}
function gotresult(error,results)
{
    console.log(results)
    document.getElementById("object_name").innerHTML=results[0].label
}