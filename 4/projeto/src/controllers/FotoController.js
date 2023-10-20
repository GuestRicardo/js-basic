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
      try { //caso aluno exista
        const {
          originalname,
          filename
        } = req.file;
        const {
          aluno_id
        } = req.body;
        const foto = await Foto.create({
          originalname,
          filename,
          aluno_id
        });

        return res.json(foto);
      } catch (e) { //caso aluno nao exista
        return res.status(400).json({
          errors: ["Aluno nao existe"]
        })
      }
    });
  }
}

export default new FotoController();
