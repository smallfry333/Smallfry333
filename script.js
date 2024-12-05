document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

const themeToggleButton = document.getElementById('theme-toggle');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// Add event listener to the theme toggle button
themeToggleButton.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');


    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    if (!name) {
        alert('Name is required');
        event.preventDefault();
    }
});


let i = 0;
const text = "Welcome to My Portfolio";
const speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("headline").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();
