from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

def get_db_connection():
    return psycopg2.connect(
        dbname='recoleccion',
        user='postgres',
        password='postgres',
        host='localhost',
        port='5432'
    )

@app.route('/guardar', methods=['POST'])
def guardar():
    data = request.get_json()
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO reportes (nombre, contacto, direccion, tipo_reporte, descripcion)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        data['nombre'],
        data['contacto'],
        data['direccion'],
        data['tipo'],
        data['descripcion']
    ))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'mensaje': 'Datos guardados correctamente'}), 200

@app.route('/datos', methods=['GET'])
def obtener_datos():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM reportes ORDER BY id DESC")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    reportes = []
    for row in rows:
        reportes.append({
            'id': row[0],
            'nombre': row[1],
            'contacto': row[2],
            'direccion': row[3],
            'tipo_reporte': row[4],
            'descripcion': row[5]
        })
    return jsonify(reportes)

if __name__ == '__main__':
    app.run(debug=True)
