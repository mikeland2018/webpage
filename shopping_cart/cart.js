const cartContainer = document.querySelector(".cart-items");
const totalEl = document.querySelector("#cart-total");

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
  <span class="cart-name">${item.name}</span>

  <div class="cart-qty">
    <button type="button" class="qty-btn"
            onclick="decreaseQty('${item.id}'); renderCart()">−</button>

    <span class="qty-number">${item.qty}</span>

    <button type="button" class="qty-btn"
            onclick="increaseQty('${item.id}'); renderCart()">+</button>
  </div>

  <span class="cart-price">
    €${(item.price * item.qty).toFixed(2)}
  </span>
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

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;

    // later → send email here
    console.log("ORDER:", { name, email, cart });

    alert("Encomenda enviada com sucesso ✨");

    localStorage.removeItem("cart");
    renderCart();
}

function increaseQty(id) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (item) item.qty += 1;
    saveCart(cart);
}

function decreaseQty(id) {
    let cart = getCart();
    const item = cart.find(i => i.id === id);

    if (!item) return;

    if (item.qty > 1) {
        item.qty -= 1;
    } else {
        cart = cart.filter(i => i.id !== id);
    }

    saveCart(cart);
}

renderCart();
