import { put } from '@vercel/blob';

export default async function handler(request, response) {
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

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

    const fileName = `records/${alias.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}.json`;

    const payload = {
      alias: alias.substring(0, 20),
      edad: parseInt(edad, 10),
      scoreTotal: parseInt(scoreTotal, 10) || 0,
      respuestas: respuestas || {},
      timestamp: timestamp || new Date().toISOString()
    };

    const token = process.env.BLOB_READ_WRITE_TOKEN || process.env.VERCEL_BLOB_READ_WRITE_TOKEN;

    const blob = await put(fileName, JSON.stringify(payload, null, 2), {
      access: 'encrypted',
      contentType: 'application/json',
      token: token
    });

    return response.status(200).json({ success: true, message: 'Datos guardados con éxito.', url: blob.url });
  } catch (error) {
    console.error('Error durante la invocación de Vercel Blob:', error.message);
    return response.status(500).json({ error: 'Error interno en el procesamiento del almacenamiento seguro.' });
  }
}
