console.log('Hello, world!')

// Lista de mapas de CSGO
const mapas = [
	'Dust 2',
	'Cache',
	'Mirage',
	'Inferno',
	'Nuke',
	'Overpass',
	'Train',
	'Vertigo',
]

// Función para obtener un mapa aleatorio
function obtenerMapaAleatorio() {
	// Obtener un número aleatorio entre 0 y el número de mapas
	const numero = Math.floor(Math.random() * mapas.length)

	// Obtener el mapa correspondiente al número aleatorio
	const mapa = mapas[numero]

	// Mostrar mapa al usuario
	alert(`El mapa aleatorio es ${mapa}`)
}
