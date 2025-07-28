const pool = require('../db');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' });
  }

  try {
    const body = req.body;

    const result = await pool.query(
      'INSERT INTO registros (body) VALUES ($1) RETURNING *',
      [body]
    );

    return res.status(201).json({ status: 'ok', data: result.rows[0] });
  } catch (error) {
    console.error('Erro ao salvar:', error);
    return res.status(500).json({ erro: 'Erro ao salvar os dados' });
  }
};
