exports.get = (req, res)=>{
    res.send("Get customer here");
  }

exports.getById = (req, res)=>{
    res.send("Get customer " + req.params.id);
  }
exports.getByName = (req, res)=>{
    res.send("Get customer " + req.params.name);
  }

exports.create = (req, res)=>{
    res.send("Create a customer");
}
exports.edit = (req, res)=>{
  res.send("edit a customer" + req.params.id);
}
exports.patchs = (req, res)=>{
  res.send("patch a customer" + req.params.id);
}
exports.deletes = (req, res)=>{
  res.send("delete a customer" + req.params.id);
}