const sharp = require("sharp");
const path = require("path");

module.exports = async (req, res, next) => {
  try {
    const name = req.file.originalname.split(" ").join("_");
    const filename = path.parse(name).name;
    req.file.filename = filename + Date.now() + ".webp";
    await sharp(req.file.buffer)
      .resize({ width: 600 })
      .webp({ quality: 80 })
      .toFile(`images/${req.file.filename}`);
    next();
  } catch (error) {
    res.status(500).json({ error });
  }
};
