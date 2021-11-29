// Lista de mapas
const mapas = ['dust 2', 'inferno', 'cache']

// Función para obtener mapa aleatorio
function obtenerMapaAleatorio() {
	// Obtener un número aleatorio entre 0 y el número de mapas
	const numero = Math.floor(Math.random() * mapas.length)

	// Devolver el mapa con el índice aleatorio
	return mapas[numero]
}

console.log(obtenerMapaAleatorio())

const arma = 'AK47'

arma = 'M4A1'
