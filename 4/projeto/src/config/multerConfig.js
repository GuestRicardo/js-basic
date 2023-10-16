//para o upload dos arquivos
import multer from "multer";
//para tratar de caminhos
import { extname, resolve} from 'path';

export default {
  storage: multer.diskStorage({
    //local onde esta as fotos
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
      //no primeiro parametro é o erro(null, caminho)
    },
    filename: (req, file, cb) => {
      cd(null, `${Date.now()} ${extreme(file.originalname)}`)
      //segundo parametro é o nome do arquivo, so q neste caso sera usado por data a busca
    },
  })
};
