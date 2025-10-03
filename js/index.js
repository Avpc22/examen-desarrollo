async function cargarComponente(id, url) {
    const resp = await fetch(url);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;
  }
cargarComponente("header", "components/header-component.html");
cargarComponente("footer","components/footer-component.html");
cargarComponente("sidebar", "components/sidebar-component.html");

async function cargarProductos() {
    const resp = await fetch("/components/data/productos.json");
    const data = await resp.json();
    const productos = data.productos;
    const contenedor = document.getElementById("producto-container");
    const tpl = document.getElementById("producto-template");

    productos.forEach(p => {
        const clon = tpl.content.cloneNode(true);
        clon.querySelector("img").src = p.imagen;
        clon.querySelector("img").alt = p.nombre;
        clon.querySelector(".card-title").textContent = p.nombre;
        clon.querySelector(".medida").textContent = p.medida;
        clon.querySelector(".modelo").textContent = p.modelo;
        clon.querySelector(".precio").textContent =
            "$" + p.precio.toLocaleString("es-CO");
        contenedor.appendChild(clon);
    });

}

document.addEventListener("DOMContentLoaded", cargarProductos);