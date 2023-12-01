
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


function openModal(largeImageSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');

    modal.style.display = 'flex';
    modalImage.src = largeImageSrc;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
