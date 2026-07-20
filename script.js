const translations = {
  ru: {
    "nav-main": "Главная",
    "nav-protocol": "Документация",
    "nav-apps": "Приложения",
    "about-project-gs": "О GS Ecosystem",
    "links": "Полезные ссылки",
    "contact-cooperation": "Связаться / Сотрудничество",
    "app-doc": "Документация по приложениям",
    "web-priv": "Политика конфиденциальности сайта",
    "mit-license": "Лицензионное соглашение(MIT)",
    "app-priv": "Политика конфиденциальности приложений",
    "doc": "Документация",
    "gs-apps": "GS | Приложения",
    "mob-apps": "Мобильные приложения",
    "desk-apps": "Десктопные приложения",
    "source": "Исходный код",
    "gs-ht": "GS.HTTP для Android",
    "gs-mn": "GS.Monitor для Windows/Linux",
  },
  en: {
    "nav-main": "Main",
    "nav-protocol": "Documentation",
    "nav-apps": "Apps",
    "about-project-gs": "About GS Ecosystem",
    "links": "Useful links",
    "contact-cooperation": "Contact / Cooperation",
    "app-doc": "Application documentation",
    "web-priv": "Web privacy policy",
    "mit-license": "License Agreement(MIT)",
    "app-priv": "App privacy policy",
    "doc": "Documentation",
    "gs-apps": "GS | Applications",
    "mob-apps": "Mobile applications",
    "desk-apps": "Desktop applications",
    "source": "Source code",
    "gs-ht": "GS.HTTP for Android",
    "gs-mn": "GS.Monitor for Windows/Linux",
    
  },
};

function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-lang-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-lang-key");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  const langButton = document.querySelector(".lang-button");
  if (langButton) {
    langButton.firstChild.textContent = lang.toUpperCase();
  }

  const langItems = document.querySelectorAll(".lang-item");
  langItems.forEach((item) => {
    if (item.getAttribute("data-lang") === lang) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  localStorage.setItem("selectedLanguage", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "ru";
  applyLanguage(savedLang);

  const langSwitcher = document.querySelector(".lang-switcher");
  const langButton = document.querySelector(".lang-button");

  if (langButton && langSwitcher) {
    langButton.addEventListener("click", (event) => {
      event.stopPropagation(); 
      langSwitcher.classList.toggle("open");
    });
  }

  
  const langItems = document.querySelectorAll(".lang-item");
  langItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const targetLang = item.getAttribute("data-lang");
      if (targetLang) {
        applyLanguage(targetLang);
      }
      
      if (langSwitcher) langSwitcher.classList.remove("open");
    });
  });

  
  document.addEventListener("click", () => {
    if (langSwitcher) {
      langSwitcher.classList.remove("open");
    }
  });
});
