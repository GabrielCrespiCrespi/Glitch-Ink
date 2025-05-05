async function cargarClasificaciones() {
    const url = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";
    const contenedor = document.getElementById("clasificaciones");
    try {
        const response = await fetch(url);
        const data = await response.json();
        contenedor.innerHTML = "";
        data.data.forEach(item => {
            const fila = document.createElement("div");
            fila.className = "clasificacion";
            fila.innerHTML = `
                <span class="nombre">${item.name}</span>
                <span class="puntos">${item.points} pts</span>
            `;
            contenedor.appendChild(fila);
        });
    } catch (error) {
        contenedor.innerHTML = `<p style="text-align:center; color: var(--rosaFucsia);">Error al carregar dades</p>`;
        console.error("Error:", error);
    }
}

cargarClasificaciones();

setInterval(cargarClasificaciones, 300000); 