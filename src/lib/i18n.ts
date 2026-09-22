export type Locale = "en" | "uz" | "ru";

export const locales: Locale[] = ["en", "uz", "ru"];
export const localeLabels: Record<Locale, string> = { en: "EN", uz: "UZ", ru: "RU" };

export type Translation = {
  meta: { title: string; description: string };
  nav: { about: string; services: string; projects: string; blog: string; contact: string };
  hero: {
    badge: string;
    role: string;
    bio: string;
    ctaPrimary: string;
    ctaSecondary: string;
    downloadCV: string;
    systemCore: string;
    online: string;
  };
  stats: { faster: string; throughput: string; users: string; uptime: string };
  about: {
    toolboxLabel: string;
    factLabels: {
      location: string;
      experience: string;
      focus: string;
      currently: string;
      languages: string;
      stack: string;
    };
    factValues: {
      location: string;
      experience: string;
      focus: string;
      currently: string;
      languages: string;
      stack: string;
    };
    contactCta: string;
  };
  services: { heading: string; viewAll: string; items: { title: string; desc: string }[] };
  projects: {
    heading: string;
    githubHeading: string;
    viewAll: string;
    labels: { problem: string; approach: string; result: string; stack: string; demo: string };
    items: { slug: string; title: string; desc: string; problem: string; approach: string; result: string }[];
  };
  blog: {
    heading: string;
    viewAll: string;
    posts: { slug: string; meta: string; title: string; excerpt: string; body: string[] }[];
  };
  contact: {
    heading: string;
    title: string;
    desc: string;
    labels: { email: string; phone: string; telegram: string; github: string };
    footerTagline: string;
    form: {
      heading: string;
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      unavailable: string;
    };
  };
};

