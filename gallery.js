$(document).ready(function(){

    $('.category').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        let filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.image').show(500);
        }
        else{
            $('.image').not('.'+filter).hide(400);
            $('.image').filter('.'+filter).show(500);
        }
    });
});

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
