import connection from '../utils/database.js';
const getRentalBook = async (req, res) => {
  try {
    const owners = await connection.select('*').from('Rental_Book');
    return res.json({
      owners,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Ocurrió un error al consultar la renta del libros',
    });
  }
};

export { getRentalBook };