export const translations: Record<Locale, Translation> = {
  en: {
    meta: {
      title: "Abdurauf Ahmadjonov — Full-Stack Developer",
      description:
        "Portfolio of Abdurauf Ahmadjonov — full-stack developer building async Python backends, real-time systems, React/Next.js frontends and AI-assisted tooling.",
    },
    nav: { about: "About", services: "Services", projects: "Projects", blog: "Blog", contact: "Contact" },
    hero: {
      badge: "Available for new work",
      role: "Full-Stack Developer",
      bio: "I build complete products end to end — async Python backends, real-time systems, React/Next.js frontends and AI-assisted tooling — for teams that need the whole stack done right.",
      ctaPrimary: "Let’s start a project",
      ctaSecondary: "See the work",
      downloadCV: "Download CV",
      systemCore: "system core",
      online: "online",
    },
    stats: {
      faster: "Faster data loading",
      throughput: "Query throughput",
      users: "Concurrent users",
      uptime: "Uptime",
    },
    about: {
      toolboxLabel: "Toolbox",
      factLabels: {
        location: "Location",
        experience: "Experience",
        focus: "Focus",
        currently: "Currently",
        languages: "Languages",
        stack: "Stack core",
      },
      factValues: {
        location: "Tashkent, Uzbekistan",
        experience: "2+ years",
        focus: "Full-stack: backend, frontend & AI tooling",
        currently: "Freelance, open to contract",
        languages: "Uzbek, English, Russian",
        stack: "Python · Django · React/Next.js",
      },
      contactCta: "Contact me",
    },
    services: {
      heading: "Services",
      viewAll: "View all",
      items: [
        {
          title: "Backend & API development",
          desc: "Django REST Framework and FastAPI services built for correctness first, then tuned for load.",
        },
        {
          title: "Real-time & async systems",
          desc: "WebSocket dashboards, live KPI tracking and AsyncIO pipelines that stay responsive under load.",
        },
        {
          title: "Database design & optimization",
          desc: "Schema design plus query tuning — the kind that turns N+1 disasters into single-digit-millisecond calls.",
        },
        {
          title: "Frontend & landing pages",
          desc: "React/Next.js frontends and conversion-focused landing pages — shipped for products like an online invitations platform and client sites such as Khanate.",
        },
        {
          title: "Workflow & browser automation",
          desc: "Selenium/Playwright automation that removes the repetitive, error-prone parts of a team's week.",
        },
        {
          title: "AI-powered automation",
          desc: "LLM-integrated pipelines (Gemini & friends) for deduplication, classification and data-quality judgment at scale.",
        },
      ],
    },
    projects: {
      heading: "Projects",
      githubHeading: "Recent on GitHub",
      viewAll: "View all projects",
      labels: { problem: "Problem", approach: "Approach", result: "Result", stack: "Stack", demo: "Watch the demo on LinkedIn" },
      items: [
        {
          slug: "unicflo",
          title: "Unicflo — automated product import & AI pipeline",
          desc: "A daily scraping and import system for multi-store e-commerce — Google Gemini writes descriptions and auto-categorizes products, and a phash-based pass catches duplicates before they hit the catalog.",
          problem:
            "Products from multiple external stores were being imported by hand — slow, error-prone, and full of duplicate listings for the same physical item that had to be caught by eye.",
          approach:
            "Built a Django 4.x + PostgreSQL backend with AsyncIO-driven scheduled scraping across multiple stores, plus a custom admin interface for manual imports by date range and store with live progress tracking. Integrated the Google Gemini API to generate product descriptions and auto-categorize items into pricing-relevant subcategories, and added a perceptual-hashing (phash) pass to catch visual duplicates before anything reaches the live catalog.",
          result:
            "Store owners get a daily-refreshed catalog with 80% fewer duplicate listings, AI-written descriptions instead of manual copywriting (data quality up ~40%), and a manual-import path for one-off cases — all monitored through an admin panel with progress tracking and error logging.",
        },
        {
          slug: "online-invitations-platform",
          title: "Online invitations platform",
          desc: "A full-stack platform for creating and sending digital event invitations — RSVP tracking, guest management and a Django + React stack handling real traffic spikes around event dates.",
          problem:
            "Hosts needed a way to send digital invitations and track who's actually coming, without juggling spreadsheets or group chats — and the traffic for any single event is extremely spiky: near zero, then a burst of RSVPs the moment invites go out.",
          approach:
            "Built the backend on Django REST Framework with PostgreSQL for guest lists, RSVP state and event data, and a React frontend for the host dashboard and the public invitation/RSVP pages. Read-heavy public pages were cached and rate-limited independently from the authenticated host dashboard so a traffic spike on one event can't degrade the whole platform.",
          result:
            "Hosts get a live view of who has responded without refreshing spreadsheets, and the platform has held up cleanly through the bursty, unpredictable traffic pattern that digital invitations naturally produce.",
        },
        {
          slug: "khanate",
          title: "Khanate",
          desc: "A conversion-focused landing site built with React/Next.js, shipped end to end from design handoff to production deployment.",
          problem:
            "The client needed a landing site that turned visits into inquiries — fast to load, clear about what's being offered, and easy for them to update without touching code.",
          approach:
            "Implemented the design in Next.js with a component structure the client can extend, optimized images and fonts for fast first paint, and wired up the contact/inquiry flow end to end before deploying to production.",
          result:
            "A production site the client can maintain themselves, built with the same frontend stack (React/Next.js/TypeScript) used across this portfolio's other work.",
        },
      ],
    },
    blog: {
      heading: "Blog",
      viewAll: "View all posts",
      posts: [
        {
          slug: "dedup-with-phash-and-gemini",
          meta: "FIELD NOTES · DATA QUALITY",
          title: "Killing duplicate product listings with perceptual hashing + Gemini",
          excerpt: "Two listings with different titles and slightly different photos are often the exact same item.",
          body: [
            "Product feeds from multiple external stores overlapped constantly — the same physical item listed under different titles, different photo crops, different sellers. Naive title-matching caught maybe half of it.",
            "The fix layered two separate signals instead of blending them into one score: perceptual hashing (phash) on product images to catch visual duplicates that string matching missed, and the Google Gemini API to compare descriptions and titles semantically when the images were close but not identical.",
            "Running both together cut duplicate entries by 80% and raised overall data quality by roughly 40%, measured against a manually-audited sample. The lesson: perceptual similarity and semantic similarity catch different failure modes — treat them as two signals, not one.",
          ],
        },
        {
          slug: "realtime-dashboard-django-channels",
          meta: "FIELD NOTES · REAL-TIME SYSTEMS",
          title: "A real-time production dashboard with Django Channels & Redis",
          excerpt: "Operators needed to see KPI numbers move the moment they changed — not on the next manual refresh.",
          body: [
            "Floor operators were tracking material consumption and output on numbers that were minutes stale, refreshed by hand. Decisions were being made on data that was already out of date by the time anyone looked at it.",
            "Django Channels with a Redis-backed channel layer gave every dashboard a persistent WebSocket connection; the backend pushed KPI and consumption updates the moment they happened instead of waiting for a poll. Consumers stayed intentionally thin — broadcasting pre-computed state rather than running a query per connection — so fan-out to many open dashboards never turned into a database problem.",
            "Update latency dropped to sub-second, and operator response time to changing conditions improved by roughly 60% — the gap between \"something changed\" and \"someone reacted\" basically disappeared.",
          ],
        },
        {
          slug: "bitrix24-crm-integration",
          meta: "FIELD NOTES · INTEGRATIONS",
          title: "Automating CRM sync: integrating Bitrix24 via REST API & webhooks",
          excerpt: "Employee records, departments and orders were being typed into two systems by hand.",
          body: [
            "Employee data, department structure and production orders lived in Bitrix24, but the internal system needed the same data — and kept drifting out of sync because someone had to update both places manually.",
            "REST API calls handled the bulk sync (employees, departments, historical orders), while webhook handlers caught changes as they happened in Bitrix24 and pushed them into the internal system immediately, instead of waiting for a scheduled batch job to catch up.",
            "Manual data-entry time dropped by 50%, and — more importantly — the two systems stopped disagreeing with each other, which was the actual source of most support tickets before this shipped.",
          ],
        },
        {
          slug: "asyncio-85-percent-faster",
          meta: "FIELD NOTES · ASYNC ENGINEERING",
          title: "Cutting data-loading time by 85% with AsyncIO pipelines",
          excerpt: "Why the slow part usually isn’t your code — it’s everything your code is waiting on.",
          body: [
            "The pipeline I inherited loaded product data one request at a time: fetch, wait, parse, wait, write, wait. On 10,000+ products a day, most of that wall-clock time was pure idle — the CPU doing nothing while a network call resolved.",
            "Switching to asyncio with bounded concurrency (a semaphore capping in-flight requests, not an unbounded free-for-all) let the pipeline keep dozens of I/O operations in flight at once instead of one. Combined with batching writes to PostgreSQL instead of committing row by row, total load time dropped by 85% — the same hardware, doing the same work, just never sitting idle.",
            "The lesson that generalizes: before reaching for more infrastructure, check how much of your \"slow\" is actually synchronous waiting. Often the fix is concurrency, not more compute.",
          ],
        },
        {
          slug: "fixing-n-plus-1-django-orm",
          meta: "FIELD NOTES · DJANGO ORM",
          title: "Fixing N+1 queries: select_related vs prefetch_related",
          excerpt: "The two-line fix that took a production report from seconds to milliseconds.",
          body: [
            "Across 25+ ViewSets in a production-reporting system, the same bug kept showing up: a serializer touching a related field inside a loop, silently firing one extra query per row. A report over 500 orders meant 500+ queries no one asked for.",
            "select_related() solves this for forward foreign-key and one-to-one relations by pulling the related row in with a SQL join — one query instead of N. prefetch_related() solves the reverse case (reverse FKs, many-to-many) with a second, batched query instead of a join, which avoids blowing up the result set when the \"many\" side is large.",
            "Applying both where they actually fit — not everywhere reflexively — took API response times down 2–3x on the heaviest endpoints, with no schema changes and no caching layer required.",
          ],
        },
      ],
    },
    contact: {
      heading: "Contact",
      title: "Got a project worth building right? Let's talk.",
      desc: "I take on everything from a one-off landing page or MVP sprint to long-term contract work as your backend/full-stack engineer — Django & FastAPI APIs, real-time WebSocket systems, database performance fixes, or an AI-assisted automation pipeline you've been putting off. Tell me what you're building and I'll tell you honestly if I'm the right fit.",
      labels: { email: "Email", phone: "Phone", telegram: "Telegram", github: "GitHub" },
      footerTagline: "Built with full-stack precision.",
      form: {
        heading: "Or send a message directly",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send message",
        sending: "Sending…",
        success: "Thanks — I'll get back to you soon.",
        error: "Something went wrong. Please use one of the contact options above instead.",
        unavailable: "The message form isn't set up yet — please use one of the contact options above instead.",
      },
    },
  },
  uz: {
    meta: {
      title: "Abdurauf Ahmadjonov — Full-Stack Dasturchi",
      description:
        "Abdurauf Ahmadjonovning portfolio sayti — async Python backend'lar, real-time tizimlar, React/Next.js frontend'lar va AI yordamida ishlaydigan vositalar quruvchi full-stack dasturchi.",
    },
    nav: { about: "Men haqimda", services: "Xizmatlar", projects: "Loyihalar", blog: "Blog", contact: "Aloqa" },
    hero: {
      badge: "Yangi loyihalarga ochiqman",
      role: "Full-Stack Dasturchi",
      bio: "Men mahsulotlarni boshidan oxirigacha qurib beraman — async Python backend'lar, real-time tizimlar, React/Next.js frontend'lar va AI yordamida ishlaydigan vositalar — butun stackni toʻgʻri qilishni istagan jamoalar uchun.",
      ctaPrimary: "Loyihani boshlaylik",
      ctaSecondary: "Ishlarni koʻrish",
      downloadCV: "CV yuklab olish",
      systemCore: "tizim yadrosi",
      online: "faol",
    },
    stats: {
      faster: "Tezroq ma'lumot yuklash",
      throughput: "Soʻrovlar tezligi",
      users: "Bir vaqtdagi foydalanuvchilar",
      uptime: "Ishlash vaqti",
    },
    about: {
      toolboxLabel: "Vositalar",
      factLabels: {
        location: "Joylashuv",
        experience: "Tajriba",
        focus: "Yoʻnalish",
        currently: "Hozir",
        languages: "Tillar",
        stack: "Asosiy stack",
      },
      factValues: {
        location: "Toshkent, Oʻzbekiston",
        experience: "2+ yil",
        focus: "Full-stack: backend, frontend va AI vositalari",
        currently: "Freelance, shartnomaga ochiq",
        languages: "Oʻzbek, Ingliz, Rus",
        stack: "Python · Django · React/Next.js",
      },
      contactCta: "Bogʻlanish",
    },
    services: {
      heading: "Xizmatlar",
      viewAll: "Barchasini koʻrish",
      items: [
        {
          title: "Backend va API ishlab chiqish",
          desc: "Avval toʻgʻri ishlashga, keyin yukka chidamlilikka moslashtirilgan Django REST Framework va FastAPI xizmatlari.",
        },
        {
          title: "Real vaqt va async tizimlar",
          desc: "Yuk ostida ham tez ishlaydigan WebSocket panellari, jonli KPI kuzatuvi va AsyncIO pipeline'lar.",
        },
        {
          title: "Ma'lumotlar bazasini loyihalash va optimallashtirish",
          desc: "Sxema dizayni va soʻrovlarni sozlash — N+1 muammolarini bir xonali millisekundlik chaqiruvlarga aylantiradigan darajada.",
        },
        {
          title: "Frontend va landing page'lar",
          desc: "React/Next.js frontend'lar va konversiyaga qaratilgan landing page'lar — online taklifnomalar platformasi va Khanate kabi mijoz saytlari uchun qilingan.",
        },
        {
          title: "Workflow va brauzer avtomatlashtiruvi",
          desc: "Jamoaning haftasidagi takrorlanuvchi, xatolikka moyil qismlarini olib tashlaydigan Selenium/Playwright avtomatlashtiruvi.",
        },
        {
          title: "AI asosidagi avtomatlashtiruv",
          desc: "Miqyosda dublikatlarni aniqlash, tasniflash va ma'lumot sifatini baholash uchun LLM (Gemini va boshqalar) bilan integratsiyalangan pipeline'lar.",
        },
      ],
    },
    projects: {
      heading: "Loyihalar",
      githubHeading: "GitHub'dagi so'nggi faoliyat",
      viewAll: "Barchasini koʻrish",
      labels: { problem: "Muammo", approach: "Yondashuv", result: "Natija", stack: "Stack", demo: "LinkedIn'da demo'ni ko'rish" },
      items: [
        {
          slug: "unicflo",
          title: "Unicflo — avtomatik mahsulot importi va AI pipeline'i",
          desc: "Bir nechta do'kondan mahsulotlarni har kuni scraping qilib import qiluvchi tizim — Google Gemini tavsif yozadi va kategoriyalaydi, phash asosidagi tekshiruv esa dublikatlarni katalogga tushishidan oldin tutib qoladi.",
          problem:
            "Bir nechta tashqi do'kondan mahsulotlar qo'lda import qilinardi — sekin, xatolarga moyil va bitta jismoniy mahsulot uchun ko'z bilan aniqlanishi kerak bo'lgan ko'plab dublikat e'lonlar bilan to'la edi.",
          approach:
            "Django 4.x + PostgreSQL asosida backend qurdim, AsyncIO yordamida bir nechta do'kon bo'yicha rejalashtirilgan scraping ishga tushirildi, shuningdek sana oralig'i va do'kon bo'yicha qo'lda import qilish hamda jonli progress kuzatuvi uchun maxsus admin interfeysi yaratildi. Google Gemini API mahsulot tavsiflarini yozish va narxlashga ta'sir qiluvchi subkategoriyalarga avtomatik ajratish uchun, phash asosidagi tekshiruv esa jonli katalogga tushishidan oldin vizual dublikatlarni aniqlash uchun integratsiya qilindi.",
          result:
            "Do'kon egalari kuniga yangilanadigan katalogni, 80% kamroq dublikat e'lonlarni, qo'lda yozish o'rniga AI yozgan tavsiflarni (ma'lumot sifati ~40% oshdi) va alohida holatlar uchun qo'lda import qilish imkoniyatini oladilar — bularning barchasi progress kuzatuvi va xatoliklar jurnali bilan admin panel orqali nazorat qilinadi.",
        },
        {
          slug: "online-invitations-platform",
          title: "Online taklifnomalar platformasi",
          desc: "Raqamli tadbir taklifnomalarini yaratish va yuborish uchun full-stack platforma — RSVP kuzatuvi, mehmonlarni boshqarish, tadbir kunlari atrofidagi yuk sakrashlariga chidamli Django + React stack.",
          problem:
            "Tadbir egalariga jadval yoki guruh chatlariga tayanmasdan raqamli taklifnoma yuborish va kim kelishini real vaqtda kuzatish kerak edi — bunda har bir tadbirning trafigi juda notekis: deyarli nol, keyin taklifnomalar tarqalgan zahoti RSVP'lar portlashi.",
          approach:
            "Backend Django REST Framework va PostgreSQL'da qurildi (mehmonlar ro'yxati, RSVP holati, tadbir ma'lumotlari), frontend esa React'da — host paneli va ochiq taklifnoma/RSVP sahifalari uchun. Ko'p o'qiladigan ochiq sahifalar autentifikatsiyalangan host panelidan alohida keshlanadi va cheklanadi, shunda bitta tadbirdagi yuk portlashi butun platformaga ta'sir qilmaydi.",
          result:
            "Tadbir egalari jadvalni yangilamasdan kim javob berganini jonli ko'radi, platforma esa raqamli taklifnomalarga xos notekis trafik naqshiga chidamli bo'lib chiqdi.",
        },
        {
          slug: "khanate",
          title: "Khanate",
          desc: "React/Next.js bilan qurilgan, konversiyaga qaratilgan landing sayt — dizayndan production'gacha toʻliq men tomonimdan qilingan.",
          problem:
            "Mijozga tashrifni so'rovga aylantiradigan landing sayt kerak edi — tez yuklanadigan, nima taklif qilinayotgani aniq, va kodga tegmasdan yangilash oson bo'lishi kerak edi.",
          approach:
            "Dizayn Next.js'da, mijoz kengaytira oladigan komponent tuzilishi bilan amalga oshirildi, birinchi render tezligi uchun rasmlar va shriftlar optimallashtirildi, aloqa/so'rov oqimi production'ga chiqarishdan oldin to'liq ulandi.",
          result:
            "Mijoz o'zi boshqara oladigan production sayt — shu portfoliodagi boshqa ishlarda ishlatilgan xuddi shu frontend stack (React/Next.js/TypeScript) bilan qurilgan.",
        },
      ],
    },
    blog: {
      heading: "Blog",
      viewAll: "Barchasini koʻrish",
      posts: [
        {
          slug: "dedup-with-phash-and-gemini",
          meta: "DALA YOZUVLARI · MA'LUMOT SIFATI",
          title: "Perceptual hashing + Gemini bilan dublikat mahsulot e'lonlarini yo'q qilish",
          excerpt: "Nomi va fotosurati biroz farq qiladigan ikkita e'lon ko'pincha aynan bitta mahsulot bo'ladi.",
          body: [
            "Bir nechta tashqi do'kondan kelayotgan mahsulot feed'lari doimo bir-biriga ustma-ust tushardi — bitta jismoniy mahsulot turli nomlar, turli surat kadrlari, turli sotuvchilar ostida e'lon qilingan bo'lardi. Oddiy nom mosligini tekshirish buning yarmisiga yaqinini tutardi, xolos.",
            "Yechim ikkita alohida signalni bitta ballga aralashtirmasdan, alohida qatlam sifatida qo'lladi: mahsulot suratlarida vizual dublikatlarni tutish uchun perceptual hashing (phash), va surat yaqin, lekin bir xil bo'lmagan hollarda tavsif va nomlarni ma'noviy jihatdan solishtirish uchun Google Gemini API.",
            "Ikkalasini birga qo'llash dublikat e'lonlarni 80% ga kamaytirdi va qo'lda tekshirilgan namuna bo'yicha umumiy ma'lumot sifatini taxminan 40% ga oshirdi. Xulosa: vizual va ma'noviy o'xshashlik turli xil xatolarni tutadi — ularni bitta emas, ikkita alohida signal sifatida ko'ring.",
          ],
        },
        {
          slug: "realtime-dashboard-django-channels",
          meta: "DALA YOZUVLARI · REAL-TIME TIZIMLAR",
          title: "Django Channels va Redis bilan real-time ishlab chiqarish dashboard'i",
          excerpt: "Operatorlarga KPI raqamlari o'zgargan zahoti ko'rinishi kerak edi — keyingi qo'lda yangilashda emas.",
          body: [
            "Sex operatorlari material sarfi va chiqarilgan mahsulotni bir necha daqiqa eskirgan, qo'lda yangilanadigan raqamlar bo'yicha kuzatishardi. Qarorlar kimdir qarab ulgurguncha eskirib qolgan ma'lumot asosida qabul qilinardi.",
            "Redis asosidagi channel layer bilan Django Channels har bir dashboard'ga doimiy WebSocket ulanishini berdi; backend so'rov kutmasdan, KPI va sarf yangilanishlarini sodir bo'lgan zahoti yuborardi. Consumer'lar ataylab yengil saqlandi — har bir ulanish uchun so'rov bajarish o'rniga oldindan hisoblangan holatni tarqatishardi — shu tufayli ko'plab ochiq dashboard'larga tarqatish bazaga yuk bo'lib qolmadi.",
            "Yangilanish kechikishi soniyadan kamga tushdi, operatorning o'zgarishlarga reaksiya vaqti esa taxminan 60% yaxshilandi — \"nimadir o'zgardi\" va \"kimdir reaksiya bildirdi\" orasidagi bo'shliq deyarli yo'qoldi.",
          ],
        },
        {
          slug: "bitrix24-crm-integration",
          meta: "DALA YOZUVLARI · INTEGRATSIYALAR",
          title: "CRM sinxronizatsiyasini avtomatlashtirish: Bitrix24'ni REST API va webhook orqali ulash",
          excerpt: "Xodimlar ma'lumotlari, bo'limlar va buyurtmalar ikkita tizimga qo'lda kiritilardi.",
          body: [
            "Xodimlar ma'lumotlari, bo'lim tuzilishi va ishlab chiqarish buyurtmalari Bitrix24'da saqlanardi, lekin ichki tizimga ham xuddi shu ma'lumot kerak edi — va kimdir ikkala joyni ham qo'lda yangilashi kerakligi sababli ular doimo bir-biridan uzilib qolardi.",
            "REST API so'rovlari ommaviy sinxronizatsiyani (xodimlar, bo'limlar, tarixiy buyurtmalar) bajardi, webhook handler'lar esa Bitrix24'da o'zgarish sodir bo'lgan zahoti uni tutib, ichki tizimga rejalashtirilgan paket ishini kutmasdan darhol uzatdi.",
            "Qo'lda ma'lumot kiritish vaqti 50% ga qisqardi, va muhimrog'i — ikkala tizim bir-biriga zid ma'lumot berishni to'xtatdi, aslida ko'pchilik qo'llab-quvvatlash so'rovlarining sababi ham shu edi.",
          ],
        },
        {
          slug: "asyncio-85-percent-faster",
          meta: "DALA YOZUVLARI · ASYNC MUHANDISLIK",
          title: "AsyncIO pipeline'lari bilan ma'lumot yuklash vaqtini 85% ga qisqartirish",
          excerpt: "Nima uchun sekinlik odatda kodingizda emas — kodingiz kutayotgan hamma narsada.",
          body: [
            "Men meros qilib olgan pipeline mahsulot ma'lumotlarini birma-bir yuklardi: soʻrov, kutish, tahlil, kutish, yozish, kutish. Kuniga 10,000+ mahsulotda, bu vaqtning koʻp qismi sof bekorchilik edi — tarmoq soʻrovi javob berayotganda protsessor hech narsa qilmasdi.",
            "Cheklangan parallellik bilan (bir vaqtning oʻzida bajarilayotgan soʻrovlar sonini cheklovchi semafor, cheksiz erkinlik emas) asyncioʻga oʻtish pipeline'ga bir vaqtning oʻzida bittasi oʻrniga oʻnlab I/O operatsiyalarini bajarish imkonini berdi. PostgreSQL'ga har qatorni alohida emas, balki toʻplamlarda yozish bilan birga, umumiy yuklash vaqti 85% ga qisqardi — bir xil texnika, bir xil ish, faqat hech qachon bekor turmaydi.",
            "Umumlashtiriladigan saboq: koʻproq infratuzilmaga murojaat qilishdan oldin, \"sekinlik\"ingizning qanchasi aslida sinxron kutish ekanligini tekshiring. Koʻpincha yechim parallellikda, koʻproq hisoblash quvvatida emas.",
          ],
        },
        {
          slug: "fixing-n-plus-1-django-orm",
          meta: "DALA YOZUVLARI · DJANGO ORM",
          title: "N+1 soʻrovlarni tuzatish: select_related va prefetch_related",
          excerpt: "Ishlab chiqarish hisobotini soniyalardan millisekundlargacha tushirgan ikki qatorli tuzatish.",
          body: [
            "Ishlab chiqarish hisobot tizimidagi 25+ ViewSet boʻylab bir xil xato takrorlanardi: serializer sikl ichida bogʻliq maydonga tegib, har qator uchun sezilmasdan qoʻshimcha soʻrov yuborardi. 500 ta buyurtma boʻyicha hisobot hech kim soʻramagan 500+ soʻrovni anglatardi.",
            "select_related() buni toʻgʻridan-toʻgʻri tashqi kalit va bir-birga bogʻliqliklar uchun SQL join orqali bogʻliq qatorni birga olib kelib hal qiladi — N oʻrniga bitta soʻrov. prefetch_related() esa teskari holatni (teskari FK'lar, koʻpdan-koʻpga) join oʻrniga ikkinchi, toʻplamli soʻrov bilan hal qiladi, bu \"koʻp\" tomon katta boʻlganda natija toʻplamining portlab ketishining oldini oladi.",
            "Ikkalasini ham toʻgʻri joyda qoʻllash — hamma joyda reflektor tarzda emas — eng ogʻir endpoint'larda API javob vaqtini sxema oʻzgarishisiz va keshlash qatlamisiz 2–3 martaga tushirdi.",
          ],
        },
      ],
    },
    contact: {
      heading: "Aloqa",
      title: "Qurishga arziydigan loyihangiz bormi? Keling, gaplashaylik.",
      desc: "Bir martalik landing page yoki MVP sprintdan tortib, backend/full-stack muhandisingiz sifatida uzoq muddatli shartnoma ishigacha — hammasini qabul qilaman: Django va FastAPI API'lar, real-time WebSocket tizimlari, ma'lumotlar bazasi tezligini oshirish, yoki hali qoʻlga olishga ulgurmagan AI yordamida avtomatlashtirish pipeline'i. Nima qurayotganingizni ayting — mos kelamanmi yoki yoʻqmi, ochiq aytib beraman.",
      labels: { email: "Email", phone: "Telefon", telegram: "Telegram", github: "GitHub" },
      footerTagline: "Full-stack aniqlik bilan qurilgan.",
      form: {
        heading: "Yoki toʻgʻridan-toʻgʻri xabar yozing",
        name: "Ism",
        email: "Email",
        message: "Xabar",
        send: "Xabar yuborish",
        sending: "Yuborilmoqda…",
        success: "Rahmat — tez orada javob beraman.",
        error: "Nimadir xato ketdi. Iltimos, yuqoridagi aloqa usullaridan birini ishlating.",
        unavailable: "Xabar formasi hozircha sozlanmagan — iltimos, yuqoridagi aloqa usullaridan birini ishlating.",
      },
    },
  },
  ru: {
    meta: {
      title: "Абдурауф Ахмаджонов — Full-Stack разработчик",
      description:
        "Портфолио Абдураупа Ахмаджонова — full-stack разработчика, создающего асинхронные бэкенды на Python, real-time системы, фронтенды на React/Next.js и инструменты с AI.",
    },
    nav: { about: "Обо мне", services: "Услуги", projects: "Проекты", blog: "Блог", contact: "Контакты" },
    hero: {
      badge: "Открыт для новых проектов",
      role: "Full-Stack разработчик",
      bio: "Я создаю продукты полностью, от начала до конца — асинхронные бэкенды на Python, real-time системы, фронтенды на React/Next.js и инструменты с AI — для команд, которым нужен весь стек, сделанный правильно.",
      ctaPrimary: "Начнём проект",
      ctaSecondary: "Смотреть работы",
      downloadCV: "Скачать резюме",
      systemCore: "ядро системы",
      online: "онлайн",
    },
    stats: {
      faster: "Быстрее загрузка данных",
      throughput: "Пропускная способность запросов",
      users: "Одновременные пользователи",
      uptime: "Аптайм",
    },
    about: {
      toolboxLabel: "Инструменты",
      factLabels: {
        location: "Локация",
        experience: "Опыт",
        focus: "Фокус",
        currently: "Сейчас",
        languages: "Языки",
        stack: "Основной стек",
      },
      factValues: {
        location: "Ташкент, Узбекистан",
        experience: "2+ года",
        focus: "Full-stack: backend, frontend и AI-инструменты",
        currently: "Фриланс, открыт для контрактов",
        languages: "Узбекский, английский, русский",
        stack: "Python · Django · React/Next.js",
      },
      contactCta: "Связаться",
    },
    services: {
      heading: "Услуги",
      viewAll: "Смотреть все",
      items: [
        {
          title: "Backend и API разработка",
          desc: "Сервисы на Django REST Framework и FastAPI, построенные сначала для корректности, затем настроенные под нагрузку.",
        },
        {
          title: "Real-time и async системы",
          desc: "WebSocket-дашборды, отслеживание KPI в реальном времени и AsyncIO-пайплайны, устойчивые под нагрузкой.",
        },
        {
          title: "Проектирование и оптимизация БД",
          desc: "Дизайн схем и настройка запросов — превращающие проблемы N+1 в вызовы на единицы миллисекунд.",
        },
        {
          title: "Frontend и лендинги",
          desc: "Фронтенды на React/Next.js и лендинги, ориентированные на конверсию — реализованы для платформы онлайн-приглашений и клиентских сайтов, таких как Khanate.",
        },
        {
          title: "Автоматизация workflow и браузера",
          desc: "Автоматизация на Selenium/Playwright, убирающая повторяющиеся, подверженные ошибкам части недели команды.",
        },
        {
          title: "AI-автоматизация",
          desc: "Пайплайны с интеграцией LLM (Gemini и другие) для дедупликации, классификации и оценки качества данных в масштабе.",
        },
      ],
    },
    projects: {
      heading: "Проекты",
      githubHeading: "Недавнее на GitHub",
      viewAll: "Смотреть все проекты",
      labels: { problem: "Проблема", approach: "Подход", result: "Результат", stack: "Стек", demo: "Смотреть демо в LinkedIn" },
      items: [
        {
          slug: "unicflo",
          title: "Unicflo — автоматический импорт товаров и AI-конвейер",
          desc: "Система ежедневного скрапинга и импорта товаров для мультимагазинного e-commerce — Google Gemini пишет описания и категоризирует товары, а проверка на основе phash отлавливает дубликаты до попадания в каталог.",
          problem:
            "Товары из нескольких внешних магазинов импортировались вручную — медленно, с ошибками и множеством дублирующихся объявлений на один и тот же физический товар, которые приходилось замечать на глаз.",
          approach:
            "Построил бэкенд на Django 4.x + PostgreSQL с запланированным скрапингом на AsyncIO по нескольким магазинам, а также кастомную админ-панель для ручного импорта по диапазону дат и магазину с отслеживанием прогресса в реальном времени. Интегрировал Google Gemini API для генерации описаний товаров и автоматической категоризации по подкатегориям, влияющим на ценообразование, а также добавил проверку на основе перцептивного хеширования (phash) для отлова визуальных дублей до попадания в общий каталог.",
          result:
            "Владельцы магазинов получают ежедневно обновляемый каталог с 80% меньшим числом дублей, описания товаров, написанные AI вместо ручного копирайтинга (качество данных выросло примерно на 40%), и путь для ручного импорта в особых случаях — всё это контролируется через админ-панель с отслеживанием прогресса и логированием ошибок.",
        },
        {
          slug: "online-invitations-platform",
          title: "Платформа онлайн-приглашений",
          desc: "Full-stack платформа для создания и рассылки цифровых приглашений на мероприятия — отслеживание RSVP, управление гостями и стек Django + React, выдерживающий всплески трафика вокруг дат мероприятий.",
          problem:
            "Организаторам нужен был способ рассылать цифровые приглашения и видеть, кто реально придёт, без таблиц и групповых чатов — при этом трафик любого отдельного мероприятия крайне неравномерный: почти ноль, а затем всплеск RSVP сразу после рассылки приглашений.",
          approach:
            "Бэкенд построен на Django REST Framework с PostgreSQL для списков гостей, статуса RSVP и данных мероприятия, фронтенд — на React, для панели организатора и публичных страниц приглашения/RSVP. Публичные страницы с высокой нагрузкой на чтение кешируются и ограничиваются по частоте запросов отдельно от панели организатора, поэтому всплеск на одном мероприятии не влияет на всю платформу.",
          result:
            "Организаторы видят в реальном времени, кто ответил, без обновления таблиц, а платформа стабильно выдерживает неравномерный трафик, характерный для цифровых приглашений.",
        },
        {
          slug: "khanate",
          title: "Khanate",
          desc: "Лендинг, ориентированный на конверсию, построенный на React/Next.js — реализован полностью, от дизайна до продакшена.",
          problem:
            "Клиенту нужен был лендинг, превращающий визиты в заявки — быстрый, с понятным предложением, и который клиент мог бы обновлять сам, без правки кода.",
          approach:
            "Дизайн реализован на Next.js с компонентной структурой, которую клиент может расширять; изображения и шрифты оптимизированы для быстрой первой отрисовки; поток заявок/связи полностью настроен перед выкладкой в продакшен.",
          result:
            "Продакшен-сайт, который клиент может поддерживать самостоятельно, построенный на том же фронтенд-стеке (React/Next.js/TypeScript), что и остальные работы в этом портфолио.",
        },
      ],
    },
    blog: {
      heading: "Блог",
      viewAll: "Смотреть все посты",
      posts: [
        {
          slug: "dedup-with-phash-and-gemini",
          meta: "ЗАМЕТКИ · КАЧЕСТВО ДАННЫХ",
          title: "Уничтожение дублей товаров с помощью perceptual hashing + Gemini",
          excerpt: "Два объявления с разными названиями и чуть разными фото часто оказываются одним и тем же товаром.",
          body: [
            "Товарные фиды из нескольких внешних магазинов постоянно пересекались — один и тот же физический товар был выставлен под разными названиями, с разной обрезкой фото, от разных продавцов. Простое сравнение названий ловило от силы половину таких случаев.",
            "Решение объединило два отдельных сигнала, не смешивая их в одну оценку: перцептивное хеширование (phash) изображений товаров для отлова визуальных дублей, которые не ловило сравнение строк, и Google Gemini API для семантического сравнения описаний и названий, когда изображения были похожи, но не идентичны.",
            "Совместное использование обоих подходов сократило число дублей на 80% и подняло общее качество данных примерно на 40% — по оценке вручную проверенной выборки. Вывод: визуальное и семантическое сходство ловят разные типы ошибок — их стоит рассматривать как два отдельных сигнала, а не один смешанный.",
          ],
        },
        {
          slug: "realtime-dashboard-django-channels",
          meta: "ЗАМЕТКИ · REAL-TIME СИСТЕМЫ",
          title: "Real-time дашборд производства на Django Channels и Redis",
          excerpt: "Операторам нужно было видеть, как меняются KPI, в момент изменения — а не после ручного обновления.",
          body: [
            "Операторы на производстве отслеживали расход материалов и выпуск продукции по цифрам, устаревшим на минуты и обновляемым вручную. Решения принимались на основе данных, которые к моменту просмотра уже были неактуальны.",
            "Django Channels с Redis-based channel layer дал каждому дашборду постоянное WebSocket-соединение; бэкенд отправлял обновления KPI и расхода материалов в момент их появления, вместо ожидания опроса. Consumer'ы намеренно оставались лёгкими — рассылая уже готовое состояние, а не выполняя запрос на каждое соединение — поэтому рассылка на множество открытых дашбордов не превратилась в нагрузку на БД.",
            "Задержка обновления упала до значений менее секунды, а скорость реакции операторов на изменения выросла примерно на 60% — разрыв между «что-то изменилось» и «кто-то отреагировал» практически исчез.",
          ],
        },
        {
          slug: "bitrix24-crm-integration",
          meta: "ЗАМЕТКИ · ИНТЕГРАЦИИ",
          title: "Автоматизация синхронизации CRM: интеграция Bitrix24 через REST API и вебхуки",
          excerpt: "Данные сотрудников, отделов и заказов вручную вводились в две системы.",
          body: [
            "Данные сотрудников, структура отделов и производственные заказы хранились в Bitrix24, но внутренней системе были нужны те же данные — и они постоянно расходились, потому что кто-то должен был вручную обновлять оба места.",
            "REST API запросы обеспечивали массовую синхронизацию (сотрудники, отделы, исторические заказы), а обработчики webhook'ов ловили изменения в Bitrix24 в момент их появления и сразу передавали их во внутреннюю систему, не дожидаясь плановой пакетной задачи.",
            "Время ручного ввода данных сократилось на 50%, и, что важнее, две системы перестали противоречить друг другу — а именно это было источником большинства обращений в поддержку до этого изменения.",
          ],
        },
        {
          slug: "asyncio-85-percent-faster",
          meta: "ЗАМЕТКИ · ASYNC-ИНЖЕНЕРИЯ",
          title: "Как сократить время загрузки данных на 85% с помощью AsyncIO",
          excerpt: "Почему медленная часть обычно не в вашем коде — а во всём, что код ожидает.",
          body: [
            "Доставшийся мне пайплайн загружал данные о товарах по одному: запрос, ожидание, разбор, ожидание, запись, ожидание. При 10 000+ товаров в день большая часть этого времени была чистым простоем — процессор бездействовал, пока выполнялся сетевой запрос.",
            "Переход на asyncio с ограниченной параллельностью (семафор, ограничивающий число одновременных запросов, а не бесконтрольная свобода) позволил пайплайну держать десятки I/O-операций одновременно вместо одной. В сочетании с пакетной записью в PostgreSQL вместо построчных коммитов общее время загрузки упало на 85% — то же оборудование, та же работа, просто без простоя.",
            "Обобщаемый вывод: прежде чем наращивать инфраструктуру, проверьте, сколько вашей «медлительности» на самом деле — синхронное ожидание. Часто решение в параллельности, а не в дополнительных вычислениях.",
          ],
        },
        {
          slug: "fixing-n-plus-1-django-orm",
          meta: "ЗАМЕТКИ · DJANGO ORM",
          title: "Исправление N+1-запросов: select_related против prefetch_related",
          excerpt: "Исправление в две строки, сократившее отчёт с секунд до миллисекунд.",
          body: [
            "В более чем 25 ViewSet'ах системы производственной отчётности повторялась одна и та же ошибка: сериализатор обращался к связанному полю внутри цикла, незаметно делая по одному лишнему запросу на строку. Отчёт по 500 заказам означал 500+ ненужных запросов.",
            "select_related() решает это для прямых внешних ключей и связей один-к-одному, подтягивая связанную строку через SQL join — один запрос вместо N. prefetch_related() решает обратный случай (обратные FK, многие-ко-многим) вторым, пакетным запросом вместо join, что не даёт результату «взорваться», когда сторона «многие» велика.",
            "Применение обоих там, где это действительно уместно — а не повсеместно по инерции — снизило время отклика API на самых тяжёлых эндпоинтах в 2–3 раза, без изменений схемы и без слоя кэширования.",
          ],
        },
      ],
    },
    contact: {
      heading: "Контакты",
      title: "Есть проект, который стоит построить правильно? Давайте обсудим.",
      desc: "Берусь за всё — от разового лендинга или MVP-спринта до долгосрочного контракта в роли вашего backend/full-stack инженера: API на Django и FastAPI, real-time системы на WebSocket, исправление производительности БД или AI-автоматизация, до которой у вас не доходили руки. Расскажите, что строите — честно скажу, подхожу ли я.",
      labels: { email: "Email", phone: "Телефон", telegram: "Telegram", github: "GitHub" },
      footerTagline: "Создано с full-stack точностью.",
      form: {
        heading: "Или напишите напрямую",
        name: "Имя",
        email: "Email",
        message: "Сообщение",
        send: "Отправить",
        sending: "Отправка…",
        success: "Спасибо — скоро отвечу.",
        error: "Что-то пошло не так. Пожалуйста, воспользуйтесь одним из способов связи выше.",
        unavailable: "Форма сообщений пока не настроена — пожалуйста, воспользуйтесь одним из способов связи выше.",
      },
    },
  },
};
