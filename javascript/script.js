// script.js
// Berisi logika interaktif, state, dan render komponen UI

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: 'ease-out-cubic'
    });
});

// --- LIGHTBOX LOGIC ---
let currentGallery = [];
let currentSlideIndex = 0;

function openLightbox(galleryJson, index) {
    try {
        let gallery;
        if (Array.isArray(galleryJson)) {
            gallery = galleryJson;
        } else {
            gallery = JSON.parse(decodeURIComponent(galleryJson));
        }

        if (!gallery || gallery.length === 0) return;
        currentGallery = gallery;
        currentSlideIndex = index;
        updateLightboxImage();
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } catch (e) { console.error("Error opening lightbox", e); }
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function changeSlide(step) {
    currentSlideIndex += step;
    if (currentSlideIndex < 0) currentSlideIndex = currentGallery.length - 1;
    if (currentSlideIndex >= currentGallery.length) currentSlideIndex = 0;
    updateLightboxImage();
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');
    img.style.opacity = '0.5'; img.style.transform = 'scale(0.95)';
    setTimeout(() => {
        img.src = currentGallery[currentSlideIndex];
        counter.innerText = `${currentSlideIndex + 1} / ${currentGallery.length}`;
        img.style.opacity = '1'; img.style.transform = 'scale(1)';
    }, 150);
}

document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

// --- STATE MANAGEMENT ---
let state = { lang: 'id', page: 'home', previousPage: 'home', projectId: null, eventId: null, detailTab: 'research', eventsTab: 'events', filter: 'All' };
document.getElementById('year').innerText = new Date().getFullYear();

// --- Functions ---
function toggleLanguage() {
    state.lang = state.lang === 'id' ? 'en' : 'id';
    document.getElementById('current-lang').innerText = state.lang.toUpperCase();
    document.getElementById('mobile-lang-label').innerText = state.lang === 'id' ? 'Ganti Bahasa' : 'Switch Language';
    renderApp();
    setTimeout(() => AOS.refresh(), 100);
}

function getBackRoute() {
    // Jika user sedang di detail proyek, arahkan kembali ke daftar karya (projects)
    if (state.page === 'project-detail') return 'projects';
    
    // Jika user sedang di detail event:
    if (state.page === 'event-detail') {
        // Jika sebelumnya user berasal dari halaman list event (Jejak), kembali ke sana
        if (state.previousPage === 'events-list') return 'events-list';
        // Jika user klik dari beranda, kembali ke beranda
        if (state.previousPage === 'home') return 'home';
        // Default aman: kembali ke list event
        return 'events-list';
    }
    
    return 'home';
}

function navigate(page, id = null) {
    // Memastikan layar langsung kembali ke atas sebelum proses render dimulai
    window.scrollTo(0, 0);

    // PROTEKSI: Jika project GXC (7) atau Kupang Crips (10) diklik
    if (page === 'project-detail' && (id === 7 || id === 10)) {
        showMaintenancePopup();
        return; 
    }

    if (state.page !== page) {
        state.previousPage = state.page;
    }
    state.page = page;
    
    if (page === 'project-detail') {
        state.projectId = id;
        const p = projectsData.find(x => x.id === id);
        // Set tab default (biasanya 'research') jika data tersedia
        if (p) state.detailTab = Object.keys(p.content[state.lang].process)[0]; 
    } else if (page === 'event-detail') {
        state.eventId = id;
    } else if (page === 'events-list') {
        state.eventsTab = 'events';
    }
    
    toggleMobileMenu(false); 
    
    // Proses Render Utama
    renderApp();

    // Memastikan posisi scroll tetap di nol setelah konten dimuat
    // Menggunakan requestAnimationFrame agar berjalan tepat setelah browser selesai painting
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        if (window.AOS) {
            AOS.refreshHard();
        }
    });
}

function toggleMobileMenu(forceClose) {
    const menu = document.getElementById('mobile-menu');
    if (forceClose === false) menu.classList.add('hidden');
    else menu.classList.toggle('hidden');
}

function setProjectFilter(filter) {
    state.filter = filter;
    renderProjects();
}



function setDetailTab(tab) {
    state.detailTab = tab;
    renderDetailTabs();
}

function setEventsTab(tab) {
    state.eventsTab = tab;
    renderEventsList();
}

function renderNavLinks() {
    const t = content[state.lang].nav;
    // Tambahkan menu Jejak (events-list) ke dalam susunan navigasi
    const links = [
        { id: 'home', label: t.home }, 
        { id: 'projects', label: t.projects }, 
        { id: 'events-list', label: t.events }, // Menu Baru
        { id: 'about', label: t.about }, 
        { id: 'contact', label: t.contact }
    ];
    
    const desktopMenu = document.getElementById('desktop-menu');
    const mobileMenu = document.getElementById('mobile-menu-items');

    if (desktopMenu) {
        desktopMenu.innerHTML = links.map(l => `<button onclick="navigate('${l.id}')" class="text-sm font-bold transition-all hover:-translate-y-0.5 ${state.page === l.id ? 'text-primary' : 'text-slate-600 hover:text-slate-900'}">${l.label}</button>`).join('');
    }
    
    if (mobileMenu) {
        mobileMenu.innerHTML = links.map(l => `<button onclick="navigate('${l.id}')" class="text-left text-lg font-bold p-2 rounded-lg ${state.page === l.id ? 'bg-blue-50 text-primary' : 'text-slate-600 hover:bg-slate-50'}">${l.label}</button>`).join('');
    }
}

// --- PERBAIKAN RENDER UTAMA (FOOTER & ICON) ---
function renderApp() {
    renderNavLinks();
    const app = document.getElementById('app');
    app.innerHTML = ''; 
    switch (state.page) {
        case 'home': renderHome(); break;
        case 'projects': renderProjects(); break;
        case 'project-detail': renderProjectDetail(); break;
        case 'events-list': renderEventsList(); break;
        case 'event-detail': renderEventDetail(); break;
        case 'about': renderAbout(); break;
        case 'contact': renderContact(); break;
        default: renderHome();
    }
    
    const t = content[state.lang].nav;
    // Tambahkan link Jejak juga di footer
    document.getElementById('footer-links').innerHTML = `
        <button onclick="navigate('home')" class="hover:text-primary transition-colors">${t.home}</button>
        <button onclick="navigate('projects')" class="hover:text-primary transition-colors">${t.projects}</button>
        <button onclick="navigate('events-list')" class="hover:text-primary transition-colors">${t.events}</button>
        <button onclick="navigate('about')" class="hover:text-primary transition-colors">${t.about}</button>
        <button onclick="navigate('contact')" class="hover:text-primary transition-colors">${t.contact}</button>
    `;

    document.getElementById('nav-cv').innerText = t.cv;

    // Pastikan Lucide Icon dipindai setiap kali konten berubah
    if (window.lucide) {
        lucide.createIcons();
    }
}

