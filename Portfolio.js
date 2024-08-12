document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
        
        // Example action: Show an alert (you might send this data to a server instead)
        alert(`Thank you for your message, ${name}! We'll get back to you at ${email}.`);
        
        // Clear the form
        contactForm.reset();
    });
});
