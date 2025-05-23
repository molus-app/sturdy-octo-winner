// Create realistic night sky
function createNightSky() {
    const container = document.body;
    
    // Create field of stars with varying sizes and brightness
    for (let i = 0; i < 300; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const rand = Math.random();
        
        if (rand < 0.4) star.classList.add('tiny');
        else if (rand < 0.7) star.classList.add('small');
        else if (rand < 0.9) star.classList.add('medium');
        else if (rand < 0.98) star.classList.add('large');
        else star.classList.add('bright');
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        container.appendChild(star);
        
        // Some stars twinkle
        if (Math.random() > 0.7) {
            star.style.animation = `twinkle ${anime.random(2, 5)}s ease-in-out infinite`;
            star.style.animationDelay = `${Math.random() * 5}s`;
        }
    }
    
    // Subtle aurora animation
    anime({
        targets: '.aurora',
        opacity: [0, 0.3, 0],
        translateY: [-20, 20],
        duration: 20000,
        easing: 'easeInOutSine',
        loop: true
    });
    
    // Milky way subtle movement
    anime({
        targets: '.milky-way',
        rotate: [-30, -25, -30],
        duration: 60000,
        easing: 'easeInOutSine',
        loop: true
    });
}

function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Random starting position in upper portion of sky
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.5;
    shootingStar.style.left = startX + 'px';
    shootingStar.style.top = startY + 'px';
    
    // Random angle between 15 and 45 degrees
    const angle = anime.random(15, 45);
    shootingStar.style.transform = `rotate(${angle}deg)`;
    
    document.body.appendChild(shootingStar);
    
    const distance = anime.random(200, 400);
    const endX = distance * Math.cos(angle * Math.PI / 180);
    const endY = distance * Math.sin(angle * Math.PI / 180);
    
    anime({
        targets: shootingStar,
        translateX: endX,
        translateY: endY,
        opacity: [0, 1, 0],
        duration: anime.random(800, 1500),
        easing: 'easeOutCubic',
        complete: () => shootingStar.remove()
    });
}

// Mouse interaction - create star glow
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const glow = document.createElement('div');
        glow.className = 'star small';
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        glow.style.position = 'fixed';
        glow.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
        document.body.appendChild(glow);
        
        anime({
            targets: glow,
            scale: [0, 1.5, 0],
            opacity: [1, 0],
            duration: 1000,
            easing: 'easeOutCubic',
            complete: () => glow.remove()
        });
    }
});

// Typewriter animation
async function typeWriter(element, text, speed = 33) {
    const textElement = element.querySelector('.text');
    const cursor = element.querySelector('.cursor');
    const caret = element.querySelector('.caret');
    
    anime({
        targets: caret,
        translateX: [-5, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
    
    for (let i = 0; i < text.length; i++) {
        textElement.textContent += text[i];
        await sleep(speed + Math.random() * 20);
    }
    
    if (cursor) {
        anime({
            targets: cursor,
            opacity: 0,
            duration: 200,
            easing: 'easeOutCubic',
            complete: () => cursor.remove()
        });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateTerminal() {
    const lines = document.querySelectorAll('.terminal-line');
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const text = line.getAttribute('data-text');
        
        line.classList.add('visible');
        
        anime({
            targets: line,
            translateX: ['-20px', '0px'],
            opacity: [0, 1],
            duration: 400,
            easing: 'easeOutCubic'
        });
        
        await typeWriter(line, text);
        
        if (i < lines.length - 1) {
            const nextLine = lines[i + 1];
            const nextText = nextLine.querySelector('.text');
            nextText.innerHTML += '<span class="cursor"></span>';
        }
        
        await sleep(133);
    }
    
    await sleep(500);
    const form = document.getElementById('signupForm');
    form.classList.add('visible');
    
    anime({
        targets: form,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutCubic'
    });
}

// Handle form submission
function handleSubmit(event) {
    const email = event.target.querySelector('.email-input').value;
    const button = event.target.querySelector('.submit-button');
    const originalText = button.textContent;
    
    // Show animation immediately
    anime({
        targets: button,
        scale: [1, 0.95, 1.05, 1],
        duration: 600,
        easing: 'easeInOutElastic(1, .6)'
    });
    
    button.textContent = 'subscribing...';
    button.disabled = true;
    
    // Create constellation burst animation
    const centerX = button.offsetLeft + button.offsetWidth / 2;
    const centerY = button.offsetTop + button.offsetHeight / 2;
    
    for (let i = 0; i < 8; i++) {
        const star = document.createElement('div');
        star.className = 'star bright';
        star.style.position = 'absolute';
        star.style.left = centerX + 'px';
        star.style.top = centerY + 'px';
        star.style.zIndex = '100';
        button.parentElement.appendChild(star);
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = anime.random(60, 120);
        
        anime({
            targets: star,
            translateX: Math.cos(angle) * distance,
            translateY: Math.sin(angle) * distance,
            scale: [0, 2, 0],
            opacity: [1, 0],
            duration: 1500,
            easing: 'easeOutCubic',
            delay: i * 50,
            complete: () => star.remove()
        });
        
        // Create connecting lines between stars
        if (i > 0) {
            const line = document.createElement('div');
            line.className = 'constellation-line';
            line.style.position = 'absolute';
            line.style.left = centerX + 'px';
            line.style.top = centerY + 'px';
            line.style.transformOrigin = 'left center';
            line.style.width = distance + 'px';
            line.style.transform = `rotate(${angle * 180 / Math.PI}deg)`;
            line.style.zIndex = '99';
            button.parentElement.appendChild(line);
            
            anime({
                targets: line,
                opacity: [0, 0.5, 0],
                scaleX: [0, 1, 1],
                duration: 1200,
                easing: 'easeOutCubic',
                delay: i * 50,
                complete: () => line.remove()
            });
        }
    }
    
    // Reset button after animation but let form submit
    setTimeout(() => {
        button.textContent = 'subscribed!';
    }, 1000);
    
    // Don't prevent default - let the form submit to Buttondown
    return true;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createNightSky();
    
    // Animate logo entrance
    anime({
        targets: '.logo-container',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1000,
        easing: 'easeOutCubic',
        complete: () => {
            // Add holographic class for subtle CSS glow animation
            document.querySelector('.logo').classList.add('holographic');
            
            // Simple, subtle floating animation
            anime({
                targets: '.logo',
                translateY: [-3, 3, -3],
                duration: 4000,
                easing: 'easeInOutSine',
                loop: true
            });
        }
    });
    
    setTimeout(() => animateTerminal(), 500);
    
    const emailInput = document.querySelector('.email-input');
    emailInput.addEventListener('focus', () => {
        anime({
            targets: emailInput,
            scale: [1, 1.02],
            duration: 200,
            easing: 'easeOutCubic'
        });
    });
    
    emailInput.addEventListener('blur', () => {
        anime({
            targets: emailInput,
            scale: [1.02, 1],
            duration: 200,
            easing: 'easeOutCubic'
        });
    });
    
    // Periodic shooting stars
    setInterval(() => {
        if (Math.random() > 0.5) {
            createShootingStar();
        }
    }, 2000);
}); 