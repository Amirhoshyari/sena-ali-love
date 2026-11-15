
// تاریخ آشنایی سنا و علی
const startDate = new Date(2025, 10, 15, 0, 0, 0);

// شمارشگر عاشقانه
function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    const timer = document.getElementById("timer");

    if (!timer) return;

    if (difference < 0) {
        timer.textContent = "به زودی داستان ما آغاز می‌شود ❤️";
        return;
    }

    const seconds = Math.floor(difference / 1000);

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    timer.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            gap:12px;
            direction:rtl;
            margin-top:20px;
        ">
            ${createTimeBox(days, "روز")}
            ${createTimeBox(hours, "ساعت")}
            ${createTimeBox(minutes, "دقیقه")}
            ${createTimeBox(remainingSeconds, "ثانیه")}
        </div>
    `;
}

function createTimeBox(value, label) {
    return `
        <div style="
            min-width:75px;
            padding:15px 10px;
            border:1px solid rgba(255,79,145,.4);
            background:rgba(255,79,145,.10);
            border-radius:15px;
            box-shadow:0 0 20px rgba(255,79,145,.08);
        ">
            <div style="font-size:28px;font-weight:800;color:#ff83b5;">
                ${value}
            </div>
            <div style="font-size:13px;color:#c7aeba;">
                ${label}
            </div>
        </div>
    `;
}

updateTimer();
setInterval(updateTimer, 1000);


// قلب‌های شناور
function createFloatingHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 11000);
}

setInterval(createFloatingHeart, 650);


// نامه عاشقانه
function openLetter() {
    const message = `
سنا و علی ❤️

بعضی داستان‌ها با یک سلام شروع می‌شوند،
اما ارزششان به تمام لحظه‌هایی است که بعد از آن می‌سازیم.

امیدواریم هر روزمان،
یک دلیل تازه برای لبخند زدن داشته باشد.

با عشق،
از طرف هر دوی ما ♥
    `;

    alert(message);
}


// حرکت نرم به بخش‌های سایت
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

console.log("Sena & Ali Love Website is running ❤️");

function toggleEnvelope() {
    const envelope = document.getElementById("loveEnvelope");

    if (envelope) {
        envelope.classList.toggle("open");
    }
}

// کنترل کامل موسیقی سنا و علی

const loveAudio = document.getElementById("loveAudio");
const musicToggle = document.getElementById("musicToggle");
const musicProgress = document.getElementById("musicProgress");
const volumeControl = document.getElementById("volumeControl");
const currentTimeDisplay = document.getElementById("currentTime");
const durationDisplay = document.getElementById("duration");
const musicCover = document.querySelector(".music-cover");

if (
    loveAudio &&
    musicToggle &&
    musicProgress &&
    volumeControl
) {
    // تنظیم صدای اولیه
    loveAudio.volume = Number(volumeControl.value);

    // تبدیل زمان به دقیقه و ثانیه
    function formatMusicTime(time) {
        if (!Number.isFinite(time)) return "00:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return (
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0")
        );
    }

    // پخش و توقف موسیقی
    musicToggle.addEventListener("click", async function () {
        if (loveAudio.paused) {
            try {
                await loveAudio.play();
            } catch (error) {
                console.error("خطا در پخش موسیقی:", error);
                alert("فایل موسیقی پیدا نشد یا قابل پخش نیست.");
            }
        } else {
            loveAudio.pause();
        }
    });

    // تغییر ظاهر دکمه هنگام پخش یا توقف
    loveAudio.addEventListener("play", function () {
        musicToggle.textContent = "⏸ توقف موسیقی";

        if (musicCover) {
            musicCover.classList.add("playing");
        }
    });

    loveAudio.addEventListener("pause", function () {
        musicToggle.textContent = "▶ پخش موسیقی";

        if (musicCover) {
            musicCover.classList.remove("playing");
        }
    });

    // نمایش مدت زمان آهنگ
    loveAudio.addEventListener("loadedmetadata", function () {
        durationDisplay.textContent =
            formatMusicTime(loveAudio.duration);
    });

    // به‌روزرسانی نوار پیشرفت
    loveAudio.addEventListener("timeupdate", function () {
        if (Number.isFinite(loveAudio.duration)) {
            musicProgress.value =
                (loveAudio.currentTime / loveAudio.duration) * 100;
        }

        currentTimeDisplay.textContent =
            formatMusicTime(loveAudio.currentTime);
    });

    // جلو و عقب بردن آهنگ
    musicProgress.addEventListener("input", function () {
        if (Number.isFinite(loveAudio.duration)) {
            loveAudio.currentTime =
                (Number(musicProgress.value) / 100) *
                loveAudio.duration;
        }
    });

    // تنظیم صدا
    volumeControl.addEventListener("input", function () {
        loveAudio.volume = Number(volumeControl.value);
    });

    // پایان آهنگ
    loveAudio.addEventListener("ended", function () {
        musicProgress.value = 0;
        currentTimeDisplay.textContent = "00:00";
    });

    console.log("Music Player Ready ❤️");
}
