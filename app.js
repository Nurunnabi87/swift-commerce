// ----------------------
// Toggle Mobile Menu
// ----------------------
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

btn?.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const API_URL = "https://fakestoreapi.com/products";

// ----------------------
// Fetch Products
// ----------------------
async function fetchProducts(endpoint = "") {
  try {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();
    renderProducts(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchProducts();

// ----------------------
// Render Products
// ----------------------
function renderProducts(products) {
  const container = document.getElementById("product-container");

  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.dataset.id = product.id;

    card.innerHTML = `
      <div class="hover:scale-105 transition duration-300 bg-white rounded-lg shadow-md">
        <img src="${product.image}"
          alt="${product.title}"
          class="w-full h-64 object-contain bg-gray-200 mb-4 rounded"
        />

        <div class="flex justify-between p-4">
          <span class="text-sm bg-indigo-100 text-indigo-600 px-2 py-1 rounded-2xl font-semibold">
            ${product.category}
          </span>

          <span class="text-sm">
            ⭐ ${product.rating.rate} (${product.rating.count})
          </span>
        </div>

        <h3 class="text-lg font-semibold px-4 mb-2">
          ${product.title.slice(0, 20)}...
        </h3>

        <p class="text-gray-700 px-4 mb-2 font-medium">
          $${product.price}
        </p>

        <div class="flex justify-between p-4">
          <button class="details-btn flex items-center justify-center gap-1 border border-indigo-600 px-4 py-1 rounded-md hover:bg-indigo-600 hover:text-white transition">
          <i class="ri-eye-line"></i>
            <span class="ml-1">Details</span>
          </button>

          <button class="bg-indigo-600 flex items-center justify-center gap-2 px-6 py-1 rounded-md text-white hover:bg-indigo-700 transition">
            <i class="ri-shopping-cart-line"></i><span>Add</span>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ----------------------
// Fetch Categories
// ----------------------
async function fetchCategories() {
  try {
    const response = await fetch(`${API_URL}/categories`);
    const categories = await response.json();

    const categoryContainer = document.getElementById("product-category");

    categories.forEach((category) => {
      const button = document.createElement("button");

      button.textContent = category.charAt(0).toUpperCase() + category.slice(1);

      button.className =
        "category-btn border border-indigo-600 px-4 py-1 rounded-md hover:bg-indigo-600 hover:text-white transition";

      button.dataset.category = category;

      categoryContainer.appendChild(button);
    });
  } catch (error) {
    console.error("Category fetch error:", error);
  }
}

fetchCategories();

// ----------------------
// Category Click
// ----------------------
document.getElementById("product-category").addEventListener("click", (e) => {
  if (e.target.classList.contains("category-btn")) {
    const category = e.target.dataset.category;

    document
      .querySelectorAll(".category-btn")
      .forEach((btn) => btn.classList.remove("bg-indigo-600", "text-white"));

    e.target.classList.add("bg-indigo-600", "text-white");

    fetchProducts(`/category/${category}`);
  }
});

document.getElementById("product-category").addEventListener("click", (e) => {
  if (e.target.classList.contains("category-btn")) {
    const category = e.target.dataset.category;

    // Remove active style
    document
      .querySelectorAll(".category-btn")
      .forEach((btn) => btn.classList.remove("bg-indigo-600", "text-white"));

    // Add active style
    e.target.classList.add("bg-indigo-600", "text-white");

    // ✅ Handle "All"
    if (category === "all") {
      fetchProducts(); // fetch সব products
    } else {
      fetchProducts(`/category/${category}`);
    }
  }
});

// ----------------------
// Open Product Modal
// ----------------------

async function openProductModal(productId) {
  try {
    const response = await fetch(`${API_URL}/${productId}`);
    const product = await response.json();

    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");

    modalContent.innerHTML = `
      <button id="close-modal"
        class="absolute top-4 right-4 text-gray-500 hover:text-black text-xl">
        ✕
      </button>

      <div class="grid md:grid-cols-2 gap-6">

        <!-- Image -->
        <div class="flex items-center justify-center bg-gray-100 rounded-lg p-4">
          <img src="${product.image}"
               class="h-64 object-contain" />
        </div>

        <!-- Details -->
        <div>
          <h2 class="text-2xl font-bold mb-3">
            ${product.title}
          </h2>

          <p class="text-gray-600 mb-4">
            ${product.description}
          </p>

          <div class="flex items-center gap-4 mb-4">
            <span class="text-2xl font-semibold text-indigo-600">
              $${product.price}
            </span>

            <span class="text-yellow-500">
              ⭐ ${product.rating.rate}
              (${product.rating.count})
            </span>
          </div>

          <div class="flex gap-4">
            <button class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
              Buy Now
            </button>

            <button class="border border-indigo-600 px-6 py-2 rounded-md hover:bg-indigo-600 hover:text-white transition">
              Add to Cart
            </button>
          </div>
        </div>

      </div>
    `;

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  } catch (error) {
    console.error("Modal fetch error:", error);
  }
}

document.getElementById("product-container").addEventListener("click", (e) => {
  if (e.target.closest(".details-btn")) {
    const card = e.target.closest(".product-card");
    const productId = card.dataset.id;

    openProductModal(productId);
  }
});

const modal = document.getElementById("modal");

modal.addEventListener("click", (e) => {
  if (e.target.id === "modal" || e.target.id === "close-modal") {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});
