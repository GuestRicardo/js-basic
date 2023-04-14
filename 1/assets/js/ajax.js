 const request = (objeto)=>{
  const xhr = new XMLDocument();
  //este é verbo http, ele tambem e chamdo de metodo(get) ele serve para pegar as coisas na web
  xhr.open(objeto.method, objeto.url, true );
  
 }