const btnUz = document.getElementById('btn-uz');
const btnOz = document.getElementById('btn-oz');
const musicTrigger = document.getElementById('music-trigger');
const bgMusic = document.getElementById('bg-music');

const lugat = {
    uz: {
        names: "Muhammadjon &\nMahliyoxon",
        translation: '"Va U ularning qalblarini birlashtirdi"',
        bizTitle: "QADRLI AZIZLARIMIZ!",
        bizMain: "Biz",
        bizDesc: "Sizlarni to‘yimizga taklif etishdan juda xursandmiz",
        sanaTitle: "SANA",
        taymerTitle: "TO'YGACHA QOLGAN VAQT",
        kun: "KUN", soat: "SOAT", daqiqa: "DAQIQA", soniya: "SONIYA",
        kalendarOy: "AVGUST 2026",
        du: "Du", se: "Se", ch: "Ch", pa: "Pa", ju: "Ju", sh: "Sh", ya: "Ya",
        startTime: "BOSHLANISHI: 18:00 DA",
        dastur: "DASTUR",
        p1: "MEHMONLAR YIG'ILISHI",
        p2: "NIKOH MAROSIMI",
        p3: "BAYRAM DASTURXONI",
        p4: "YAKUNI",
        joy: "O'TKAZILISH JOYI",
        restName: '"Jasmin" to‘yxonasi',
        restAddress: "Qashqadaryo viloyati, Qamashi tumani",
        rsvpHead: "Ishtirokingizni tasdiqlang",
        mehmonPlaceholder: "Mehmon ismi",
        soni: "Mehmonlar soni:",
        send: "YUBORISH"
    },
    oz: {
        names: "Муҳаммаджон &\nМаҳлиёхон",
        translation: '"Ва У уларнинг қалбларини бирлаштирди"',
        bizTitle: "ҚАДРЛИ АЗИЗЛАРИМИЗ!",
        bizMain: "Биз",
        bizDesc: "Сизларни тўйимизга таклиф этишдан жуда хурсандмиз",
        sanaTitle: "САНА",
        taymerTitle: "ТЎЙГАЧА ҚОЛГАН ВАҚТ",
        kun: "КУН", soat: "СОАТ", daqiqa: "ДАҚИҚА", soniya: "СОНИЯ",
        kalendarOy: "АВГУСТ 2026",
        du: "Дш", se: "Сш", ch: "Чш", pa: "Пш", ju: "Жм", sh: "Шн", ya: "Як",
        startTime: "БОШЛАНИШИ: 18:00 ДА",
        dastur: "ДАСТУР",
        p1: "МЕҲМОНЛАР ЙИҒИЛИШИ",
        p2: "НИКОҲ МАРОСИМИ",
        p3: "БАЙРАМ ДАСТУРХОНИ",
        p4: "ЯКУНИ",
        joy: "ЎТКАЗИЛИШ ЖОЙИ",
        restName: '"Жасмин" тўйхонаси',
        restAddress: "Қашқадарё вилояти, Қамаши тумани",
        rsvpHead: "Иштирокингизни тасдиқланг",
        mehmonPlaceholder: "Меҳмон исми",
        soni: "Меҳмонлар сони:",
        send: "ЮБОРИШ"
    }
};

