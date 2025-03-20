document.addEventListener('DOMContentLoaded', function() {
    // Toggle password visibility
    const togglePassword = document.querySelector('.toggle-password');
    const passwordField = document.querySelector('input[type="password"]');
    
    togglePassword.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
    
    // Button animation on click
    const submitBtn = document.querySelector('.submit-btn');
    
    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Simulate form submission (add your actual form submission logic here)
        this.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
        setTimeout(() => {
            this.innerHTML = '<i class="fa-solid fa-check"></i> Success!';
            this.style.background = 'linear-gradient(to right, #32CD32, #228B22)';
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.innerHTML = 'Login';
                this.style.background = 'linear-gradient(to right, #667eea, #764ba2)';
            }, 2000);
        }, 1500);
    });
    
    // Add more floating elements dynamically for background animation
    const bgAnimation = document.querySelector('.bg-animation');
    
    // Create additional floating elements for a more dynamic background
    for (let i = 0; i < 5; i++) {
        const li = document.createElement('li');
        
        // Randomize properties for more natural movement
        const size = Math.random() * 60 + 10;
        const positionLeft = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 20 + 10;
        const opacity = Math.random() * 0.2 + 0.1;
        
        li.style.width = `${size}px`;
        li.style.height = `${size}px`;
        li.style.left = `${positionLeft}%`;
        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${duration}s`;
        li.style.background = `rgba(255, 255, 255, ${opacity})`;
        
        bgAnimation.appendChild(li);
    }
});