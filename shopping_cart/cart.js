const cartContainer = document.querySelector(".cart-items");
const totalEl = document.querySelector("#cart-total");
const emptyMessage = document.querySelector(".empty-cart");

function renderCart() {
    const cart = getCart();

    document.querySelectorAll(".cart-row").forEach(el => el.remove());

    if (cart.length === 0) {
        emptyMessage.style.display = "block";
        totalEl.textContent = "€0.00";
        return;
    }

    emptyMessage.style.display = "none";

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;

        const row = document.createElement("div");
        row.className = "cart-row";

        row.innerHTML = `
      <span>${item.name}</span>
      <div class="qty-controls">
        <button onclick="changeQty('${item.id}', -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.id}', 1)">+</button>
      </div>
      <span>${(item.price * item.qty).toFixed(2)}€</span>
    `;

        document.getElementById("cart-items").appendChild(row);
    });

    totalEl.textContent = `${total.toFixed(2)}€`;
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
