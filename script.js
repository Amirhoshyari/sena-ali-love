
// ======================================
// سایت عاشقانه سنا و علی ❤️
// ======================================


// تاریخ آشنایی: ۲۴ آبان ۱۴۰۴
const startDate = new Date(2025, 10, 15, 0, 0, 0);


// ======================================
// شمارشگر عاشقانه
// ======================================

function createTimeBox(value, label) {
    return `
        <div style="
            min-width:75px;
            padding:15px 10px;
            border:1px solid rgba(255,79,145,.4);
            background:rgba(255,79,145,.10);
            border-radius:15px;
        ">
            <div style="font-size:28px;font-weight:800;color:#ff83b5">
                ${value}
            </div>
            <div style="font-size:13px;color:#c7aeba">
                ${label}
            </div>
        </div>
    `;
}

function updateTimer() {
    const timer = document.getElementById("timer");

    if (!timer) return;

    const difference = Date.now() - startDate.getTime();

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

updateTimer();
setInterval(updateTimer, 1000);


// ======================================
// قلب‌های شناور
// ======================================

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

setInterval(createFloatingHeart, 900);


// ======================================
// نامه عاشقانه
// ======================================

function openLetter() {
    alert(
        "سنا و علی ❤️\n\n" +
        "بعضی داستان‌ها با یک سلام شروع می‌شوند،\n" +
        "اما ارزششان به تمام لحظه‌هایی است که می‌سازیم.\n\n" +
        "بهترین قسمت داستان ما،\n" +
        "صفحه‌هایی است که هنوز نرسیده‌اند...\n\n" +
        "با عشق، از طرف هر دوی ما ♥"
    );
}


// ======================================
// باز و بسته کردن پاکت نامه
// ======================================

function toggleEnvelope() {
    const envelope = document.getElementById("loveEnvelope");

    if (envelope) {
        envelope.classList.toggle("open");
    }
}


// ======================================
// پخش‌کننده موسیقی
// ======================================

document.addEventListener("DOMContentLoaded", function () {

    const audio = document.getElementById("loveAudio");
    const toggle = document.getElementById("musicToggle");
    const progress = document.getElementById("musicProgress");
    const volume = document.getElementById("volumeControl");

    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");
    const cover = document.getElementById("musicCover");
    const status = document.getElementById("musicStatus");

    if (!audio || !toggle || !progress || !volume || !status) {
        console.error("Music player elements not found.");
        return;
    }

    // مسیر مستقیم فایل موسیقی
    const AUDIO_URL = new URL(
        "./love-song.mp3",
        document.baseURI
    ).href;

    audio.pause();
    audio.removeAttribute("src");

    audio.src = AUDIO_URL;
    audio.preload = "auto";
    audio.load();

    audio.volume = Number(volume.value);

    console.log("Music URL:", AUDIO_URL);

    // تبدیل زمان
    function formatTime(seconds) {

        if (!Number.isFinite(seconds)) {
            return "00:00";
        }

        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);

        return (
            String(min).padStart(2, "0") +
            ":" +
            String(sec).padStart(2, "0")
        );
    }

    // بارگذاری اطلاعات آهنگ
    audio.addEventListener("loadedmetadata", function () {

        if (duration) {
            duration.textContent = formatTime(audio.duration);
        }

        status.textContent = "آهنگ آماده پخش است ❤️";

    });

    // آماده شدن برای پخش
    audio.addEventListener("canplay", function () {

        status.textContent = "آهنگ آماده پخش است ❤️";

    });

    // شروع بارگذاری
    audio.addEventListener("loadstart", function () {

        status.textContent = "در حال بارگذاری آهنگ... 🎵";

    });

    // خطای بارگذاری
    audio.addEventListener("error", function () {

        const errorCode = audio.error ? audio.error.code : 0;

        console.error("Audio error code:", errorCode);
        console.error("Audio URL:", audio.currentSrc);

        if (errorCode === 2) {
            status.textContent =
                "خطای ارتباط با سرور؛ اینترنت را بررسی کن.";
        }
        else if (errorCode === 3) {
            status.textContent =
                "خطای رمزگشایی فایل موسیقی.";
        }
        else if (errorCode === 4) {
            status.textContent =
                "فرمت یا آدرس فایل موسیقی قابل پخش نیست.";
        }
        else {
            status.textContent =
                "خطای بارگذاری آهنگ؛ دوباره تلاش کن.";
        }

    });

    // دکمه پخش و توقف
    toggle.addEventListener("click", async function () {

        if (audio.paused) {

            toggle.disabled = true;
            status.textContent = "در حال آماده‌سازی آهنگ...";

            try {

                await audio.play();

                status.textContent =
                    "در حال پخش موسیقی عاشقانه ❤️";

            } catch (error) {

                console.error("Playback error:", error);

                status.textContent =
                    "خطای پخش: " +
                    error.name +
                    " - " +
                    error.message;

            } finally {

                toggle.disabled = false;

            }

        } else {

            audio.pause();

        }

    });

    // شروع پخش
    audio.addEventListener("play", function () {

        toggle.textContent = "⏸ توقف موسیقی";

        status.textContent =
            "در حال پخش موسیقی عاشقانه ❤️";

        if (cover) {
            cover.classList.add("playing");
        }

    });

    // توقف پخش
    audio.addEventListener("pause", function () {

        toggle.textContent = "▶ پخش موسیقی";

        if (cover) {
            cover.classList.remove("playing");
        }

    });

    // به‌روزرسانی زمان
    audio.addEventListener("timeupdate", function () {

        if (
            Number.isFinite(audio.duration) &&
            audio.duration > 0
        ) {

            progress.value =
                (audio.currentTime / audio.duration) * 100;

        }

        if (currentTime) {
            currentTime.textContent =
                formatTime(audio.currentTime);
        }

    });

    // تغییر موقعیت آهنگ
    progress.addEventListener("input", function () {

        if (
            Number.isFinite(audio.duration) &&
            audio.duration > 0
        ) {

            audio.currentTime =
                (Number(progress.value) / 100) * audio.duration;

        }

    });

    // کنترل صدا
    volume.addEventListener("input", function () {

        audio.volume = Number(volume.value);

    });

    // پایان آهنگ
    audio.addEventListener("ended", function () {

        progress.value = 0;

        if (currentTime) {
            currentTime.textContent = "00:00";
        }

        toggle.textContent = "▶ پخش دوباره";

        status.textContent =
            "آهنگ تمام شد؛ دوباره گوش کن ❤️";

        if (cover) {
            cover.classList.remove("playing");
        }

    });

});


// ======================================
// حرکت نرم بین بخش‌های سایت
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

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
