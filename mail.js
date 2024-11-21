const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const subjectInput = document.querySelector('#subject');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const serviceID = 'service_uy0z3zg';
const templateID = 'template_9lsaa7h';
const publicKey = 'mpARmth6m_-fb-9fH';

emailjs.init(publicKey);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputData = {
        from_name: nameInput.value,
        subject:subjectInput.value,
        user_email: emailInput.value,
        message: messageInput.value,
    };

    emailjs.send(serviceID, templateID, inputData).then(() => {
        console.log("Email sent successfully!");
        nameInput.value = '';
        subjectInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }, (error) => {
        console.error("Error sending email:", error);
    });
});


