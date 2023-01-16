const showcase360Degrees = document.getElementById('show-360-degrees');

let showCaseWrapper = document.getElementById("showcase-wrapper");
let spin360DegreesIcon = null;
let showcaseCloseIcon = null;
let sofaGifs = null;
let sofaImg = null;

showCaseWrapper.classList.remove('active');

showcase360Degrees.addEventListener('click', ()=> {
    spin360DegreesIcon = document.getElementById("spin-360-degrees");
    showcaseCloseIcon = document.getElementById("showcase-close-icon");
    sofaImg = document.getElementById("sofa-img");
    sofaGifs = document.getElementById("sofa-gif");

    if (!showCaseWrapper.classList.contains('active')) {
        showCaseWrapper.classList.add('active');
        sofaImg.style.display = 'none';
        spin360DegreesIcon.style.display = 'none';
        sofaGifs.style.display = 'inline-block';
        showcaseCloseIcon.style.display = 'flex';

    } else {
        showCaseWrapper.classList.remove('active');
        sofaGifs.style.display = 'none';
        showcaseCloseIcon.style.display = 'none';
        sofaImg.style.display = 'inline-block';
        spin360DegreesIcon.style.display = 'flex';
    }
});
