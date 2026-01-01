const typingElement = document.querySelector('.typing');
const homeDesc = document.querySelector('.home-desc');

const text = "Hello, I'm ";
const name = "Ella Truong..."; // name in pink and bigger
let index = 0;
let nameIndex = 0;

function typeIntro() {
  // Type "Hello, I'm "
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeIntro, 150);
  } else {
    // Type the name in a span
    if (nameIndex === 0) {
      typingElement.innerHTML += '<span class="highlight"></span>';
    }
    if (nameIndex < name.length) {
      const span = typingElement.querySelector('.highlight');
      span.textContent += name.charAt(nameIndex);
      nameIndex++;
      setTimeout(typeIntro, 150);
    } else {
      // Typing finished, show description
      homeDesc.style.transition = "opacity 0.5s";
      homeDesc.style.opacity = 1;
    }
  }
}

typeIntro();



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
