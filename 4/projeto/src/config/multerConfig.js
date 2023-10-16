//para o upload dos arquivos
import multer from "multer";
//para tratar de caminhos
import { extname, resolve} from 'path';

export default {
  storage: multer.diskStorage({
    //local onde esta as fotos
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {},
  })
};
