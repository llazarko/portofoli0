// ============================================
// LL AZARKO SHUKLE - PORTFOLIO SCRIPT
// Gjuha kryesore: Shqip | Opsion: Anglisht
// ============================================

// ============================================
// 1. TRANSLATIONS
// ============================================
const translations = {
    sq: {
        nav_home: "Kreu",
        nav_about: "Rreth Meje",
        nav_experience: "Eksperienca",
        nav_skills: "Aftësitë",
        nav_contact: "Kontakt",
        nav_cta: "Kontakto!",

        checkpoint_hero: "Kreu",
        checkpoint_about: "Rreth",
        checkpoint_experience: "Rrugëtimi",
        checkpoint_skills: "Aftësitë",
        checkpoint_contact: "Kontakt",

        hero_greeting: "Përshëndetje! 👋",
        hero_name: "Unë jam Llazarko Shukle.",
        hero_desc: "Bazuar në Tiranë, Shqipëri, jam Frontend Developer & Web Designer. Krijoj website moderne, responsive dhe të optimizuara për SEO. I apasionuar pas UI/UX design dhe zgjidhjeve kreative dixhitale për biznese.",
        hero_cta: "Kontakto!",
        coffee: "Ofro një kafe",
        deco_label: "Frontend Developer",

        about_title: "RRETH MEJE",
        about_p1: '<span class="highlight highlight-yellow">Frontend Developer & Web Designer</span> kreativ dhe i motivuar, i fokusuar në krijimin e website-ve moderne, responsive dhe vizualisht tërheqëse. Punoj në projekte për <span class="highlight highlight-pink">restorante, agjenci turistike dhe biznese lokale</span>, duke krijuar eksperienca që kombinojnë dizajn të pastër me funksionalitet.',
        about_p2: 'Pasioni im për <span class="highlight highlight-cyan">UI/UX design dhe frontend development</span> më shtyn të përmirësoj vazhdimisht aftësitë e mia dhe të qëndroj i përditësuar me trendet dhe teknologjitë më të fundit web.',
        about_p3: 'Kënaqem duke krijuar eksperienca <span class="highlight highlight-green">mobile-first</span>, <span class="highlight highlight-yellow">të optimizuara për SEO</span> dhe <span class="highlight highlight-cyan">me konvertim të lartë</span> që ndihmojnë bizneset të rriten online.',

        exp_title: "Eksperienca Ime",
        exp_subtitle: "Ku Kam Punuar & Çfarë Kam Ndërtuar",
        exp1_badge: "Inxhinier Kryesor",
        exp1_role: "Senior Software Engineer",
        exp1_desc1: "Punova në sisteme media intelligence të bazuara në AI në shkallë të gjerë. U fokusova në dizajnimin e mikroserviseve, përmirësimin e performancës së sistemit dhe ndërtimin e zgjidhjeve cloud-native.",
        exp1_desc2: "Kjo ishte periudha ku thellova eksperiencën time me sisteme të shpërndara dhe arkitekturën Google Cloud.",
        exp2_badge: "Zhvillues i Lartë",
        exp2_role: "Senior Software Engineer",
        exp2_desc1: "Drejtova zhvillimin për sisteme CRM të ndërmarrjeve dhe platforma marketingu IoT. Punova ngushtë me klientë si Toyota, duke ofruar zgjidhje të shkallëzueshme.",
        exp2_desc2: "Gjithashtu mora pjesë në vendimet teknike dhe planifikimin e arkitekturës së sistemit.",
        exp3_badge: "Full Stack",
        exp3_role: "Software Engineer",
        exp3_desc1: "Ndërtova një platformë publikimi në kohë reale të përdorur nga organizata globale. Punova në frontend dhe backend për të përmirësuar performancën.",
        exp4_badge: "Junior",
        exp4_role: "Software Engineer",
        exp4_desc1: "Fillova rrugëtimin tim duke ndërtuar sisteme të brendshme biznesi, mjete menaxhimi restorantesh dhe sisteme automatizimi backend.",
        exp4_desc2: "Këtu mësova si t'i kthej problemet reale të biznesit në zgjidhje software.",

        skills_title: "AFTËSITË",
        skill1_title: "Frontend Development",
        skill1_tag5: "Dizajn Responsive",
        skill2_title: "Web & SEO",
        skill2_tag1: "Optimizim SEO",
        skill2_tag2: "Optimizim Performance",
        skill2_tag3: "Mobile First",
        skill2_tag4: "E-Commerce UI",
        skill2_tag5: "Website Shumëgjuhëshe",
        skill3_title: "Backend & Database",
        skill3_tag4: "JSON Data",
        skill3_tag5: "Sisteme Porosish",
        skill4_title: "Specializim",
        skill4_tag1: "Website Udhëtimesh",
        skill4_tag2: "Dyqane Online",
        skill4_tag3: "Dizajn Luksoz",
        skill4_tag4: "Vitrina Produktesh",
        skill4_tag5: "Integrim WhatsApp",

        creator_label: "Krijues i",
        check_out: "Shikoje",

        edu_title: "EDUKIMI",
        edu_degree: "Bachelor në Shkenca Kompjuterike",
        edu_school: "Universiteti Metropolitan i Tiranës",

        lang_title: "GJUHËT",
        lang_albanian: "Shqip",
        lang_english: "Anglisht",

        contact_title: "KONTAKT",
        contact_intro: "Le të ndërtojmë diçka të mrekullueshme së bashku",

        footer_role: "Frontend Developer & Web Designer"
    },

    en: {
        nav_home: "Home",
        nav_about: "About Me",
        nav_experience: "Experience",
        nav_skills: "Skills",
        nav_contact: "Contact",
        nav_cta: "Get in Touch!",

        checkpoint_hero: "Home",
        checkpoint_about: "About",
        checkpoint_experience: "Journey",
        checkpoint_skills: "Skills",
        checkpoint_contact: "Contact",

        hero_greeting: "Hi there! 👋",
        hero_name: "I'm Llazarko Shukle.",
        hero_desc: "Based in Tirana, Albania, I'm a Frontend Developer & Web Designer. I create modern, responsive and SEO-optimized websites. Passionate about UI/UX design and creative digital solutions for businesses.",
        hero_cta: "Get in Touch!",
        coffee: "Buy me a coffee",
        deco_label: "Frontend Developer",

        about_title: "ABOUT ME",
        about_p1: 'Creative and motivated <span class="highlight highlight-yellow">Frontend Developer & Web Designer</span> focused on building modern, responsive, and visually engaging websites. I work on projects for <span class="highlight highlight-pink">restaurants, tourism agencies, and local businesses</span>.',
        about_p2: 'My passion for <span class="highlight highlight-cyan">UI/UX design and frontend development</span> drives me to constantly improve my skills and stay updated with the latest web trends.',
        about_p3: 'I enjoy creating <span class="highlight highlight-green">mobile-first</span>, <span class="highlight highlight-yellow">SEO-friendly</span>, and <span class="highlight highlight-cyan">high-converting digital experiences</span> that help businesses grow online.',

        exp_title: "My Experience",
        exp_subtitle: "Where I've Worked & What I've Built",
        exp1_badge: "Lead Engineer",
        exp1_role: "Senior Software Engineer",
        exp1_desc1: "Worked on AI-driven media intelligence systems at scale. Focused on designing microservices, improving system performance, and building cloud-native solutions.",
        exp1_desc2: "This was where I deepened my experience with distributed systems and Google Cloud architecture.",
        exp2_badge: "Senior Dev",
        exp2_role: "Senior Software Engineer",
        exp2_desc1: "Led development for enterprise CRM systems and IoT marketing platforms. Worked with clients like Toyota, delivering scalable solutions across international markets.",
        exp2_desc2: "Also took part in technical decisions and system architecture planning.",
        exp3_badge: "Full Stack",
        exp3_role: "Software Engineer",
        exp3_desc1: "Built a real-time publishing platform used by global organizations. Worked across frontend and backend to improve SaaS performance.",
        exp4_badge: "Junior",
        exp4_role: "Software Engineer",
        exp4_desc1: "Started my journey building internal business systems, restaurant management tools, and backend automation.",
        exp4_desc2: "This is where I learned to turn real business problems into software solutions.",

        skills_title: "SKILLS",
        skill1_title: "Frontend Development",
        skill1_tag5: "Responsive Design",
        skill2_title: "Web & SEO",
        skill2_tag1: "SEO Optimization",
        skill2_tag2: "Performance Optimization",
        skill2_tag3: "Mobile First",
        skill2_tag4: "E-Commerce UI",
        skill2_tag5: "Multilanguage Websites",
        skill3_title: "Backend & Database",
        skill3_tag4: "JSON Data",
        skill3_tag5: "Order Systems",
        skill4_title: "Specialization",
        skill4_tag1: "Travel Websites",
        skill4_tag2: "Online Stores",
        skill4_tag3: "Luxury Design",
        skill4_tag4: "Product Showcases",
        skill4_tag5: "WhatsApp Integration",

        creator_label: "Creator of",
        check_out: "Check it out",

        edu_title: "EDUCATION",
        edu_degree: "Bachelor's Degree in Computer Science",
        edu_school: "Metropolitan University of Tirana",

        lang_title: "LANGUAGES",
        lang_albanian: "Albanian",
        lang_english: "English",

        contact_title: "GET IN TOUCH",
        contact_intro: "Let's build something amazing together",

        footer_role: "Frontend Developer & Web Designer"
    }
};

