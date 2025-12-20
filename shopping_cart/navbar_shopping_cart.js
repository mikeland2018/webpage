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
        products: "Produtos",
        name_placeholder: "Nome",
        email_placeholder: "Email",
        address_placeholder: "Morada",
        notes_placeholder: "Notas",
        discount_code: "Código de desconto",
        empty_cart: "Carrinho vazio 🛒"
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
        products: "Products",
        name_placeholder: "Name",
        email_placeholder: "Email",
        address_placeholder: "Address",
        notes_placeholder: "Notes",
        discount_code: "Discount code",
        empty_cart: "Empty Cart 🛒"
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

const path = "../navbar/navbar.html"

loadNavbar(path);

