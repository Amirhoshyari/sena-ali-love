
// ❤️ تاریخ شروع عشق سنا و علی
// ۲۴ آبان ۱۴۰۴ = ۱۵ نوامبر ۲۰۲۵
const startDate = new Date(2025, 10, 15, 0, 0, 0);

// شمارشگر زنده عشق
function updateCounter() {
    const now = new Date();

    let difference = now - startDate;

    if (difference < 0) {
        document.getElementById("counter").innerText =
            "هنوز داستان عشق ما شروع نشده ❤️";
        return;
    }

    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("counter").innerHTML = `
        <div>${days} روز ❤️</div>
        <div>${hours} ساعت | ${minutes} دقیقه | ${seconds} ثانیه</div>
    `;
}

updateCounter();
setInterval(updateCounter, 1000);


// 💕 ساخت قلب های شناور
function createHeart() {
    const heartsContainer = document.getElementById("hearts");

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const symbols = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerText =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    const duration = 5 + Math.random() * 5;

    heart.style.animationDuration = duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 500);


// 💌 نامه عاشقانه
function openLetter() {
    const letter = document.getElementById("letter-text");

    letter.innerHTML = `
        سنا جان... ❤️<br><br>

        از روزی که وارد زندگی من شدی،
        دنیا برایم قشنگ‌تر شد.<br>

        تو همان اتفاق زیبایی هستی
        که دوست دارم هر روز دوباره تجربه‌اش کنم.<br><br>

        امیدوارم داستان ما هیچ‌وقت تمام نشود.<br><br>

        دوستت دارم، تا بی‌نهایت... ♾️❤️<br><br>

        با عشق، علی
    `;

    letter.style.color = "#e91e63";
    letter.style.fontWeight = "700";
}
