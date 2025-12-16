function switchTheme() {
  const isDark = document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.body.classList.add("light-mode");
  document.querySelector("#theme-switch").checked = true; // sync checkbox
} else {
  document.body.classList.remove("light-mode");
  document.querySelector("#theme-switch").checked = false;
}

function dropdownMenu() {
  document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function setLanguage(lang, data) {
  console.log("setLanguage");
  console.debug(data);
  console.debug(lang);
  const flagImg = document.querySelector(".selected-lang img");
  const langText = document.querySelector(".selected-lang span");

  if (flagImg) flagImg.src = data.flag;
  if (langText) langText.textContent = data.name;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;

    if (data.texts[key]) {
      el.classList.add("fade-out");

      setTimeout(() => {
        el.textContent = data.texts[key];
        el.classList.remove("fade-out");
      }, 300);
    } else {
      console.warn(`Missing translation key: "${key}"`);
    }
  });
}

function persistCurrentLanguage(lang) {
  localStorage.setItem("lang", lang);
}

function setupStuff(languages) {
  document.querySelectorAll(".lang-option").forEach(option => {
    option.addEventListener("click", e => {
      e.preventDefault();
      const lang = option.dataset.lang;
      persistCurrentLanguage(lang);
      const data = languages[lang];
      if (data) {
        setLanguage(lang, data);
      }
    });
  });

  const lang = localStorage.getItem("lang") || "pt";
  persistCurrentLanguage(lang);
  const data = languages[lang];
  if (data) {
    setLanguage(lang, data);
  }
}