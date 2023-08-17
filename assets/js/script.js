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