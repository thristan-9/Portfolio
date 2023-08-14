/*=============== WINDOW ===============*/

const aboutBody = document.querySelector(".about__body");
const aboutExpandWrapper = document.querySelector(".about_expand-wrapper");

function aboutExpandToggle() {
    if (aboutBody.classList.contains('accordion-open')) {
        aboutExpandWrapper.removeAttribute('style')
        aboutBody.classList.remove('accordion-open')
    } else {
        aboutExpandWrapper.style.height = aboutExpandWrapper.scrollHeight + 'px'
        aboutBody.classList.add('accordion-open')
    }
}