// --- PERBAIKAN FUNGSI NAVIGATE (POSISI SCROLL & POPUP) ---
function navigate(page, id = null) {
    // PROTEKSI: Jika project GXC (7) atau Kupang Crips (10) diklik
    if (page === 'project-detail' && (id === 7 || id === 10)) {
        showMaintenancePopup();
        return; 
    }

    // Simpan halaman saat ini sebagai 'previousPage' sebelum berpindah
    if (state.page !== page) {
        state.previousPage = state.page;
    }
    state.page = page;
    
    if (page === 'project-detail') {
        state.projectId = id;
        const p = projectsData.find(x => x.id === id);
        if (p) state.detailTab = Object.keys(p.content[state.lang].process)[0]; 
    } else if (page === 'event-detail') {
        state.eventId = id;
    } else if (page === 'events-list') {
        state.eventsTab = 'events';
    }
    
    toggleMobileMenu(false); 
    renderApp();

    // MASALAH SCROLL: Paksa browser kembali ke posisi paling atas (0,0)
    // Menggunakan timeout 0 atau requestAnimationFrame untuk memastikan DOM sudah ter-update
    window.scrollTo(0, 0);
    setTimeout(() => { 
        window.scrollTo({ top: 0, behavior: 'instant' }); 
        if (window.AOS) {
            AOS.refreshHard(); 
        }
    }, 50);
}

