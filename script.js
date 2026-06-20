/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").style.display = "none";

    }, 2000);

});

/* ===========================
   TYPING EFFECT
=========================== */

const text = "Hi, Radhika ❤️";

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,120);

    }

}

typeWriter();

/* ===========================
   SCROLL BUTTON
=========================== */

document
.getElementById("scrollBtn")
.addEventListener("click",()=>{

document
.getElementById("story")
.scrollIntoView({

behavior:"smooth"

});

});

/* ===========================
   LOVE COUNTER
=========================== */

const counterStartDate = new Date("2025-06-09T00:00:00");

function updateLoveCounter() {

    const now = new Date();
    const diff = now - counterStartDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const loveCounter = document.getElementById("loveCounter");

    if (loveCounter) {
        loveCounter.innerHTML = days + " Days Together ❤️";
    }

}

updateLoveCounter();

setInterval(updateLoveCounter, 60000);


/* ===========================
   SURPRISE BUTTON
=========================== */

const surpriseBtn = document.getElementById("surpriseBtn");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", () => {
        alert("❤️ I Love You, Radhika ❤️");
    });

}


/* ===========================
   FLOATING HEARTS
=========================== */

const heartContainer = document.querySelector(".hearts-container");

function createHeart() {

    if (!heartContainer) return;

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.opacity = "0.7";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 6s linear, opacity 6s linear";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = "translateY(-110vh)";
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 800);


/* ===========================
   GALLERY LIGHTBOX
=========================== */

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-lightbox");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

if (
    galleryImages.length &&
    lightbox &&
    lightboxImg &&
    closeBtn &&
    prevBtn &&
    nextBtn
) {

    let currentIndex = 0;

    galleryImages.forEach((img, index) => {

        img.addEventListener("click", () => {

            currentIndex = index;
            showImage();
            lightbox.classList.add("active");

        });

    });

    function showImage() {

        lightboxImg.src = galleryImages[currentIndex].src;

    }

    closeBtn.addEventListener("click", () => {

        lightbox.classList.remove("active");

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.classList.remove("active");

        }

    });

    nextBtn.addEventListener("click", () => {

        currentIndex = (currentIndex + 1) % galleryImages.length;
        showImage();

    });

    prevBtn.addEventListener("click", () => {

        currentIndex =
            (currentIndex - 1 + galleryImages.length) % galleryImages.length;

        showImage();

    });

    document.addEventListener("keydown", (e) => {

        if (!lightbox.classList.contains("active")) return;

        if (e.key === "Escape") {

            lightbox.classList.remove("active");

        }

        if (e.key === "ArrowRight") {

            currentIndex = (currentIndex + 1) % galleryImages.length;
            showImage();

        }

        if (e.key === "ArrowLeft") {

            currentIndex =
                (currentIndex - 1 + galleryImages.length) % galleryImages.length;

            showImage();

        }

    });

}


/* ===========================
   LOVE TIMER
=========================== */

const timerStartDate = new Date("2024-10-07T00:00:00");

function updateLoveTimer() {

    const now = new Date();

    const diff = now - timerStartDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (document.getElementById("days")) {

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

    }

}

updateLoveTimer();

setInterval(updateLoveTimer, 1000);

/* ===========================
   TYPEWRITER LOVE LETTER
=========================== */

const letter = `Hii Princess ❤️,

Mujhe pata hai shayad aap soch rahi hongi, "Ye kya website bana di?" 😅

Par mere liye ye sirf ek website nahi hai.

Jab aap 10 din ke liye nani ke ghar gayi thi na, tab mujhe aapki bahut yaad aati thi. Main shayad itna achhe se bol nahi pata, par sach me har din aapki kami mehsoos hoti thi.

Us waqt jab bhi aapki yaad aati thi, main is website par kaam karne baith jaata tha. Pata hi nahi chalta tha ki 3–4 ghante kab nikal gaye. Dheere-dheere ye sirf ek project nahi raha... ye meri feelings ka ek chhota sa hissa ban gaya.

Is website ko banane me lagbhag 7–8 din lage aur total 12+ hours se bhi zyada time laga. Har section, har photo aur har chhoti si detail isliye add ki, kyunki ye sab mujhe hamari yaad dilati thi.

Mujhe nahi pata ye duniya ki sabse achhi website hai ya nahi... lekin itna zaroor pata hai ki isme maine apna poora dil laga diya hai. ❤️

I hope aapko ye pasand aayegi.

Aur jab bhi kabhi meri yaad aaye... bas is website ko ek baar khol lena. Shayad isme aapko meri thodi si presence mehsoos ho. 🥹

Forever Yours,
Daksh ❤️`;

