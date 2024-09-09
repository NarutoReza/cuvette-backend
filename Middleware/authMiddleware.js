const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    const accessToken = req.header('Authorization');
    const refreshToken = req.body.refreshToken;

    try{
        if(!accessToken){
            if(!refreshToken) return res.json('Access Denied.');
            else{
                res.json("Access needed!")
            }
        }
        else{
            if(typeof token !== undefined){
                const bearerToken = accessToken.split(" ")[1];
                const decoded = jwt.verify(bearerToken, process.env.ACCESS_KEY);
                req.userId = decoded.userId;
                next();
            }
            else{
                res.json({
                    status: 'fail',
                    message: 'Unauthorized!',
                });
            }
        }
    }
    catch(err) {
        res.json(err);
    }
}

module.exports = verifyToken;