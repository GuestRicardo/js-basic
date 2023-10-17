//para o upload dos arquivos
import multer from "multer";
//para tratar de caminhos
import { extname, resolve} from 'path';

//função para evitar de ser recebido 2 fotos com mesmo nome ao mesmo tempo
//ela esta sendo usada para evitar possiveis erros
const aleatorio = () => Math.floor(Math.random() * 1000 + 1000);



export default {
  FileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/png' && file.mimetype === 'image/jpg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'))
    }
  },

  storage: multer.diskStorage({
    //local onde esta as fotos
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
      //no primeiro parametro é o erro(null, caminho)
    },
    filename: (req, file, cb) => {
      cd(null, `${Date.now()}_${aleatorio()}${extreme(file.originalname)}`)
      //segundo parametro é o nome do arquivo, so q neste caso sera usado por data a busca
    },
  })
};
