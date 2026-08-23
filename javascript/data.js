// data.js
// Berisi semua data konten, terjemahan, dan portofolio

const content = {
    id: {
        nav: { home: 'Beranda', projects: 'Karya', events: 'Jejak', about: 'Tentang', contact: 'Kontak', cv: 'Unduh CV' },
        hero: {
            badge: 'Tersedia untuk kolaborasi',
            title: 'Menciptakan',
            titleHighlight: 'Pengalaman Digital yang Efektif',
            desc: 'Dengan pendekatan desain berbasis riset dan strategi, saya membantu brand dan produk digital tampil relevan, usable, dan bernilai jangka panjang.',
            ctaPrimary: 'Jelajahi Karya',
            ctaSecondary: 'Diskusi Proyek'
        },
        skills: {
            title: 'Keahlian',
            items: [
                { title: 'UI/UX Design', desc: 'Interface intuitif & user-centric.', icon: 'layout-template' },
                { title: 'Graphic Design', desc: 'Visual komunikasi yang efektif.', icon: 'pen-tool' },
                { title: 'Frontend Web Development', desc: 'Pengembangan web responsif & interaktif.', icon: 'code' },
                { title: 'Quality Assurance', desc: 'Pengujian kualitas & validasi sistem.', icon: 'shield-check' },
                { title: 'Prompt Engineering', desc: 'Optimalisasi prompt AI untuk hasil maksimal.', icon: 'zap' },
            ]
        },
        highlight: { sectionTitle: "Proyek Unggulan", subtitle: "Karya terbaik bulan ini", cta: "Lihat Detail Karya" },
        events: { title: "Jejak Produktif", subtitle: "Beragam event dan apresiasi", viewDetail: "Detail", viewOthers: "Lihat Arsip" },
        eventsPage: {
            title: "Jejak Produktif",
            subtitle: "Dokumentasi perjalanan karir, kompetisi, dan kontribusi komunitas.",
            tabs: { events: "Event", certificates: "Sertifikasi" },
            viewCert: "Lihat Kredensial"
        },
        eventDetail: { back: "Kembali", about: "Deskripsi", highlights: "Poin Utama", gallery: "Dokumentasi Kegiatan", galleryPlaceholder: "Foto Event" },
        featured: { 
            title: 'Karya Pilihan', 
            subtitle: 'Eksplorasi solusi desain terbaru', 
            viewAll: 'Lihat Semua',
            viewMore: 'Lihat Karya Lainnya' // <- Tambahan CTA ID
        },
        projectsPage: {
            title: 'Karya',
            subtitle: 'Kumpulan karya terpilih yang menampilkan proses berpikir dan hasil visual.',
            filters: ['Semua', 'UI/UX Design', 'Brand Design', 'Graphic Design', 'Frontend Web Development', 'Lainnya'],
            viewCase: 'Lihat Detail Karya'
        },
        detailPage: {
            back: 'Kembali', role: 'Peran', timeline: 'Durasi', tools: 'Tech Stack', problem: 'Tantangan', goals: 'Objektif', processTitle: 'Proses Kreatif',
            tabs: { research: 'Riset', define: 'Definisi', ideation: 'Ideasi', design: 'Desain', validate: 'Validasi', brief: 'Brief', prototype: 'Prototipe', result: 'Hasil' },
            final: 'Hasil Akhir', impact: 'Dampak', learnings: 'Refleksi', imagePlaceholder: 'Visualisasi Proses',
            briefLabels: { profile: 'Profil', request: 'Kebutuhan', keywords: 'Kata Kunci Desain' }
        },
        about: {
            title: 'Aditya Pratama Putra',
            p1: 'Saya adalah seorang desainer yang berspesialisasi dalam UI/UX, identitas merek, dan desain grafis, yang berdedikasi untuk mengubah ide-ide kompleks menjadi antarmuka yang intuitif dan fungsional. Dengan memadukan latar belakang saya di bidang Quality Assurance (QA) dengan alur kerja AI tingkat lanjut, saya menghadirkan ketepatan teknis, serta efisiensi yang optimal ke dalam setiap proyek.',
            p2: 'Didorong oleh empati dan pikiran terbuka, saya berfokus pada kolaborasi strategis untuk mendukung pertumbuhan bisnis dalam ekosistem digital yang dinamis. Saya berkomitmen untuk menghadirkan solusi digital berkualitas baik yang berpusat pada pengguna, yang secara mulus menyeimbangkan daya tarik visual dengan fungsionalitas yang optimal.',
            sectionHardSkills: 'Hard Skill',
            hardSkills: ['UI/UX Design', 'Brand Design', 'Graphic Design', 'Quality Assurance', 'Frontend Web Development'],
            sectionTools: 'Tools',
            tools: ['Figma', 'Gemini AI','Figma AI','NotebookLM','Notion', 'Maze' , 'Canva' ,'Wordpress', 'HTML', 'TailwindCSS', 'Javascript', 'OpenCode', '9Router'],
            workStyle: 'Soft Skills',
            styles: ['Responsibility', 'Teamwork', 'Adaptable', 'Problem Solving'],
            stats: { projects: "Proyek Selesai", awards: "Penghargaan" },
            education: 'Pendidikan',
            eduList: [ { title: 'SMK Telkom Sidoarjo', school: 'Teknik Jaringan Komputer • Sekarang' }, { title: 'SMP Muhammadiyah 10 Sidoarjo', school: '2023' } ]
        },
        contact: { title: "Siap mengubah ide menjadi realita?", desc: 'Saya selalu terbuka untuk diskusi proyek baru atau sekadar menyapa. Mari buat sesuatu yang luar biasa bersama.', emailBtn: 'Kirim Email', linkedinBtn: 'Kunjungi LinkedIn', downloadBtn: 'Simpan Kontak' }
    },
    en: {
        nav: { home: 'Home', projects: 'Works', events: 'Experience', about: 'About', contact: 'Contact', cv: 'Download CV' },
        hero: {
            badge: '✨ Available for hire',
            title: 'Creating',
            titleHighlight: 'Effective Digital Experiences',
            desc: 'With a research-driven and strategic design approach, I help brands and digital products appear relevant, usable, and valuable in the long run.',
            ctaPrimary: 'Explore Work',
            ctaSecondary: 'Discuss Project'
        },
        skills: {
            title: 'Expertise',
            items: [
                { title: 'UI/UX Design', desc: 'Intuitive & user-centric interfaces.', icon: 'layout-template' },
                { title: 'Brand Design', desc: 'Consistent visual systems.', icon: 'palette' },
                { title: 'Graphic Design', desc: 'Effective visual communication.', icon: 'pen-tool' }
            ]
        },
        highlight: { sectionTitle: "Featured Project", subtitle: "Project of the month", cta: "Read Case Study" },
        events: { title: "Track Record", subtitle: "Various events and appreciations", viewDetail: "Details", viewOthers: "View Archive" },
        eventsPage: {
            title: "Track Record",
            subtitle: "Documentation of career journey, competitions, and community contributions.",
            tabs: { events: "Events", certificates: "Certifications" },
            viewCert: "View Credential"
        },
        eventDetail: { back: "Back", about: "Description", highlights: "Key Points", gallery: "Activity Documentation", galleryPlaceholder: "Event Photo" },
        featured: { 
            title: 'Selected Works', 
            subtitle: 'Recent design solution explorations', 
            viewAll: 'View All',
            viewMore: 'View More Works' // <- Tambahan CTA EN
        },
        projectsPage: {
            title: 'Works',
            subtitle: 'A collection of selected projects showcasing thinking process and visual results.',
            filters: ['All', 'UI/UX Design', 'Brand Design', 'Graphic Design', 'Frontend Web Development', 'Others'],
            viewCase: 'Read Case Study'
        },
        detailPage: {
            back: 'Back', role: 'Role', timeline: 'Duration', tools: 'Tech Stack', problem: 'Challenge', goals: 'Objectives', processTitle: 'Creative Process',
            tabs: { research: 'Research', define: 'Define', ideation: 'Ideation', design: 'Design', validate: 'Validate', brief: 'Brief', prototype: 'Prototype', result: 'Result' },
            final: 'Final Result', impact: 'Impact', learnings: 'Reflection', imagePlaceholder: 'Process Visualization',
            briefLabels: { profile: 'Profile', request: 'Needs', keywords: 'Design Keywords' }
        },
        about: {
            title: 'Aditya Pratama Putra',
            p1: 'I am a designer specializing in UI/UX, brand identity, and graphic design, dedicated to transforming complex ideas into intuitive and functional interfaces. By combining my background in Quality Assurance (QA) with advanced AI workflows, I bring technical precision and optimal efficiency to every project.',
            p2: 'Driven by empathy and an open mind, I focus on strategic collaboration to support business growth in a dynamic digital ecosystem. I am committed to delivering high-quality, user-centered digital solutions that seamlessly balance visual appeal with optimal functionality.',    
            sectionHardSkills: 'Hard Skills',
            hardSkills: ['UI/UX Design', 'Brand Design', 'Graphic Design', 'Frontend Web Development'],
            sectionTools: 'Tools',
            tools: ['Figma', 'Canva', 'Framer', 'NotebookLM', 'Notion', 'Wordpress', 'HTML', 'TailwindCSS', 'Javascript', 'OpenCode', '9Router'],
            workStyle: 'Soft Skills',
            styles: ['Responsibility', 'Teamwork', 'Adaptable', 'Problem Solving'],
            stats: { projects: "Completed Projects", awards: "Awards" },
            education: 'Education',
            eduList: [ { title: 'SMK Telkom Sidoarjo', school: 'Network Engineering • Present' }, { title: 'SMP Muhammadiyah 10 Sidoarjo', school: '2023' } ]
        },
        contact: { title: "Ready to turn ideas into reality?", desc: 'I am always open to discussing new projects or just saying hi. Let\'s build something amazing together.', emailBtn: 'Send Email', linkedinBtn: 'Visit LinkedIn', downloadBtn: 'Save Contact' }
    }
};

