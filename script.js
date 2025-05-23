// Create sketch pad doodles
function createSketchPad() {
    const container = document.body;
    
    // Array of simple doodles using text/symbols that look hand-drawn
    const doodles = [
        '○', '◇', '◯', '△', '▽', '◻', '◊', '♡', '☆', '★',
        '→', '←', '↑', '↓', '↗', '↘', '↙', '↖', '⟲', '⟳',
        '~', '≈', '∼', '〜', '⌢', '⌣', '⩙', '⩚', '∿', '≋',
        '✓', '✗', '!', '?', '&', '@', '#', '%', '$', '+',
        '※', '✧', '✦', '✶', '✸', '❀', '❁', '❃', '❅', '❆'
    ];
    
    // Create field of doodles with varying sizes and opacity
    for (let i = 0; i < 250; i++) {
        const doodle = document.createElement('div');
        doodle.className = 'doodle';
        doodle.textContent = doodles[Math.floor(Math.random() * doodles.length)];
        
        const rand = Math.random();
        
        if (rand < 0.4) doodle.classList.add('tiny');
        else if (rand < 0.7) doodle.classList.add('small');
        else if (rand < 0.9) doodle.classList.add('medium');
        else if (rand < 0.98) doodle.classList.add('large');
        else doodle.classList.add('bright');
        
        doodle.style.left = Math.random() * 100 + '%';
        doodle.style.top = Math.random() * 100 + '%';
        container.appendChild(doodle);
        
        // Some doodles gently float
        if (Math.random() > 0.6) {
            doodle.style.animation = `float ${anime.random(4, 8)}s ease-in-out infinite`;
            doodle.style.animationDelay = `${Math.random() * 5}s`;
        }
        
        // Some doodles wiggle slightly
        if (Math.random() > 0.8) {
            doodle.style.animation = `sketch-wiggle ${anime.random(3, 6)}s ease-in-out infinite`;
            doodle.style.animationDelay = `${Math.random() * 3}s`;
        }
    }
}

function createFloatingSketch() {
    const sketch = document.createElement('div');
    sketch.className = 'sketch-element';
    
    // Random sketchy elements
    const sketchElements = ['⟶', '⤴', '⤵', '↝', '↜', '⇝', '⇜', '⟿', '⤷', '⤶'];
    sketch.textContent = sketchElements[Math.floor(Math.random() * sketchElements.length)];
    
    // Random starting position
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight * 0.7;
    sketch.style.left = startX + 'px';
    sketch.style.top = startY + 'px';
    
    // Random angle for movement
    const angle = anime.random(-30, 30);
    sketch.style.transform = `rotate(${angle}deg)`;
    
    document.body.appendChild(sketch);
    
    const distance = anime.random(150, 300);
    const endX = distance * Math.cos(angle * Math.PI / 180) * 0.5;
    const endY = distance * Math.sin(angle * Math.PI / 180) * 0.5;
    
    anime({
        targets: sketch,
        translateX: endX,
        translateY: endY,
        opacity: [0, 0.4, 0],
        rotate: angle + anime.random(-10, 10),
        duration: anime.random(2000, 4000),
        easing: 'easeOutCubic',
        complete: () => sketch.remove()
    });
}

// Mouse interaction - create sketch marks
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.97) {
        const mark = document.createElement('div');
        mark.className = 'doodle tiny';
        mark.textContent = Math.random() > 0.5 ? '·' : '°';
        mark.style.left = e.clientX + 'px';
        mark.style.top = e.clientY + 'px';
        mark.style.position = 'fixed';
        mark.style.opacity = '0.3';
        document.body.appendChild(mark);
        
        anime({
            targets: mark,
            scale: [0, 1.2, 0.8],
            opacity: [0.3, 0],
            duration: 1500,
            easing: 'easeOutCubic',
            complete: () => mark.remove()
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
    
    // Create simple success animation
    const centerX = button.offsetLeft + button.offsetWidth / 2;
    const centerY = button.offsetTop + button.offsetHeight / 2;
    
    // Create a checkmark that appears
    const checkmark = document.createElement('div');
    checkmark.className = 'doodle bright';
    checkmark.textContent = '✓';
    checkmark.style.position = 'absolute';
    checkmark.style.left = (centerX + 30) + 'px';
    checkmark.style.top = (centerY - 10) + 'px';
    checkmark.style.zIndex = '100';
    checkmark.style.fontSize = '20px';
    checkmark.style.opacity = '0';
    button.parentElement.appendChild(checkmark);
    
    // Animate checkmark
    anime({
        targets: checkmark,
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1.2, 1.2, 0.8],
        rotate: [0, 5, -5, 0],
        duration: 2000,
        easing: 'easeOutCubic',
        complete: () => checkmark.remove()
    });
    
    // Create a few simple scattered doodles
    const simpleDoodles = ['○', '~', '♡'];
    
    for (let i = 0; i < 3; i++) {
        const doodle = document.createElement('div');
        doodle.className = 'doodle small';
        doodle.textContent = simpleDoodles[i];
        doodle.style.position = 'absolute';
        
        // Random position around the button
        const offsetX = anime.random(-40, 40);
        const offsetY = anime.random(-30, 30);
        doodle.style.left = (centerX + offsetX) + 'px';
        doodle.style.top = (centerY + offsetY) + 'px';
        doodle.style.zIndex = '99';
        doodle.style.opacity = '0';
        button.parentElement.appendChild(doodle);
        
        // Animate each doodle gently
        anime({
            targets: doodle,
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0.8],
            rotate: anime.random(-15, 15),
            duration: 1500,
            easing: 'easeOutCubic',
            delay: i * 200,
            complete: () => doodle.remove()
        });
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
    createSketchPad();
    
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
            
            // Subtle shake animation like hand-drawn sketches
            const logoShakeAnimation = anime({
                targets: '.logo',
                translateX: [0, 1, -1, 0.5, -0.5, 0],
                translateY: [0, 0.5, -0.5, 1, -1, 0],
                rotate: [0, 0.5, -0.5, 0.3, -0.3, 0],
                duration: 3000,
                easing: 'easeInOutSine',
                loop: true
            });
            
            // Add 3D flip interactions
            const logo = document.querySelector('.logo');
            let isFlipping = false;
            
            // Helper function to perform 3D flip
            function performFlip() {
                if (isFlipping) return;
                isFlipping = true;
                
                // Pause the shake animation during flip
                logoShakeAnimation.pause();
                
                anime({
                    targets: '.logo',
                    rotateY: [0, 180, 360],
                    scale: [1, 1.1, 1],
                    duration: 800,
                    easing: 'easeInOutCubic',
                    complete: () => {
                        isFlipping = false;
                        // Resume shake animation
                        logoShakeAnimation.play();
                    }
                });
            }
            
            // Mouse hover (desktop)
            logo.addEventListener('mouseenter', () => {
                if (!isFlipping) {
                    anime({
                        targets: '.logo',
                        rotateY: '15deg',
                        scale: 1.05,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                }
            });
            
            logo.addEventListener('mouseleave', () => {
                if (!isFlipping) {
                    anime({
                        targets: '.logo',
                        rotateY: '0deg',
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                }
            });
            
            // Click interaction (desktop)
            logo.addEventListener('click', performFlip);
            
            // Touch interactions (mobile)
            logo.addEventListener('touchstart', (e) => {
                e.preventDefault(); // Prevent mouse events on mobile
                performFlip();
            });
            
            // Add cursor pointer for better UX
            logo.style.cursor = 'pointer';
            logo.style.transformStyle = 'preserve-3d';
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
            createFloatingSketch();
        }
    }, 2000);
}); 