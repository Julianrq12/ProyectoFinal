from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# Conexión a PostgreSQL
def obtener_conexion():
    return psycopg2.connect(
        dbname='recoleccion',
        user='postgres',
        password='postgres',
        host='localhost',
        port='5432'
    )

@app.route('/')
def inicio():
    return render_template('index.html')

@app.route('/anadir')
def anadir():
    return render_template('anadir.html')

@app.route('/guardar', methods=['POST'])
def guardar():
    data = request.json
    nombre = data.get('nombre')
    contacto = data.get('contacto')
    tipo = data.get('tipo')
    descripcion = data.get('descripcion')
    direccion = data.get('direccion')
    lat = data.get('latitud')
    lng = data.get('longitud')

    conn = obtener_conexion()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO reportes (nombre, contacto, tipo, descripcion, direccion, latitud, longitud)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """, (nombre, contacto, tipo, descripcion, direccion, lat, lng))
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"mensaje": "Datos guardados exitosamente"})

if __name__ == '__main__':
    app.run(debug=True)
