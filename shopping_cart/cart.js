function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart(cart);
}

const cartContainer = document.querySelector(".cart-items");
const totalEl = document.querySelector(".cart-total");

function renderCart() {
    const cart = getCart();
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.classList.add("empty");
        totalEl.textContent = "€0.00";
        return;
    }

    cartContainer.classList.remove("empty");

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        const row = document.createElement("div");
        row.className = "cart-row";

        row.innerHTML = `
      <span>${item.qty}× ${item.name}</span>
      <span>€${(item.price * item.qty).toFixed(2)}</span>
      <button onclick="removeFromCart('${item.id}')">✕</button>
    `;

        cartContainer.appendChild(row);
    });

    totalEl.textContent = `€${total.toFixed(2)}`;
}

function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    renderCart();
}

function placeOrder() {
    const cart = getCart();
    if (cart.length === 0) {
        alert("O carrinho está vazio!");
        return;
    }

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    if (!name || !email) {
        alert("Preenche os dados primeiro 👀");
        return;
    }

    // later → send email here
    console.log("ORDER:", { name, email, cart });

    alert("Encomenda enviada com sucesso ✨");

    localStorage.removeItem("cart");
    renderCart();
}


renderCart();
