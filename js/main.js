const knop = document.querySelector('.knop');
const ball = document.querySelector('.ball');

knop.addEventListener('click', function() {
    ball.style.marginTop = '700px';
    setTimeout(function() {
        ball.style.marginTop = '30px';
    }, 3250);
});