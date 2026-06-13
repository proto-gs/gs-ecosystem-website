const dict = {
  ru: {
    title: "GS | Мои проекты",
    title_news: "Новости - GS",
    w_b: "Перейти",
    p_h: "Мои проекты",
    p_d0: "Легкий анализ HTTP-трафика.",
    p_d1: "Анализ HTTP-трафика и API.",
    p_d2: "Анализ HTTP-трафика.",
    p_design: "Дизайн проектов",
    p_w: "Новости в ТГК",
    p_d4: "Политика конфиденциальности",
    p_d5: "Вопросы-ответы",
    p_dev: "Мощный инструмент анализа HTTP-трафика для ПК",
    n_h: "Новости",
    n_m: "Смотреть все новости",
    c_h: "Контакты и поддержка",
    f_law: "Используя сайт, вы соглашаетесь на обработку персональных данных.",
    c_tg: "Телеграм-канал",
    c_tips: "Поддержать проект",
    t_copy: "Ссылка скопирована!",
    s_more: "Подробнее...",
    b_t: "Назад",

    slide_d0: "GS.HTTP.Lite: Новое минималистичное главное меню приложения.",
    slide_d1:
      "GS.HTTP.Lite: Удобное новое выпадающее меню, в котором минималистично и аккуратно расположены все дополнительные функции приложения.",
    slide_d2:
      "GS.HTTP.Lite: Теперь в приложении доступны настройки и оформлены в красивой выпадающей шторке.",
    slide_d3: "GS.HTTP.Lite: Новый дизайн сканера в приложении.",
    slide_d4: "GS.HTTP.Lite: Обновленный полномасштабный раздел настроек.",
    slide_d5: "GS.HTTP.Lite: Обновленный раздел очистки истории.",
  },
  en: {
    title: "GS | My Projects",
    title_news: "News - GS",
    w_b: "Open",
    p_h: "My Projects",
    p_d0: "Easy HTTP traffic analysis.",
    p_d1: "HTTP traffic and API analysis.",
    p_d2: "HTTP traffic analysis.",
    p_design: "Project Design",
    p_w: "News in TG",
    p_d4: "Privacy Policy",
    p_d5: "FAQ",
    p_dev: "Powerful HTTP traffic analysis tool for PC",
    n_h: "News",
    n_m: "View all news",
    c_h: "Contacts & Support",
    f_law: "By using the site, you agree to the processing of personal data.",
    c_tg: "Telegram Channel",
    c_tips: "Support Project",
    t_copy: "Link copied!",
    s_more: "More details...",
    b_t: "← Back",

    slide_d0: "GS.HTTP.Lite: New minimalist application main menu.",
    slide_d1:
      "GS.HTTP.Lite: Convenient new dropdown menu containing all additional features.",
    slide_d2:
      "GS.HTTP.Lite: Settings are now available in a beautiful dropdown layout.",
    slide_d3: "GS.HTTP.Lite: New application scanner design.",
    slide_d4: "GS.HTTP.Lite: Updated full-scale settings section.",
    slide_d5: "GS.HTTP.Lite: Updated history clearing section.",
  },
};

