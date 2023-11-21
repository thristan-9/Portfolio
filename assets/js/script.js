/*=============== About expand ===============*/

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

/*=============== show scrollup ===============*/

const scrollup = () => {
    const scrollup = document.getElementById('scroll-up')
    this.scrollY >= 350 ?
        scrollup.classList.add('show-scroll')
        :
        scrollup.classList.remove('show-scroll')
}

window.addEventListener("scroll", scrollup, false);


/*=============== EMail ===============*/

const contactForm = document.getElementById("contact-form"),
        contactMessage = document.getElementById("contact-message");
    
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_3sssnvd", "template_qfderfk", "#contact-form", "hcGC8xD7_6muwcAQY")
    .then(() => {
        contactMessage.textContent = "Message sent successfully ✅";

        setTimeout(() => {
            contactMessage.textContent = "";
        }, 4000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
    })
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 150,
    // reset: true
})

sr.reveal(`.home__data`, { delay: 100 })
sr.reveal(`.projects__data`, { delay: 250 })
sr.reveal(`.about__data`, { delay: 250, origin: 'left' })
sr.reveal(`.contact__data`, { delay: 250, origin: 'right' })