const letterElement = document.getElementById("letterText");

if (letterElement) {

    let index = 0;

    function typeLetter() {

        if (index < letter.length) {

            if (letter[index] === "\n") {
                letterElement.innerHTML += "<br>";
            } else {
                letterElement.innerHTML += letter[index];
            }

            index++;
            setTimeout(typeLetter, 28);

        }

    }

    typeLetter();

}

/* Scroll Animation */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-section");

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.classList.add("hidden-section");

    observer.observe(section);

});

// =====================
// MUSIC PLAYER
// =====================

window.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");

    let playing = false;

    musicBtn.addEventListener("click", async () => {

        if (!playing) {

            try{
                await music.play();

                musicBtn.innerHTML = "⏸ Perfect - Ed Sheeran ❤️";
                musicBtn.classList.add("playing");

                playing = true;

            }catch(error){

                console.log(error);

            }

        } else {

            music.pause();

            musicBtn.innerHTML = "🎵 Play Our Song ❤️";
            musicBtn.classList.remove("playing");

            playing = false;

        }

    });

});
// ===========================
// REASONS
// ===========================

const reasons = [

"❤️ Reason #1 - Because your smile can make my worst day feel better.",

"❤️ Reason #2 - Because you said 'Yes' on 7 October 2024, and my life changed forever.",

"❤️ Reason #3 - Because talking to you feels like home.",

"❤️ Reason #4 - Because your happiness matters to me more than my own.",

"❤️ Reason #5 - Because even your little anger looks cute.",

"❤️ Reason #6 - Because you always make ordinary days special.",

"❤️ Reason #7 - Because every notification from you makes me smile.",

"❤️ Reason #8 - Because you make distance feel smaller.",

"❤️ Reason #9 - Because your voice is my favourite sound.",

"❤️ Reason #10 - Because I can never get tired of talking to you.",

"❤️ Reason #11 - Because every memory with you is precious.",

"❤️ Reason #12 - Because you make me want to become a better person.",

"❤️ Reason #13 - Because you understand me without me saying much.",

"❤️ Reason #14 - Because you support me in ways you don't even realize.",

"❤️ Reason #15 - Because I love the way you care about me.",

"❤️ Reason #16 - Because every moment spent with you becomes my favourite memory.",

"❤️ Reason #17 - Because your presence brings peace to my heart.",

"❤️ Reason #18 - Because you are the first person I want to tell everything to.",

"❤️ Reason #19 - Because your laugh is one of my favourite things in this world.",

"❤️ Reason #20 - Because life became more beautiful after you came into it.",

"❤️ Reason #21 - Because I miss you even when we talked five minutes ago.",

"❤️ Reason #22 - Because you make my future look beautiful.",

"❤️ Reason #23 - Because loving you feels effortless.",

"❤️ Reason #24 - Because you are my favourite person, every single day.",

"❤️ Reason #25 - Because every day I find a new reason to love you.",

"❤️ Reason #26 - Because your good morning messages make my mornings brightest.",

"❤️ Reason #27 - Because you make me smile without even trying.",

"❤️ Reason #28 - Because your presence makes everything feel better.",

"❤️ Reason #29 - Because you always stay in my thoughts.",

"❤️ Reason #30 - Because I can be my true self with you.",

"❤️ Reason #31 - Because your eyes tell stories without words.",

"❤️ Reason #32 - Because every day with you teaches me something about love.",

"❤️ Reason #33 - Because you make my heart feel safe.",

"❤️ Reason #34 - Because your kindness inspires me.",

"❤️ Reason #35 - Because I love making you smile.",

"❤️ Reason #36 - Because your little habits are adorable.",

"❤️ Reason #37 - Because every call with you feels too short.",

"❤️ Reason #38 - Because you are my biggest comfort.",

"❤️ Reason #39 - Because you always make my heart race.",

"❤️ Reason #40 - Because I love dreaming about our future.",

"❤️ Reason #41 - Because you make waiting worth it.",

"❤️ Reason #42 - Because you are the most beautiful part of my life.",

"❤️ Reason #43 - Because your hugs (even imagined ones) make everything okay.",

"❤️ Reason #44 - Because I trust you with my heart.",

"❤️ Reason #45 - Because you make love feel easy.",

"❤️ Reason #46 - Because every moment with you becomes a beautiful memory.",

"❤️ Reason #47 - Because you make me laugh even on difficult days.",

"❤️ Reason #48 - Because you accept me the way I am.",

"❤️ Reason #49 - Because I love hearing your name.",

"❤️ Reason #50 - Because meeting you was the best thing that ever happened to me.",

"❤️ Reason #51 - Because every day I fall in love with you a little more.",

"❤️ Reason #52 - Because you are my favourite hello and my hardest goodbye.",

"❤️ Reason #53 - Because you make every ordinary moment unforgettable.",

"❤️ Reason #54 - Because I always look forward to talking to you.",

"❤️ Reason #55 - Because you make my heart feel complete.",

"❤️ Reason #56 - Because your happiness automatically becomes my happiness.",

"❤️ Reason #57 - Because even when you're far away, you still feel close to my heart.",

"❤️ Reason #58 - Because I love the way you care about little things.",

"❤️ Reason #59 - Because your smile is my favourite view.",

"❤️ Reason #60 - Because you make me believe in forever.",

"❤️ Reason #61 - Because I never get bored of listening to you.",

"❤️ Reason #62 - Because you make every memory more beautiful.",

"❤️ Reason #63 - Because you make me laugh when I need it the most.",

"❤️ Reason #64 - Because every 'I miss you' from you means the world to me.",

"❤️ Reason #65 - Because your love gives me strength.",

"❤️ Reason #66 - Because I feel lucky every single day that I have you.",

"❤️ Reason #67 - Because I love the way you make me feel special.",

"❤️ Reason #68 - Because you are my favourite dream that came true.",

"❤️ Reason #69 - Because life is simply better with you in it.",

"❤️ Reason #70 - Because you make me excited about the future.",

"❤️ Reason #71 - Because your messages can instantly change my mood.",

"❤️ Reason #72 - Because every second spent with you is precious.",

"❤️ Reason #73 - Because I never want to stop making memories with you.",

"❤️ Reason #74 - Because you are my biggest blessing.",

"❤️ Reason #75 - Because loving you is the easiest thing I have ever done.",

"❤️ Reason #76 - Because you are the first person I think about when I wake up.",

"❤️ Reason #77 - Because you are the last person I think about before I sleep.",

"❤️ Reason #78 - Because every dream feels better when you're in it.",

"❤️ Reason #79 - Because you make my heart feel at peace.",

"❤️ Reason #80 - Because your love gives me confidence.",

"❤️ Reason #81 - Because every day with you is a new adventure.",

"❤️ Reason #82 - Because I love the way you make me feel understood.",

"❤️ Reason #83 - Because you are my favourite part of every day.",

"❤️ Reason #84 - Because I never have to pretend when I'm with you.",

"❤️ Reason #85 - Because even silence feels comfortable with you.",

"❤️ Reason #86 - Because your love has changed me for the better.",

"❤️ Reason #87 - Because I love every little thing that makes you... you.",

"❤️ Reason #88 - Because I can't imagine my future without you.",

"❤️ Reason #89 - Because no distance can ever change how I feel about you.",

"❤️ Reason #90 - Because I love creating memories with you.",

"❤️ Reason #91 - Because I still remember the day you said 'Yes' on 7 October 2024 ❤️.",

"❤️ Reason #92 - Because every second of building this website reminded me of you.",

"❤️ Reason #93 - Because every photo of you makes me smile.",

"❤️ Reason #94 - Because you are my biggest motivation.",

"❤️ Reason #95 - Because you are my best friend as well as the love of my life.",

"❤️ Reason #96 - Because I always want to see you smiling.",

"❤️ Reason #97 - Because you make my world brighter just by existing.",

"❤️ Reason #98 - Because I choose you today, tomorrow, and every day after that.",

"❤️ Reason #99 - Because loving you is my favourite thing to do.",

"❤️ Reason #100 - Because no matter how many reasons I write, I'll always find one more reason to love you. Forever. ❤️"

];

