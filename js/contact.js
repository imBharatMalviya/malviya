// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                gotra: document.getElementById('gotra').value,
                location: document.getElementById('location').value,
                purpose: document.getElementById('purpose').value,
                message: document.getElementById('message').value
            };
            
            // In a real implementation, this would send data to a server
            // For now, we'll just show a success message
            console.log('Form submitted:', formData);
            
            // Show success message
            const currentLang = localStorage.getItem('language') || 'en';
            const successMessage = currentLang === 'en' 
                ? 'Thank you for contacting us! We will get back to you soon.' 
                : 'हमसे संपर्क करने के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।';
            
            alert(successMessage);
            
            // Reset form
            contactForm.reset();
        });
    }
});

