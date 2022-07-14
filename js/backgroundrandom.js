
function randomBackground (){
    const images = [
        'url("../BACKGROUNDS/BACKGROUND01.png")',
        'url("../BACKGROUNDS/BACKGROUND02.png")',
        'url("../BACKGROUNDS/BACKGROUND03.png")',
        'url("../BACKGROUNDS/BACKGROUND04.png")',
        'url("../BACKGROUNDS/BACKGROUND05.png")',
        'url("../BACKGROUNDS/BACKGROUND06.png")',
        'url("../BACKGROUNDS/BACKGROUND07.png")',
        'url("../BACKGROUNDS/BACKGROUND08.png")',
        'url("../BACKGROUNDS/BACKGROUND09.png")',
        'url("../BACKGROUNDS/BACKGROUND10.png")',
        'url("../BACKGROUNDS/BACKGROUND11.png")',
        'url("../BACKGROUNDS/BACKGROUND12.png")',
        'url("../BACKGROUNDS/BACKGROUND13.png")',
        'url("../BACKGROUNDS/BACKGROUND14.png")',
        'url("../BACKGROUNDS/BACKGROUND15.png")',
        'url("../BACKGROUNDS/BACKGROUND16.png")',
        'url("../BACKGROUNDS/BACKGROUND17.png")',
        'url("../BACKGROUNDS/BACKGROUND18.png")',
        'url("../BACKGROUNDS/BACKGROUND19.png")',
        'url("../BACKGROUNDS/BACKGROUND20.png")',
        'url("../BACKGROUNDS/BACKGROUND21.png")',
        'url("../BACKGROUNDS/BACKGROUND22.png")',
        'url("../BACKGROUNDS/BACKGROUND23.png")',
        'url("../BACKGROUNDS/BACKGROUND24.png")',
        'url("../BACKGROUNDS/BACKGROUND25.png")',
        'url("../BACKGROUNDS/BACKGROUND26.png")',
        'url("../BACKGROUNDS/BACKGROUND27.png")',
        'url("../BACKGROUNDS/BACKGROUND28.png")',
        'url("../BACKGROUNDS/BACKGROUND29.png")',
        'url("../BACKGROUNDS/BACKGROUND30.png")',
        'url("../BACKGROUNDS/BACKGROUND31.png")',
        'url("../BACKGROUNDS/BACKGROUND32.png")',
        'url("../BACKGROUNDS/BACKGROUND33.png")',
        'url("../BACKGROUNDS/BACKGROUND34.png")',
        'url("../BACKGROUNDS/BACKGROUND35.png")',
        'url("../BACKGROUNDS/BACKGROUND36.png")',
        'url("../BACKGROUNDS/BACKGROUND37.png")',
        'url("../BACKGROUNDS/BACKGROUND38.png")',
        'url("../BACKGROUNDS/BACKGROUND39.png")',
        'url("../BACKGROUNDS/BACKGROUND40.png")',
    ]
    const section = document.querySelector('body')
    const bg = images[Math.floor(Math.random()*images.length)];
    section.style.backgroundImage = bg;
}

window.addEventListener("load", (e) => {
randomBackground();
});