 const request = (objeto) => {
   return new Promise((resolve, reject) => {
     const xhr = new XMLHttpRequest(); //usando o construtor
     //este é verbo http, ele tambem e chamdo de metodo(get) ele serve para pegar as coisas na web
     xhr.open(objeto.method, objeto.url, true);
     //se fosse POST estaria no formulario abaixo
     xhr.send(); //aq estaria enviando(como aq nao enviaremos, ele pode ser null ou deixar em branco)

     //aq é para saber se a requisição foi carregada
     xhr.addEventListener('load', ( /**aq ficaria o evento, mas em nosso exemplo não vai precisar */ ) => {
       //quando chegar aq dentro ja tera a resposta do servidor, se teve sucesso ou nao
       //usando CALLBACK
       //  if (xhr.status >= 200 && xhr.status < 300) {
       //    objeto.success(xhr.responseText);
       //  } else {
       //    objeto.console.error(xhr.statusText);
       //  }
       //usando promise
       if (xhr.status >= 200 && xhr.status < 300) {
         resolve(xhr.responseText);
       } else {
         reject(xhr.statusText);
       }
     });
   });
 };
 //aq esta senddo adicionado um evento no elemento todo.
 document.addEventListener('click', evento => {
   const elemento = evento.target;
   const tag = elemento.tagName.toLowerCase();

   if (tag == 'a') {
     evento.preventDefault();
     carregaPagina(elemento); //quando clicar no link, nao ira carregar a pagina,aq o evento sera adicionado na tag resultado
   }
 });
 //receber o elemento
 async function carregaPagina(elemento) {
   //carregamento via AJAX
   const href = elemento.getAttribute('href');
   //usando promise
   const objConfig = {
     method: 'GET',
     url: href
   };
   request(objConfig).then(response => {
     carregaResultado(response);
   }).catch(erro => console.log(erro));
   //request({ // este é o objetoque faz o carregamento, e esta sendo pego o click do elemento
   //usando callbacks
   //  method: 'GET',
   //  url: href,
   //  success(response) {
   //    carregaResultado(response);
   //  },
   //  error(errorText) {
   //    console.log(errorText);
   //  }
   //});
 }

 function carregaResultado(response) {
   const resultado = document.querySelector('.resultado');
   resultado.innerHTML = response;
 }