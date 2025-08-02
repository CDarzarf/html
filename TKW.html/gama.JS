const products = [
  { id: 1, name: "Nike Air Max 270", price: 3200000, img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/awjogtdnqxniqqk0wpgf/AIR+MAX+270.png" },
  { id: 2, name: "Adidas Ultraboost 22", price: 3800000, img: "https://images.stockx.com/images/adidas-Ultra-Boost-22-Wonder-Steel-Almost-Yellow.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1673461399&q=75" },
  { id: 3, name: "Puma RS-X", price: 2500000, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/390776/04/sv01/fnd/UKR/w/1000/h/1000/fmt/png" },
  { id: 4, name: "Converse Chuck 70", price: 1800000, img: "https://cdn-ss.akinon.net/products/2021/01/26/296103/824ee32c-9382-44c1-b1f0-72851d91e751_size1400x1400_quality100_cropCenter.jpg" },
  { id: 5, name: "New Balance 574", price: 2200000, img: "https://tse3.mm.bing.net/th/id/OIP.V1by-0nEQ_R1GjgN0FKQJAHaHa?pid=Api&P=0&h=220" },
  { id: 6, name: "Nike Air Force 1", price: 2700000, img: "https://tse4.mm.bing.net/th/id/OIP.S4VOit-nsMDiDXr0V-tqbgHaFP?pid=Api&P=0&h=220" },
  { id: 7, name: "Adidas Stan Smith", price: 2000000, img: "https://images.stockx.com/images/adidas-Stan-Smith-Lush-Red.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1626899310&q=75" },
  { id: 8, name: "Vans Old Skool", price: 1700000, img: "https://i8.amplience.net/i/jpl/jd_058318_a?qlt=92" },
  { id: 9, name: "Nike ZoomX Vaporfly", price: 4800000, img: "https://tse1.mm.bing.net/th/id/OIP.zZAU1BGJBh60Slzl-lfrgAHaHa?pid=Api&P=0&h=220" },
  { id: 10, name: "Adidas Yeezy Boost 350", price: 5900000, img: "https://tse1.mm.bing.net/th/id/OIP.xfiICjsew-LrcVMGThy6GgHaDx?pid=Api&P=0&h=220" },
  { id: 11, name: "Puma Suede Classic", price: 1600000, img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/399781/10/sv01/fnd/PNA/fmt/png/Suede-Classic-Sneakers" },
  { id: 12, name: "Balenciaga Triple S", price: 9800000, img: "https://tse4.mm.bing.net/th/id/OIP.uDAZJj35rA__9fy5Azw_8QHaDn?pid=Api&P=0&h=220" },
  { id: 13, name: "Asics Gel-Kayano 29", price: 3100000, img: "https://tse1.mm.bing.net/th/id/OIP._58yts1m5MExlTDX7rLtIQAAAA?pid=Api&P=0&h=220" },
  { id: 14, name: "Nike Pegasus 40", price: 2600000, img: "https://tse1.mm.bing.net/th/id/OIP.psr8cMG2AG78WK1vciDmdAHaHa?pid=Api&P=0&h=220" },
  { id: 15, name: "Crocs Classic Clog", price: 900000, img: "https://tse4.mm.bing.net/th/id/OIP.3MKQE5yeqLn00fYaLgVnJAHaHa?pid=Api&P=0&h=220" }
];

const cart = [];
function renderProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach(product => {
    const el = document.createElement("div");
    el.classList.add("product");
    el.innerHTML = `
      <img src="${product.img}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">${product.price.toLocaleString()}đ</p>
        <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
      </div>
    `;
    container.appendChild(el);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  const cartItem = cart.find(i => i.id === id);
  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  renderCart();
}
function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    container.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x${item.qty}</span>
        <span>${(item.price * item.qty).toLocaleString()}đ</span>
      </div>
    `;
  });
  document.getElementById("cart-total").textContent = total.toLocaleString() + "đ";
}
renderProducts();
