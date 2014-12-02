function enrutar(manejador,ruta){
	console.log("voy a rutear algo para "+ruta);
	return manejador[ruta]();
}
exports.enrutar = enrutar;