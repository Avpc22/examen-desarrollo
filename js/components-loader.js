async function cargarComponente(id, url) {
    const resp = await fetch(url);
    const html = await resp.text();
    document.getElementById(id).innerHTML = html;
}
cargarComponente("header", "components/header-component.html");
cargarComponente("footer","components/footer-component.html");
cargarComponente("sidebar", "components/sidebar-component.html");