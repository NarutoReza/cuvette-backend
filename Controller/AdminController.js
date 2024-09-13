const jwt = require('jsonwebtoken');
require('dotenv').config();

const Admin = {
    _id: 'DX5pcEOHuY8m0sCt@R9M',
    name: 'admin',
    password: 'admin'
}

// admin log in
exports.adminLogin = async(req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    try{
        if(name == Admin.name){
            if(password == Admin.password){
                const accessToken = jwt.sign({ userId: Admin._id }, process.env.ACCESS_KEY, { expiresIn: '1h', });
                const refreshToken = jwt.sign({ userId: Admin._id }, process.env.SECRET_KEY, { expiresIn: '24h', });
                res.json({ accessToken: accessToken, refreshToken: refreshToken });
            }
            else res.json('Password does not match');
        }
        else res.json('Admin name does not match');
    }
    catch(err){
        res.json('Not accessible');
    }
}