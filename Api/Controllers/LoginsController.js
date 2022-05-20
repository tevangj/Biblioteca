import connection from '../utils/database.js';
import bcryp from 'bcrypt';
import jwt from 'jwt-simple';

const createUser = async (req, res) => {
  const { user } = req.body;

  try {
    user.password = await bcryp.hash(user.password, 3);
    const newUser = await connection('Logins-Api')
      .insert(user)
      .returning('*');
    // const newUser = await connection.table('film').insert(user);
    return res.json({
      msg: 'Usuario registrado correctamente 😂',
      user: newUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      msg: 'Error al registrar nuevo usuario',
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (email == undefined || password == undefined) {
    return res.status(400).json({
      msg: 'Datos incompletos, ingrese email & password',
    });
  }
  try {
    const user = await connection('Logins-Api').first('*').where({
      email,
    });

    const match = await bcryp.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        msg: 'Bad credentials',
      });
    }

    delete user.password;
    console.log(user);

    const expDate = new Date();
    expDate.setMinutes(expDate.getMinutes() + 1);

    const token = jwt.encode(
      {
        user,
        expDate,
      },
      process.env.JWT_SECRET
    );

    return res.json({
      msg: 'Usuario encontrado',
      token,
    });
  } catch (err) {
    return res.status(404).json({
      msg: 'No existe un usuario registrado con ese correo',
    });
  }

  /**
   * 1.- buscar a ese usuario con ese correo que nos manden
   * 2.- validar que las contraseñas son iguales
   * 3.- si es que son iguales darle una session al nuevo usuario TODO token etc
   */
};

export { createUser, login };