// ===========================
// 100 REASONS
// ===========================

const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");
const finalMessage = document.getElementById("finalMessage");

let currentReason = 0;

reasonBtn.addEventListener("click", () => {

    reasonNumber.innerHTML = `❤️ Reason ${currentReason + 1} / ${reasons.length}`;

    reasonText.innerHTML = reasons[currentReason];

    currentReason++;

    if (currentReason >= reasons.length) {

        reasonBtn.style.display = "none";

        finalMessage.style.display = "block";

    }

});

// ===============================
// OPEN WHEN LETTERS
// ===============================

function toggleLetter(number){

    const letter = document.getElementById("letter" + number);

    if(letter.style.display === "block"){

        letter.style.display = "none";

    }else{

        letter.style.display = "block";

    }

}

// ===============================
// FLOATING ROSE PETALS
// ===============================

const petalsContainer = document.querySelector(".petals-container");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌹";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
    (6 + Math.random()*5) + "s";

    petal.style.fontSize =
    (18 + Math.random()*14) + "px";

    petalsContainer.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,1200);

// ===============================
// DARK MODE
// ===============================

const themeToggle = document.getElementById("themeToggle");

// Pehle saved theme load karo
if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");
    themeToggle.innerHTML = "☀️";

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeToggle.innerHTML = "☀️";

        localStorage.setItem("theme","dark");

    }else{

        themeToggle.innerHTML = "🌙";

        localStorage.setItem("theme","light");

    }

});

