document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('backgroundMusic');
    const toggleButton = document.getElementsByClassName('toggleButton')[0];

    toggleButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            audio.volume = 0.15;
        } else {
            audio.pause();
        }
    });
});

let colorImage = document.getElementsByClassName("mute")[0];
let button2 = document.getElementsByClassName("togglebutton")[0];

function changeImage() {

    if (colorImage.getAttribute('src') === "../images/mute.png") {
        colorImage.setAttribute('src', "../images/music.png");
    }
    else {
        colorImage.setAttribute('src', "../images/mute.png");
    }
}

button2.addEventListener("click", changeImage);

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

function openPopup() {
    document.getElementById('form').style.display = 'block';
}
function closePopup() {
    document.getElementById('form').style.display = 'none';
}

function openPopup2() {
    document.getElementById('form2').style.display = 'block';
}
function closePopup2() {
    document.getElementById('form2').style.display = 'none';
}