function tilniOlgartir(til) {
    const bizMainTitle = document.getElementById('biz-main-title');
    
    if(document.getElementById('main-names')) document.getElementById('main-names').innerHTML = lugat[til].names.replace('\n', '<br>');
    if(document.getElementById('translation-text')) document.getElementById('translation-text').textContent = lugat[til].translation;
    if(document.getElementById('biz-title')) document.getElementById('biz-title').textContent = lugat[til].bizTitle;
    
    // "Biz / Биз" qismini g'alati ko'rinishini to'g'rilash
    if(bizMainTitle) {
        bizMainTitle.textContent = lugat[til].bizMain;
        if(til === 'oz') {
            bizMainTitle.classList.add('kirill-shrift'); // Chiroyli va tekis font qo'shadi
        } else {
            bizMainTitle.classList.remove('kirill-shrift'); // Eski holatiga qaytaradi
        }
    }
    
    if(document.getElementById('biz-desc')) document.getElementById('biz-desc').textContent = lugat[til].bizDesc;
    if(document.getElementById('sana-title')) document.getElementById('sana-title').textContent = lugat[til].sanaTitle;
    if(document.getElementById('taymer-title')) document.getElementById('taymer-title').textContent = lugat[til].taymerTitle;
    
    if(document.getElementById('t-kun')) document.getElementById('t-kun').textContent = lugat[til].kun;
    if(document.getElementById('t-soat')) document.getElementById('t-soat').textContent = lugat[til].soat;
    if(document.getElementById('t-daqiqa')) document.getElementById('t-daqiqa').textContent = lugat[til].daqiqa;
    if(document.getElementById('t-soniya')) document.getElementById('t-soniya').textContent = lugat[til].soniya;
    
    if(document.getElementById('kalendar-oy-matn')) document.getElementById('kalendar-oy-matn').textContent = lugat[til].kalendarOy;
    if(document.getElementById('h-du')) document.getElementById('h-du').textContent = lugat[til].du;
    if(document.getElementById('h-se')) document.getElementById('h-se').textContent = lugat[til].se;
    if(document.getElementById('h-ch')) document.getElementById('h-ch').textContent = lugat[til].ch;
    if(document.getElementById('h-pa')) document.getElementById('h-pa').textContent = lugat[til].pa;
    if(document.getElementById('h-ju')) document.getElementById('h-ju').textContent = lugat[til].ju;
    if(document.getElementById('h-sh')) document.getElementById('h-sh').textContent = lugat[til].sh;
    if(document.getElementById('h-ya')) document.getElementById('h-ya').textContent = lugat[til].ya;
    if(document.getElementById('start-time')) document.getElementById('start-time').textContent = lugat[til].startTime;
    
    if(document.getElementById('dastur-title')) document.getElementById('dastur-title').textContent = lugat[til].dastur;
    if(document.getElementById('p1')) document.getElementById('p1').textContent = lugat[til].p1;
    if(document.getElementById('p2')) document.getElementById('p2').textContent = lugat[til].p2;
    if(document.getElementById('p3')) document.getElementById('p3').textContent = lugat[til].p3;
    if(document.getElementById('p4')) document.getElementById('p4').textContent = lugat[til].p4;
    
    if(document.getElementById('joy-title')) document.getElementById('joy-title').textContent = lugat[til].joy;
    if(document.getElementById('rest-name')) document.getElementById('rest-name').textContent = lugat[til].restName;
    if(document.getElementById('restoran-address')) document.getElementById('restoran-address').textContent = lugat[til].restAddress;
    
    if(document.getElementById('rsvp-head')) document.getElementById('rsvp-head').textContent = lugat[til].rsvpHead;
    if(document.getElementById('mehmon-ismi')) document.getElementById('mehmon-ismi').setAttribute('placeholder', lugat[til].mehmonPlaceholder);
    if(document.getElementById('label-soni')) document.getElementById('label-soni').textContent = lugat[til].soni;
    if(document.getElementById('send-btn')) document.getElementById('send-btn').textContent = lugat[til].send;
}

if(btnUz && btnOz) {
    btnUz.addEventListener('click', () => { 
        btnUz.classList.add('active'); 
        btnOz.classList.remove('active'); 
        tilniOlgartir('uz'); 
    });
    
    btnOz.addEventListener('click', () => { 
        btnOz.classList.add('active'); 
        btnUz.classList.remove('active'); 
        tilniOlgartir('oz'); 
    });
}

if(musicTrigger && bgMusic) {
    musicTrigger.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicTrigger.textContent = "⏸";
        } else {
            bgMusic.pause();
            musicTrigger.textContent = "▶";
        }
    });
}

const maqsadSana = new Date("August 2, 2026 18:00:00").getTime();
setInterval(() => {
    const hozir = new Date().getTime();
    const farq = maqsadSana - hozir;
    const d = Math.floor(farq / (1000 * 60 * 60 * 24));
    const h = Math.floor((farq % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((farq % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((farq % (1000 * 60)) / 1000);

    if(document.getElementById("kun")) document.getElementById("kun").textContent = d < 10 ? "0" + d : d;
    if(document.getElementById("soat")) document.getElementById("soat").textContent = h < 10 ? "0" + h : h;
    if(document.getElementById("daqiqa")) document.getElementById("daqiqa").textContent = m < 10 ? "0" + m : m;
    if(document.getElementById("soniya")) document.getElementById("soniya").textContent = s < 10 ? "0" + s : s;
}, 1000);
// Input elementini uning atributi orqali topib olamiz
const nameInput = document.querySelector('input[placeholder="Mehmon ismi"]');

if (nameInput) {
    // Agar foydalanuvchi maydonni to'ldirmay "YUBORISH"ni bossa
    nameInput.addEventListener('invalid', function() {
        this.setCustomValidity('Hurmatli mehmon ismingni yozing.');
    });

    // Foydalanuvchi qaytadan yozishni boshlaganda xatolik xabarini o'chirish
    nameInput.addEventListener('input', function() {
        this.setCustomValidity('');
    });
}

