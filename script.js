// Function for theme toggle
const themeToggleButton = document.getElementById('theme-toggle');
const headline = document.getElementById('headline');

// Check if dark mode is saved in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Add event listener to toggle dark mode
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect for welcome message
let i = 0;
const text = "Welcome to My Portfolio";
const speed = 100;

function typeWriter() {
    if (i < text.length) {
        headline.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();

// Form validation (Example for a contact form)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        if (!name) {
            alert('Name is required');
            event.preventDefault();
        }
    });
}

// Example of project filtering (you need to add project categories)
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
