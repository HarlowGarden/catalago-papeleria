// ===== LISTA DE PRODUCTOS =====
const productos = [
    // 🥔 PAPAS Y BOTANAS
    { nombre: "Papas Adobadas", precio: "$22", categoria: "papas" },
    { nombre: "Papas Jal", precio: "$22", categoria: "papas" },
    { nombre: "Papas Especial", precio: "$22", categoria: "papas" },
    { nombre: "Ruffles con Queso", precio: "$22", categoria: "papas" },
    { nombre: "Ruffles Sal", precio: "$22", categoria: "papas" },
    { nombre: "Ruffles Mega Crunch Jalapeño", precio: "$22", categoria: "papas" },
    { nombre: "Ruffles Mega Crunch", precio: "$22", categoria: "papas" },
    { nombre: "Doritos Nacho", precio: "$21", categoria: "papas" },
    { nombre: "Doritos Pizzero", precio: "$21", categoria: "papas" },
    { nombre: "Doritos Tacognita", precio: "$21", categoria: "papas" },
    { nombre: "Doritos Flamin Hot", precio: "$21", categoria: "papas" },
    { nombre: "Doritos Dinamita", precio: "$21", categoria: "papas" },
    { nombre: "Doritos Dinamita Flamin Hot", precio: "$21", categoria: "papas" },
    { nombre: "Chetos Torcidito", precio: "$18", categoria: "papas" },
    { nombre: "Chetos Jalapeño", precio: "$18", categoria: "papas" },
    { nombre: "Chetos Bolitas", precio: "$18", categoria: "papas" },
    { nombre: "Chetos Flamin Hot", precio: "$18", categoria: "papas" },
    { nombre: "Chetos Poffs", precio: "$18", categoria: "papas" },
    { nombre: "Fritos Sal", precio: "$19", categoria: "papas" },
    { nombre: "Fritos Chorizo", precio: "$19", categoria: "papas" },
    { nombre: "Totis Doritu con Chile y Limón", precio: "$10", categoria: "papas" },
    { nombre: "Totis Doritu Sal y Limón", precio: "$10", categoria: "papas" },

    // 🍫 DULCES Y CHOCOLATES
    { nombre: "Snickers 288 gr", precio: "$23", categoria: "dulces" },
    { nombre: "Milky Way 288 gr", precio: "$23", categoria: "dulces" },
    { nombre: "Lucas Panzón", precio: "$15", categoria: "dulces" },
    { nombre: "Lucas Morado", precio: "$15", categoria: "dulces" },
    { nombre: "Lucas Gusano", precio: "$15", categoria: "dulces" },
    { nombre: "M&M Amarillo", precio: "$20", categoria: "dulces" },
    { nombre: "M&M Café", precio: "$20", categoria: "dulces" },
    { nombre: "Nikito Cacahuates 315 gr", precio: "$12", categoria: "dulces" },
    { nombre: "Gomita Adlces", precio: "$10", categoria: "dulces" },
    { nombre: "Gomita Gusano", precio: "$10", categoria: "dulces" },
    { nombre: "Gomita Pandita", precio: "$10", categoria: "dulces" },
    { nombre: "Manguito Chile", precio: "$10", categoria: "dulces" },
    { nombre: "Chicle", precio: "$10", categoria: "dulces" },

    // 🥤 BEBIDAS (Jugos, Refrescos, Aguas, Leches, Energizantes)
    { nombre: "Delaware Punch 600 ml", precio: "$22", categoria: "bebidas" },
    { nombre: "Sidral 355 ml", precio: "$10", categoria: "bebidas" },
    { nombre: "Sprite 355 ml", precio: "$10", categoria: "bebidas" },
    { nombre: "Ameyal 355 ml", precio: "$15", categoria: "bebidas" },
    { nombre: "Valle Frut 355 ml", precio: "$22", categoria: "bebidas" },
    { nombre: "Valle Frut 600 ml", precio: "$20", categoria: "bebidas" },
    { nombre: "Jugo Mango Botella Vidrio", precio: "$20", categoria: "bebidas" },
    { nombre: "Jugo Naranja Botella Vidrio", precio: "$20", categoria: "bebidas" },
    { nombre: "Jugo 1 Litro Mango", precio: "$30", categoria: "bebidas" },
    { nombre: "Jugo 1 Litro Durazno", precio: "$30", categoria: "bebidas" },
    { nombre: "Jugo Cartón Durazno 250 ml", precio: "$14", categoria: "bebidas" },
    { nombre: "Jugo Cartón Mango 250 ml", precio: "$14", categoria: "bebidas" },
    { nombre: "Jugo Botellito Durazno 237 ml", precio: "$14", categoria: "bebidas" },
    { nombre: "Jugo Botellito Mango 237 ml", precio: "$14", categoria: "bebidas" },
    { nombre: "Topo Chico Agua Mineralizada 600 ml", precio: "$22", categoria: "bebidas" },
    { nombre: "Topo Chico Agua Mineralizada 1.5 L", precio: "$34", categoria: "bebidas" },
    { nombre: "Agua Ciel Natural 1 Litro", precio: "$14", categoria: "bebidas" },
    { nombre: "Fuze Tea Negro Limón 600 ml", precio: "$22", categoria: "bebidas" },
    { nombre: "Power Moras 1 L", precio: "$36", categoria: "bebidas" },
    { nombre: "Power Uva 1 L", precio: "$36", categoria: "bebidas" },
    { nombre: "Power Moras 500 ml", precio: "$30", categoria: "bebidas" },
    { nombre: "Flashlyte Suero Uva 625 ml", precio: "$22", categoria: "bebidas" },
    { nombre: "Monster Green 473 ml", precio: "$36", categoria: "bebidas" },
    { nombre: "Monster 355 ml", precio: "$30", categoria: "bebidas" },
    { nombre: "Predator Gold Strike 473 ml", precio: "$22", categoria: "bebidas" },
    { nombre: "Leche Entera Santa Clara", precio: "$22", categoria: "bebidas" },
    { nombre: "Leche Santa Clara Chocolate 1 L", precio: "$36", categoria: "bebidas" },
    { nombre: "Leche Santa Clara Chocolate 180 ml", precio: "$14", categoria: "bebidas" },
    { nombre: "Leche Santa Clara Cappuccino 180 ml", precio: "$14", categoria: "bebidas" },
    { nombre: "Leche Santa Clara Vainilla 180 ml", precio: "$14", categoria: "bebidas" },

    // 🥤 COCA Y SABORES GRANDES (2L y 3L)
    { nombre: "Coca Retornable 3 Litros", precio: "$45", categoria: "coca" },
    { nombre: "Coca 1.75 L", precio: "$40", categoria: "coca" },
    { nombre: "Coca 1.35 L", precio: "$35", categoria: "coca" },
    { nombre: "Coca 600 ml", precio: "$23", categoria: "coca" },
    { nombre: "Coca 355 ml", precio: "$15", categoria: "coca" },
    { nombre: "Coca 355 Zero", precio: "$10", categoria: "coca" },
    { nombre: "Coca Lata", precio: "$23", categoria: "coca" },
    { nombre: "Coca de vidrio", precio: "$20", categoria: "coca" },
    { nombre: "Coca Zero 2 L", precio: "$26", categoria: "coca" },
    { nombre: "Sidral Mundet 3 L", precio: "$45", categoria: "coca" },
    { nombre: "Fanta Fresa 3 L", precio: "$45", categoria: "coca" },
    { nombre: "Fanta Naranja 3 L", precio: "$45", categoria: "coca" },
    { nombre: "Sprite 3 L", precio: "$45", categoria: "coca" },
    { nombre: "Fresca 3 L", precio: "$45", categoria: "coca" },
    { nombre: "Sidral Mundet 2 L", precio: "$36", categoria: "coca" },
    { nombre: "Sinzao 2 L", precio: "$36", categoria: "coca" },
    { nombre: "F. Fresca 2 L", precio: "$36", categoria: "coca" },
    { nombre: "F. Naranja 2 L", precio: "$36", categoria: "coca" },
    { nombre: "Sprite 2 L", precio: "$36", categoria: "coca" },
    { nombre: "Fresca 2 L", precio: "$36", categoria: "coca" },
    { nombre: "Senzo 2 L", precio: "$36", categoria: "coca" },
    { nombre: "Ameyal Mundet 2 L", precio: "$36", categoria: "coca" },
    { nombre: "Sidral Mundet 600 ml", precio: "$22", categoria: "coca" },
    { nombre: "F. Fresca 600 ml", precio: "$22", categoria: "coca" },
    { nombre: "F. Naranja 600 ml", precio: "$22", categoria: "coca" },
    { nombre: "Sprite 600 ml", precio: "$22", categoria: "coca" },
    { nombre: "Fresca 600 ml", precio: "$22", categoria: "coca" },
    { nombre: "Senzo 600 ml", precio: "$22", categoria: "coca" },
    { nombre: "Ameyal Freso Kiwi", precio: "$20", categoria: "coca" },
    { nombre: "Ameyal Manzana Durazno", precio: "$21", categoria: "coca" }
];