function renderHome() {
    const t = content[state.lang];
    const featuredProject = projectsData[0]; 
    const fpContent = featuredProject.content[state.lang];
    
    // Ambil maksimal 6 project untuk di Home
    const homeProjects = projectsData.slice(0, 6);

    document.getElementById('app').innerHTML = `
        <div>
            <section class="min-h-[90vh] flex items-center pt-10 pb-20 px-6 max-w-6xl mx-auto relative overflow-hidden"><div class="grid lg:grid-cols-2 gap-12 items-center w-full z-10"><div class="space-y-8" data-aos="fade-right"><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wide shadow-card backdrop-blur-sm"><span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>${t.hero.badge}</div><h1 class="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">${t.hero.title} <br /><span class="text-gradient">${t.hero.titleHighlight}</span></h1><p class="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-medium">${t.hero.desc}</p><div class="flex flex-wrap gap-4 pt-2"><button onclick="navigate('projects')" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-primary text-white hover:bg-primaryDark hover:shadow-lg transition-all hover:-translate-y-1 shadow-glow">${t.hero.ctaPrimary} <i data-lucide="arrow-right" class="w-5 h-5"></i></button><button onclick="navigate('contact')" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-white border border-slate-200 text-slate-700 hover:border-primary/50 hover:text-primary transition-all hover:-translate-y-1 shadow-soft">${t.hero.ctaSecondary}</button></div></div><div class="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center" data-aos="fade-left"><div class="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-50 blur-3xl animate-pulse"></div><div class="relative w-full h-full animate-float"><img src="img/profile.png" class="w-full h-full object-contain rounded-3xl shadow-card border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500"><div class="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-card border border-slate-100 animate-float" style="animation-delay: 1s;"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><i data-lucide="check-circle" class="w-6 h-6"></i></div></div></div></div></div></div></section>
            
            <section class="py-24 bg-white relative"><div class="max-w-6xl mx-auto px-6"><h2 class="text-sm font-bold text-primary tracking-widest uppercase mb-12 text-center" data-aos="fade-up">${t.skills.title}</h2><div class="grid md:grid-cols-3 gap-6">${t.skills.items.map((skill, i) => `<div class="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-card-hover transition-all duration-300" data-aos="fade-up" data-aos-delay="${i * 100}"><div class="w-14 h-14 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-6 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm"><i data-lucide="${skill.icon}" class="w-7 h-7"></i></div><h3 class="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">${skill.title}</h3><p class="text-slate-500 text-sm leading-relaxed">${skill.desc}</p></div>`).join('')}</div></div></section>
            
            <section class="py-24 bg-slate-50 relative overflow-hidden">
                <div class="max-w-6xl mx-auto px-6 relative z-10">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div data-aos="fade-right"><h2 class="text-4xl font-bold text-slate-900 mb-4">${t.events.title}</h2><p class="text-slate-600 text-lg max-w-lg">${t.events.subtitle}</p></div>
                        <button onclick="navigate('events-list')" class="group flex items-center gap-2 font-bold text-primary hover:text-primaryDark transition-colors" data-aos="fade-left">${t.events.viewOthers} <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i></button>
                    </div>
                    <div class="grid md:grid-cols-3 gap-8">
                        ${eventsData.map((event, i) => `<div onclick="navigate('event-detail', ${event.id})" class="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-2" data-aos="fade-up" data-aos-delay="${i * 150}"><div class="h-48 overflow-hidden relative"><div class="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase shadow-sm">${event.type}</div><img src="${event.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="${event.content[state.lang].title}"><div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div></div><div class="p-8 flex flex-col flex-grow"><span class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${event.date}</span><h3 class="font-bold text-xl text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors">${event.content[state.lang].title}</h3><p class="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">${event.content[state.lang].desc}</p><div class="mt-auto pt-6 border-t border-slate-100 flex items-center text-primary font-bold text-sm">${content[state.lang].events.viewDetail} <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i></div></div></div>`).join('')}
                    </div>
                </div>
            </section>
            
            <section class="py-24 max-w-6xl mx-auto px-6 relative">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
                    <div>
                        <h2 class="text-4xl font-bold text-slate-900 mb-4">${t.featured.title}</h2>
                        <p class="text-slate-600 text-lg">${t.featured.subtitle}</p>
                    </div>
                </div>
                
                <div class="relative pb-20">
                    <div class="grid md:grid-cols-2 gap-10">
                        ${homeProjects.map((p, i) => {
                            // Deteksi jika ini adalah 2 project terbawah (index ke 4 dan 5)
                            const isLastTwo = i >= 4;
                            
                            // Gunakan CSS Mask-Image agar memudar transparan asli mengikuti background home Anda
                            const maskStyle = isLastTwo 
                                ? 'mask-image: linear-gradient(to bottom, black 15%, transparent 90%); -webkit-mask-image: linear-gradient(to bottom, black 15%, transparent 90%);' 
                                : '';

                            return `
                                <div ${isLastTwo ? '' : `onclick="navigate('project-detail', ${p.id})"`} 
                                     class="group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-card transition-all duration-500 ${isLastTwo ? 'pointer-events-none select-none' : 'cursor-pointer hover:shadow-card-hover hover:-translate-y-1'}" 
                                     style="${maskStyle}"
                                     data-aos="fade-up" data-aos-delay="${i * 100}">
                                    <div class="aspect-[4/3] w-full relative overflow-hidden">
                                        <img src="${p.image}" class="w-full h-full object-cover transition-transform duration-700 ${isLastTwo ? '' : 'group-hover:scale-105'}" alt="${p.content[state.lang].title}">
                                        <div class="absolute inset-0 bg-slate-900/20"></div>
                                        <div class="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-slate-900/90 to-transparent pt-20">
                                            <div class="flex justify-between items-end">
                                                <div>
                                                    <span class="inline-block px-3 py-1 mb-3 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase border border-white/20">${p.category}</span>
                                                    <h3 class="text-2xl font-bold text-white mb-1">${p.content[state.lang].title}</h3>
                                                </div>
                                                <div class="w-10 h-10 rounded-full bg-white/10 backdrop-blur text-white flex items-center justify-center ${isLastTwo ? '' : 'group-hover:bg-primary group-hover:scale-110'} transition-all">
                                                    <i data-lucide="arrow-up-right" class="w-5 h-5"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    
                    <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center z-30 pb-2">
                        <button onclick="navigate('projects')" class="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-primary text-white hover:bg-primaryDark hover:shadow-lg transition-all hover:-translate-y-1 shadow-glow">
                            ${t.featured.viewMore} 
                            <i data-lucide="arrow-right" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    `;
}

function renderProjects() {
    const t = content[state.lang];
    const categories = state.lang === 'id' ? ['Semua', 'UI/UX Design', 'Brand Design', 'Graphic Design', 'Frontend Web Development', 'Lainnya'] : ['All', 'UI/UX Design', 'Brand Design', 'Graphic Design', 'Frontend Web Development', 'Others'];
    const filterMap = {
        'Semua': 'All', 'UI/UX Design': 'UI/UX Design', 'Brand Design': 'Brand Design', 'Frontend Web Development': 'Frontend Web Development', 'Graphic Design': 'Graphic Design', 'Lainnya': 'Lainnya',
        'All': 'All', 'UI/UX Design': 'UI/UX Design', 'Brand Design': 'Brand Design', 'Frontend Web Development': 'Frontend Web Development', 'Graphic Design': 'Graphic Design', 'Others': 'Others'
    };
    const actualFilter = filterMap[state.filter] || 'All';
    const filtered = actualFilter === 'All' ? projectsData : projectsData.filter(p => p.category === actualFilter);

    const filterHTML = categories.map(cat => `
        <button onclick="setProjectFilter('${cat}')" 
            class="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${state.filter === cat ? 'bg-primary text-white shadow-glow' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary'}">
            ${cat}
        </button>
    `).join('');

    const gridClass = actualFilter === 'Graphic Design' ? 'grid md:grid-cols-3 gap-6' : 'grid md:grid-cols-2 gap-10';

    const projectsHTML = filtered.map((p, i) => {
        const pc = p.content[state.lang];
        
        if (p.category === 'Graphic Design') {
            const imgUrl = encodeURIComponent(JSON.stringify([p.image]));
            return `
            <div onclick="openLightbox('${imgUrl}', 0)" 
                 class="animate-enter group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-glow transition-all duration-500 aspect-[4/5]"
                 style="animation-delay: ${i * 100}ms">
                 
                <img src="${p.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${pc.title}">
                
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>
                
                <div class="absolute bottom-0 left-0 w-full p-6 text-white z-10">
                     <div class="text-xs font-bold text-white/60 mb-2 uppercase tracking-widest">${p.year}</div>
                     <h3 class="text-xl font-bold leading-tight mb-2">${pc.title}</h3>
                </div>

                <div class="absolute inset-0 bg-primary/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <button class="px-6 py-3 bg-white text-primary rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        <i data-lucide="eye" class="w-4 h-4"></i> Lihat Karya
                    </button>
                </div>
            </div>
            `;
        }

        // Frontend Web Development tidak menggunakan halaman detail, CTA langsung ke website & repository
        if (p.category === 'Frontend Web Development') {
            const repoLabel = state.lang === 'id' ? 'Buka Repository' : 'Open Repository';
            return `
            <div class="animate-enter group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 shadow-card flex flex-col"
                 style="animation-delay: ${i * 100}ms">
                <div class="aspect-[4/3] w-full relative overflow-hidden">
                    <img src="${p.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${pc.title}">
                </div>
                <div class="p-8 flex flex-col flex-grow">
                    <div class="flex justify-between items-start mb-4">
                        <span class="px-3 py-1 rounded-lg bg-blue-50 text-primary text-xs font-bold uppercase tracking-wide">${p.category}</span>
                        <span class="text-slate-400 font-medium text-sm">${p.year}</span>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-3">${pc.title}</h3>
                    <p class="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed flex-grow">${pc.overview}</p>
                    <div class="mt-auto flex flex-wrap items-center gap-3">
                        ${p.liveUrl ? `
                        <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm bg-primary text-white hover:bg-primaryDark transition-all hover:-translate-y-0.5 shadow-glow">
                            ${t.projectsPage.viewCase} <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
                        </a>` : ''}
                        <a href="${p.repoUrl || 'https://github.com/ADITYAzin'}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm bg-black text-white hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-soft">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                            ${repoLabel}
                        </a>
                    </div>
                </div>
            </div>
            `;
        }

        return `
        <div onclick="navigate('project-detail', ${p.id})" 
             class="animate-enter group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 shadow-card"
             style="animation-delay: ${i * 100}ms">
            <div class="aspect-[4/3] w-full relative overflow-hidden">
                <img src="${p.image}" class="w-full h-full object-cover
             transition-transform duration-700 group-hover:scale-105" alt="${pc.title}">
            </div>
            <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                    <span class="px-3 py-1 rounded-lg bg-blue-50 text-primary text-xs font-bold uppercase tracking-wide">${p.category}</span>
                    <span class="text-slate-400 font-medium text-sm">${p.year}</span>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">${pc.title}</h3>
                <p class="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed">${pc.overview}</p>
                <div class="flex items-center text-slate-900 font-bold text-sm group-hover:text-primary transition-colors">
                    ${t.projectsPage.viewCase} <i data-lucide="arrow-right" class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </div>
            </div>
        </div>
        `}).join('');

       

    document.getElementById('app').innerHTML = `
        <div class="py-20 max-w-6xl mx-auto px-6">
            <div class="text-center mb-16 animate-enter">
                <h1 class="text-5xl font-extrabold text-slate-900 mb-6">${t.projectsPage.title}</h1>
                <p class="text-xl text-slate-600 max-w-2xl mx-auto">${t.projectsPage.subtitle}</p>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mb-16 animate-enter" style="animation-delay: 100ms">
                ${filterHTML}
            </div>
            <div class="${gridClass}">
                ${projectsHTML}
            </div>
        </div>
    `;
    if (window.lucide) {
        lucide.createIcons();
    }
}

function renderProjectDetail() {
    const p = projectsData.find(x => x.id === state.projectId);
    if (!p) return navigate('projects');
    const pc = p.content[state.lang];
    const t = content[state.lang].detailPage;

    // Mengambil metrik pertama untuk Executive Summary (Impact)
    const topImpact = pc.outcome?.stats?.[0] 
        ? `<div class="font-extrabold text-green-500 text-xl">${pc.outcome.stats[0].value}</div><div class="text-xs font-medium text-slate-500 mt-1">${pc.outcome.stats[0].label}</div>`
        : `<div class="font-bold text-slate-900 text-lg">${t.impact} Achieved</div>`;

    let bottomSectionHTML = '';

    if (p.category === "Brand Design") {
        const assets = pc.process?.result?.brandAssets || pc.brandAssets || {};
        bottomSectionHTML = `
            <div class="animate-enter" style="animation-delay: 400ms">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-black text-slate-900">Brand Identity Showcase</h2>
                    <p class="text-slate-500 mt-3">Eksplorasi visual dan filosofi di balik identitas desain ini.</p>
                </div>
                
                <div class="space-y-4 max-w-5xl mx-auto flex flex-col items-center">
                    
                    ${assets.mainLogo ? `
                    <img src="${assets.mainLogo}" class="w-full max-w-5xl object-contain" alt="Main Logo">
                    ` : ''}

                    ${assets.colorVariations && assets.colorVariations.length > 0 ? `
                    <img src="${assets.colorVariations[0]}" class="w-full max-w-5xl object-contain rounded-xl mt-6" alt="Logo Variation">
                    <div class="w-full max-w-5xl grid grid-cols-2 gap-6 object-contain mt-6">
                    <img src="${assets.colorVariations[1]}" class="w-full object-contain rounded-xl" alt="Color Variation 1">
                    <img src="${assets.colorVariations[2]}" class="w-full object-contain rounded-xl" alt="Color Variation 2">
                    </div>
                    ` : ''}

                   ${assets.philosophies && assets.philosophies.length > 0 ? `
                        <div class="space-y-4 w-full">
                            ${assets.philosophies.map(phil => 
                                phil.images.map(img => `
                                    <img src="${img}" class="w-full max-w-5xl h-auto object-contain rounded-xl" alt="Philosophy Image">
                                `).join('')
                            ).join('')}
                        </div>
                    ` : ''}

                    ${assets.mockups && assets.mockups.length > 0 ? `
                        <div class="w-full max-w-5xl grid grid-cols-2 gap-6 object-contain mt-6">
                        <img src="${assets.mockups[3]}" class="w-full object-contain rounded-xl" alt="Mockup 1">
                        <img src="${assets.mockups[4]}" class="w-full object-contain rounded-xl" alt="Mockup 2"></div>
                    <div class="space-y-4 w-full">
                    <img src="${assets.mockups[0]}" class="aspect-video w-full object-cover  rounded-xl" alt="Mockup 3">
                    <img src="${assets.mockups[1]}" class="w-full object-contain rounded-xl" alt="Mockup 4">
                    <img src="${assets.mockups[2]}" class="w-full object-contain rounded-xl" alt="Mockup 5">
                    </div>` : ''}

                </div>
            </div>
        `;
    } else {
        bottomSectionHTML = `
            <div id="process-section" class="animate-enter" style="animation-delay: 400ms">
                <div class="text-center mb-10">
                    <h2 class="text-4xl font-black text-slate-900">${t.processTitle}</h2>
                    <p class="text-slate-500 mt-3">Jelajahi tahapan proses kreatif di balik solusi ini.</p>
                </div>
                
                <div class="flex justify-center mb-12">
                    <div class="flex flex-row sm:flex-nowrap max-sm:grid max-sm:grid-cols-2 bg-slate-200/50 p-4 rounded-full max-sm:rounded-xl items-center justify-center flex-wrap gap-4 shadow-inner" id="tab-headers">
                    </div>
                </div>

                <div class="min-h-[400px] transition-all duration-500" id="tab-content"></div>
            </div>
        `;
    }

    // CTA Kembali ditempatkan di atas gambar banner hero
    document.getElementById('app').innerHTML = `
        <div class="bg-slate-50/50 pb-24 relative">
            
            <div class="fixed top-24 inset-x-0 z-50 pointer-events-none animate-enter">
                <div class="max-w-6xl mx-auto px-6 w-full">
                    <button onclick="navigate('${getBackRoute()}')" 
                            class="pointer-events-auto w-auto rounded-full bg-white/80 backdrop-blur-lg text-black inline-flex items-center gap-2 px-6 py-4 border border-slate-100 font-bold transition-all active:bg-gray-50 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        <i data-lucide="arrow-left" class="w-5 h-5"></i> 
                        ${t.back || (state.lang === 'id' ? 'Kembali' : 'Back')}
                    </button>
                </div>
            </div>

            <div class="relative h-[85vh] w-full overflow-hidden">
                <img src="${p.image}" class="w-full h-full object-cover" alt="${pc.title}">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                <div class="absolute inset-0 flex items-end justify-center p-6 text-center pb-32">
                    <div class="max-w-4xl animate-enter">
                        <span class="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">${p.category}</span>
                        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">${pc.title}</h1>
                        <p class="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium">${pc.overview}</p>
                    </div>
                </div>
            </div>

            <div class="max-w-6xl mx-auto px-6 -mt-24 relative z-10">
                
                <div class="bg-white rounded-3xl shadow-card p-6 md:p-10 mb-20 animate-enter border border-slate-100" style="animation-delay: 100ms">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        <div class="p-4 flex flex-col items-center justify-center">
                            <div class="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-4"><i data-lucide="user" class="w-6 h-6"></i></div>
                            <div class="text-slate-400 mb-2 font-bold uppercase text-xs tracking-widest">Role</div>
                            <div class="font-bold text-slate-900 text-lg">${pc.role}</div>
                        </div>
                        <div class="p-4 flex flex-col items-center justify-center">
                            <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4"><i data-lucide="pen-tool" class="w-6 h-6"></i></div>
                            <div class="text-slate-400 mb-2 font-bold uppercase text-xs tracking-widest">Tools</div>
                            <div class="font-bold text-slate-900 text-lg">${p.tools.join(", ")}</div>
                        </div>
                        
                    </div>
                </div>

                <div class="space-y-20">
                    <div class="grid lg:grid-cols-2 gap-12">
                        <div class="animate-enter bg-white p-10 rounded-3xl border border-slate-100 shadow-soft" style="animation-delay: 200ms">
                            <div class="flex items-center gap-3 mb-6">
                                <i data-lucide="target" class="w-8 h-8 text-red-500"></i>
                                <h3 class="text-2xl font-bold text-slate-900">${t.problem}</h3>
                            </div>
                            <p class="text-slate-600 leading-loose text-lg">${pc.problem}</p>
                        </div>
                        <div class="animate-enter bg-white p-10 rounded-3xl border border-slate-100 shadow-soft" style="animation-delay: 300ms">
                            <div class="flex items-center gap-3 mb-6">
                                <i data-lucide="flag" class="w-8 h-8 text-green-500"></i>
                                <h3 class="text-2xl font-bold text-slate-900">${t.goals}</h3>
                            </div>
                            <ul class="space-y-4">
                                ${pc.goals.map(g => `
                                    <li class="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0 mt-0.5"><i data-lucide="check" class="w-4 h-4"></i></div>
                                        <span class="text-slate-700 font-medium">${g}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    ${bottomSectionHTML}

                </div>
            </div>
        </div>
    `;

    if (p.category !== "Brand Design") {
        renderDetailTabs();
    }
    
    if(window.lucide) {
        if (window.lucide) {
        lucide.createIcons();
    }
    }
}

function renderDetailTabs() {
    const p = projectsData.find(x => x.id === state.projectId);
    if (!p || p.category === "Brand Design") return; 

    const pc = p.content[state.lang].process;
    const tTabs = content[state.lang].detailPage.tabs || {};
    const availableTabs = Object.keys(pc);
    
    // Untuk kategori Frontend Web Development, tab prototipe ditampilkan sebagai "Hasil"
    const getTabLabel = (tabKey) => {
        if (p.category === 'Frontend Web Development' && tabKey === 'prototype') return tTabs.result || tTabs.prototype;
        return tTabs[tabKey] || tabKey.charAt(0).toUpperCase() + tabKey.slice(1);
    };

    const tabHeaders = document.getElementById('tab-headers');
    if (tabHeaders) {
        tabHeaders.innerHTML = availableTabs.map(tabKey => `
            <button onclick="setDetailTab('${tabKey}')" 
                class="px-8 py-3 rounded-full max-sm:w-full max-sm:rounded-lg text-sm font-bold transition-all duration-300 ${state.detailTab === tabKey ? 'bg-white text-primary shadow-md scale-105' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'}">
                ${getTabLabel(tabKey)}
            </button>
        `).join('');
    }

    const activeData = pc[state.detailTab];
    let contentHTML = '';
    const animClass = "animate-enter";
    const titleText = activeData?.title || 'Tahap Proses';
    const descText = activeData?.desc || 'Penjelasan detail mengenai tahap ini.';
    const tabName = state.detailTab.toLowerCase();

    // Logika pemilihan layout konten berdasarkan tab (Research, Ideation, dsb)
    if (activeData.step1 || tabName.includes('research') || tabName.includes('riset')) {
        const renderAttachments = (attachments) => {
            if (!attachments || attachments.length === 0) return '';
            return `
                <div class="mt-8 pt-6 border-t border-slate-200">
                    <h5 class="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">Attachment</h5>
                    <div class="flex flex-wrap gap-2">
                        ${attachments.map(att => `
                            <button onclick="openLightbox(encodeURIComponent(JSON.stringify(['${att.image}'])), 0)" class="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:text-primary hover:border-primary transition-all shadow-sm group">
                                <i data-lucide="image" class="w-3.5 h-3.5 group-hover:scale-110 transition-transform"></i> ${att.label}
                            </button>
                        `).join('')}
                    </div>
                </div>
            `;
        };

        const s1Title = activeData.step1?.title || 'Empathize';
        const s1Icon = activeData.step1?.icon || 'users';
        const s1Text = activeData.step1?.text || 'Menganalisis kebutuhan pengguna.';
        const s1Attachments = activeData.step1?.attachments || [];
        
        const s2Title = activeData.step2?.title || 'Define';
        const s2Icon = activeData.step2?.icon || 'crosshair';
        const s2Text = activeData.step2?.text || 'Mendefinisikan masalah utama.';
        const s2Attachments = activeData.step2?.attachments || [];

        contentHTML = `
        <div class="${animClass} bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-soft">
            <div class="max-w-3xl mx-auto text-center mb-12">
                <h3 class="text-3xl font-bold text-slate-900 mb-4">${titleText}</h3>
                <p class="text-slate-600 text-lg leading-relaxed">${descText}</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8 items-start">
                <div class="bg-blue-50/40 p-8 rounded-3xl border border-blue-100 hover:shadow-md transition-shadow flex flex-col h-full">
                    <div class="flex-grow">
                        <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                            <i data-lucide="${s1Icon}" class="w-6 h-6"></i>
                        </div>
                        <h4 class="text-xl font-bold text-slate-900 mb-4">${s1Title}</h4>
                        <p class="text-slate-700 leading-relaxed">${s1Text}</p>
                    </div>
                    ${renderAttachments(s1Attachments)}
                </div>
                <div class="bg-purple-50/40 p-8 rounded-3xl border border-purple-100 hover:shadow-md transition-shadow flex flex-col h-full">
                    <div class="flex-grow">
                        <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                            <i data-lucide="${s2Icon}" class="w-6 h-6"></i>
                        </div>
                        <h4 class="text-xl font-bold text-slate-900 mb-4">${s2Title}</h4>
                        <p class="text-slate-700 leading-relaxed">${s2Text}</p>
                    </div>
                    ${renderAttachments(s2Attachments)}
                </div>
            </div>
        </div>`;
    } else if (tabName.includes('ideation') || tabName.includes('ideate') || tabName.includes('ideasi')) {
        contentHTML = `
        <div class="${animClass} bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-soft">
            <div class="max-w-3xl mx-auto text-center mb-12">
                 <h3 class="text-3xl font-bold text-slate-900 mb-4">${titleText}</h3>
                 <p class="text-slate-600 text-lg leading-relaxed">${descText}</p>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
                ${activeData.points ? activeData.points.map((pt, i) => `
                    <div class="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors items-start">
                        <div class="w-10 h-10 rounded-xl bg-white border border-slate-200 text-primary flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">${i+1}</div>
                        <p class="text-slate-700 font-medium pt-2 text-lg">${pt}</p>
                    </div>
                `).join('') : '<p class="text-slate-500 italic text-center col-span-2">Daftar fitur ideasi belum ditambahkan.</p>'}
            </div>
        </div>`;
    } else if (tabName.includes('prototype') || tabName.includes('prototipe')) {
        const prototypeImages = activeData.images || [];
        contentHTML = `
        <div class="${animClass} bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-soft">
            <div class="max-w-3xl mx-auto text-center mb-12">
                <h3 class="text-3xl font-bold text-slate-900 mb-4">${titleText}</h3>
                <p class="text-slate-600 text-lg">${descText}</p>
                ${p.liveUrl ? `
                <div class="mt-8 flex justify-center">
                    <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-primary text-white hover:bg-primaryDark hover:shadow-lg transition-all hover:-translate-y-1 shadow-glow">
                        ${state.lang === 'id' ? 'Kunjungi Website' : 'Visit Website'}
                        <i data-lucide="arrow-up-right" class="w-5 h-5"></i>
                    </a>
                </div>` : ''}
            </div>
            ${prototypeImages.length > 0 ? `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                ${prototypeImages.map((img, i) => `
                    <img src="${img}" onclick="openLightbox(encodeURIComponent(JSON.stringify(${JSON.stringify(prototypeImages).replace(/"/g, '&quot;')})), ${i})" class="rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 w-full h-64 md:h-80 object-cover cursor-pointer">
                `).join('')}
            </div>
            ` : '<p class="text-center text-slate-500 italic">Gambar prototipe belum tersedia.</p>'}
        </div>`;
    } else {
        contentHTML = `
        <div class="${animClass} bg-white text-slate-800 p-8 md:p-12 rounded-[2rem] shadow-soft border border-slate-100 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-[100px] opacity-60"></div>
            <div class="relative z-10 max-w-4xl mx-auto">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold mb-4 text-slate-900">${titleText}</h3>
                    <p class="text-slate-500 text-lg">${descText}</p>
                </div>
                <div class="space-y-6">
                    <div class="bg-slate-50/50 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-slate-200 flex flex-col md:flex-row gap-6 items-start hover:bg-white hover:shadow-md transition-all duration-300">
                        <div class="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0"><i data-lucide="check-circle" class="w-7 h-7"></i></div>
                        <div>
                            <h4 class="text-xl font-bold mb-2 text-slate-900">Usability Testing</h4>
                            <p class="text-slate-600 leading-relaxed">Struktur navigasi dirancang dengan pendekatan desain intuitif untuk meminimalisir hambatan kognitif, memastikan setiap fungsi utama dapat diakses dengan langkah yang lebih ringkas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }

    const tabContent = document.getElementById('tab-content');
    if (tabContent) {
        tabContent.innerHTML = contentHTML;
    }
    
    // Scan ulang ikon khusus untuk konten di dalam tab
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

