
var skillsOvermij = document.querySelector('main>section>div');
var contentProjecten = document.querySelector('.projecten main>article');
var mainProjecten = document.querySelector('.projecten main>section');


function contentSkillsWeergeven () {
    var scrollY = window.scrollY;

    if (scrollY >=100) {
        skillsOvermij.classList.add('infadenSection');
    }
    else {
        skillsOvermij.classList.remove('infadenSection');
    }
}
function tekstProjectenUitfaden () {
    var scrollX = mainProjecten.scrollLeft;

    if (window.screen.width >= 768) {
        if (scrollX >= 400) {
            contentProjecten.classList.add('uitfaden');
        }
        else {
            contentProjecten.classList.remove('uitfaden');
        }
    }
    else {
        if (scrollX >= 30) {
            contentProjecten.classList.add('uitfaden');
        }
        else {
            contentProjecten.classList.remove('uitfaden');
        }
    }
}


window.addEventListener('scroll', contentSkillsWeergeven);
mainProjecten.addEventListener('scroll', tekstProjectenUitfaden);

