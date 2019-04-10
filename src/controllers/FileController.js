const File = require("../models/File");
const Box = require("../models/Box");

class FileController {
  async store(req, res) {
    const {
      body,
      file: { originalname, key },
      params: { id },
      io
    } = req;

    const box = await Box.findById(id);

    const file = await File.create({
      title: originalname,
      path: key
    });

    box.files.push(file);

    await box.save();

    io.sockets.in(box._id).emit("file", file);

    return res.json(file);
  }
}

module.exports = new FileController();
