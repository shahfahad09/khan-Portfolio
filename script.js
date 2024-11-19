// Toggle mobile menu
function myMenuFunction() {
    const menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}

// "Download CV" 
const downloadButtons = document.querySelectorAll(".btn");

// Function resume downloded 
function downloadResume() {
    const filePath = 'shahfahad.pdf'; // Resume file path
    const a = document.createElement('a');
    a.href = filePath;
    a.download = 'Shahfhahd_khan_resume.pdf'; // Downloaded file ka naam
    a.click();
}

// Sabhi buttons par click event listener add kar rahe hain
downloadButtons.forEach(button => {
    if (button.textContent.includes("Download CV")) {
        button.addEventListener("click", downloadResume);
    }
});



//hire buttom function 

function openEmail() {
    // आपके email address को यहाँ पर define करें
    const receiverEmail = 'khannishu522@gmail.com';
    const subject = 'Hiring Inquiry'; // Optional subject
    const body = 'Hello, I am interested in your services.'; // Optional body text

    // `mailto` link generate करना
    window.location.href = `mailto:${receiverEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}







// Add shadow to the header on scroll
window.onscroll = function() {
    const navHeader = document.getElementById("header");
    const scrollThreshold = 50;

    if (document.documentElement.scrollTop > scrollThreshold) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
    }
};

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize typing effect
new Typed(".typedText", {
    strings: ["Student","Become  ML Engineer "],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

// Initialize ScrollReveal animations
const scrollRevealOptions = {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
};
ScrollReveal().reveal('.featured-text-card', scrollRevealOptions);
ScrollReveal().reveal('.featured-name', { delay: 100 });
ScrollReveal().reveal('.featured-text-info', { delay: 200 });
ScrollReveal().reveal('.featured-text-btn', { delay: 200 });
ScrollReveal().reveal('.social_icons', { delay: 200 });
ScrollReveal().reveal('.featured-image', { delay: 300 });

// Initialize left and right animations
ScrollReveal().reveal('.about-info', { ...scrollRevealOptions, origin: 'left', delay: 100 });
ScrollReveal().reveal('.contact-info', { ...scrollRevealOptions, origin: 'left', delay: 100 });
ScrollReveal().reveal('.skills-box', { ...scrollRevealOptions, origin: 'right', delay: 100 });
ScrollReveal().reveal('.form-control', { ...scrollRevealOptions, origin: 'right', delay: 100 });

// Active link highlight on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id');

        const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);
