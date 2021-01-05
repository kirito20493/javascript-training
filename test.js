var img = ['./img/product5Item1.png','./img/product5Item2.png','./img/product5Item3.png'];
var num = 0;
var time = 2000;

function next() {
    var slider = document.getElementById("sliderID");
    num++;
    if(num >= img.length) {
        num = 0;
    }
    slider.src = img[num];
}

function prev() {
    var slider = document.getElementById("sliderID");
    num--;
    if(num < 0) {
        num = img.length-1;
    }
    slider.src = img[num];
}

function changeImage(){
    var slider = document.getElementById("sliderID");
    num++;
    if(num >= img.length) {
        num = 0;
    }
    slider.src = img[num];

    setTimeout(changeImage,time);
}



