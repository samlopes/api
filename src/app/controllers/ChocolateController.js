const chocolateModel = require('../models/chocolate');

class ChocolateController {
  async store(req, res) {
    const chocolate = await chocolateModel.create(req.body);
    return res.status(201).json(chocolate);
  }

  async index(req, res) {
    const chocolates = await chocolateModel.find();
    return res.json(chocolates);
  }

  async show(req, res) {
    const { id } = req.params;
    const chocolate = await chocolateModel.findById(id);
    return res.json(chocolate);
  }

  async update(req, res) {
    const { id } = req.params;
    const chocolate = await chocolateModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.json(chocolate);
  }

  async destroy(req, res) {
    const { id } = req.params;
    await chocolateModel.findByIdAndDelete(id);
    return res.json({ msg: 'Chocolate foi deletado' });
  }
}

module.exports = new ChocolateController();
