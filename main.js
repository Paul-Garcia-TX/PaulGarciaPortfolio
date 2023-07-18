// particles
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
let hue = 0;
canvas.classList.add('blur-effect');

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x:undefined,
    y:undefined,
}

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 10; i++){
     particleArray.push(new Particle());
    }
});

canvas.addEventListener('mousemove', function(){
    // for (let i = 0; i < 2; i++){
    //     particleArray.push(new Particle());
    //    }
    mouse.x = event.x;
    mouse.y = event.y;
})

class Particle{
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        // if(this.size > 0.2) this.size -= 0.1;
        if(this.x > canvas.width || this.y>canvas.height||this.y<0){
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 15 + 1;
        }
    }
    
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init(){
    for (let i = 0; i < 300; i++){
        particleArray.push(new Particle());
    }
}
init();

function handleParticles(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();

        if(particleArray[i].size <= 0.3){
            particleArray.splice(i, 1);
            console.log(particleArray.length);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    // ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    handleParticles();
    hue+=2;
    requestAnimationFrame(animate);
  }
animate();

// particles end
// scroll reveal

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('.show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// type text
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Full Stack Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Great Team Player";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Dallas Stars Fan";
    }, 8000);
};

textLoad();
setInterval(textLoad, 12000);

const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
});

const gdit = document.getElementById('GD');

gdit.addEventListener("click", function(e){
    gdit.classList.toggle('is-flipped');
});
const insight = document.getElementById('IG');

insight.addEventListener("click", function(e){
    insight.classList.toggle('is-flipped');
});
const spear = document.getElementById('spear');

spear.addEventListener("click", function(e) {
    spear.classList.toggle('is-flipped');
});
const GS = document.getElementById('GS');

GS.addEventListener('click', function(e){
    GS.classList.toggle('is-flipped');
});
const ASU = document.getElementById('ASU');

ASU.addEventListener('click', function(e){
    ASU.classList.toggle('is-flipped');
});
const airForce = document.getElementById('airForce');

airForce.addEventListener('click', function(e) {
    airForce.classList.toggle('is-flipped');    
});


// Immediately invoke the handleToggle function on page load


const toggleMode = document.querySelector('nav input');
toggleMode.addEventListener('change', handleToggle);

function handleToggle(event) {
  const body = document.querySelector('body');
  const nav = document.querySelector('nav');
  const card = document.querySelector('.card');
  const text = document.querySelector('text');
  const cardFace = document.querySelector('.card__face--front');

  if (event.target.checked) {
    // Add the dark-mode class and remove the light-mode class
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    nav.classList.add('dark-mode');
    nav.classList.remove('light-mode');
    card.classList.add('dark-mode');
    card.classList.remove('light-mode');
    text.classList.add('dark-mode');
    text.classList.remove('light-mode');
    cardFace.classList.add('dark-mode');
    cardFace.classList.remove('light-mode');
  } else {
    // Add the light-mode class and remove the dark-mode class
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    nav.classList.add('light-mode');
    nav.classList.remove('dark-mode');
    card.classList.add('light-mode');
    card.classList.remove('dark-mode');
    text.classList.add('light-mode');
    text.classList.remove('dark-mode');
    cardFace.classList.add('light-mode');
    cardFace.classList.remove('dark-mode');
  }
}
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', function(e){
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
})

const list = document.querySelectorAll('.menu li');

function addActiveClass() {
  this.classList.add('active');
}

function removeActiveClass() {
  this.classList.remove('active');
}

list.forEach((item) => {
  item.addEventListener('mouseenter', addActiveClass);
  item.addEventListener('mouseleave', removeActiveClass);
});