let currentLang = 'sq';

// ============================================
// 2. LANGUAGE SWITCHER
// ============================================
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('llazarko-lang', lang);
    applyLanguage(lang);
    updateLangButtons(lang);
    updateHTMLTag(lang);
}

function applyLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (t[key]) {
            if (t[key].includes('<span')) {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    document.querySelectorAll('.checkpoint-label').forEach(label => {
        const section = label.parentElement.getAttribute('data-section');
        const key = `checkpoint_${section}`;
        if (t[key]) label.textContent = t[key];
    });
}

function updateLangButtons(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === activeLang) btn.classList.add('active');
    });
}

function updateHTMLTag(lang) {
    document.documentElement.lang = lang;
}

// ============================================
// 3. THEME TOGGLE (DARK/LIGHT MODE)
// ============================================
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Ngarko temën e ruajtur ose 'light' si default
    const savedTheme = localStorage.getItem('llazarko-theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(icon, savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('llazarko-theme', newTheme);
        updateThemeIcon(icon, newTheme);
    });
}

function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// 4. LOADING SCREEN
// ============================================
function initLoadingScreen() {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader-overlay');
        if (loader) {
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 1200);
        }
    });
}

// ============================================
// 5. HERO PHOTO TILT
// ============================================
function initHeroPhoto() {
    const heroPhoto = document.querySelector('.hero-photo');
    if (!heroPhoto) return;
    
    let photoTilted = false;

    window.addEventListener('scroll', () => {
        if (!photoTilted && window.scrollY > 5) {
            heroPhoto.classList.add('tilted');
            photoTilted = true;
        }
    });

    heroPhoto.addEventListener('mouseenter', () => heroPhoto.classList.remove('tilted'));
    heroPhoto.addEventListener('mouseleave', () => { 
        if (photoTilted) heroPhoto.classList.add('tilted'); 
    });
}

