import jwt from 'jsonwebtoken';

export default (res, req, next) {
  const {
    authorization
  } = req.headers;

  if (!authorization) {
    return res.staus(401).json({
      errors: ['Voce precisa fazer login'],
    })
  }

  const [token] = authorization.spli(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const {
      id,
      email
    } = dados;
    req.userId = id;
    req.userEmail = email;

    return next();

  } catch (erro) {
    return res.staus(401).json({
      errors: ['Voce precisa fazer login'],
    });
  }
};
