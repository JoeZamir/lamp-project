// MOBILE NAVIGATION TOGGLE LOGIC
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  const isExpanded = nav.classList.contains("active");
  toggle.setAttribute("aria-expanded", isExpanded);
  toggle.textContent = isExpanded ? "✕" : "☰";
});
// Close mobile nav when clicking links
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }
  });
});

//  THEME TOGGLE LOGIC
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".theme-toggle");

  // Theme toggle function
  themeToggle.addEventListener("click", () => {
    const isLight = document.documentElement.classList.toggle("theme-light");
    const icon = themeToggle.querySelector(".theme-icon");
    icon.textContent = isLight ? "🌙" : "☀️";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("theme-light");
    themeToggle.querySelector(".theme-icon").textContent = "🌙";
  }
});

// LAMP PRODUCT DATA
const products = [
  {
    id: 1,
    name: "Brass Bedside Lamp",
    price: 249,
    categories: ["bedside lamps", "brass finish", "modern design"],
    images: {
      day: "./assets/lamps/bed-lamp-day.png",
      night: "./assets/lamps/bed-lamp-night.png",
    },
  },
  {
    id: 2,
    name: "Elegant Desk Reading Lamp",
    price: 499,
    categories: ["desk lamps", "reading lamps", "elegant design", "adjustable"],
    images: {
      day: "./assets/lamps/reading-lamp-day.png",
      night: "./assets/lamps/reading-lamp-night.png",
    },
  },
  {
    id: 3,
    name: "Morrocan Handcrafted Floor Lantern",
    price: 499,
    categories: ["cultural", "handcrafted", "floor lamps", "moroccan style"],
    images: {
      day: "./assets/lamps/morrocan-handcrafted-day.jpg",
      night: "./assets/lamps/morrocan-handcrafted-night.jpg",
    },
  },
  {
    id: 4,
    name: "Japanese Washi Paper Lamp",
    price: 499,
    categories: ["zen decor", "washi paper", "japanese style", "eco-friendly"],
    images: {
      day: "./assets/lamps/washi-paper-day.jpg",
      night: "./assets/lamps/washi-paper-night.jpg",
    },
  },
  {
    id: 5,
    name: "Mid-Century Modern Swing Arm Lamp",
    price: 499,
    categories: ["vintage", "mid-century", "swing arm"],
    images: {
      day: "./assets/lamps/vintage-day.jpg",
      night: "./assets/lamps/vintage-night.jpg",
    },
  },
  {
    id: 6,
    name: "Crystal Chandelier Table Lamp",
    price: 499,
    categories: ["luxury", "crystal"],
    images: {
      day: "./assets/lamps/crystal-chandelier-day.jpg",
      night: "./assets/lamps/crystal-chandelier-night.jpg",
    },
  },
  {
    id: 6,
    name: "Sustainable Bamboo LED Lamp",
    price: 499,
    categories: ["eco-luxury", "bamboo", "sustainable", "led"],
    images: {
      day: "./assets/lamps/bamboo-day.jpg",
      night: "./assets/lamps/bamboo-night.jpg",
    },
  },
];

products.forEach((product) => {
  const grid = document.querySelector(".product-grid");
  const productCard = document.createElement("div");
  productCard.className = "product-card";

  const categoriesHTML = product.categories
    .map((cat) => `<span class="category" data-category="${cat}">${cat}</span>`)
    .join("");

  productCard.innerHTML = `
    <div class="lamp-images">
        <img src="${product.images.night}" class="night" alt="${
    product.name
  } during the night">
        <img src="${product.images.day}" class="day" alt="${
    product.name
  } during the day">
    </div>
    <h3 id="name">${product.name}</h3>
    <div class="categories">
        <span class="category"> ${categoriesHTML}</span>
    </div>
    <p class="price">$${product.price.toFixed(2)}</p>
    <button type="button" class="button glow">Add to Cart</button>
    `;
  grid.appendChild(productCard);
});
