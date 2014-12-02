var servidor = require('http');
var url = require('url');

function iniciar(enrutar,manejador){
	function arrancaServidor(requiere,respuesta){
		
		var ruta = url.parse(requiere.url).pathname;

		console.log('alguien se ha conectado');
		enrutar(manejador,ruta);
		respuesta.writeHead(200,{"content-type":"text/html"});
		respuesta.write("<h1>El servidor funciona correctamente<h1>");
		respuesta.end();
	}
	servidor.createServer(arrancaServidor).listen(3030);
}

exports.iniciar = iniciar;