const eventsData = [
    { 
        id: 1, 
        type: "Pemateri", 
        date: "Februari 2026", 
        image: "img/SKOMDA MENGAJAR 26.png", 
        gallery: [ 
            "https://images.unsplash.com/photo-1544531696-b7c00647c43d?auto=format&fit=crop&q=80&w=1200", 
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200", 
            "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200", 
            "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200" 
        ], 
        content: { 
            id: { 
                title: "SKOMDA Mengajar", 
                desc: "Berkesempatan untuk berbagi wawasan mengenai sistem dan teknik prompt AI untuk optimalisasi belajar.",
                fullStory: "SKOMDA Mengajar bukan sekadar sesi berbagi biasa, ini adalah titik kumpul bagi para inovator muda untuk menyelami potensi Artificial Intelligence (AI) dalam dunia pendidikan dan desain.",
                paragraphs: [
                    "Selama acara berlangsung, saya membimbing para siswa dalam menyusun teknik prompt yang efektif untuk mempercepat alur belajar mereka, dari teori prompt hingga menghasilkan ide gambar.",
                    "Antusiasme peserta sangat luar biasa. Banyak dari mereka yang baru menyadari bahwa AI bukanlah alat untuk menggantikan kreativitas manusia, melainkan sebagai asisten yang sangat cerdas untuk mengeksekusi ide-ide kompleks menjadi realitas secara lebih efisien.",
                    "Saya bukan hanya memberikan teknik prompt, tetapi juga membimbing mereka mengenai tentang fundamental sistem AI, bagaimana AI bekerja, dan mengenalkan fitur-fitur Gemini AI untuk sarana pembelajaran mereka. Salah satunya adalah fitur pembuat quiz dan Nano Banana.",
                    "Teori tanpa praktik adalah hal yang tidak efektif, maka tim saya memberikan challenge untuk membuat gambar dengan prompt yang mereka rancang dengan kelompok mereka. Hasilnya sangat memuaskan, hasilnya mereka dapat berkolaborasi untuk menyusun strategi komunikasi prompt dengan kemampuan pola pikir terstruktur, komunikasi presisi, problem solving, kreativitas dan evaluasi"
                ],
                quote: "Mereka semakin paham bahwa AI adalah alat optimalisasi belajar untuk efisiensi waktu dan kreativitas dalam berkomunikasi yang efektif.",
                highlights: ["Topik: Wawasan Dasar Sistem AI.", "Praktik Pembuatan Prompt Efektif.", "Networking & Sesi Tanya Jawab."] 
            }, 
            en: { 
                title: "Speaker at SKOMDA Mengajar", 
                desc: "Had the opportunity to share insights regarding AI systems and prompting techniques for learning optimization.",
                fullStory: "SKOMDA Mengajar is not just a regular sharing session; it is a gathering point for young innovators to dive into the potential of Artificial Intelligence (AI) in education and design.",
                paragraphs: [
                    "During the event, I guided students in structuring effective prompt techniques to accelerate their learning workflow, from prompt theory to generating image ideas.",
                    "The participants' enthusiasm was incredible. Many realized that AI is not a tool to replace human creativity, but rather a highly intelligent assistant for executing complex ideas into reality more efficiently.",
                    "I didn't just provide prompt techniques, but also guided them through the fundamentals of AI systems, how AI works, and introduced Gemini AI features as learning tools, such as the quiz maker and Nano Banana features.",
                    "Theory without practice is ineffective, so my team provided a challenge to create images with prompts they designed with their groups. The results were very satisfying; they were able to collaborate to devise prompt communication strategies with structured thinking, precise communication, problem-solving, creativity, and evaluation skills."
                ],
                quote: "They understand better that AI is a learning optimization tool for time efficiency and creativity in effective communication.",
                highlights: ["Topic: Basic AI Systems Insight.", "Effective Prompting Practice.", "Networking & Q&A Session."] 
            } 
        } 
    },
    { 
        id: 2, 
        type: "Peserta", 
        date: "Februari 2026", 
        image: "img/AI for Social Impact.jpeg", 
        gallery: [ 
            "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200", 
            "https://images.unsplash.com/photo-1504384308090-c54be3855463?auto=format&fit=crop&q=80&w=1200", 
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" 
        ], 
        content: { 
            id: { 
                title: "Seminar AI for Social Impact", 
                desc: "Menghadiri seminar yang membahas tentang Product Development dan teknologi AI di masa depan.",
                fullStory: "Masa depan pengembangan produk digital tidak bisa dilepaskan dari jejak kecerdasan buatan. Seminar ini membuka wawasan saya secara masif mengenai bagaimana AI dapat digunakan untuk memecahkan masalah-masalah sosial di masyarakat.",
                paragraphs: [
                    "Sesi diskusi berfokus pada pendekatan 'Human-Centered AI', di mana perancangan sistem harus memprioritaskan privasi, aksesibilitas, dan nilai guna bagi target audiens yang rentan (seperti UMKM atau kelompok disabilitas).",
                    "Acara ini juga diikuti dengan sesi hackathon singkat, di mana tim kami berkesempatan merancang rancangan dasar (wireframe) untuk aplikasi pendanaan mikro berbasis komunitas."
                ],
                quote: "Teknologi paling canggih adalah teknologi yang dampaknya bisa langsung dirasakan oleh mereka yang paling membutuhkan di akar rumput.",
                highlights: ["Eksplorasi Human-Centered AI.", "Inovasi UX berbasis data sosial.", "Sesi kolaborasi pemecahan masalah (Hackathon)."] 
            }, 
            en: { 
                title: "AI for Social Impact Seminar", 
                desc: "Attended a seminar discussing Product Development and the future of AI technology.",
                fullStory: "The future of digital product development is inextricably linked to artificial intelligence. This seminar massively opened my eyes to how AI can be used to solve real social issues in society.",
                paragraphs: [
                    "The discussion sessions focused on the 'Human-Centered AI' approach, where system design must prioritize privacy, accessibility, and usability for vulnerable target audiences (such as SMEs or disabled groups).",
                    "The event was also followed by a mini-hackathon session, where our team had the opportunity to design wireframes for a community-based micro-funding application."
                ],
                quote: "The most advanced technology is the one whose impact can be directly felt by those who need it most at the grassroots level.",
                highlights: ["Human-Centered AI Exploration.", "Social data-driven UX Innovation.", "Problem-solving collaboration session (Hackathon)."] 
            } 
        } 
    },
    { 
        id: 3, 
        type: "Pemenang", 
        date: "Desember 2025", 
        image: "img/FESTIKA 2025.png", 
        gallery: [ 
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200", 
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200", 
            "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" 
        ], 
        content: { 
            id: { 
                title: "Juara 1 Lomba AI Provinsi", 
                desc: "Memenangkan kompetisi bergengsi tingkat Provinsi Jawa Timur dihadiri oleh Gubernur Jawa Timur.",
                fullStory: "Momen ini menjadi salah satu tonggak sejarah paling berharga dalam perjalanan karir digital saya.",
                paragraphs: [
                    "LOMBA AREK_AI FESTIKA JATIM 2025 adalah kompetisi yang diselenggarakan oleh Dinas Pendidikan Jawa Timur yang berfokus di bidang pengembangan website berbasis Artificial Intelligence (AI). Peserta tim kompetisi sangat diperbolehkan memanfaatkan teknologi AI dalam proses pengembangan dengan tujuan bagaimana interaksi pembelajaran di setiap prosesnya pada masing-masing tim.",
                    "Kami dalam tim telah membagi peran yakni (1) Aditya Pratama Putra sebagai UX Designer & QA Analyst, (2) Agung Dwi Saputra sebagai AI Prompter dan UI Engineer.",
                    "Dalam proyek ini, Aditya Pratama Putra berkontribusi melakukan riset mendalam mengenai permasalahan sampah di Indonesia menggunakan metode campuran, mulai dari analisis data pemerintah hingga studi literatur melalui portal berita dan jurnal nasional.",
                    "Selain itu, riset lapangan dilakukan dengan metode Empathize yang melibatkan lebih dari 70 responden untuk memvalidasi fakta penanganan sampah di masyarakat. Pendekatan Problem-Driven Design digunakan untuk memastikan solusi yang dihasilkan benar-benar menjawab tantangan nyata dan memberikan dampak terukur.",
                    "Hasil kolaborasi ini melahirkan 'Samling', sebuah sistem integrasi IoT dan Web yang berfungsi memantau kapasitas tempat sampah serta mengoptimalkan rute distribusi pengelolaan. Platform ini menghubungkan warga, petugas lapangan, dan administrator dalam satu ekosistem digital untuk mendukung pengelolaan sampah yang lebih berkelanjutan di Indonesia.",
                    "Pencapaian luar biasa berhasil diraih oleh tim dengan merebut Juara 1 Tingkat Provinsi Jawa Timur, menyisihkan lebih dari 1400 peserta lainnya dalam ajang bergengsi ini."
                ],
                quote: "Kreativitas yang berakar pada empati dan penyelesaian masalah nyata akan selalu menemukan tempatnya untuk diakui.",
                highlights: ["Meraih predikat Juara 1 tingkat Provinsi.", "Mendesain integrasi UI dengan API AI yang kompleks.", "Diapresiasi langsung oleh stakeholder provinsi."] 
            }, 
            en: { 
                title: "1st Place Provincial AI Competition", 
                desc: "Won a prestigious East Java Provincial level competition attended by the Governor of East Java.",
                fullStory: "This moment stands as one of the most valuable milestones in my digital career journey.",
                paragraphs: [
                    "AREK_AI FESTIKA JATIM 2025 is a competition organized by the East Java Education Office focusing on AI-based website development. Competing teams were encouraged to utilize AI technology in the development process to enhance learning interactions within each team's process.",
                    "Our team roles were divided as follows: (1) Aditya Pratama Putra as Researcher and Product Designer, (2) Agung Dwi Saputra as AI Prompter and UI Engineer.",
                    "In this project, Aditya Pratama Putra contributed by conducting in-depth research on waste issues in Indonesia using mixed methods, ranging from government data analysis to literature studies through news portals and national journals.",
                    "Furthermore, field research was conducted using the Empathize method involving over 70 respondents to validate waste management facts in society. A Problem-Driven Design approach was used to ensure the solution truly addressed real challenges and provided measurable impact.",
                    "This collaboration resulted in 'Samling', an integrated IoT and Web system that monitors trash bin capacity and optimizes management distribution routes. The platform connects citizens, field officers, and administrators in a single digital ecosystem to support more sustainable waste management in Indonesia.",
                    "An extraordinary achievement was reached by the team, securing 1st Place at the East Java Provincial level, outperforming over 1400 other participants in this prestigious event."
                ],
                quote: "Creativity rooted in empathy and real problem-solving will always find its way to be recognized.",
                highlights: ["Secured 1st Place at the Provincial level.", "Designed complex UI integration with AI APIs.", "Directly appreciated by provincial stakeholders."] 
            } 
        } 
    }
];

