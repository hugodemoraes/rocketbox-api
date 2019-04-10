const Box = require("../models/Box");

class BoxController {
  async store(req, res) {
    const { body } = req;

    const box = await Box.create(body);

    return res.json(box);
  }

  async show(req, res) {
    const {
      params: { id }
    } = req;

    const box = await Box.findById(id).populate({
      path: "files",
      options: { sort: { createdAt: -1 } }
    });

    res.json(box);
  }
}

module.exports = new BoxController();
