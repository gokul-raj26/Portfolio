// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Custom cursor
const cursor = document.createElement('div');
const cursorFollower = document.createElement('div');
cursor.className = 'cursor';
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursor);
document.body.appendChild(cursorFollower);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    followerX += (mouseX - followerX) * 0.05;
    followerY += (mouseY - followerY) * 0.05;
    
    cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
    cursorFollower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Typing animation
const typingText = document.querySelector('.typing-text');
const roles = ['Developer', 'UI/UX Designer', 'Data Analyst', 'Problem Solver'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }
    
    setTimeout(typeRole, typeSpeed);
}

// Start typing animation after page load
setTimeout(typeRole, 1000);

// Header scroll effect
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    const scrolled = window.scrollY > 0;
    header.classList.toggle("sticky", scrolled);
    header.classList.toggle("floating", scrolled);
});

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scroll-progress-bar').style.width = scrollPercent + '%';
});

// Mobile menu toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
if (currentTheme === 'light') {
    themeIcon.classList.replace('bx-moon', 'bx-sun');
}

themeToggle.addEventListener('click', () => {
    themeToggle.classList.add('rotating');
    setTimeout(() => themeToggle.classList.remove('rotating'), 500);
    
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    if (newTheme === 'light') {
        themeIcon.classList.replace('bx-moon', 'bx-sun');
    } else {
        themeIcon.classList.replace('bx-sun', 'bx-moon');
    }
});

// Magnetic button effect
const magneticBtns = document.querySelectorAll('.magnetic-btn');

magneticBtns.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        e.target.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', (e) => {
        e.target.style.transform = 'scale(1)';
    });
    
    btn.addEventListener('mousedown', (e) => {
        e.target.classList.add('active');
    });
    
    btn.addEventListener('mouseup', (e) => {
        e.target.classList.remove('active');
    });
});

// 3D Tilt effect for cards
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');

const animateStats = () => {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
};

// Testimonials slider
const testimonialItems = document.querySelectorAll('.testimonial-item');
const navBtns = document.querySelectorAll('.nav-btn');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
    
    navBtns.forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Project modal functionality
const projectData = {
    dashboard: {
        title: 'Interactive Dashboard Creation',
        description: 'Created comprehensive dashboards using Power BI and Tableau for data visualization and business intelligence. Features include real-time data updates, interactive charts, and custom KPI tracking.',
        image: 'img/dashboard.png',
        tech: ['Power BI', 'Tableau', 'SQL', 'Excel'],
        liveLink: '#',
        githubLink: '#'
    },
    webtool: {
        title: 'Modern Web Development',
        description: 'Developed responsive web applications using modern technologies. Focus on user experience, performance optimization, and cross-browser compatibility.',
        image: 'img/web tool.jpeg',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'React'],
        liveLink: '#',
        githubLink: '#'
    },
    msoffice: {
        title: 'Professional Presentations',
        description: 'Created engaging presentations and data analysis reports using Microsoft Office suite. Specialized in data visualization and professional document design.',
        image: 'img/Ms office.jpeg',
        tech: ['PowerPoint', 'Excel', 'Word', 'Data Analysis'],
        liveLink: '#',
        githubLink: '#'
    },
    uiux: {
        title: 'UI/UX Design Projects',
        description: 'Designed user-centered interfaces with focus on usability and aesthetics. Created wireframes, prototypes, and design systems for various applications.',
        image: 'img/Ui&ux.png',
        tech: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
        liveLink: '#',
        githubLink: '#'
    },
    python: {
        title: 'Python Development',
        description: 'Developed Python applications for data analysis, automation, and web development. Experience in debugging, optimization, and project architecture.',
        image: 'img/python.png',
        tech: ['Python', 'Django', 'Flask', 'Data Science'],
        liveLink: '#',
        githubLink: '#'
    },
    sql: {
        title: 'Database Management',
        description: 'Designed and optimized database systems using SQL. Experience in data modeling, query optimization, and database administration.',
        image: 'img/Sql.jpeg',
        tech: ['MySQL', 'PostgreSQL', 'Database Design', 'Query Optimization'],
        liveLink: '#',
        githubLink: '#'
    }
};

function openProjectModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;
    
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalLiveLink').href = project.liveLink;
    document.getElementById('modalGithubLink').href = project.githubLink;
    
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('projectModal').addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeProjectModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// Portfolio filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.port');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
};

// Intersection Observer for skill bars
const skillsSection = document.querySelector('.skills');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Stats animation observer
const statsSection = document.querySelector('.stats');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading for images
const images = document.querySelectorAll('img');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// Enhanced form validation
const contactForm = document.getElementById('contact-form');
const inputGroups = contactForm.querySelectorAll('.input-group');
const inputs = contactForm.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateField(input.closest('.input-group'));
    });
    
    input.addEventListener('blur', () => {
        validateField(input.closest('.input-group'));
    });
});

function validateField(inputGroup) {
    const input = inputGroup.querySelector('input, textarea');
    const errorMessage = inputGroup.querySelector('.error-message');
    const value = input.value.trim();
    let isValid = true;
    let message = '';
    
    inputGroup.classList.remove('error');
    
    if (input.hasAttribute('required') && value === '') {
        isValid = false;
        message = 'This field is required';
    } else if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }
    
    if (!isValid) {
        inputGroup.classList.add('error');
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = '';
    }
    
    return isValid;
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.home');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});
