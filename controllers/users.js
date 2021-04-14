exports.userGet = (req, res)=>{
    res.json({oro:"false"})
}
exports.userPost = (req, res)=>{
    const body = req.body;
    res.json({oro:"false",request:body})
}
exports.userPut= (req, res)=>{
    const queryParams = req.query;
    const pathParams = req.params.id
    res.json({oro:"false", queryParams, pathParams})
}
exports.userDelete = (req, res)=>{
    res.json({oro:"false"})
}