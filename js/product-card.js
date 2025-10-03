class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 8px;
          margin: 0.5rem;
          max-width: 200px;
          text-align: center;
          font-family: Arial, sans-serif;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        img {
          max-width: 100%;
          border-radius: 4px;
        }
        .price {
          font-weight: bold;
          color: green;
          margin-top: 0.5rem;
        }
        #description {
          background: #007bff;
          color: #fff;
          border-radius: 6px;
          padding: 0.5rem;
          margin-top: 0.5rem;
          font-size: 0.95rem;
          font-weight: 500;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: background 0.2s;
        }
        #description:hover {
          background: #0056b3;
        }
      </style>
      <div class="card">
        <img id="image" alt="Imagen del producto">
        <h3 id="name"></h3>
        <p class="price" id="price"></p>
        <p id="description"></p>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector("#name").textContent = this.getAttribute("name");
    this.shadowRoot.querySelector("#price").textContent = this.getAttribute("price");
    this.shadowRoot.querySelector("#description").textContent = this.getAttribute("description");
    this.shadowRoot.querySelector("#image").src = this.getAttribute("image");

    this.shadowRoot.querySelector("#description").addEventListener("click", () => {
      window.location.href = "productos.html";
    });
  }
}

customElements.define("product-card", ProductCard);