const certificatesData = [

    { id: 310, title: "Quality Assurance Fundamental", issuer: "MySkill", date: "2026", image: "img/myskill.png" },
    { id: 311, title: "AI Engineer For Milenial", issuer: "Digital Talent Scholarship Komdigi", date: "2026", image: "img/Sertifikat_ADITYA PRATAMA PUTRA_AI Engineer For Milenial-1.png" },
        { id: 312, title: "Artificial Intelligence (AI) Training in the Digital Era", issuer: "Edukasa", date: "2026", image: "img/1778923349977.png" },
    { id: 301, title: "Lomba AI | Festika Jatim 2025", issuer: "Dinas Pendidikan Provinsi Jawa Timur", date: "2025", image: "img/AI_AREK AI MURID - FESTIKA JATIM 2025_ADITYA PRATAMA PUTRA.jpeg" },
    { id: 302, title: "Lomba AI | Dinacom 11.0 ", issuer: "Universitas Dian Nusantara", date: "2025", image: "img/AI_DINACOM_11.0 - ADITYA PRATAMA PUTRA.png" },
    { id: 303, title: "Digital Skill Fair 44 - UI/UX Design", issuer: "Dibimbing", date: "2025", image: "img/DSF 44 Design.png" },
    { id: 304, title: "Lomba UI/UX Design | ISAC 25", issuer: "Universitas Airlangga", date: "2025", image: "img/UI_UX DESIGN_ISAC 2025_ADITYA PRATAMA PUTRA.png" },
    { id: 305, title: "Lomba Essay | InnoVision UI 2.0", issuer: "Universitas Indonesia", date: "2025", image: "img/ESSAY_TECHTONIC UI 2.0_ADITYA PRATAMA PUTRA.png" },
    { id: 306, title: "Lomba UI/UX Design | IT COMFEST 25", issuer: "Universitas Muhammadiyah Ponorogo", date: "2025", image: "img/UI_UX DESIGN_IT COMPFEST 2025_ADITYA PRATAMA PUTRA.png" },
    { id: 307, title: "Lomba Olimpiade Sains Nasional bidang Informatika | OSN", issuer: "Yayasan Presmanesia", date: "2025", image: "img/INFORMATIKA_OSN 2024_ADITYA PRATAMA PUTRA.jpeg" },
    { id: 308, title: "Lomba Desain Grafis | Techfest 24", issuer: "SMK Telkom Sidoarjo", date: "2024", image: "img/GRAPHIC DESIGN_TECHFEST 2024_ADITYA PRATAMA PUTRA.jpeg" },
    { id: 309, title: "Lomba Olimpiade Sains Matematika | IKMC 2024", issuer: "International Kangaroo Mathematics Contest", date: "2024", image: "img/IKMC_2024.png" }
];

