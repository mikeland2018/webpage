function initNavbar() {

  const languages = {
    pt: {
      name: "Português",
      flag: "img/pt-flag.png",
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
      flag: "img/en-flag.png",
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
    fr: {
      name: "Français",
      flag: "img/fr-flag.png",
      texts: {
        about: "À propos",
        about_text: "Nous...",
        products: "Produits",
        product_1_text: "Description du produit 1",
        product_2_text: "Description du produit 2",
        product_3_text: "Description du produit 3",
        add_cart_button: "Ajouter au panier",
        contacts: "Contact",
        contacts_text: "Contactez-nous..",
      }
    },
    de: {
      name: "Deutsch",
      flag: "img/de-flag.png",
      texts: {
        about: "Über",
        about_text: "Wir...",
        products: "Produkte",
        product_1_text: "Produkt 1 Beschreibung",
        product_2_text: "Produkt 2 Beschreibung",
        product_3_text: "Produkt 3 Beschreibung",
        add_cart_button: "Zum Einkaufswagen hinzufügen",
        contacts: "Kontakte",
        contacts_text: "kontaktiere uns..",
      }
    },
  };

  setupStuff(languages);
}

loadNavbar();
