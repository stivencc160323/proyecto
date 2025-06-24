from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse
import csv

class Manejador(BaseHTTPRequestHandler):
    def do_POST(self):
        # Leer los datos del formulario
        longitud = int(self.headers['Content-Length'])
        datos_raw = self.rfile.read(longitud).decode('utf-8')
        datos = urllib.parse.parse_qs(datos_raw)

        nombre = datos.get('nombre', [''])[0]
        correo = datos.get('correo', [''])[0]

        # Guardar en CSV
        with open('registros.csv', 'a', newline='', encoding='utf-8') as archivo:
            escritor = csv.writer(archivo)
            escritor.writerow([nombre, correo])

        
# Iniciar servidor en localhost:8000
if __name__ == '__main__':
    servidor = HTTPServer(('localhost', 8000), Manejador)
    print("Servidor corriendo en http://localhost:8000")
    servidor.serve_forever()