const projectsData = [
    // --- UI/UX DESIGN ---
    { 
    id: 5, category: "UI/UX Design", year: "2025", tools: ["Figma", "Gemini"], image: "img/Samling.png",
    content: { 
        id: { 
            title: "Samling", role: "UX Designer & QA Analyst", platform: "Web & Mobile", impact: "Digitalisasi Tata Kelola Sampah", overview: "Sistem integrasi IoT dan Web untuk manajemen sampah di Indonesia.", problem: "Minimnya integrasi data dan koordinasi antar pemangku kepentingan menyulitkan pemantauan kapasitas sampah secara real-time, sehingga sering kali berujung pada penumpukan tidak terkendali di lapangan.", goals: ["Monitoring real-time berbasis IoT", "Manajemen distribusi sampah", "Integrasi mitra industri daur ulang"], 
            process: { 
                research: { 
                    title: "Riset & Empathize", desc: "Melakukan analisis data permasalahan dan survei masyarakat.", 
                    step1: { 
                        title: "Riset Data", icon: "clipboard-list", text: "Mencari data-data terkait penanganan sampah di Indonesia skala nasional melalui sumber-sumber kredibel. Dan melakukan survei lapangan guna memvalidasi fakta mengenai manajemen pengangkutan sampah di tempat tinggal masyarakat.",
                        attachments: [ { label: "Samling Empathize Response", image: "img/uxprocess/Samling_ER.png" }]
                    },
                    step2: { 
                        title: "Define", icon: "crosshair", text: "Mengumpulkan hasil riset data dan survei untuk dianalisis lebih dalam guna mendapatkan insight yang optimal.",
                        attachments: [ { label: "Samling Research Summary", image: "img/uxprocess/Samling_RS.png" } ]
                    }
                }, 
                ideate: { title: "Ideasi Fitur", desc: "Merancang fitur untuk tiga stakeholder utama.", points: ["Live Map dan Pelaporan Level Kapasitas Sampah", "Monitoring TPS", "Diagram & Statistik Tren Sampah", "Sistem Kerjasama Mitra Daur Ulang", "Penugasan Truk Sampah"] },
                prototype: { 
                    title: "Antarmuka Data-Driven", desc: "Desain antarmuka Samling.",
                    images: [
                        "img/uimockup/Samling_Mockup_1.png",
                        "img/uimockup/Samling_Mockup_2.png",
                        "img/uimockup/Samling_Mockup_3.png",
                        "img/uimockup/Samling_Mockup_4.png",
                        "img/uimockup/Samling_Mockup_5.png",
                    ]
                },
                validate: { title: "Uji Validasi", desc: "Memastikan data IoT terintegrasi dengan dashboard administrator.", points: ["Akurasi marker warna Live Map.", "Sinkronisasi data volume sampah.", "Efektivitas alur laporan warga."] }
            }, 
            outcome: { stats: [{ label: "Unmanaged Waste", value: "65.88%" }, { label: "Household Contributors", value: "83.75%" }], learnings: ["Integrasi IoT mempermudah monitoring tanpa harus cek fisik ke lokasi secara terus-menerus."] } 
        }, 
        en: { 
            title: "Samling", role: "UX Designer & QA Analyst", platform: "Web & Mobile", impact: "Waste Management Digitalization", overview: "IoT and Web integration system for waste management in Indonesia.", problem: "The lack of data integration and coordination among stakeholders makes real-time monitoring of waste capacity difficult, often leading to uncontrolled accumulation in the field.", goals: ["IoT-based real-time monitoring", "Waste distribution management", "Recycling industry partner integration"], 
            process: { 
                research: { 
                    title: "Research & Empathize", desc: "Conducting problem data analysis and community surveys.", 
                    step1: { 
                        title: "Data Research", icon: "clipboard-list", text: "Searching for data on waste management in Indonesia at the national level through reliable sources. Additionally, conducting field surveys to verify facts regarding waste collection and transportation in residential areas.",
                        attachments: [ { label: "Samling Empathize Response", image: "img/uxprocess/Samling_ER.png" } ]
                    },
                    step2: { 
                        title: "Define", icon: "crosshair", text: "Collecting data and survey results for further analysis to gain optimal insights.",
                        attachments: [ { label: "Samling Research Summary", image: "img/uxprocess/Samling_RS.png" } ]
                    }
                }, 
                ideate: { title: "Feature Ideation", desc: "Designing features for three main stakeholders.", points: ["Live Map and Reporting for Capacity Bin Level", "Temporary Waste Disposal Area Monitoring", "Waste Trend Diagrams & Statistics", "Recycling Partner Cooperation System", "Waste Truck Assignment"] },
                prototype: { 
                    title: "Data-Driven Interface", desc: "Samling interface design.",
                    images: [
                        "img/uimockup/Samling_Mockup_1.png",
                        "img/uimockup/Samling_Mockup_2.png",
                        "img/uimockup/Samling_Mockup_3.png",
                        "img/uimockup/Samling_Mockup_4.png",
                        "img/uimockup/Samling_Mockup_5.png",

                    ]
                },
                validate: { title: "Validation Test", desc: "Ensuring IoT data is integrated with the administrator dashboard.", points: ["Live Map color marker accuracy.", "Waste volume data synchronization.", "Effectiveness of citizen reporting flow."] }
            }, 
            outcome: { stats: [{ label: "Unmanaged Waste", value: "65.88%" }, { label: "Household Contributors", value: "83.75%" }], learnings: ["IoT integration simplifies monitoring without the need for continuous physical on-site checks."] } 
        } 
    } 
},
    { 
        id: 4, category: "UI/UX Design", year: "2025", tools: ["Figma", "Maze"], image: "img/SSH Cover.png",
        content: { 
            id: { 
                title: "Student Service Hub", role: "Product Designer", platform: "Web & Mobile", impact: "Efisiensi layanan siswa", overview: "Merancang antarmuka pengguna yang terstruktur dan intuitif untuk aplikasi layanan siswa terpadu di SMK Telkom Sidoarjo.", problem: "Sistem layanan siswa (Pengumuman, Perizinan, dan Sarpras) yang terpecah-pecah di berbagai platform menyulitkan akses bagi siswa.", goals: ["Sentralisasi layanan", "Desain intuitif", "Efisien"], 
                process: { 
                    research: { 
                        title: "Riset Pengguna", desc: "Melihat alur layanan aplikasi perizinan di sekolah saat ini.", 
                        step1: { 
                            title: "Empathize", icon: "users", text: "Dari studi kasus nyata yang dialami oleh pihak sekolah, saya mencoba untuk melakukan observasi langsung kepada siswi yang aktif menggunakan layanan perizinan untuk memahami kendala mereka dalam menggunakan layanan aplikasi perizinan sekolah saat ini.",
                            attachments: [ { label: "Summary of Research Findings", image: "img/uxprocess/SRF_SSH.png"} ]
                        },
                        step2: { 
                            title: "Define", icon: "crosshair", text: "Setelah melakukan observasi, saya mencoba untuk menganalisis masalah lebih dalam menggunakan metode-metode UX seperti dibawah ini untuk mendapatkan insight.",
                            attachments: [
                                { label: "User Journey Map", image: "img/uxprocess/UJM_SSH.png" },
                                { label: "Problem Statement", image: "img/uxprocess/PS_SSH.png" },
                                { label: "How Might We", image: "img/uxprocess/HMW_SSH.png" }
                            ]
                        }
                    }, 
                    ideate: { title: "Ideasi Fitur", desc: "Mengorganisir fitur.", points: ["Tampilan ramah pengguna", "Notifikasi realtime", "Status keaktifan PIC", "Pegecekkan Sarana", "Formulir yang jelas", "Feedback PIC yang jelas"] },
                    prototype: { 
                        title: "Prototipe UI", desc: "Membuat layout terstruktur.",
                        images: [
                            "img/uimockup/SSH_Mockup_1.png",
                            "img/uimockup/SSH_Mockup_2.png",
                            "img/uimockup/SSH_Mockup_3.png",
                            "img/uimockup/SSH_Mockup_4.png"
                        ]
                    },
                    validate: { title: "Uji Coba", desc: "Validasi dengan siswa.", points: ["A/B Testing navigasi.", "System Usability Scale (SUS)."] }
                }, 
                outcome: { stats: [{ label: "Service Speed", value: "2x" }, { label: "Adoption Rate", value: "90%" }], learnings: ["Struktur informasi yang baik mengurangi beban kognitif."] } 
            }, 
            en: { 
                title: "Student Service Hub", role: "Product Designer", platform: "Web & Mobile", impact: "Student service efficiency", overview: "Designing a structured and intuitive user interface for the integrated student service application at SMK Telkom Sidoarjo.", problem: "Fragmented student services (Announcements, Licensing, and Facilities) across various platforms made access difficult for students.", goals: ["Service centralization", "Intuitive design", "Efficiency"], 
                process: { 
                    research: { 
                        title: "User Research", desc: "Reviewing the current school licensing application workflow.", 
                        step1: { 
                            title: "Empathize", icon: "users", text: "Based on real case studies from the school, I conducted direct observations of students actively using licensing services to understand their current constraints with the school's licensing application.",
                            attachments: [ { label: "Summary of Research Findings", image: "img/uxprocess/SRF_SSH.png" } ]
                        },
                        step2: { 
                            title: "Define", icon: "crosshair", text: "After the observation, I analyzed the problem deeper using the UX methods below to gain valuable insights.",
                            attachments: [
                                { label: "User Journey Map", image: "img/uxprocess/UJM_SSH.png" },
                                { label: "Problem Statement", image: "img/uxprocess/PS_SSH.png" },
                                { label: "How Might We", image: "img/uxprocess/HMW_SSH.png" }
                            ]
                        }
                    }, 
                    ideate: { title: "Feature Ideation", desc: "Organizing features.", points: ["User-friendly interface", "Real-time notifications", "PIC activity status", "Facilities checker", "Clear forms", "Clear PIC feedback"] },
                    prototype: { 
                        title: "UI Prototype", desc: "Creating structured layouts.",
                        images: [
                            "img/uimockup/SSH_Mockup_1.png",
                            "img/uimockup/SSH_Mockup_2.png",
                            "img/uimockup/SSH_Mockup_3.png",
                            "img/uimockup/SSH_Mockup_4.png"
                        ]
                    },
                    validate: { title: "Testing", desc: "Validation with students.", points: ["Navigation A/B Testing.", "System Usability Scale (SUS)."] }
                }, 
                outcome: { stats: [{ label: "Service Speed", value: "2x" }, { label: "Adoption Rate", value: "90%" }], learnings: ["Good information structure reduces cognitive load."] } 
            } 
        } 
    },
    { 
        id: 6, category: "UI/UX Design", year: "2024", tools: ["Figma", "Notion"], image: "img/Tasky Cover.png",
        content: { 
            id: { 
                title: "Tasky", role: "UI Designer", platform: "Mobile App", impact: "Manajemen waktu efektif", overview: "Mengembangkan konsep tampilan aplikasi pengelola waktu yang dirancang khusus untuk siswa dengan jadwal super sibuk.", problem: "Siswa sering merasa kewalahan (burnout) karena kesulitan mengatur prioritas antara tugas sekolah dan istirahat.", goals: ["Manajemen prioritas.", "Tampilan minimalis.", "Gamifikasi tugas."], 
                process: { 
                    research: { 
                        title: "Riset Pengguna", desc: "Melihat pola manajemen waktu.", 
                        step1: { 
                            title: "Empathize", icon: "users", text: "Melakukan survei kepada siswa yang sangat aktif mendapatkan tugas dari guru setiap minggu nya. Kebanyakan dari mereka merasa kesulitan dalam mengatur tugas sekolah dan istirahat.",
                            attachments: [ { label: "Research", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" } ]
                        },
                        step2: { 
                            title: "Define", icon: "crosshair", text: "Merumuskan dan menganalisa terkait kebutuhan akan platform yang bisa menyatukan jadwal akademik dan pengingat istirahat.",
                            attachments: [
                                { label: "Empathy Map", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200" },
                                { label: "Pain Points", image: "img/uxprocess/PP_Tasky.png" },
                                { label: "How Might We", image: "img/uxprocess/HMW_Tasky.png" }
                            ]
                        }
                    }, 
                    ideate: {title: "Ideasi Solusi", desc: "Solusi manajemen.", points: ["AI Penjadwalan dan Produktivitas", "Mini Dokumen & Forum Diskusi Bersama", "Catatan Berbagi", "Pomodoro", "Prioritisasi Tugas"] },
                    prototype: { 
                        title: "Prototipe Interaktif", desc: "Fokus pada kejelasan tugas.",
                        images: [
                            "img/uimockup/Tasky_Mockup_1.png",
                            "img/uimockup/Tasky_Mockup_2.png",
                            "img/uimockup/Tasky_Mockup_3.png",
                            "img/uimockup/Tasky_Mockup_4.png",
                            "img/uimockup/Tasky_Mockup_5.png",
                            "img/uimockup/Tasky_Mockup_6.png",
                        ]
                    },
                    validate: { title: "Testing", desc: "Uji keterbacaan dan interaksi.", points: ["Legibility test.", "Iconography test."] }
                }, 
                outcome: { stats: [{ label: "Productivity", value: "+20%" }, { label: "Stress Level", value: "Low" }], learnings: ["Gamifikasi meningkatkan motivasi penyelesaian tugas."] } 
            }, 
            en: { 
                title: "Tasky", role: "UI Designer", platform: "Mobile App", impact: "Effective time management", overview: "Developing a time management app interface concept specifically designed for students with super busy schedules.", problem: "Students often feel burnout due to difficulty in prioritizing tasks and rest.", goals: ["Priority management", "Minimalist look", "Task gamification"], 
                process: { 
                    research: { 
                        title: "User Research", desc: "Looking at time management patterns.", 
                        step1: { 
                            title: "Empathize", icon: "users", text: "Conducting surveys with students who are very active in receiving assignments every week. Most of them find it difficult to manage school tasks and rest.",
                            attachments: [ { label: "Research", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" } ]
                        },
                        step2: { 
                            title: "Define", icon: "crosshair", text: "Formulating and analyzing the need for a platform that can unify academic schedules and rest reminders.",
                            attachments: [
                                { label: "Empathy Map", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1200" },
                                { label: "Pain Points", image: "img/uxprocess/PP_Tasky.png" },
                                { label: "How Might We", image: "img/uxprocess/HMW_Tasky.png" }
                            ]
                        }
                    }, 
                    ideate: { title: "Solution Ideation", desc: "Management solutions.", points: ["AI Scheduling & Productivity", "Mini Documents & Shared Discussion Forums", "Shared Notes", "Pomodoro", "Task Prioritization"] },
                    prototype: { 
                        title: "Interactive Prototype", desc: "Focus on task clarity.",
                        images: [
                            "img/uimockup/Tasky_Mockup_1.png",
                            "img/uimockup/Tasky_Mockup_2.png",
                            "img/uimockup/Tasky_Mockup_3.png",
                            "img/uimockup/Tasky_Mockup_4.png",
                            "img/uimockup/Tasky_Mockup_5.png",
                            "img/uimockup/Tasky_Mockup_6.png",
                        ]
                    },
                    validate: { title: "Testing", desc: "Legibility and interaction testing.", points: ["Legibility test", "Iconography test"] }
                }, 
                outcome: { stats: [{ label: "Productivity", value: "+20%" }, { label: "Stress Level", value: "Low" }], learnings: ["Gamification increases task completion motivation."] } 
            } 
        } 
    },
    // --- BRAND DESIGN ---
    {id: 9, // Urutan 1: Nusantara Heritage
        category: "Brand Design", 
        year: "2025", 
        tools: ["Figma"], 
        image: "img/Nusantara Heritage Cover.png", 
        content: { 
            id: { 
                title: "Nusantara Heritage", role: "Brand Designer", platform: "Brand Identity", impact: "Kesadaran Konservasi", overview: "Branding untuk Nusantara Heritage, perusahaan yang bergerak di bidang konservasi dan edukasi flora endemik Indonesia.", problem: "Menyampaikan pesan konservasi yang serius namun tetap menarik dan modern bagi publik umum.", goals: ["Nuansa organik & alami.", "Menonjolkan kekayaan hayati.", "Profesional & edukatif."], 
                process: { 
                    brief: { title: "Brief Design", desc: "Mewakili alam Indonesia.", info: { profile: "Konservasi Flora Endemik.", request: "Simbol yang mewakili pertumbuhan dan kelestarian.", keywords: ["Hijau", "Tumbuh", "Lestari"] } }, 
                    ideation: { title: "Eksplorasi", desc: "Studi bentuk tanaman.", points: ["Daun endemik.", "Pola batik parang.", "Warna alam."] },
                    design: { title: "Finalisasi", desc: "Konstruksi logo.", points: ["Golden ratio.", "Color grading."] },
                    result: { 
                        title: "Presentasi Brand", 
                        desc: "Logogram stilasi daun endemik dan elemen Nusantara dengan palet warna earth tone.", 
                        isBrandResult: true,
                        brandAssets: {
                            mainLogo: "img/brand_design/NH_Banner.png",
                            colorVariations: ["img/brand_design/NH_LogoVariant_1_1.png", "img/brand_design/NH_LogoVariant_2.png", "img/brand_design/NH_LogoVariant_3.png"],
                            philosophies: [
                                { title: "Simbol Persatuan", desc: "Simbol ini mewakili persatuan dari keberagaman Nusantara. Elemen yang berkumpul melambangkan kolaborasi dan perlindungan warisan budaya.", images: ["img/brand_design/NH_Philosophy_1.png"] },
                                { title: "Serpihan Melati", desc: "Terinspirasi dari bunga melati putih sebagai puspa bangsa, melambangkan kesucian dan ketulusan dalam melestarikan alam.", images: ["img/brand_design/NH_Philosophy_2.png"] },
                                { title: "Motif Batik Parang", desc: "Motif parang yang berkesinambungan mencerminkan semangat yang tidak pernah padam dalam konservasi alam.", images: ["img/brand_design/NH_Philosophy_3.png"] }
                            ],
                            mockups: ["img/brand_design/NH_Mockup_1.png", "img/brand_design/NH_Mockup_2.png", "img/brand_design/NH_Mockup_2.png", "img/brand_design/NH_Mockup_4.png", "img/brand_design/NH_Mockup_3.png"]
                        }
                    }
                }, 
                outcome: { stats: [{ label: "Brand Awareness", value: "Growing" }, { label: "Kekuatan Identitas", value: "Strong" }], learnings: ["Simbolisme alam harus akurat namun tetap estetis."] } 
            }, 
            en: { 
                title: "Nusantara Heritage", role: "Brand Designer", platform: "Brand Identity", impact: "Conservation Awareness", overview: "Branding for Nusantara Heritage, a company active in the conservation and education of Indonesia's endemic flora.", problem: "Conveying a serious conservation message while remaining attractive and modern for the general public.", goals: ["Organic & natural feel", "Highlighting biodiversity", "Professional & educational"], 
                process: { 
                    brief: { title: "Design Brief", desc: "Representing Indonesian nature.", info: { profile: "Endemic Flora Conservation", request: "A symbol representing growth and sustainability", keywords: ["Green", "Growth", "Sustainable"] } }, 
                    ideation: { title: "Exploration", desc: "Plant form studies.", points: ["Endemic leaves", "Parang batik patterns", "Nature colors"] },
                    design: { title: "Finalization", desc: "Logo construction.", points: ["Golden ratio", "Color grading"] },
                    result: { 
                        title: "Brand Presentation", 
                        desc: "Stylized endemic leaf logogram and Nusantara elements with an earth tone color palette.", 
                        isBrandResult: true,
                        brandAssets: {
                            mainLogo: "img/brand_design/NH_Banner.png",
                            colorVariations: ["img/brand_design/NH_LogoVariant_1_1.png", "img/brand_design/NH_LogoVariant_2.png", "img/brand_design/NH_LogoVariant_3.png"],
                            philosophies: [
                                { title: "Symbol of Unity", desc: "This symbol represents unity within Nusantara's diversity. Gathering elements symbolize collaboration and cultural heritage protection.", images: ["img/brand_design/NH_Philosophy_1.png"] },
                                { title: "Jasmine Flakes", desc: "Inspired by the white jasmine as the national flower, symbolizing purity and sincerity in nature conservation.", images: ["img/brand_design/NH_Philosophy_2.png"] },
                                { title: "Parang Batik Motif", desc: "The continuous parang motif reflects an unextinguished spirit in nature conservation.", images: ["img/brand_design/NH_Philosophy_3.png"] }
                            ],
                            mockups: ["img/brand_design/NH_Mockup_1.png", "img/brand_design/NH_Mockup_2.png", "img/brand_design/NH_Mockup_2.png", "img/brand_design/NH_Mockup_4.png", "img/brand_design/NH_Mockup_3.png"]
                        }
                    }
                }, 
                outcome: { stats: [{ label: "Brand Awareness", value: "Growing" }, { label: "Identity Strength", value: "Strong" }], learnings: ["Nature symbolism must be accurate yet aesthetic."] } 
            } 
        } 
    },
    { 
        id: 8, // Urutan 2: Rumah Coklat
        category: "Brand Design", 
        year: "2025", 
        tools: ["Figma"], 
        image: "img/Rumah Coklat Cover.png", 
        content: { 
            id: { 
                title: "Rumah Coklat", role: "Brand Designer", platform: "Identity & Packaging", impact: "Daya Tarik Produk", overview: "Pengembangan identitas brand untuk Rumah Coklat, bisnis kuliner yang mengkhususkan diri pada produk cokelat berkualitas tinggi.", problem: "Persaingan ketat di pasar oleh-oleh dan camilan manis, butuh diferensiasi visual.", goals: ["Kesan premium & lezat.", "Kemasan yang menonjol di rak.", "Identitas yang hangat."], 
                process: { 
                    brief: { title: "Brief Design", desc: "Menangkap esensi rasa cokelat.", info: { profile: "Artisan Chocolate Shop.", request: "Logo elegan namun ramah.", keywords: ["Manis", "Premium", "Otentik"] } }, 
                    ideation: { title: "Moodboard", desc: "Inspirasi visual.", points: ["Warna earth tone.", "Tekstur cokelat.", "Font serif klasik."] },
                    design: { title: "Perancangan", desc: "Logo dan pola kemasan.", points: ["Ilustrasi biji kakao.", "Layout kemasan."] },
                    result: { 
                        title: "Hasil Brand & Kemasan", 
                        desc: "Desain identitas visual beserta kemasan dengan ilustrasi biji kakao yang menggugah selera.", 
                        isBrandResult: true,
                        brandAssets: {
                            mainLogo: "img/brand_design/RC_Banner.png",
                            colorVariations: ["img/brand_design/RC_LogoVariant.png", "img/brand_design/RC_LogoVariant_2.png", "img/brand_design/RC_LogoVariant_3.png"],
                            philosophies: [{ title: "Otentik & Hangat", desc: "Elemen melengkung pada font dan palet coklat tanah memberikan kesan produk artisan yang diolah dengan kasih sayang.", images: [] }],
                            mockups: ["img/brand_design/RC_Mockup_3.png", "img/brand_design/RC_Mockup_2.png", "img/brand_design/RC_Mockup_1.png", "img/brand_design/RC_Philosophy_1.png", "img/brand_design/RC_Philosophy_2.png"]
                        }
                    }
                }, 
                outcome: { stats: [{ label: "Shelf Appeal", value: "High" }, { label: "Sales Uplift", value: "Potential" }], learnings: ["Warna memegang peranan vital dalam menggugah selera."] } 
            }, 
            en: { 
                title: "Rumah Coklat", role: "Brand Designer", platform: "Identity & Packaging", impact: "Product Appeal", overview: "Brand identity development for Rumah Coklat, a culinary business specializing in high-quality chocolate products.", problem: "Tough competition in the souvenir and sweet snack market, requiring visual differentiation.", goals: ["Premium & delicious impression", "Stand-out packaging on shelves", "Warm identity"], 
                process: { 
                    brief: { title: "Design Brief", desc: "Capturing the essence of chocolate taste.", info: { profile: "Artisan Chocolate Shop", request: "Elegant yet friendly logo", keywords: ["Sweet", "Premium", "Authentic"] } }, 
                    ideation: { title: "Moodboard", desc: "Visual inspiration.", points: ["Earth tone colors", "Chocolate textures", "Classic serif fonts"] },
                    design: { title: "Designing", desc: "Logo and packaging patterns.", points: ["Cocoa bean illustration", "Packaging layout"] },
                    result: { 
                        title: "Brand & Packaging Results", 
                        desc: "Visual identity design along with packaging featuring appetizing cocoa bean illustrations.", 
                        isBrandResult: true,
                        brandAssets: {
                            mainLogo: "img/brand_design/RC_Banner.png",
                            colorVariations: ["img/brand_design/RC_LogoVariant.png", "img/brand_design/RC_LogoVariant_2.png", "img/brand_design/RC_LogoVariant_3.png"],
                            philosophies: [{ title: "Authentic & Warm", desc: "Curved font elements and earth-brown palette give the impression of an artisan product processed with love.", images: [] }],
                            mockups: ["img/brand_design/RC_Mockup_3.png", "img/brand_design/RC_Mockup_2.png", "img/brand_design/RC_Mockup_1.png", "img/brand_design/RC_Philosophy_1.png", "img/brand_design/RC_Philosophy_2.png"]
                        }
                    }
                }, 
                outcome: { stats: [{ label: "Shelf Appeal", value: "High" }, { label: "Sales Uplift", value: "Potential" }], learnings: ["Color plays a vital role in stimulating appetite."] } 
            } 
        } 
    },
    { 
        id: 7, // Urutan 3: GXC Solutions
        category: "Brand Design", 
        year: "2025", 
        tools: ["Figma"], 
        image: "img/GXC Outdoor Solutions Cover.png", 
        content: { 
            id: { 
                title: "GXC Outdoor Solutions", role: "Brand Designer", platform: "Identity System", impact: "Peningkatan Citra Profesional", overview: "Perancangan identitas visual untuk GXC Outdoor Solutions, perusahaan yang bergerak di bidang instalasi Teras, Pergola, dan Gazebo modern.", problem: "Perlu membangun kepercayaan klien untuk layanan konstruksi premium, citra lama terlalu konvensional.", goals: ["Tampilan struktural & kokoh.", "Kesan modern & elegan.", "Konsistensi di media cetak & digital."], 
                process: { 
                    brief: { title: "Brief Design", desc: "Memahami visi konstruksi modern.", info: { profile: "Kontraktor Teras & Gazebo.", request: "Logo yang merepresentasikan struktur & naungan.", keywords: ["Kokoh", "Presisi", "Modern"] } }, 
                    ideation: { title: "Sketsa", desc: "Eksplorasi bentuk.", points: ["Geometri bangunan.", "Inisial GXC.", "Perspektif 3D."] },
                    design: { title: "Digitalisasi", desc: "Vektorisasi logo.", points: ["Grid system.", "Pemilihan tipografi Sans-serif."] },
                    result: { 
                        title: "Visual Identity Presentation", 
                        desc: "Visualisasi akhir logo geometris dengan palet warna monokromatik yang profesional beserta aplikasinya.", 
                        isBrandResult: true,
                        brandAssets: {
                            mainLogo: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800",
                            colorVariations: ["https://images.unsplash.com/photo-1600069226367-4d1ebff43e38?auto=format&fit=crop&q=80&w=400", "https://images.unsplash.com/photo-1599054802207-91d346adc120?auto=format&fit=crop&q=80&w=400", "https://images.unsplash.com/photo-1598908314732-0711311f9d50?auto=format&fit=crop&q=80&w=400", "https://images.unsplash.com/photo-1598908314766-3d2b2ec9fbf0?auto=format&fit=crop&q=80&w=400"],
                            philosophies: [{ title: "Integritas Struktural", desc: "Garis tegas pada logo mencerminkan kekuatan dan presisi konstruksi yang menjadi pilar utama layanan GXC.", images: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=200"] }],
                            mockups: ["https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1621844645063-e51c8a004245?auto=format&fit=crop&q=80&w=800"]
                        }
                    }
                }, 
                outcome: { stats: [{ label: "Client Trust", value: "High" }, { label: "Brand Clarity", value: "100%" }], learnings: ["Desain minimalis meningkatkan persepsi kualitas konstruksi."] } 
            }, 
            en: { 
                title: "GXC Outdoor Solutions", role: "Brand Designer", platform: "Identity System", impact: "Professional Image Boost", overview: "Visual identity design for GXC Outdoor Solutions, a company specializing in modern Terrace, Pergola, and Gazebo installations.", problem: "Need to build client trust for premium construction services; the old image was too conventional.", goals: ["Structural & solid look", "Modern & elegant impression", "Consistency across print & digital media"], 
                process: { 
                    brief: { title: "Design Brief", desc: "Understanding the modern construction vision.", info: { profile: "Terrace & Gazebo Contractor", request: "A logo representing structure & shelter", keywords: ["Solid", "Precision", "Modern"] } }, 
                    ideation: { title: "Sketching", desc: "Form exploration.", points: ["Building geometry", "GXC initials", "3D perspective"] },
                    design: { title: "Digitalization", desc: "Logo vectorization.", points: ["Grid system", "Sans-serif typography selection"] },
                    result: { 
                        title: "Visual Identity Presentation", 
                        desc: "Final visualization of the geometric logo with a professional monochromatic palette and its applications.", 
                        isBrandResult: true,
                        brandAssets: {
                            mainLogo: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800",
                            colorVariations: ["https://images.unsplash.com/photo-1600069226367-4d1ebff43e38?auto=format&fit=crop&q=80&w=400", "https://images.unsplash.com/photo-1599054802207-91d346adc120?auto=format&fit=crop&q=80&w=400", "https://images.unsplash.com/photo-1598908314732-0711311f9d50?auto=format&fit=crop&q=80&w=400", "https://images.unsplash.com/photo-1598908314766-3d2b2ec9fbf0?auto=format&fit=crop&q=80&w=400"],
                            philosophies: [{ title: "Structural Integrity", desc: "The bold lines of the logo reflect the strength and precision of the construction that are the main pillars of GXC's service.", images: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=200"] }],
                            mockups: ["https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1621844645063-e51c8a004245?auto=format&fit=crop&q=80&w=800"]
                        }
                    }
                }, 
                outcome: { stats: [{ label: "Client Trust", value: "High" }, { label: "Brand Clarity", value: "100%" }], learnings: ["Minimalist design enhances the perception of construction quality."] } 
            } 
        } 
    },
    { 
        id: 10, // Urutan 4: Kupang Crips
        category: "Brand Design", 
        year: "2024", 
        tools: ["CorelDraw"], 
        image: "img/GRAPHIC DESIGN_TECHFEST 2024_ADITYA PRATAMA PUTRA.jpeg", 
        content: { 
            id: { 
                title: "Kupang Crips", role: "Graphic Designer", platform: "Packaging Design", impact: "Juara 1 TechFest", overview: "Desain kemasan untuk produk inovasi siswa 'Kupang Crips' yang berhasil meraih Juara 1 bidang desain grafis mewakili angkatan di TechFest SMK Telkom Sidoarjo.", problem: "Membuat camilan tradisional terlihat modern dan menarik bagi anak muda (Gen Z).", goals: ["Desain kemasan eye-catching.", "Identitas visual ceria.", "Kemenangan kompetisi."], 
                process: { 
                    brief: { title: "Tantangan Lomba", desc: "Redesign produk lokal.", info: { profile: "Kompetisi TechFest.", request: "Kemasan modern untuk produk berbasis Kupang.", keywords: ["Fun", "Lokal", "Kreatif"] } }, 
                    ideation: { title: "Brainstorming", desc: "Mencari gaya visual.", points: ["Pop art style.", "Warna cerah (Kuning/Merah).", "Tipografi bold."] },
                    design: { title: "Eksekusi", desc: "Membuat aset vektor.", points: ["Maskot karakter udang.", "Layout pouch."] },
                    result: { 
                        title: "Produk & Kemasan Final", 
                        desc: "Kemasan pouch dengan ilustrasi vektor yang vibrant dan maskot karakter yang lucu.", 
                        isBrandResult: true,
                        brandAssets: {
                            mainLogo: "https://images.unsplash.com/photo-1626248356985-61da68d400fb?auto=format&fit=crop&q=80&w=800",
                            colorVariations: ["https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80&w=400", "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&q=80&w=400"],
                            philosophies: [{ title: "Pop Art & Gen Z", desc: "Warna vibrant dan ilustrasi flat pop-art dipilih untuk mendobrak stigma kuno pada camilan tradisional.", images: ["https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200"] }],
                            mockups: ["https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1605280263929-1c42c62ef169?auto=format&fit=crop&q=80&w=800"]
                        }
                    }
                }, 
                outcome: { stats: [{ label: "Posisi", value: "1st Place" }, { label: "Pilihan Penonton", value: "Favorite" }], learnings: ["Desain yang baik dapat mengangkat nilai produk tradisional."] } 
            }, 
            en: { 
                title: "Kupang Crips", role: "Graphic Designer", platform: "Packaging Design", impact: "1st Place TechFest", overview: "Packaging design for the student innovation product 'Kupang Crips,' which won 1st Place in the graphic design field representing the batch at TechFest SMK Telkom Sidoarjo.", problem: "Making traditional snacks look modern and appealing to young people (Gen Z).", goals: ["Eye-catching packaging design", "Cheerful visual identity", "Competition victory"], 
                process: { 
                    brief: { title: "Competition Challenge", desc: "Local product redesign.", info: { profile: "TechFest Competition", request: "Modern packaging for a Kupang-based product", keywords: ["Fun", "Local", "Creative"] } }, 
                    ideation: { title: "Brainstorming", desc: "Finding a visual style.", points: ["Pop art style", "Bright colors (Yellow/Red)", "Bold typography"] },
                    design: { title: "Execution", desc: "Creating vector assets.", points: ["Shrimp character mascot", "Pouch layout"] },
                    result: { 
                        title: "Final Product & Packaging", 
                        desc: "Pouch packaging with vibrant vector illustrations and a cute character mascot.", 
                        isBrandResult: true,
                        brandAssets: {
                            mainLogo: "https://images.unsplash.com/photo-1626248356985-61da68d400fb?auto=format&fit=crop&q=80&w=800",
                            colorVariations: ["https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80&w=400", "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&q=80&w=400"],
                            philosophies: [{ title: "Pop Art & Gen Z", desc: "Vibrant colors and flat pop-art illustrations were chosen to break the old-fashioned stigma of traditional snacks.", images: ["https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?auto=format&fit=crop&q=80&w=200", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200"] }],
                            mockups: ["https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1605280263929-1c42c62ef169?auto=format&fit=crop&q=80&w=800"]
                        }
                    }
                }, 
                outcome: { stats: [{ label: "Position", value: "1st Place" }, { label: "Audience Choice", value: "Favorite" }], learnings: ["Good design can elevate the value of traditional products."] } 
            } 
        } 
    },
    // --- FRONTEND WEB DEVELOPMENT ---
    { 
        id: 16, // SUBLiMS
        category: "Frontend Web Development", 
        year: "2026", 
        tools: ["HTML", "TailwindCSS", "JavaScript"], 
        liveUrl: "https://sublims.id/id",
        repoUrl: "https://github.com/ADITYAzin/sublims",
        image: "img/sublims.png",
        content: { 
            id: { 
                title: "SUBLiMS", role: "Frontend Developer", platform: "Web App", impact: "Digitalisasi Perpustakaan Sekolah", overview: "Membangun website company profile dan sistem RFQ keranjang produk berbasis Next.js dengan integrasi API Email (Resend Provider).", problem: "Pencatatan katalog dan transaksi peminjaman buku yang masih manual membuat layanan perpustakaan lambat, rawan kesalahan data, dan sulit dilacak.", goals: ["Katalog buku digital & pencarian cepat", "Alur peminjaman-pengembalian efisien", "Antarmuka responsif multi-perangkat"], 
                process: { 
                    research: { 
                        title: "Riset & Analisis Kebutuhan", desc: "Memetakan alur layanan perpustakaan dari sisi petugas maupun siswa.", 
                        step1: { 
                            title: "Observasi", icon: "search", text: "Melakukan observasi langsung terhadap alur pencarian buku dan pencatatan peminjaman manual di perpustakaan untuk mengidentifikasi titik-titik hambatan yang dirasakan petugas maupun siswa.",
                            attachments: []
                        },
                        step2: { 
                            title: "Analisis Kebutuhan", icon: "crosshair", text: "Merumuskan hasil observasi menjadi daftar prioritas fitur yang diterjemahkan ke dalam struktur halaman dan komponen antarmuka.",
                            attachments: []
                        }
                    }, 
                    ideation: { title: "Ideasi Fitur", desc: "Menentukan fitur inti sesuai kebutuhan pengguna.", points: ["Katalog buku digital dengan pencarian real-time", "Dashboard admin peminjaman & pengembalian", "Notifikasi keterlambatan dan jatuh tempo", "Manajemen stok & riwayat transaksi", "Layout responsif dengan pendekatan mobile-first"] },
                    prototype: { 
                        title: "Implementasi Antarmuka", desc: "Menerapkan desain ke kode menggunakan HTML, TailwindCSS, dan JavaScript.",
                        images: [
                            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
                            "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
                            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1200",
                            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200"
                        ]
                    }
                }, 
                outcome: { stats: [{ label: "Efisiensi Peminjaman", value: "+60%" }, { label: "Halaman Responsif", value: "100%" }], learnings: ["Komponen antarmuka yang konsisten mempercepat proses development sekaligus memudahkan pemeliharaan."] } 
            }, 
            en: { 
                title: "SUBLiMS", role: "Frontend Developer", platform: "Web App", impact: "School Library Digitalization", overview: "Building a responsive and intuitive interface for the School Library Management System (SUBLiMS) to simplify catalog access and book borrowing transactions at the school library.", problem: "Manual recording of catalogs and borrowing transactions made library services slow, error-prone, and difficult to track.", goals: ["Digital catalog & fast search", "Efficient borrow-return workflow", "Responsive multi-device interface"], 
                process: { 
                    research: { 
                        title: "Research & Needs Analysis", desc: "Mapping the library service flow from both staff and student perspectives.", 
                        step1: { 
                            title: "Observation", icon: "search", text: "Conducting direct observation of the manual book search and borrowing recording workflow in the library to identify friction points experienced by both staff and students.",
                            attachments: []
                        },
                        step2: { 
                            title: "Needs Analysis", icon: "crosshair", text: "Distilling observation results into a prioritized feature list, translated into page structure and interface components.",
                            attachments: []
                        }
                    }, 
                    ideation: { title: "Feature Ideation", desc: "Defining core features based on user needs.", points: ["Digital book catalog with real-time search", "Admin dashboard for borrowing & returns", "Overdue and due-date notifications", "Stock management & transaction history", "Responsive layout with mobile-first approach"] },
                    prototype: { 
                        title: "Interface Implementation", desc: "Translating design into code using HTML, TailwindCSS, and JavaScript.",
                        images: [
                            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
                            "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
                            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1200",
                            "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=1200"
                        ]
                    }
                }, 
                outcome: { stats: [{ label: "Borrowing Efficiency", value: "+60%" }, { label: "Responsive Pages", value: "100%" }], learnings: ["Consistent UI components speed up development and simplify maintenance."] } 
            } 
        } 
    },
    { 
        id: 17, // Samling AI (catatan: gambar mockup desain dipakai sebagai placeholder screenshot implementasi)
        category: "Frontend Web Development", 
        year: "2025", 
        tools: ["HTML", "TailwindCSS", "JavaScript", "Gemini API"], 
        liveUrl: "https://samling-ai.vercel.app",
        repoUrl: "https://github.com/Falrafa4/samling-ai",
        image: "img/samling-ai.png",
        content: { 
            id: { 
                title: "Samling AI", role: "Frontend Developer", platform: "Web App", impact: "Juara 1 Festika Jatim 2025", overview: "Pengembangan lanjutan - Samling AI beralih menjadi teknologi prediktif integrasi AI & Chatbot untuk DLH Jakarta. (Dalam Tahap Final)", problem: "Menerjemahkan desain UI/UX yang kompleks menjadi antarmuka web fungsional dengan visualisasi data IoT secara real-time dalam waktu pengerjaan kompetisi yang sangat terbatas.", goals: ["Implementasi desain yang presisi", "Visualisasi data real-time yang interaktif", "Performa & responsivitas optimal"], 
                process: { 
                    research: { 
                        title: "Riset & Translasi Desain", desc: "Menyiapkan fondasi implementasi dari hasil riset dan desain UI/UX.", 
                        step1: { 
                            title: "Translasi Desain ke Kode", icon: "layout-template", text: "Memecah file desain UI/UX Samling menjadi komponen-komponen frontend yang dapat dibangun secara sistematis, mulai dari navigasi, kartu data, hingga tampilan peta.",
                            attachments: []
                        },
                        step2: { 
                            title: "Struktur Komponen", icon: "crosshair", text: "Menyusun struktur folder dan arsitektur komponen yang rapi agar kolaborasi tim berjalan efisien serta memudahkan integrasi data IoT dan AI di kemudian hari.",
                            attachments: []
                        }
                    }, 
                    ideation: { title: "Ideasi Implementasi", desc: "Prioritas fitur yang diimplementasikan ke dalam web.", points: ["Live Map monitoring kapasitas TPS", "Visualisasi statistik & tren sampah interaktif", "Alur pelaporan warga yang intuitif", "Dashboard administrator & penugasan truk sampah", "Optimasi loading dan aksesibilitas"] },
                    prototype: { 
                        title: "Antarmuka Hasil Implementasi", desc: "Tampilan web Samling AI yang dibangun dengan HTML, TailwindCSS, dan JavaScript.",
                        images: [
                            "img/uimockup/Samling_Mockup_1.png",
                            "img/uimockup/Samling_Mockup_2.png",
                            "img/uimockup/Samling_Mockup_3.png",
                            "img/uimockup/Samling_Mockup_4.png"
                        ]
                    }
                }, 
                outcome: { stats: [{ label: "Peringkat", value: "Juara 1" }, { label: "Peserta Disisihkan", value: "1400+" }], learnings: ["Komunikasi erat antara desainer dan developer membuat translasi desain ke kode jauh lebih cepat dan akurat."] } 
            }, 
            en: { 
                title: "Samling AI", role: "Frontend Developer", platform: "Web App", impact: "1st Place Festika Jatim 2025", overview: "Frontend implementation of an AI-based platform integrating IoT and Web for waste management monitoring — winner of 1st Place at AREK_AI Festika Jatim 2025.", problem: "Translating a complex UI/UX design into a functional web interface with real-time IoT data visualization within a very limited competition timeframe.", goals: ["Precise design implementation", "Interactive real-time data visualization", "Optimal performance & responsiveness"], 
                process: { 
                    research: { 
                        title: "Research & Design Translation", desc: "Preparing implementation foundations from research and UI/UX design results.", 
                        step1: { 
                            title: "Design-to-Code Translation", icon: "layout-template", text: "Breaking down the Samling UI/UX design files into systematically buildable frontend components, from navigation and data cards to map views.",
                            attachments: []
                        },
                        step2: { 
                            title: "Component Structure", icon: "crosshair", text: "Structuring a clean folder architecture and component hierarchy to enable efficient team collaboration and smooth IoT/AI data integration later on.",
                            attachments: []
                        }
                    }, 
                    ideation: { title: "Implementation Ideation", desc: "Priority features implemented into the web.", points: ["Live Map for disposal area capacity monitoring", "Interactive waste statistics & trend visualization", "Intuitive citizen reporting flow", "Administrator dashboard & waste truck assignment", "Loading optimization and accessibility"] },
                    prototype: { 
                        title: "Implemented Interface", desc: "The Samling AI web interface built with HTML, TailwindCSS, and JavaScript.",
                        images: [
                            "img/uimockup/Samling_Mockup_1.png",
                            "img/uimockup/Samling_Mockup_2.png",
                            "img/uimockup/Samling_Mockup_3.png",
                            "img/uimockup/Samling_Mockup_4.png"
                        ]
                    }
                }, 
                outcome: { stats: [{ label: "Ranking", value: "1st Place" }, { label: "Participants Beaten", value: "1400+" }], learnings: ["Close communication between designer and developer makes design-to-code translation far faster and more accurate."] } 
            } 
        } 
    },
    // --- GRAPHIC DESIGN ---
    { id: 10, category: "Graphic Design", year: "2026", image: "img/graphic_design/Feed Intelligar.png", content: { id: { title: "Desain Feed Intelligar" }, en: { title: "Feed Design Intelligar" } } },
    { id: 11, category: "Graphic Design", year: "2026", image: "img/graphic_design/Poster Belajar Sehat.png", content: { id: { title: "Poster Belajar Sehat" }, en: { title: "Healthy Learning Poster" } } },
    { id: 12, category: "Graphic Design", year: "2026", image: "img/graphic_design/Cover SKOMDA Mengajar.png", content: { id: { title: "Banner SKOMDA Mengajar 2026" }, en: { title: "SKOMDA Teaching Banner 2026" } } },
    { id: 13, category: "Graphic Design", year: "2026", image: "img/graphic_design/Feed SKOMDA Mengajar.png", content: { id: { title: "Desain Feed SKOMDA Mengajar" }, en: { title: "SKOMDA Mengajar Feed Design" } } },
    { id: 14, category: "Graphic Design", year: "2025", image: "img/graphic_design/Feed Samling.png", content: { id: { title: "Desain Feed Samling" }, en: { title: "Samling Feed Design" } } },
    { id: 15, category: "Graphic Design", year: "2025", image: "img/graphic_design/PackagingStickerDesign_OnlineBabyshop.png", content: { id: { title: "Stiker Kemasan" }, en: { title: "" } } },
];