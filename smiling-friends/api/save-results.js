import { kv } from '@vercel/kv';

export default async function handler(request, response) {
  // Configuración de cabeceras CORS para permitir peticiones desde tu frontend
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Manejo de peticiones de pre-vuelo (CORS)
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(455).json({ error: 'Método no permitido. Usa POST.' });
  }

  try {
    const { alias, edad, scoreTotal, respuestas, timestamp } = request.body;

    // Validación y saneamiento básico en el lado del servidor
    if (!alias || !edad) {
      return response.status(400).json({ error: 'Faltan datos críticos (alias o edad).' });
    }

    // Generar un ID único para cada sesión de usuario usando el timestamp y el alias
    const recordId = `user:${alias.toLowerCase().replace(/\s+/g, '_')}:${Date.now()}`;

    const payload = {
      alias: alias.substring(0, 20),
      edad: parseInt(edad, 10),
      scoreTotal: parseInt(scoreTotal, 10) || 0,
      respuestas: respuestas || {},
      timestamp: timestamp || new Date().toISOString()
    };

    // Guardar de forma segura en Vercel KV
    await kv.set(recordId, payload);

    // Opcional: Empujar el ID a una lista global para facilitar la lectura posterior de todos los registros
    await kv.lpush('quiz_records_list', recordId);

    return response.status(200).json({ success: true, message: 'Datos almacenados con éxito.', id: recordId });
  } catch (error) {
    console.error('Error interno en Vercel KV:', error);
    return response.status(500).json({ error: 'Error interno al guardar en la base de datos.' });
  }
}