import connection from '../utils/database.js';
const getUsers = async (req, res) => {
  try {
    const owners = await connection.select('*').from('Users');
    return res.json({
      owners,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Ocurrió un error al consultar los usuarios registrados',
    });
  }
};

export { getUsers };