// ===== REFERENCIAS AL DOM =====
const catalogo = document.getElementById("catalogo");
const buscador = document.getElementById("buscador");
const categoriaSelect = document.getElementById("categoria");

// ===== FUNCIÓN PARA RENDERIZAR PRODUCTOS =====
function renderizarProductos(lista) {
    if (lista.length === 0) {
        catalogo.innerHTML = `<div id="sin-resultados">😕 No encontramos productos con esos filtros</div>`;
        return;
    }

    let html = "";
    lista.forEach(p => {
        html += `
            <div class="producto">
                <div class="imagen">📦</div>
                <h3>${p.nombre}</h3>
                <div class="precio">${p.precio}</div>
                <span class="categoria-tag">${obtenerNombreCategoria(p.categoria)}</span>
            </div>
        `;
    });
    catalogo.innerHTML = html;
}

// ===== FUNCIÓN PARA NOMBRE BONITO DE CATEGORÍA =====
function obtenerNombreCategoria(cat) {
    const mapa = {
        "papas": "🥔 Papas y Botanas",
        "dulces": "🍫 Dulces y Chocolates",
        "bebidas": "🥤 Bebidas",
        "coca": "🥤 Coca y Sabores Grandes"
    };
    return mapa[cat] || cat;
}

// ===== FILTRAR PRODUCTOS (Buscador + Categoría) =====
function filtrarProductos() {
    const texto = buscador.value.toLowerCase().trim();
    const categoria = categoriaSelect.value;

    const filtrados = productos.filter(p => {
        const coincideTexto = p.nombre.toLowerCase().includes(texto);
        const coincideCategoria = categoria === "todas" || p.categoria === categoria;
        return coincideTexto && coincideCategoria;
    });

    renderizarProductos(filtrados);
}

// ===== EVENTOS =====
buscador.addEventListener("input", filtrarProductos);
categoriaSelect.addEventListener("change", filtrarProductos);

// ===== RENDER INICIAL =====
renderizarProductos(productos);