function renderEventsList() {
    const t = content[state.lang].eventsPage;
    let contentHTML = '';
    
    if (state.eventsTab === 'events') {
         contentHTML = `
            <div class="grid md:grid-cols-2 gap-8">
                ${eventsData.map((event, i) => `
                    <div onclick="navigate('event-detail', ${event.id})" 
                         class="animate-enter group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col h-full hover:-translate-y-2 shadow-card"
                         style="animation-delay: ${i * 100}ms">
                        <div class="h-56 relative overflow-hidden">
                             <img src="${event.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${event.content[state.lang].title}">
                             <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                             <div class="absolute bottom-4 left-4 text-white">
                                <span class="bg-primary/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide mb-1 inline-block">${event.type}</span>
                                <div class="text-xs font-bold opacity-90"><i data-lucide="calendar" class="w-3 h-3 inline mr-1"></i> ${event.date}</div>
                             </div>
                        </div>
                        <div class="p-8 flex flex-col flex-grow">
                            <h3 class="font-bold text-xl text-slate-900 mb-3 group-hover:text-primary transition-colors">${event.content[state.lang].title}</h3>
                            <p class="text-slate-600 leading-relaxed mb-6 line-clamp-3 text-sm flex-grow">${event.content[state.lang].desc}</p>
                            <div class="flex items-center text-slate-900 font-bold text-sm group-hover:text-primary">
                                ${content[state.lang].events.viewDetail} <i data-lucide="arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"></i>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>`;
    } else {
        contentHTML = `
            <div class="grid md:grid-cols-3 gap-6">
                ${certificatesData.map((cert, i) => `
                    <div class="animate-enter bg-white rounded-2xl border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
                         style="animation-delay: ${i * 100}ms">
                        <div class="h-60 bg-slate-100 relative overflow-hidden">
                            <img src="${cert.image}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${cert.title}">
                            <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-3">
                                <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded uppercase tracking-wide">${cert.date}</span>
                                <i data-lucide="award" class="w-5 h-5 text-slate-400"></i>
                            </div>
                            <h3 class="font-bold text-slate-900 text-lg mb-1 leading-tight group-hover:text-primary transition-colors line-clamp-2 h-14">${cert.title}</h3>
                            <div class="flex items-center gap-2 text-sm text-slate-500 mt-2">
                                <div class="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600">i</div>
                                <span>${cert.issuer}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>`;
    }


    document.getElementById('app').innerHTML = `
        <div class="bg-slate-50 pt-20 pb-20 px-6">
             <div class="max-w-6xl mx-auto text-center animate-enter"><h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">${t.title}</h1><p class="text-xl text-slate-600 max-w-2xl mx-auto">${t.subtitle}</p></div>
        </div>
        <div class="max-w-6xl mx-auto px-6 pt-0 pb-16">
    <div class="flex justify-center mb-16 animate-enter" style="animation-delay: 100ms">
        <div class=" p-1.5 rounded-full inline-flex gap-2">
            <button onclick="setEventsTab('events')" 
                class="px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${state.eventsTab === 'events' ? 'bg-primary text-white shadow-glow' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary'}">
                ${t.tabs.events}
            </button>

            <button onclick="setEventsTab('certificates')" 
                class="px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${state.eventsTab === 'certificates' ? 'bg-primary text-white shadow-glow' : 'bg-white border border-slate-200 text-slate-600 hover:border-primary/50 hover:text-primary'}">
                ${t.tabs.certificates}
            </button>
        </div>
    </div>
    ${contentHTML}
</div>`;
    if (window.lucide) {
        lucide.createIcons();
    }
}

function renderEventDetail() {
    const event = eventsData.find(x => x.id === state.eventId);
    if (!event) return navigate('events-list');
    
    const ec = event.content[state.lang];
    const backText = state.lang === 'id' ? 'Kembali' : 'Back';
    const takeawayTitle = state.lang === 'id' ? 'Insight & Pembelajaran' : 'Key Takeaways';
    const galleryTitle = state.lang === 'id' ? 'Dokumentasi Kegiatan' : 'Event Documentation';

    const storyContent = ec.fullStory ? ec.fullStory : ec.desc;

    // CTA Kembali diletakkan di bagian atas konten sebagai komponen in-line, tidak di Navbar
    document.getElementById('app').innerHTML = `
        <div class="bg-white pb-24 relative">
            
            <div class="max-w-4xl mx-auto px-6 pt-10 pb-4 animate-enter">
                <button onclick="navigate('${getBackRoute()}')" class="inline-flex items-center gap-2 px-6 py-2.5 bg-slate-50 border border-slate-200 text-slate-600 rounded-full hover:bg-white hover:border-primary hover:text-primary hover:shadow-soft font-bold transition-all hover:-translate-x-1">
                    <i data-lucide="arrow-left" class="w-5 h-5"></i> ${backText}
                </button>
            </div>

            <header class="max-w-3xl mx-auto px-6 pt-8 pb-10 text-center animate-enter" style="animation-delay: 50ms">
                <div class="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                    ${event.type}
                </div>
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight">
                    ${ec.title}
                </h1>
                <div class="flex items-center justify-center gap-4 text-slate-500 font-medium">
                    <span class="flex items-center gap-2"><i data-lucide="calendar" class="w-4 h-4"></i> ${event.date}</span>
                    ${event.location ? `<span class="w-1.5 h-1.5 rounded-full bg-slate-300"></span><span class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4"></i> ${event.location}</span>` : ''}
                </div>
            </header>

            <div class="max-w-5xl mx-auto px-6 mb-16 animate-enter" style="animation-delay: 100ms">
                <div class="w-full aspect-[21/9] md:aspect-[2.5/1] rounded-[2rem] overflow-hidden shadow-card relative group">
                    <img src="${event.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${ec.title}">
                </div>
            </div>

            <article class="max-w-3xl mx-auto px-6">
                
                <div class="prose prose-lg md:prose-xl prose-slate mx-auto animate-enter" style="animation-delay: 200ms">
                    <p class="text-slate-700 leading-loose text-lg md:text-xl first-letter:text-7xl first-letter:font-black first-letter:text-primary first-letter:mr-4 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                        ${storyContent}
                    </p>
                    
                    ${ec.paragraphs ? ec.paragraphs.map(p => `<p class="text-slate-700 leading-loose text-lg md:text-xl mt-8">${p}</p>`).join('') : ''}
                </div>

                ${ec.quote ? `
                    <blockquote class="my-16 pl-8 py-4 border-l-4 border-primary bg-blue-50/50 rounded-r-2xl animate-enter" style="animation-delay: 300ms">
                        <p class="text-2xl md:text-3xl italic font-medium text-slate-800 leading-relaxed">"${ec.quote}"</p>
                    </blockquote>
                ` : ''}

                <div class="mt-16 bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 animate-enter" style="animation-delay: 400ms">
                    <h3 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <div class="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center"><i data-lucide="lightbulb" class="w-6 h-6"></i></div>
                        ${takeawayTitle}
                    </h3>
                    <ul class="space-y-4">
                        ${ec.takeaways ? ec.takeaways.map(t => `
                            <li class="flex items-start gap-4">
                                <span class="w-2 h-2 rounded-full bg-green-500 mt-2.5 shrink-0"></span>
                                <span class="text-slate-700 leading-relaxed">${t}</span>
                            </li>
                        `).join('') : `
                            <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-green-500 mt-2.5 shrink-0"></span><span class="text-slate-700 leading-relaxed text-lg">Mendapatkan perspektif baru dari hal-hal baru.</span></li>
                            <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-green-500 mt-2.5 shrink-0"></span><span class="text-slate-700 leading-relaxed text-lg">Memperluas jaringan koneksi dengan profesional di berbagai bidang.</span></li>
                            <li class="flex items-start gap-4"><span class="w-2 h-2 rounded-full bg-green-500 mt-2.5 shrink-0"></span><span class="text-slate-700 leading-relaxed text-lg">Dapat mengetahui bagaimana komunikasi yang efektif dan mudah dipahami.</span></li>
                        `}
                    </ul>
                </div>
            </article>

            ${ec.gallery ? `
            <div class="max-w-5xl mx-auto px-6 mt-24 animate-enter" style="animation-delay: 500ms">
                <h3 class="text-2xl font-bold text-slate-900 mb-8 text-center">${galleryTitle}</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    ${ec.gallery.map((img, i) => `
                        <div class="aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group" onclick="openLightbox(encodeURIComponent(JSON.stringify(${JSON.stringify(ec.gallery).replace(/"/g, '&quot;')})), ${i})">
                            <img src="${img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Gallery image">
                            <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors"></div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}

        </div>
    `;
    if (window.lucide) {
        lucide.createIcons();
    }
}

function renderAbout() {
    const t = content[state.lang].about;
    document.getElementById('app').innerHTML = `
        <div class="max-w-6xl mx-auto px-6 py-20">
            <div class="flex flex-col md:flex-row gap-16 items-start">
                <div class="w-full md:w-1/3 space-y-8 animate-enter">
                     <div class=" rounded-3xl overflow-hidden relative shadow-card group"><img src="img/profile.png" class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt="Profile"></div>
                    <div class="grid grid-cols-2 gap-4"><div class="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-soft"><div class="text-3xl font-extrabold text-blue-400">${projectsData.length}</div><div class="text-xs text-slate-400 mt-1 font-bold uppercase tracking-wide">${t.stats.projects}</div></div><div class="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-soft"><div class="text-3xl font-extrabold text-slate-900">${certificatesData.length}</div><div class="text-xs text-slate-500 mt-1 font-bold uppercase tracking-wide">${t.stats.awards}</div></div></div>
                </div>
                <div class="w-full md:w-2/3 animate-enter" style="animation-delay: 100ms">
                    <h1 class="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">${t.title}</h1><div class="prose prose-lg text-slate-600 mb-12"><p class="mb-6">${t.p1}</p><p  class="mb-6">${t.p2}</p></div>
                    <div class="space-y-8">
                        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 class="font-bold text-primary uppercase text-sm tracking-widest border-b border-slate-200 pb-3 mb-6">${t.workStyle}</h3>
                            <div class="flex flex-wrap gap-2">${t.styles.map(s => `<span class="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-700 text-sm font-bold rounded-lg shadow-sm border border-slate-200 hover:border-primary/50 hover:text-primary transition-colors cursor-default"><i data-lucide="check-circle" class="w-4 h-4 text-primary"></i>${s}</span>`).join('')}</div>
                        </div>
                        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 class="font-bold text-primary uppercase text-sm tracking-widest border-b border-slate-200 pb-3 mb-6">${t.sectionHardSkills}</h3>
                            <div class="flex flex-wrap gap-2">${t.hardSkills.map(s => `<span class="px-4 py-2 bg-white text-slate-700 text-sm font-bold rounded-lg shadow-sm border border-slate-200 hover:border-primary/50 hover:text-primary transition-colors cursor-default">${s}</span>`).join('')}</div>
                        </div>
                        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 class="font-bold text-primary uppercase text-sm tracking-widest border-b border-slate-200 pb-3 mb-6">${t.sectionTools}</h3>
                            <div class="flex flex-wrap gap-2">${t.tools.map(s => `<span class="px-4 py-2 bg-white text-slate-700 text-sm font-bold rounded-lg shadow-sm border border-slate-200 hover:border-primary/50 hover:text-primary transition-colors cursor-default">${s}</span>`).join('')}</div>
                        </div>
                        <div class="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 class="font-bold text-primary uppercase text-sm tracking-widest border-b border-slate-200 pb-3 mb-6">${t.education}</h3>
                            ${t.eduList.map(e => `<div class="mb-6 last:mb-0 flex gap-4 items-start"><div class="w-12 h-12 rounded-lg bg-white text-primary shadow-sm border border-slate-200 flex items-center justify-center shrink-0"><i data-lucide="graduation-cap" class="w-6 h-6"></i></div><div><div class="font-bold text-slate-900 text-lg">${e.title}</div><div class="text-slate-500 font-medium">${e.school}</div></div></div>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
}

function renderContact() {
    const t = content[state.lang].contact;
    document.getElementById('app').innerHTML = `
        <div class="min-h-[100vh] flex items-center justify-center px-6 relative overflow-hidden"><div class="absolute inset-0 bg-slate-50 -z-10"></div><div class="blob bg-blue-200 w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[100px] opacity-50"></div>
            <div class="max-w-3xl w-full text-center animate-enter">
                <div class="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-primary mb-10 shadow-card animate-float"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg></div><h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">${t.title}</h1><p class="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">${t.desc}</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4"><a href="mailto:adityapratamaputra.id@gmail.com" class="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-glow hover:bg-primaryDark hover:-translate-y-1 transition-all"><i data-lucide="mail" class="w-5 h-5"></i> ${t.emailBtn}</a><a href="https://www.linkedin.com/in/adityapratamaputraid/" class="flex items-center justify-center gap-3 px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-lg hover:border-primary hover:text-primary hover:-translate-y-1 transition-all shadow-soft"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg> ${t.linkedinBtn}</a></div>
            </div>
        </div>`;
}

function navigate(page, id = null) {
    // PROTEKSI: Jika project GXC (7) atau Kupang Crips (10) diklik
    if (page === 'project-detail' && (id === 7 || id === 10)) {
        showMaintenancePopup();
        return; // Jangan lanjut ke proses render detail
    }

    if (state.page !== page) {
        state.previousPage = state.page;
    }
    state.page = page;
    
    if (page === 'project-detail') {
        state.projectId = id;
        const p = projectsData.find(x => x.id === id);
        if (p) state.detailTab = Object.keys(p.content[state.lang].process)[0]; 
    } else if (page === 'event-detail') state.eventId = id;
    else if (page === 'events-list') state.eventsTab = 'events';
    
    toggleMobileMenu(false); 
    renderApp();
    setTimeout(() => { window.scrollTo({ top: 0, behavior: 'instant' }); AOS.refreshHard(); }, 50);
}

// --- MAINTENANCE POPUP LOGIC ---
function showMaintenancePopup() {
    // Buat elemen popup jika belum ada
    if (!document.getElementById('maintenance-popup')) {
        const popupHTML = `
            <div id="maintenance-popup" class="fixed inset-0 z-50 hidden items-center justify-center px-6">
                <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeMaintenancePopup()"></div>
                <div class="relative bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl border border-slate-100 transform transition-all animate-enter text-center">
                    <div class="w-20 h-20 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <i data-lucide="construction" class="w-10 h-10"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-slate-900 mb-3">Project Update</h3>
                    <p class="text-slate-600 leading-relaxed mb-8">
                        Mohon maaf, tidak dapat menampilkan karena dalam tahap penyusunan.
                    </p>
                    <button onclick="closeMaintenancePopup()" class="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primaryDark transition-all shadow-glow">
                        Baiklah, saya mengerti
                    </button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        if (window.lucide) {
        lucide.createIcons();
    } // Inisialisasi icon construction
    }

    const popup = document.getElementById('maintenance-popup');
    
    // 1. Hitung lebar scrollbar saat ini
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    // 2. Terapkan ke CSS Variable agar bisa dipakai Body & Navbar
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
    
    // 3. Aktifkan mode modal
    document.body.classList.add('modal-open');
    popup.classList.remove('hidden');
    popup.classList.add('flex');
}

function closeMaintenancePopup() {
    const popup = document.getElementById('maintenance-popup');
    
    popup.classList.add('hidden');
    popup.classList.remove('flex');
    
    // 4. Kembalikan kondisi semula
    document.body.classList.remove('modal-open');
    // Hapus variabel agar tidak mengganggu layout normal
    document.documentElement.style.removeProperty('--scrollbar-width');
}

// Start App
navigate('home');