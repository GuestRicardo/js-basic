
import app from './app';
//para que o express verifique e atualiza a aplicação(o miniserver)
const port = process.env.APP_URL;
app.listen(port);
