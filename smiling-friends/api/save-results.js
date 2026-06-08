const { put } = require('@vercel/blob');

module.exports = async function handler(request, response) {
  // Configuración de cabeceras CORS robustas
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Responder a peticiones de pre-vuelo (CORS)
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(455).json({ error: 'Método no permitido. Usa POST.' });
  }

  try {
    const { alias, edad, scoreTotal, respuestas, timestamp } = request.body;

    if (!alias || !edad) {
      return response.status(400).json({ error: 'Faltan datos críticos (alias o edad).' });
    }

    // Nombre de archivo único e higienizado
    const fileName = `records/${alias.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.json`;

    const payload = {
      alias: alias.substring(0, 20),
      edad: parseInt(edad, 10),
      scoreTotal: parseInt(scoreTotal, 10) || 0,
      respuestas: respuestas || {},
      timestamp: timestamp || new Date().toISOString()
    };

    // Respaldo de tokens seguro en CommonJS
    const token = process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_BLOB_READ_WRITE_TOKEN;

    if (!token) {
      console.error("Error: Token de autenticación no encontrado.");
      return response.status(500).json({ error: 'Falta configuración de credenciales en el servidor.' });
    }

    // Invocación directa y síncrona de almacenamiento
    const blob = await put(fileName, JSON.stringify(payload, null, 2), {
      access: 'encrypted',
      contentType: 'application/json',
      token: token
    });

    return response.status(200).json({ success: true, message: 'Datos guardados con éxito.', url: blob.url });
  } catch (error) {
    console.error('Error en la ejecución de la función:', error.message);
    return response.status(500).json({ error: 'Error interno en el procesamiento del almacenamiento.' });
  }
};
