const userModel = require("../models/user");

class UserController {
  //POST - CRIAR USUARIO
  async store(req, res) {
    const user = await userModel.create(req.body);
    return res.status(201).json({ user });
  }

  // DELETE - DELETAR USUARIO
  async destroy(req, res) {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    return res.status(200).json({ msg: "Usuário deletado com sucesso" });
  }

  // PUT - ATUALIZAR USUARIO
  update(req, res) {}

  // GET com ID - Listar 1 USUARIO
  async show(req, res) {
    const { id } = req.params;
    const user = await userModel.findById(id);
    return res.status(200).json({ user });
  }

  //GET com TODOS USUARIOS
  async index(req, res) {
    const users = await userModel.find();
    return res.status(200).json({ users });
  }
}

module.exports = new UserController();
