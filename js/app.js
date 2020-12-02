// THREE FUNTIONS FOR APPEARING EFFECT WHILE SCROLLING ON THE HOMEPAGE
function scrollAppear() {
    var introText = document.querySelector('.welcome-info');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if (introPosition < screenPosition) {
        introText.classList.add('welcome-info-appear');
    } else {
        introText.classList.remove('welcome-info-appear');
    }
}

function scrollAppear2() {
    var titleShow = document.querySelector('.offer-title');
    var introShow = document.querySelector('.offer-wrapper');
    var introShowPosition = introShow.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    
    
    if (introShowPosition < screenPosition) {
        titleShow.classList.add('offer-title-appear');
        introShow.classList.add('offer-wrapper-appear');
    } else {
        titleShow.classList.remove('offer-title-appear');
        introShow.classList.remove('offer-wrapper-appear');
    }
}

function scrollAppear3() {
    var offerShow = document.querySelector('.container');
    var introOfferPosition = offerShow.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
    
    if (introOfferPosition < screenPosition) {
        offerShow.classList.add('container-appear');
    } else {
        offerShow.classList.remove('container-appear');
    }
}

function scrollAppear4() {
    var revShow = document.querySelector('.rev-section');
    var revShowPosition = revShow.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;
    
    if (revShowPosition < screenPosition) {
        revShow.classList.add('rev-section-appear');
    } else {
        revShow.classList.remove('rev-section-appear');
    }
}

window.addEventListener('scroll', scrollAppear);
window.addEventListener('scroll', scrollAppear2);
window.addEventListener('scroll', scrollAppear3);
window.addEventListener('scroll', scrollAppear4);
// 

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);