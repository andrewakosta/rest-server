const User = require("../models/User");
const bcryptjs = require('bcryptjs')
exports.userGet = (req, res)=>{
    res.json({oro:"false"})
}
exports.createUser = async(req, res)=>{
    const {name, email, password, rol} = req.body;
    const user = new User({name,email, password, rol});
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt)
    await user.save();
    res.json({user})
}
exports.userPut= (req, res)=>{
    const queryParams = req.query;
    const pathParams = req.params.id
    res.json({oro:"false", queryParams, pathParams})
}
exports.userDelete = (req, res)=>{
    res.json({oro:"false"})
}