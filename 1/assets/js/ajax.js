 const request = (objeto) => {
   const xhr = new XMLDocument();
   //este é verbo http, ele tambem e chamdo de metodo(get) ele serve para pegar as coisas na web
   xhr.open(objeto.method, objeto.url, true);
   //se fosse POST estaria no formulario abaixo
   xhr.send(); //aq estaria enviando(como aq nao enviaremos, ele pode ser null ou deixar em branco)

   //aq é para saber se a requisição foi carregada
   xhr.addEventListener('load', ( /**aq ficaria o evento, mas em nosso exemplo não vai precisar */ ) => {
     //quando chegar aq dentro ja tera a resposta do servidor, se teve sucesso ou nao
     if (xhr.status >= 200 && xhr.status < 300) {
       objeto.success(xhr.responseText);
     } else {
       objeto.console.error(xhr.statusText);
     }
   });
 }