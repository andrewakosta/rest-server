const User = require("../models/User");

exports.userGet = (req, res)=>{
    res.json({oro:"false"})
}
exports.createUser = (req, res)=>{
    const body = req.body;
    const user = new User(body)
    user.save();
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