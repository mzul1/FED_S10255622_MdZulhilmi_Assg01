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

function openPopup1() {
    document.getElementById('member1').style.display = 'block';
}
function closePopup1() {
    document.getElementById('member1').style.display = 'none';
}

function openPopup2() {
    document.getElementById('member2').style.display = 'block';
}
function closePopup2() {
    document.getElementById('member2').style.display = 'none';
}

function openPopup3() {
    document.getElementById('member3').style.display = 'block';
}
function closePopup3() {
    document.getElementById('member3').style.display = 'none';
}

function openPopup4() {
    document.getElementById('member4').style.display = 'block';
}
function closePopup4() {
    document.getElementById('member4').style.display = 'none';
}
