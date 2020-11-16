
// Over mij pagina
var skillsOvermij = document.querySelector('main>section>div');
var pijlScroll = document.querySelector('main>img');

// Portfolio pagina
var contentPortfolioIntro = document.querySelector('.portfolio main>article:first-of-type');
var contentPortfolioOutro = document.querySelector('.portfolio main>article:nth-of-type(2)')
var mainPortfolio = document.querySelector('.portfolio main>section');


// Over mij pagina
function contentSkillsWeergeven () {
    var scrollY = window.scrollY;

    if (scrollY >=100) {
        skillsOvermij.classList.add('infadenSection');
    }
    else {
        skillsOvermij.classList.remove('infadenSection');
    }
}
function pijlUitfaden () {
    var scrollY = window.scrollY;

    if (scrollY >=10) {
        pijlScroll.classList.add('pijlUitfaden');
    }
    else {
        pijlScroll.classList.remove('pijlUitfaden');
    }
}

// Portfolio pagina
function tekstPortfolioUitfaden () {
    var scrollX = mainPortfolio.scrollLeft;

    if (window.screen.width >= 768) {
        if (scrollX >= 400) {
            contentPortfolioIntro.classList.add('tekstUitfaden');
        }
        else {
            contentPortfolioIntro.classList.remove('tekstUitfaden');
        }
    }
    else {
        if (scrollX >= 30) {
            contentPortfolioIntro.classList.add('tekstUitfaden');
        }
        else {
            contentPortfolioIntro.classList.remove('tekstUitfaden');
        }
    }
}
function tekstPortfolioInfaden () {
    var scrollX = mainPortfolio.scrollLeft;

    if (window.screen.width >= 768) {
        if (scrollX >= 5600) {
            contentPortfolioOutro.classList.add('tekstInfaden');
        }
        else {
            contentPortfolioOutro.classList.remove('tekstInfaden');
        }
    }
    else {
        if (scrollX >= 2050) {
            contentPortfolioOutro.classList.add('tekstInfaden');
        }
        else {
            contentPortfolioOutro.classList.remove('tekstInfaden');
        }
    }
}


// Over mij pagina
window.addEventListener('scroll', contentSkillsWeergeven);
window.addEventListener('scroll', pijlUitfaden);

// Portfolio pagina
mainPortfolio.addEventListener('scroll', tekstPortfolioUitfaden);
mainPortfolio.addEventListener('scroll', tekstPortfolioInfaden);

