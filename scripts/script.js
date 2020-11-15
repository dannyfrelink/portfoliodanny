
var skillsOvermij = document.querySelector('main>section>div');
var contentPortfolio = document.querySelector('.portfolio main>article');
var mainPortfolio = document.querySelector('.portfolio main>section');


function contentSkillsWeergeven () {
    var scrollY = window.scrollY;

    if (scrollY >=100) {
        skillsOvermij.classList.add('infadenSection');
    }
    else {
        skillsOvermij.classList.remove('infadenSection');
    }
}
function tekstPortfolioUitfaden () {
    var scrollX = mainPortfolio.scrollLeft;

    if (window.screen.width >= 768) {
        if (scrollX >= 400) {
            contentPortfolio.classList.add('uitfaden');
        }
        else {
            contentPortfolio.classList.remove('uitfaden');
        }
    }
    else {
        if (scrollX >= 30) {
            contentPortfolio.classList.add('uitfaden');
        }
        else {
            contentPortfolio.classList.remove('uitfaden');
        }
    }
}


window.addEventListener('scroll', contentSkillsWeergeven);
mainPortfolio.addEventListener('scroll', tekstPortfolioUitfaden);

