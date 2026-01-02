//toggle dropdown
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');  // toggle dropdown
    toggle.classList.toggle('open'); // hamburger → X
});



// Set current year dynamically
document.getElementById('year').textContent = new Date().getFullYear();


//side bar display 
const scrollBar = document.getElementById('scroll-bar')
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollBar.style.opacity='1';
    scrollBar.style.pointerEvents = 'auto';
  }else {
    scrollBar.style.opacity='0';
    scrollBar.style.pointerEvents = 'none'
  }
})

/* ABOUT ME ANIMATION*/
const aboutBoxes = document.querySelectorAll('#about .box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.1 });

aboutBoxes.forEach(box => {
  box.style.animationPlayState = 'paused'; // start paused
  observer.observe(box);
});



/* WORK ANIMATION*/
const workBoxes = document.querySelectorAll('#work .box');

const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer1.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.1 });

workBoxes.forEach(box => {
  box.style.animationPlayState = 'paused'; // start paused
  observer1.observe(box);
});

/* PROJECTS ANIMATION*/
const projectCards = document.querySelectorAll('.projects-grid .project-card');

const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer2.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.1 });

projectCards.forEach(card => {
  card.style.animationPlayState = 'paused'; // start paused
  observer2.observe(card);
});



/* */
const contactBoxes = document.querySelectorAll('#contact .box');

const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.animationPlayState = 'running';
      observer3.unobserve(entry.target); // animate only once
    }
  });
}, { threshold: 0.1 });

contactBoxes.forEach(box => {
  box.style.animationPlayState = 'paused'; // start paused
  observer3.observe(box);
});
