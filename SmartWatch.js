var redButton = document.getElementById('red');
var blackButton = document.getElementById('black');
var blueButton = document.getElementById('blue');
var pinkButton = document.getElementById('pink');
var purpleButton = document.getElementById('purple');
var time = document.getElementById('time');
var heartRate = document.getElementById('heart-rate');

var interval;

redButton.addEventListener('click', function() {
    var currentImage = document.getElementById('watch-img');
    currentImage.src = "https://i.imgur.com/PTgQlim.png"
})

blackButton.addEventListener('click', function() {
    var currentImage = document.getElementById('watch-img');
    currentImage.src = "https://i.imgur.com/iOeUBV7.png"
})

blueButton.addEventListener('click', function() {
    var currentImage = document.getElementById('watch-img');
    currentImage.src = "https://i.imgur.com/Mplj1YR.png"
})

pinkButton.addEventListener('click', function() {
    var currentImage = document.getElementById('watch-img');
    currentImage.src = "https://i.imgur.com/Zygu7I3.png"
})

purpleButton.addEventListener('click', function() {
    var currentImage = document.getElementById('watch-img');
    currentImage.src = "https://i.imgur.com/xSIK4M8.png"
})

time.addEventListener('click',function(){
    var heart = document.getElementById('heart');
    var text = document.getElementById('text');
    text.style.zIndex = "200";
    heart.style.zIndex = "0";
    var intervalobj = setInterval(function(){
        var text = document.getElementById('text');
        text.style.zIndex = "200";
        var obj = new Date();
        var arr = obj.toString().split(" ");
        text.innerHTML = arr[4];
        interval = intervalobj;
    },500)
})

heartRate.addEventListener('click',function(){
    clearInterval(interval);
    var heart = document.getElementById('heart');
    var text = document.getElementById('text');
    text.style.zIndex = "0";
    heart.style.zIndex = "200";

})