// ===============================
// FINAL SURPRISE
// ===============================

const surpriseOverlay = document.getElementById("surpriseOverlay");
const surpriseText = document.getElementById("surpriseText");
const closeSurprise = document.getElementById("closeSurprise");

// Agar surpriseBtn pehle se bana hua hai to usi ko use karo
// Naya const surpriseBtn mat banao

const surpriseLetter = `Dear Princess ❤️

Thank you...

For every smile.

For every laugh.

For every memory.

For every moment.

Thank you for choosing me.

If life gives me another chance...

I'll still choose you.

Again...

Again...

And Again...

I Love You ❤️

Forever Yours,

Daksh ❤️`;

surpriseBtn.addEventListener("click", () => {

    surpriseOverlay.style.display = "flex";

    surpriseText.innerHTML = "";

    let i = 0;

    const typing = setInterval(() => {

        surpriseText.innerHTML += surpriseLetter.charAt(i);

        i++;

        if (i >= surpriseLetter.length) {

            clearInterval(typing);

        }

    }, 35);

});

closeSurprise.addEventListener("click", () => {

    surpriseOverlay.style.display = "none";

});

// ===============================
// VOICE MESSAGE
// ===============================

const voiceBtn = document.getElementById("voiceBtn");
const voiceAudio = document.getElementById("voiceAudio");
const voiceThanks = document.getElementById("voiceThanks");

let isVoicePlaying = false;

voiceBtn.addEventListener("click", async () => {

    if(!isVoicePlaying){

        await voiceAudio.play();

        voiceBtn.innerHTML = "⏸ Pause";

        isVoicePlaying = true;

    }else{

        voiceAudio.pause();

        voiceBtn.innerHTML = "▶ Open This ❤️";

        isVoicePlaying = false;

    }

});

voiceAudio.addEventListener("ended",()=>{

    voiceBtn.innerHTML = "❤️ Played";

    voiceBtn.disabled = true;

    voiceThanks.style.display = "block";

    isVoicePlaying = false;

});