// --- 1. TILNI ALMASHTIRISH (UZ / ЎЗ) ---
const btnUz = document.getElementById('btn-uz');
const btnOz = document.getElementById('btn-oz');

const headerText = document.getElementById('header-text');
const namesText = document.getElementById('names-text');
const dateText = document.getElementById('date-text');
const translationText = document.getElementById('translation-text');
const btnText = document.getElementById('btn-text');

const languages = {
    uz: {
        header: "SIZGA TAKLIFNOMA KELDI",
        names: "Muhammadjon & <br> Mahliyoxon",
        date: "02 • 08 • 2026",
        translation: '"Va U ularning qalblarini birlashtirdi"',
        btn: "OCHISH"
    },
    oz: {
        header: "СИЗГА ТАКЛИФНОМА КЕЛДИ",
        names: "Муҳаммаджон & <br> Маҳлиёхон",
        date: "02 • 08 • 2026",
        translation: '"Ва У уларнинг қалбларини бирлаштирди"',
        btn: "ОЧИШ"
    }
};

// UZ bosilganda
btnUz.addEventListener('click', () => {
    btnUz.classList.add('active');
    btnOz.classList.remove('active'); // ЎЗ dan aktivlikni olib tashlaydi
    changeLanguage('uz');
});

// ЎЗ bosilganda
btnOz.addEventListener('click', () => {
    btnOz.classList.add('active');
    btnUz.classList.remove('active'); // UZ dan aktivlikni to'g'ri olib tashlaydi (Xatolik tuzatildi!)
    changeLanguage('oz');
});

function changeLanguage(lang) {
    headerText.textContent = languages[lang].header;
    namesText.innerHTML = languages[lang].names;
    dateText.textContent = languages[lang].date;
    translationText.textContent = languages[lang].translation;
    btnText.textContent = languages[lang].btn;
}
// --- 2. QULFNI SURIB SAHIFANI OCHISH (SWIPE TO UNLOCK) ---
const lock = document.getElementById('drag-lock');
const container = document.getElementById('btn-container');

let isDragging = false;
let startX = 0;
let maxDrag = container.clientWidth - lock.clientWidth - 15; // Maksimal surilish masofasi

// Kompyuter uchun (Sichqoncha)
lock.addEventListener('mousedown', startDrag);
window.addEventListener('mousemove', drag);
window.addEventListener('mouseup', endDrag);

// Telefonlar uchun (Touch)
lock.addEventListener('touchstart', startDrag);
window.addEventListener('touchmove', drag);
window.addEventListener('touchend', endDrag);

function startDrag(e) {
    isDragging = true;
    startX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    lock.style.transition = 'none'; // Surayotganda silliqlikni o'chiramiz (kechikmaslik uchun)
}

function drag(e) {
    if (!isDragging) return;
    
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    let moveX = currentX - startX;

    // Faqat o'ngga surilishi uchun cheklov (orqaga ketmaydi)
    if (moveX < 0) moveX = 0;
    if (moveX > maxDrag) moveX = maxDrag;

    lock.style.transform = `translateX(${moveX}px)`;

    // Agar qulf o'ng tomonga 90% dan ko'proq surilsa, avtomat sahifa ochiladi
    if (moveX >= maxDrag * 0.95) {
        isDragging = false;
        // SHU YERGA O'ZINGIZNING ASOSIY SAHIFANGIZ MANZILINI YOZING
        window.location.href = "taklifnoma_ichi.html"; 
    }
}

function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    lock.style.transition = 'transform 0.3s ease'; // Silliq qaytish effekti
    lock.style.transform = 'translateX(0px)'; // Agar oxirigacha yetmasa joyiga qaytadi
}
function drag(e) {
    if (!isDragging) return;
    
    const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    let moveX = currentX - startX;

    if (moveX < 0) moveX = 0;
    if (moveX > maxDrag) moveX = maxDrag;

    lock.style.transform = `translateX(${moveX}px)`;

    // Qulf o'ng chetga 95% yetganda sahifa o'zgaradi
    if (moveX >= maxDrag * 0.95) {
        isDragging = false;
        
        // MANA SHU QATORNI O'ZGARTIRDIK:
        window.location.href = "sahifa.html"; 
    }
}