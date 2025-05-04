<script>
    async function cargarClasificaciones() {
        const response = await fetch("https://tu-dominio.com/api/classification/pNAmk75oNM1CS0EZ53Douq9y9k1BtEKzc4MwJP6Z7f10mg9oZrU1sYfs");
        const data = await response.json();

        // Suponiendo que tienes un <div id="clasificaciones"> en tu HTML
        const contenedor = document.getElementById("clasificaciones");
        contenedor.innerHTML = ""; // Limpiar contenido anterior

        data.data.forEach(item => {
            const elemento = document.createElement("p");
            elemento.textContent = `${item.name}: ${item.points}`;
            contenedor.appendChild(elemento);
        });
    }

    // Ejecutar al cargar la página
    cargarClasificaciones();

    // Repetir cada 5 minutos (300000 ms)
    setInterval(cargarClasificaciones, 300000);
</script>
