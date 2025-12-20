function initNavbar() {

  const languages = {
    pt: {
      name: "Português",
      flag: "../img/pt-flag.png",
      texts: {
        shopping_cart: "Carrinho de Compras",
        disclaimer: "Nota: Se não indroduzir morada, terá que ser agendado um encontro para levantamento da encomenda na zona do Porto.",
        delivery_details: "Detalhes de Encomenda",
        summary: "Detalhes",
        total: "Total",
        apply: "Aplicar",
        place_order: "Colocar Encomenda",
        about: "Sobre",
        contacts: "Contactos",
        products: "Produtos"
      }
    },
    en: {
      name: "English",
      flag: "../img/en-flag.png",
      texts: {
        shopping_cart: "Shopping Cart",
        disclaimer: "Note: If you do not provide an address, a meeting will need to be scheduled for order pickup in the Porto area.",
        delivery_details: "Delivery Details",
        summary: "Summary",
        total: "Total",
        apply: "Apply",
        place_order: "Place Order",
        about: "About",
        contacts: "Contacts",
        products: "Products"
      }
    },
    fr: {
      name: "Français",
      flag: "../img/fr-flag.png",
      texts: {
        shopping_cart: "Panier d'Achats",
        disclaimer: "Remarque: Si vous ne fournissez pas d'adresse, une rencontre devra être programmée pour récupérer la commande dans la région de Porto."
      }
    },
    de: {
      name: "Deutsch",
      flag: "../img/de-flag.png",
      texts: {
        shopping_cart: "Einkaufswagen",
        disclaimer: "Hinweis: Wenn Sie keine Adresse angeben, muss ein Treffen zur Abholung der Bestellung im Raum Porto vereinbart werden."
      }
    },
  };

  setupStuff(languages);
}

loadNavbar();
