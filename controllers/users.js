exports.userGet = (req, res)=>{
    res.json({oro:"false"})
}
exports.userPost = (req, res)=>{
    const body = req.body;
    res.json({oro:"false",request:body})
}
exports.userPut= (req, res)=>{
    res.json({oro:"false"})
}
exports.userDelete = (req, res)=>{
    res.json({oro:"false"})
}