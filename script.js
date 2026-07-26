function openGift(){

    document.getElementById("startScreen").style.display="none";

    document.getElementById("mainContent").style.display="block";

    const music=document.getElementById("bgMusic");

    music.play();

}

// ===========================
// PHOTO SLIDESHOW
// ===========================

const photos = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
    "images/pic6.jpg",
    "images/pic7.jpg",
    "images/pic8.jpg",
    "images/pic9.jpg",
    "images/pic10.jpg",
    "images/pic11.jpg",
    "images/pic12.jpg",
    "images/pic13.jpg",
    "images/pic14.jpg",
    "images/pic15.jpg",
    "images/pic16.jpg",
    "images/pic17.jpg",
    "images/pic18.jpg",
    "images/pic19.jpg",
    "images/pic20.jpg",
    "images/pic21.jpg",
    "images/pic22.jpg",
    "images/pic23.jpg",
    "images/pic24.jpg",
    "images/pic25.jpg",
    "images/pic26.jpg",
    "images/pic27.jpg",
    "images/pic28.jpg",
    "images/pic29.jpg",
    "images/pic30.jpg",
    "images/pic31.jpg",
    "images/pic32.jpg",
    "images/pic33.jpg",
    "images/pic34.jpg",
    "images/pic35.jpg",
    "images/pic36.jpg",
    "images/pic37.jpg",
    "images/pic38.jpg",
    "images/pic39.jpg",
    "images/pic40.jpg",
    "images/pic41.jpg",
    "images/pic42.jpg",
    "images/pic43.jpg",
    "images/pic44.jpg",
    "images/pic45.jpg",
    "images/pic46.jpg",
    "images/pic47.jpg",
    "images/pic48.jpg",
    "images/pic49.jpg",
    "images/pic50.jpg"
];

let currentPhoto = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    slide.src = photos[currentPhoto];

}, 3000);

// ===========================
// SURPRISE POPUP
// ===========================

function showSurprise() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// ===========================
// BLOW CANDLE
// ===========================

function blowCandle() {

    const flame = document.getElementById("flame");

    flame.style.display = "none";

    setTimeout(() => {

        alert("🎉 Happy Birthday! 🎂\n\nMay all your wishes come true! ❤️");

        startConfetti();

    },800);

}

// ===========================
// FLOATING HEARTS
// ===========================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*25) + "px";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },7000);

}

setInterval(createHeart,350);

// ===========================
// CONFETTI
// ===========================

function startConfetti(){

    for(let i=0;i<180;i++){

        createConfetti();

    }

}

function createConfetti(){

    const confetti = document.createElement("div");

    confetti.style.position="fixed";

    confetti.style.width="10px";

    confetti.style.height="10px";

    confetti.style.left=Math.random()*100+"vw";

    confetti.style.top="-20px";

    confetti.style.backgroundColor=randomColor();

    confetti.style.opacity="0.9";

    confetti.style.zIndex="9999";

    confetti.style.borderRadius="50%";

    confetti.style.transition="transform 4s linear, top 4s linear";

    document.body.appendChild(confetti);

    setTimeout(()=>{

        confetti.style.top="110vh";

        confetti.style.transform=`translateX(${Math.random()*200-100}px) rotate(720deg)`;

    },50);

    setTimeout(()=>{

        confetti.remove();

    },4500);

}

// ===========================
// RANDOM COLORS
// ===========================

function randomColor(){

    const colors=[

        "#ff4081",
        "#ffeb3b",
        "#03a9f4",
        "#4caf50",
        "#ff5722",
        "#9c27b0",
        "#00bcd4",
        "#e91e63"

    ];

    return colors[Math.floor(Math.random()*colors.length)];

}

// ===========================
// FIREWORKS
// ===========================

function fireworks(){

    for(let i=0;i<12;i++){

        setTimeout(()=>{

            explosion();

        },i*350);

    }

}

function explosion(){

    const x=Math.random()*window.innerWidth;

    const y=Math.random()*window.innerHeight/2;

    for(let i=0;i<35;i++){

        const dot=document.createElement("div");

        dot.style.position="fixed";

        dot.style.width="8px";

        dot.style.height="8px";

        dot.style.borderRadius="50%";

        dot.style.background=randomColor();

        dot.style.left=x+"px";

        dot.style.top=y+"px";

        dot.style.zIndex="9999";

        dot.style.transition="all 1.5s ease-out";

        document.body.appendChild(dot);

        const angle=Math.random()*360;

        const distance=80+Math.random()*100;

        const dx=Math.cos(angle*Math.PI/180)*distance;

        const dy=Math.sin(angle*Math.PI/180)*distance;

        setTimeout(()=>{

            dot.style.transform=`translate(${dx}px,${dy}px)`;

            dot.style.opacity="0";

        },30);

        setTimeout(()=>{

            dot.remove();

        },1800);

    }

}

// ===========================
// AUTO FIREWORKS
// ===========================

setInterval(()=>{

    fireworks();

},9000);

// ===========================
// PLAY MUSIC
// ===========================

window.onload=function(){

    const music=document.getElementById("bgMusic");

    music.volume=0.5;

    music.play().catch(()=>{

        console.log("Autoplay blocked by browser.");

    });

}