const newsData = {
  ru: [
    {
      date: "11.06.2026",
      title: "Запуск десктопного приложения GS.Monitor",
      id: "news-monitor100",
      content:
        "<h4>Официальный релиз мощного инструмента мониторинга:</h4><ul><li><strong>Синхронизация экосистемы:</strong> полная интеграция и совместимость с логами и конфигурациями из приложения GS.HTTP.Lite.</li><li><strong>Высокая производительность:</strong> десктопный движок полностью оптимизирован под минимальное потребление ресурсов процессора и оперативной памяти.</li></ul>",
    },

    {
      date: "09.06.2026",
      title:
        "Большое обновление интерфейса и функционала приложения GS.HTTP.Lite",
      id: "news-lite100",
      content:
        "<h4>Изменения в интерфейсе главного меню приложения:</h4><ul><li><strong>Управление данными:</strong> вся информация о приложении и его параметры теперь объединены в разделе «Настройки».</li><li><strong>Автоматический переход (Автодирект):</strong> в настройки добавлена функция, которая при поиске автоматически устанавливает безопасное соединение по протоколу https://.</li><li><strong>Смена темы:</strong> добавлена кнопка переключения темы оформления, которая синхронизируется с системными настройками устройства.</li><li><strong>Очистка истории ввода:</strong> встроена кнопка быстрого удаления истории. Например, после проверки сайта пользователь может зайти в настройки и очистить историю в один клик, что избавляет от необходимости вручную стирать данные в поисковой строке.</li><li><strong>Оптимизация пространства:</strong> кнопка «Приступить» перенесена в нижнюю часть экрана. Это решение позволило разгрузить интерфейс и сделать дизайн приложения более минималистичным и аккуратным.</li></ul><h4>Изменение интерфейса сканера в приложении:</h4><ul><li><strong>Добавлен современный:</strong> минималистичный дизайн главного экрана с быстрыми вкладками для переключения HTTP-методов (GET, POST, HEAD, PUT).</li><li><strong>Раздельные экраны настроек:</strong> глобальные настройки приложения теперь открываются из главного меню, а для экрана сканирования создана независимая кастомная шторка параметров.</li><li><strong>Новые параметры сети и безопасности:</strong> добавлены конфигурации таймаута запросов (5, 10, 15 секунд), переключатель автоматического следования редиректам (3xx) и тумблер строгой проверки SSL-сертификатов.</li><li><strong>Интеграция истории:</strong> реализована полноценная система логирования прошлых проверок с возможностью быстрой очистки истории ввода и сохранённых URL.</li><li><strong>Оптимизация UI:</strong> исправлена читаемость элементов интерфейса в светлой теме оформления; шторки теперь поддерживают плавное развёртывание на весь экран при свайпе вверх.</li></ul>",
    },

    {
      date: "21.05.2026",
      title: "Обновление GS.HTTP v1.0.3",
      id: "news-103",
      content:
        "<h4>Что нового в версии 1.0.3:</h4><ul><li><strong>Приложение полностью перенесено:</strong> на движок gson.</li><li><strong>Добавлен выбор HTTP-методов:</strong> GET, POST, HEAD, PUT.</li><li><strong>Новый инструмент:</strong> живой поиск и фильтрация по Заголовкам, Куки и JSON-телу ответа.</li><li><strong>Реализована локальная история запросов (SQLite):</strong> с возможностью быстрого перезапуска. Тем самым улучшив предыдущий вариант истории.</li><li><strong>Добавлена кнопка:</strong> плавного переключения Тёмной/Светлой темы.</li><li><strong>Появилась кнопка:</strong> «Открыть в браузере» для успешных сканов.</li><li><strong>В раздел инфо:</strong> улучшена кнопка поддержки и кнопка сайта разработчика.</li><li><strong>Обновлен дизайн:</strong> иконки приложения (GS).</li></ul>",
    },

    {
      date: "16.05.2026",
      title: "Обновление GS.HTTP.Lite v1.0.6",
      id: "news-lite106",
      content:
        "<h4>Что нового:</h4><ul><li><strong>Версия:</strong> 1.0.6</li><li><strong>Оптимизация веса:</strong> с 65 МБ до более 10 МБ.</li><li><strong>Улучшена гибкость движка:</strong> gson.</li><li><strong>Исправлены:</strong> мелкие ошибки.</li><li><strong>Добавлена:</strong> рабочая кнопка сайта разработчика.</li><li><strong>Приложение стало легким и быстрым!</strong></li></ul>",
    },

    {
      date: "02.05.2026",
      title: "Обновление GS.HTTP.Lite",
      id: "news-lite105",
      content:
        "<h4>Что нового:</h4><ul><li>Добавлен сайт разработчика и обновлен движок <strong>gson</strong>.</li><li>Приложение стало еще легче и быстрее.</li></ul>",
    },

    {
      date: "01.05.2026",
      title: "Запуск проекта GS.HTTP",
      id: "news-100",
      content:
        "GS.HTTP - уникальный инструмент для анализа веб-запросов и мониторинга доступности API. ⚙️",
    },
  ],
  en: [
    {
      date: "11.06.2026",
      title: "Launch of GS.Monitor Desktop Application",
      id: "news-monitor100",
      content:
        "<h4>Official release of the powerful monitoring tool:</h4><ul><li><strong>Ecosystem Synchronization:</strong> full integration and compatibility with logs and configurations from the GS.HTTP.Lite application.</li><li><strong>High Performance:</strong> the desktop engine is fully optimized for minimal CPU and RAM resource consumption.</li></ul>",
    },

    {
      date: "09.06.2026",
      title: "Major Interface & Feature Update for GS.HTTP.Lite",
      id: "news-lite100",
      content:
        "<h4>Main Menu Interface Changes:</h4><ul><li><strong>Data Management:</strong> all application information and its parameters are now combined in the 'Settings' section.</li><li><strong>Automatic Redirect (Autodirect):</strong> a feature has been added to the settings that automatically establishes a secure connection via the https:// protocol during searches.</li><li><strong>Theme Toggle:</strong> a theme switch button has been added, which fully synchronizes with the device's system settings.</li><li><strong>Clear Input History:</strong> a quick history deletion button is now built-in. For instance, after checking a website, the user can clear the history in a single click, eliminating the need to manually erase data in the search bar.</li><li><strong>Space Optimization:</strong> the 'Proceed' button has been moved to the bottom of the screen. This solution uncluttered the interface and made the application design more minimalist and clean.</li></ul><h4>Scanner Interface Changes:</h4><ul><li><strong>Modern Design Added:</strong> a minimalist main screen layout featuring quick tabs for switching HTTP methods (GET, POST, HEAD, PUT).</li><li><strong>Separate Settings Screens:</strong> global application settings now open from the main menu, while an independent custom options sheet has been created for the scanning screen.</li><li><strong>New Network & Security Parameters:</strong> added request timeout configurations (5, 10, 15 seconds), an automatic redirect following switch (3xx), and a strict SSL certificate verification toggle.</li><li><strong>History Integration:</strong> a complete logging system for past checks has been implemented, with the ability to quickly clear input history and saved URLs.</li><li><strong>UI Optimization:</strong> improved readability of interface elements in the light theme layout; sheets now support smooth full-screen expansion when swiping up.</li></ul>",
    },

    {
      date: "21.05.2026",
      title: "GS.HTTP v1.0.3 Update",
      id: "news-103",
      content:
        "<h4>What's new in version 1.0.3:</h4><ul><li><strong>App completely ported:</strong> to the gson engine.</li><li><strong>Added HTTP method selection:</strong> GET, POST, HEAD, PUT.</li><li><strong>New tool:</strong> live search and filtering by Headers, Cookies, and response JSON body.</li><li><strong>Local request history implemented (SQLite):</strong> featuring quick restart capabilities, significantly improving the previous history layout.</li><li><strong>Button added:</strong> for smooth Dark/Light theme toggling.</li><li><strong>New feature:</strong> 'Open in browser' button available for successful scans.</li><li><strong>In the info section:</strong> improved support project button and developer website button.</li><li><strong>Design update:</strong> refreshed application icon layout (GS).</li></ul>",
    },

    {
      date: "16.05.2026",
      title: "GS.HTTP.Lite v1.0.6 Update",
      id: "news-lite106",
      content:
        "<h4>What's new:</h4><ul><li><strong>Version:</strong> 1.0.6</li><li><strong>Weight optimization:</strong> reduced from 65 MB to over 10 MB.</li><li><strong>Engine flexibility improved:</strong> gson.</li><li><strong>Fixed:</strong> minor bugs.</li><li><strong>Added:</strong> working developer website button.</li><li><strong>The app became lighter and faster!</strong></li></ul>",
    },

    {
      date: "02.05.2026",
      title: "GS.HTTP.Lite Update",
      id: "news-lite105",
      content:
        "<h4>What's new:</h4><ul><li>Added developer website and updated <strong>gson</strong> engine.</li><li>The app became even lighter and faster.</li></ul>",
    },

    {
      date: "01.05.2026",
      title: "GS.HTTP Project Launch",
      id: "news-100",
      content:
        "GS.HTTP is a unique tool for web traffic analysis and API availability monitoring. ⚙️",
    },
  ],
};

