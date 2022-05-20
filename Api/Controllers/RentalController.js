import connection from '../utils/database.js';
const getRental = async (req, res) => {
  try {
    const owners = await connection.select('*').from('Rental');
    return res.json({
      owners,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Ocurrió un error al consultar las rentas de libros',
    });
  }
};

export { getRental };