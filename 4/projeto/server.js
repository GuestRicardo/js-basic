
import app from './app';
//para que o express verifique e atualiza a aplicação(o miniserver)
const port = 3001;
app.listen(port, ()=>{
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost: ${port}`);
});
