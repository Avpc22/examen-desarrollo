# Proyecto colaborativo
Este repositorio contiene una página de login simple que valida usuario y contraseña quemados en el código (hardcoded).
El objetivo es demostrar conceptos básicos de autenticación en el frontend y redirección a la página principal (index.html) cuando las credenciales son correctas.

Importante: Este ejemplo es únicamente educativo. Guardar credenciales en código del cliente no es seguro y no debe usarse en aplicaciones reales.

Correo: admin@gmail.com
Contraseña: 1234

Fragmentos (Fragments):
Los fragmentos son porciones de código HTML que se pueden reutilizar en varias páginas.
En este proyecto se usaron para header, footer y sidebar, los cuales se cargan dinámicamente usando fetch y innerHTML.
Esto evita repetir código y facilita mantenimiento: cualquier cambio en un fragmento afecta automáticamente a todas las páginas que lo usan.

Plantillas (Templates)
Una plantilla HTML permite definir estructuras de elementos repetibles que luego se clonan dinámicamente en JavaScript.
En la página productos.html, se creó un template para cada tarjeta de producto.
Esto permite generar productos desde un JSON sin repetir manualmente el HTML de cada tarjeta.

Web Components
Un Web Component es un elemento HTML personalizado con su propio HTML, CSS y JavaScript encapsulado mediante Shadow DOM.
En este proyecto, se creó el componente <product-card> para las tarjetas destacadas en la página principal (index.html).
Ventajas:
Reutilizable en cualquier parte del sitio.
Encapsulado: sus estilos no afectan al resto de la página.
Facilita la creación de interfaces consistentes.

Implementación del formulario de inicio de sesión
Se creó login.html con un formulario de correo y contraseña.
La validación se realiza con JavaScript, comparando los valores ingresados con credenciales hardcoded.

Buenas prácticas aplicadas
Modularización del código: Header, footer y sidebar se cargan como fragmentos HTML externos.
Plantillas <template> para tarjetas de productos dinámicas.
Web Components para reutilizar tarjetas destacadas con Shadow DOM.
Eventos bien encapsulados: se evita mezclar lógica de productos y formulario de login.
Evitar duplicación: la función cargarComponente se puede centralizar para usarla en varias páginas.
