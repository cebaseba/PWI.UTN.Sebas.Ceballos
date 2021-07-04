const $button = document.querySelector('.dark-light');
const $body = document.querySelector('body');
let click = 0;
$button.addEventListener('click', function() {
    // console.log("Hicieron click en el botón");
    $body.classList.toggle('dark');
    console.log(click);
    click++;
    if (click > 10) {
        alert('Eres una persona ansiosa');
    }
});

