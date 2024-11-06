
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY || 'tu_clave_secreta';

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ error: 'Token no proporcionado' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token inválido' });
        }
        req.userId = decoded.id; 
        next();
    });
};

module.exports = authenticate;
