import jwt from 'jwt-simple';

const auth = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(400).json({
      msg: 'Missing token on authorization header',
    });
  }

  try {
    const payload = jwt.decode(token, process.env.JWT_SECRET);
    let { expDate } = payload;

    const currentDate = new Date();
    expDate = new Date(expDate);

    if (currentDate > expDate) {
      return res.status(401).json({
        msg: 'Expired token',
      });
    }

    next();
  } catch (err) {
    return res.status(400).json({
      msg: 'Invalid Token',
    });
  }
};

export default auth;
