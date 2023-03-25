const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWTSECRET || 'mysupersecret';
const expiration = '2d';

module.exports = {

    validateToken: function ({req}) {
        let token = req.query.token || req.body.token || (req.headers.authorization && req.headers.authorization.split(' ').pop().trim());
        if (!token) return req;

        try {
            const { data } = jwt.verify(token, secret, {maxAge: expiration});
            req.user = data;
        } catch {
            console.log('Invalid token!')
        };
        
        return req;
    },
    signToken: function ({ _id, username, email }) {
        const payload = {_id, username, email};
        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    },
};
