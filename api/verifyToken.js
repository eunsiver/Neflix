const jwt = require("jsonwebtoken");

function verify(req, res, next) {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user=user;//req 인자에 user 에 대한 정보를 저장
            next();
        });
    } else {
        return res.status(401).json("You are not authenticate!");
    }
}
module.exports = verify;