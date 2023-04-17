//  const request = (objeto) => {
//    return new Promise((resolve, reject) => {
//      const xhr = new XMLHttpRequest();
//      xhr.open(objeto.method, objeto.url, true);
//      xhr.send();

//      xhr.addEventListener('load', () => {
//        if (xhr.status >= 200 && xhr.status < 300) {
//          resolve(xhr.responseText);
//        } else {
//          reject(xhr.statusText);
//        }
//      });
//    });
//  };
/** FETCH API vai subistituir essa função */

document.addEventListener('click', evento => {
  const elemento = evento.target;
  const tag = elemento.tagName.toLowerCase();

  if (tag == 'a') {
    evento.preventDefault();
    carregaPagina(elemento);
  }
});

async function carregaPagina(elemento) {
//tratando o erro
  try{
    const href = elemento.getAttribute('href');
    const response = await fetch(href);
  
    if (response.status !== 200) throw new Error('ERRO 404!');
  
    const html = await response.text();
    carregaResultado(html);
  } catch (erro){
    console.warn(erro);
  }

  //   //usando fetch

  //   fetch(href) //carregando o link
  //     .then(response => { //pegando a resposta
  //       if (response.status !== 200) {
  //         throw new Error('ERRO 404!')
  //       }
  //       return response.text() //convertendo a resposta em texto

  //     }).then(html => { //retornando o texto em html
  //       carregaResultado(html)
  //     }).catch(erro => {
  //       console.warn(erro)
  //     })
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}