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

window.onclick = function(event) {
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

const languages = {
  pt: {
    name: "Português",
    flag: "/webpage/img/pt-flag.png",
    texts: {
      about: "Sobre",
      about_text: "Nós..",
      products: "Produtos",
      product_1_text: "Descrição do Produto 1",
      product_2_text: "Descrição do Produto 2",
      product_3_text: "Descrição do Produto 3",
      add_cart_button: "Adicionar ao Carrinho",
      contacts: "Contactos",
      contacts_text: "Contacte-nos..",

    }
  },
  en: {
    name: "English",
    flag: "/webpage/img/en-flag.png",
    texts: {
      about: "About",
      about_text: "We...",
      products: "Products",
      product_1_text: "Product 1 Description",
      product_2_text: "Product 2 Description",
      product_3_text: "Product 3 Description",
      add_cart_button: "Add to Cart",
      contacts: "Contacts",
      contacts_text: "Contact us..",
    }
  },
};


function setLanguage(lang) {
  const data = languages[lang];
  if (!data) return;

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

  localStorage.setItem("lang", lang);
}


document.querySelectorAll(".lang-option").forEach(option => {
  option.addEventListener("click", e => {
    e.preventDefault();
    const lang = option.dataset.lang;
    setLanguage(lang);
  });
});

const savedLang = localStorage.getItem("lang") || "pt";
setLanguage(savedLang);
