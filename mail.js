const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const subjectInput = document.querySelector('#subject');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const serviceID = 'service_9dxy18k';
const templateID = 'template_u3hl74j';
const publicKey = 'ux58CH5EHJSxbx4wd';

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


