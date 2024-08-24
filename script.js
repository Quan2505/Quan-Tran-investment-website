document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle'); // Make sure this matches your button's ID
    const body = document.body;

    // Theme toggle functionality
    themeToggle.addEventListener('click', function () {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light'); // Save theme preference to localStorage
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark'); // Save theme preference to localStorage
        }
    });

    // Check local storage for theme preference and apply it
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
    }
});

    emailjs.init("_E-NJnLR8lek9JvqI");  

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();  

        
        emailjs.send("service_llfxzhq", "template_xvf54q6", {  
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            formResponse.classList.remove('hidden');
            formResponse.classList.add('show');
            formResponse.textContent = "Thank you! Your message has been sent.";
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            formResponse.classList.remove('hidden');
            formResponse.classList.add('show');
            formResponse.classList.add('error');
            formResponse.textContent = "Oops! Something went wrong. Please try again.";
        });
    });

