import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Foto from '../model/Foto';

const upload = multer(multerConfig).single('foto');


class FotoController {
   store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      const {originalname, filename} = req.file;
      const foto = await Foto.create({ originalname, filename });

     return res.json(foto);
    });
  }
}

export default new FotoController();
