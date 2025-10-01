// Splash Screen
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
  document.getElementById("musicBtn").style.display = "block";
});

// Timeline (Roadmap)
const timelineData = [
  { "date": "2023", "event": "I had a crush on him ❤️" },
  { "date": "Dec 12, 2023", "event": "He held my cake 🎂" },
  { "date": "Oct 5, 2024", "event": "We started playing Roblox 🎮" },
  { "date": "Oct 6, 2024", "event": "We started communicating 💬" },
  { "date": "Oct 7, 2024", "event": "We invited each other to play 🕹️" },
  { "date": "Nov 15, 2024", "event": "Our first TikTok together 🎥" },
  { "date": "Nov 20, 2024", "event": "I celebrated his birthday 🎉" },
  { "date": "Dec 10, 2024", "event": "Our first date 💕" },
  { "date": "Dec 12, 2024", "event": "First holding hands 🤝" },
  { "date": "Dec 12, 2024", "event": "He celebrated my birthday 🎂" },
  { "date": "Dec 12, 2024", "event": "First photobooth 📸" },
  { "date": "Feb 13, 2024", "event": "He asked me to be his Valentine 💘" },
  { "date": "Feb 14, 2024", "event": "First kiss on cheek 😘" },
  { "date": "Mar 8, 2024", "event": "First kiss on lips 💋" },
  { "date": "Apr 25, 2024", "event": "He officially asked to court me 🎉" },
  { "date": "to Present", "event": "Still loving each other 💖" }
];

const timelineContainer = document.querySelector(".timeline");
timelineData.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "timeline-item " + (index % 2 === 0 ? "left" : "right");
  div.innerHTML = `
    <div class="content">
      <h3>${item.date}</h3>
      <p>${item.event}</p>
    </div>
  `;
  timelineContainer.appendChild(div);
});

// Background Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let playing = false;
musicBtn.addEventListener("click", () => {
  if (playing) {
    music.pause();
    musicBtn.textContent = "🎶 Play Music";
  } else {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  }
  playing = !playing;
});

// Navigation
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = e.target.getAttribute("data-page");
    document.querySelectorAll(".page").forEach(sec => sec.classList.remove("active"));
    document.getElementById(page).classList.add("active");
  });
});
// Gallery
const gallery = document.getElementById("photoGallery");
const photos = [
  "dec.jpeg","jan.jpg","feb.png","mar.jpg",
  "apr.jpg","may.jpg","jun.jpg","jul.jpg","aug.png"
]; 

photos.forEach(pic => {
  const img = document.createElement("img");
  img.src = "img/" + pic;
  gallery.appendChild(img);

  // click to open lightbox
  img.addEventListener("click", () => {
    document.querySelector("#lightbox img").src = img.src;
    document.getElementById("lightbox").style.display = "flex";
  });
});

// close lightbox when clicked
document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").style.display = "none";
});


// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 800);

// Custom Songs Player
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const progressBar = document.getElementById("progress-bar");
const currentSong = document.getElementById("current-song");
const songButtons = document.querySelectorAll(".song");

songButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const songSrc = btn.getAttribute("data-src");
    audioPlayer.src = songSrc;
    currentSong.textContent = btn.textContent;
    audioPlayer.play();
  });
});

playBtn.addEventListener("click", () => audioPlayer.play());
pauseBtn.addEventListener("click", () => audioPlayer.pause());

audioPlayer.addEventListener("timeupdate", () => {
  if (!isNaN(audioPlayer.duration)) {
    progressBar.max = audioPlayer.duration;
    progressBar.value = audioPlayer.currentTime;
  }
});

progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = progressBar.value;
});
// --- HOME PAGE SLIDESHOW ---
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow .slide");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}
setInterval(showSlides, 3000); // every 3 seconds

