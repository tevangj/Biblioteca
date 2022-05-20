import connection from '../utils/database.js';
const getBookCat = async (req, res) => {
  try {
    const owners = await connection.select('*').from('Books-Catalog');
    return res.json({
      owners,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Ocurrió un error al consultar el catálogo de libros',
    });
  }
};

export { getBookCat };