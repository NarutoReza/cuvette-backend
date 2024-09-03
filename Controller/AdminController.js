const jwt = require('jsonwebtoken');

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
                const token = jwt.sign({ userId: Admin._id}, 'your_secret_key', { expiresIn: '1h', })
                res.json(token);
            }
            else res.json('Password does not match');
        }
        else res.json('Admin name does not match');
    }
    catch(err){
        res.json(err);
    }
}