let lng =
  localStorage.getItem("lng") ||
  (navigator.language.startsWith("ru") ? "ru" : "en");
let savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let currentTheme = savedTheme || (prefersDark ? "dark" : "light");

const bodyTag = document.getElementById("body-tag");
const tBtn = document.getElementById("tBtn");
const langBtn = document.getElementById("langBtn");

if (bodyTag) {
  bodyTag.classList.remove("light", "dark");
  bodyTag.classList.add(currentTheme);
}

if (tBtn) {
  tBtn.innerText = currentTheme === "light" ? "🌙" : "☀️";
}

function toggleTheme() {
  if (!bodyTag) return;
  if (bodyTag.classList.contains("light")) {
    bodyTag.classList.replace("light", "dark");
    if (tBtn) tBtn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    bodyTag.classList.replace("dark", "light");
    if (tBtn) tBtn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
  if (typeof syncCanvasTheme === "function") syncCanvasTheme();
}

function toggleL() {
  lng = lng === "ru" ? "en" : "ru";
  localStorage.setItem("lng", lng);
  apply();
}

if (langBtn) {
  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleL();
  });
}

const canvasThemes = {
  dark: {
    particleColor: "rgba(255, 255, 255, 0.85)",
    lineColorRGB: "255, 255, 255",
    lineAlphaModifier: 0.4,
    mouseAlphaModifier: 0.75,
  },
  light: {
    particleColor: "rgba(20, 20, 25, 0.95)",
    lineColorRGB: "20, 20, 25",
    lineAlphaModifier: 0.65,
    mouseAlphaModifier: 0.85,
  },
};
let currentCanvasColors = canvasThemes.dark;

