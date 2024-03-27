const toggleButton = document.querySelector('.toggle-btn');
const hamburger = document.querySelector('#hamburger');
const links = document.querySelector('.nav-links');
const link = document.querySelectorAll('#page');
const homeLogo = document.querySelector('#home');

hamburger.addEventListener('click', function(e) {
    hamburger.classList.toggle('close');
});

homeLogo.addEventListener("click", function () {
    if (links.classList.contains("show-links")) {
      hamburger.classList.toggle('close');
      links.classList.remove("show-links");
    }
});
  
toggleButton.addEventListener('click', function () {
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
    } else {
        links.classList.add('show-links');
    }

    event.preventDefault()
});

link.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.toggle("close");
    links.classList.remove("show-links");
} 

// Page Transition //
document.addEventListener("DOMContentLoaded", () => {
    const anchors = document.querySelectorAll('#page'); 
    const homeLink = document.querySelector('#home');
  
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
  
      anchor.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target.href;
  
        setTimeout(() => { 
          window.location.href = target; 
        }, 400)
      });
    }

    homeLink.addEventListener('click', e => {
       e.preventDefault();
       let currentTarget = e.currentTarget.href;
    
       setTimeout(() => {
          window.location.href = currentTarget;
        }, 400)
    }); 
});
  
  
