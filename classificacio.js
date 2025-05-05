async function obtenirClasificacions() {
    const url = "https://phpstack-1076337-5399863.cloudwaysapps.com/api/classification/pHJNhm719MN5LCVqE839lOse0qvlbL1lBXndZmAWoJfiPXZFQHmgNQrzUHYS";
    try {
        const resposta = await fetch(url);
        const dades = await resposta.json();

        if (!Array.isArray(dades?.data)) {
            throw new Error("Format de dades invàlid");
        }

        return dades.data;
    } catch (error) {
        console.error("Error en obtenir les classificacions:", error);
        return null;
    }
}

function pintarClasificacions(entrada) {
    const contenidor = document.getElementById("clasificaciones");
    contenidor.innerHTML = "";

    if (!entrada) {
        contenidor.innerHTML = `<p style="text-align:center; color: var(--rosaFucsia);">Error en carregar dades</p>`;
        return;
    }

    // Ordenar per punts de més a menys
    const classificats = [...entrada].sort((a, b) => b.puntuacion - a.puntuacion);

    classificats.forEach(item => {
        const fila = document.createElement("div");
        fila.className = "clasificacion";

        const nom = document.createElement("span");
        nom.className = "nombre";
        nom.textContent = item.name;

        const punts = document.createElement("span");
        punts.className = "puntos";
        punts.textContent = `${item.puntuacion} pts`;

        fila.append(nom, punts);
        contenidor.appendChild(fila);
    });
}

async function carregarClasificacions() {
    const dades = await obtenirClasificacions();
    pintarClasificacions(dades);
}

carregarClasificacions();

setInterval(carregarClasificacions, 300000); 