function syncCanvasTheme() {
  const currentSavedTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark");
  currentCanvasColors =
    currentSavedTheme === "light" ? canvasThemes.light : canvasThemes.dark;
}

function apply() {
  document.documentElement.setAttribute("lang", lng);

  const isArchivePage = !!document.getElementById("archive-marker");

  const siteTitle = document.getElementById("site-title");
  if (siteTitle && dict && dict[lng]) {
    if (isArchivePage) siteTitle.innerText = dict[lng].title_news;
    else siteTitle.innerText = dict[lng].title;
  }

  if (langBtn) langBtn.setAttribute("data-lang", lng);

  document.querySelectorAll("[data-key]").forEach((el) => {
    if (!el) return;
    const key = el.getAttribute("data-key");
    if (key && dict && dict[lng] && dict[lng][key]) {
      el.innerText = dict[lng][key];
    }
  });

  if (typeof updateSliderText === "function") updateSliderText();

  const container = document.getElementById("news-container");
  if (!container) return;

  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  const baseNewsArray =
    newsData && newsData[lng]
      ? isArchivePage
        ? newsData[lng]
        : newsData[lng].filter((n) => n && n.id)
      : [];

  const targetNewsArray = isArchivePage
    ? baseNewsArray
    : baseNewsArray.slice(0, 2);

  targetNewsArray.forEach((news) => {
    if (!news || !news.content) return;
    const li = document.createElement("li");
    li.className = "card news-card";
    if (news.id) li.id = news.id;

    const hasList =
      news.content.includes("</ul>") || news.content.includes("</h4>");

    let contentHTML = hasList
      ? `
        <div class="more-details-btn">
          <span class="btn-text">${dict[lng] && dict[lng].s_more ? dict[lng].s_more : "Подробнее..."}</span>
          <span class="arrow"></span>
        </div>
        <div class="news-content-scroll"><div class="${isArchivePage ? "news-content-body-content" : "news-content"}">${news.content}</div></div>
      `
      : `
        <div class="div-content" style="padding-top:10px; text-align: left;">${news.content}</div>
      `;

    const shareBtnHTML =
      !isArchivePage && news.id
        ? `<button class="share-btn" title="Копировать ссылку">🔗</button>`
        : "";

    li.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
          <div class="news-date">${news.date || ""}</div>${shareBtnHTML}
        </div>
        <div class="news-item"><div class="news-item-title">${news.title || ""}</div>${contentHTML}</div>
      </div>
    `;

    if (hasList) {
      li.style.cursor = "pointer";
      li.onclick = function (e) {
        if (e.target.closest(".share-btn") || e.target.closest("a")) return;
        const scrollContainer = this.querySelector(".news-content-scroll");
        if (!scrollContainer) return;
        const isActive = this.classList.contains("active");

        container.querySelectorAll(".news-card").forEach((c) => {
          if (c !== this) {
            c.classList.remove("active");
            const s = c.querySelector(".news-content-scroll");
            if (s) s.style.maxHeight = null;
          }
        });

        if (isActive) {
          this.classList.remove("active");
          scrollContainer.style.maxHeight = null;
        } else {
          this.classList.add("active");
          scrollContainer.style.maxHeight = scrollContainer.scrollHeight + "px";
        }
      };
    }
    fragment.appendChild(li);
  });
  container.appendChild(fragment);
}

const newsContainer = document.getElementById("news-container");
if (newsContainer) {
  newsContainer.addEventListener("click", (e) => {
    const shareBtn = e.target.closest(".share-btn");
    const card = e.target.closest(".news-card");
    if (shareBtn && card) {
      e.stopPropagation();
      copyNewsLink(card.id, shareBtn);
    }
  });
}

function copyNewsLink(newsId, btnElement) {
  const baseUrl = window.location.href.split("#")[0];
  const fullUrl = baseUrl + "#" + newsId;

  navigator.clipboard
    .writeText(fullUrl)
    .then(() => {
      const originalIcon = btnElement.innerText;
      btnElement.innerText = "✔️";
      showToast(
        dict[lng] && dict[lng].t_copy
          ? dict[lng].t_copy
          : "Ссылка скопирована!",
      );
      setTimeout(() => {
        btnElement.innerText = originalIcon;
      }, 1500);
    })
    .catch((err) => console.error("Ошибка копирования: ", err));
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);
  setTimeout(() => {
    toast.classList.remove("show");
    toast.ontransitionend = () => toast.remove();
  }, 2500);
}

function manageScrollEffects() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;

  const progress = document.getElementById("scroll-progress");
  if (progress) progress.style.width = scrolled + "%";

  const topBtn = document.getElementById("to-top-btn");
  if (topBtn) topBtn.style.display = winScroll > 300 ? "flex" : "none";
}

window.addEventListener("scroll", () => {
  window.requestAnimationFrame(manageScrollEffects);
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let currentIdx = 0;
const totalSlides = 6;
const descBlock = document.getElementById("descBlock");

function updateSliderText() {
  if (descBlock && dict && dict[lng]) {
    descBlock.textContent = dict[lng][`slide_d${currentIdx}`] || "";
  }
}

function moveSlider() {
  const track =
    document.getElementById("track") || document.querySelector(".slider-track");
  if (!track) return;

  const offset = currentIdx * (320 + 40);
  track.style.transform = `translateX(-${offset}px)`;

  for (let i = 0; i < totalSlides; i++) {
    const slide = document.getElementById("slide" + i);
    const dot = document.getElementById("dot" + i);
    if (slide) slide.classList.remove("active");
    if (dot) dot.classList.remove("active");
  }

  const activeSlide = document.getElementById("slide" + currentIdx);
  const activeDot = document.getElementById("dot" + currentIdx);
  if (activeSlide) activeSlide.classList.add("active");
  if (activeDot) activeDot.classList.add("active");

  updateSliderText();
}

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentIdx = currentIdx + 1;
    if (currentIdx >= totalSlides) {
      currentIdx = 0;
    }
    moveSlider();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentIdx = currentIdx - 1;
    if (currentIdx < 0) {
      currentIdx = totalSlides - 1;
    }
    moveSlider();
  });
}

(function () {
  let canvas = document.getElementById("bgCanvas");

  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.id = "bgCanvas";
    canvas.style =
      "position:fixed; top:0; left:0; width:100vw; height:100vh; z-index:-99999; pointer-events:none;";
    document.body.insertBefore(canvas, document.body.firstChild);
  }

  const ctx = canvas.getContext("2d");
  const config = {
    particleCount: 110,
    maxDistance: 150,
    mouseDistance: 180,
    baseSpeed: 1.2,
  };
  let particles = [];
  const mouse = { x: null, y: null };

  function updateConfigForDevice() {
    const w = window.innerWidth;
    if (w < 480) {
      config.particleCount = 35;
      config.maxDistance = 90;
    } else if (w < 768) {
      config.particleCount = 55;
      config.maxDistance = 110;
    } else {
      config.particleCount = 110;
      config.maxDistance = 150;
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const oldC = config.particleCount;
    updateConfigForDevice();
    if (oldC !== config.particleCount || particles.length === 0) init();
  }

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * config.baseSpeed;
      this.vy = (Math.random() - 0.5) * config.baseSpeed;
      this.radius = Math.random() * 1.2 + 1.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = currentCanvasColors.particleColor;
      ctx.fill();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.hypot(dx, dy);

        if (dist < config.maxDistance) {
          let alpha =
            (1 - dist / config.maxDistance) *
            currentCanvasColors.lineAlphaModifier;
          ctx.strokeStyle = `rgba(${currentCanvasColors.lineColorRGB}, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  updateConfigForDevice();
  resizeCanvas();
  syncCanvasTheme();
  animate();
})();

window.addEventListener("DOMContentLoaded", () => {
  apply();

  if (typeof moveSlider === "function") moveSlider();

  const hash = window.location.hash;
  if (hash) {
    const targetNews = document.querySelector(hash);
    if (targetNews) {
      targetNews.classList.add("active");

      const scrollContainer = targetNews.querySelector(".news-content-scroll");
      if (scrollContainer) {
        scrollContainer.style.maxHeight = scrollContainer.scrollHeight + "px";
      }

      setTimeout(() => {
        targetNews.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 500);
    }
  }
});