// ============================================
// 6. SMOOTH SCROLL & NAVBAR
// ============================================
function initNavigation() {
    // Smooth scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Smart Navbar hide/show
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.classList.add('navbar-hidden');
        } else if (currentScroll < lastScroll) {
            navbar.classList.remove('navbar-hidden');
        }
        lastScroll = currentScroll;
    });
}

// ============================================
// 7. PROGRESS BAR
// ============================================
function initProgressBar() {
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const checkpoints = document.querySelectorAll('.checkpoint');
    if (!progressBarFill || !checkpoints.length) return;

    function updateProgressBar() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = documentHeight > 0 ? (scrolled / documentHeight) * 100 : 0;
        progressBarFill.style.width = progress + '%';

        const sections = ['hero', 'about', 'experience', 'skills', 'contact'];
        let activeIndex = 0;
        sections.forEach((sectionId, index) => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                    activeIndex = index;
                }
            }
        });
        checkpoints.forEach((checkpoint, index) => {
            if (index <= activeIndex) {
                checkpoint.classList.add('active');
            } else {
                checkpoint.classList.remove('active');
            }
        });
    }

    checkpoints.forEach(checkpoint => {
        checkpoint.addEventListener('click', () => {
            const sectionId = checkpoint.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);
    updateProgressBar();
}

// ============================================
// 8. MATRIX TYPING EFFECT
// ============================================
function initMatrixTyping() {
    const greetingElement = document.getElementById('hero-greeting');
    if (!greetingElement) return;

    function startTyping() {
        const finalText = currentLang === 'sq' ? 'Përshëndetje! 👋' : 'Hi there! 👋';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        let iterations = 0;
        greetingElement.textContent = '';

        const interval = setInterval(() => {
            greetingElement.textContent = finalText.split('').map((char, index) => {
                if (index < iterations) return finalText[index];
                if (char === ' ' || char === '👋' || char === 'ë' || char === 'Ë') return char;
                return chars[Math.floor(Math.random() * chars.length)];
            }).join('');

            if (iterations >= finalText.length) clearInterval(interval);
            iterations += 1/3;
        }, 50);
    }

    setTimeout(startTyping, 500);
}
// ============================================
// 10. HIGHLIGHT PARALLAX EFFECT
// ============================================
function initHighlightParallax() {
    const highlights = document.querySelectorAll('.highlight');
    if (!highlights.length) return;

    const highlightData = new Map();
    highlights.forEach((highlight, index) => {
        highlightData.set(highlight, {
            hasStarted: false,
            startScroll: 0,
            duration: 100
        });
    });

    function updateHighlights() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        highlights.forEach(highlight => {
            const rect = highlight.getBoundingClientRect();
            const elementTop = rect.top + scrollY;
            const data = highlightData.get(highlight);
            const triggerPoint = scrollY + windowHeight * 0.8;

            if (!data.hasStarted && triggerPoint >= elementTop) {
                data.hasStarted = true;
                data.startScroll = scrollY;
            }
            if (data.hasStarted) {
                const progress = Math.min(1, Math.max(0, (scrollY - data.startScroll) / data.duration));
                highlight.style.setProperty('--highlight-progress', `${progress * 100}%`);
            }
            if (data.hasStarted && scrollY < data.startScroll - 50) {
                data.hasStarted = false;
                highlight.style.setProperty('--highlight-progress', '0%');
            }
        });
    }

    window.addEventListener('scroll', updateHighlights);
    requestAnimationFrame(updateHighlights);
}

// ============================================
// 11. JOURNEY MAP (Leaflet)
// ============================================
function initJourneyMap() {
    const mapContainer = document.getElementById('journey-map');
    if (!mapContainer || typeof L === 'undefined') return;

    const initialView = { center: [48.5, 10], zoom: 4 };
    const map = L.map('journey-map', {
        center: initialView.center,
        zoom: initialView.zoom,
        scrollWheelZoom: false,
        zoomControl: true
    });

    L.tileLayer('https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/{z}/{x}/{y}.jpg', {
        attribution: '© Stamen Design, © OpenStreetMap contributors',
        maxZoom: 16
    }).addTo(map);

    // Home button
    L.Control.Home = L.Control.extend({
        onAdd: function(map) {
            const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-home');
            const link = L.DomUtil.create('a', '', container);
            link.href = '#';
            link.title = 'Reset map view';
            link.innerHTML = '<i class="fas fa-home"></i>';
            L.DomEvent.on(link, 'click', function(e) {
                e.preventDefault();
                map.setView(initialView.center, initialView.zoom);
            });
            return container;
        }
    });
    new L.Control.Home({ position: 'topright' }).addTo(map);

    // Locations
    const locations = [
        { coords: [50.9375, 6.9603], country: 'Germany', city: 'Këln', company: 'Unicepta', period: '2020 - 2025' },
        { coords: [41.3275, 19.8187], country: 'Albania', city: 'Tiranë', company: 'Ritech / Group of Companies', period: '2015 - 2020' },
        { coords: [48.8566, 2.3522], country: 'France', city: 'Paris', company: 'Gutenberg Technology', period: '2017 - 2018' }
    ];

    locations.forEach(loc => {
        const isCurrent = loc.country === 'Germany';
        const markerIcon = L.divIcon({
            className: isCurrent ? 'neo-marker neo-marker-current' : 'neo-marker',
            html: `<div class="neo-marker-label ${isCurrent ? 'neo-marker-label-current' : ''}">${loc.country}</div><div class="neo-marker-pin ${isCurrent ? 'neo-marker-pin-current' : ''}"></div>`,
            iconSize: isCurrent ? [35, 35] : [30, 30],
            iconAnchor: isCurrent ? [17.5, 50] : [15, 45],
            popupAnchor: [0, isCurrent ? -50 : -45]
        });

        L.marker(loc.coords, { icon: markerIcon })
            .addTo(map)
            .bindPopup(`<strong>${loc.company}</strong><br>${loc.city}<br>${loc.period}`);
    });
}

// ============================================
// 12. INICIALIZIMI KRYESOR
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to top
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Ngarko gjuhën
    const savedLang = localStorage.getItem('llazarko-lang') || 'sq';
    currentLang = savedLang;
    applyLanguage(currentLang);
    updateLangButtons(currentLang);
    updateHTMLTag(currentLang);

    // Event listeners për gjuhën
    const btnSq = document.getElementById('lang-sq');
    const btnEn = document.getElementById('lang-en');
    if (btnSq) btnSq.addEventListener('click', () => switchLanguage('sq'));
    if (btnEn) btnEn.addEventListener('click', () => switchLanguage('en'));

    // Inicializo të gjitha funksionet
    initTheme();
    initLoadingScreen();
    initHeroPhoto();
    initNavigation();
    initProgressBar();
    initMatrixTyping();
    initFadeIn();
    initHighlightParallax();
    initJourneyMap();
});

// ============================================
// BUDGET SLIDER FUNCTIONALITY
// ============================================
function initBudgetSlider() {
    const budgetSlider = document.getElementById('budget');
    const budgetValue = document.getElementById('budget-value');
    
    if (budgetSlider && budgetValue) {
        // Funksioni për të përditësuar vlerën
        const updateBudgetValue = function() {
            let value = this.value;
            budgetValue.textContent = '€' + value;
        };
        
        // Event listener për input (ndërsa lëviz slider-in)
        budgetSlider.addEventListener('input', updateBudgetValue);
        
        // Sigurohu që vlera fillestare të shfaqet
        budgetValue.textContent = '€' + budgetSlider.value;
        
        console.log('Budget slider initialized!');
    } else {
        console.log('Budget slider elements not found');
    }
}

