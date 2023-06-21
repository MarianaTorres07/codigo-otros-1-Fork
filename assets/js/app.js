const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//Traer los elementos del index.html
//Hay un elemento de tipo clase (esto se modifico, solo tenia 'name')
const $n = document.querySelector('.name');
//cComo hay un elemento clase en el html, cambiarlo el signo de id a clase con el .
const $b = document.querySelector('.blog');
//hay un elemento de tipo clase en JS, proceder a crear el elemento en el html...
const $l = document.querySelector('.location');

//agregar async para que funcione el await
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //Agregar...
  if(response.ok){ //Propiedad booleano (si o no hay respuesta)
    const data = await response.json(); //metodo para convertir la respuesta a un objeto .json
    console.log(data); //imprimir los datos
    $n.textContent = `${data.name}`; //Las plantillas literales van entre los backticks
    $b.textContent = `${data.blog}`; //Las plantillas literales van entre los backticks
    $l.textContent = `${data.location}`; //Las plantillas literales van entre los backticks
  }else{
    throw new Error("Error 404!") //lanzo un error (404)
  } 
}

//funcion para los errores
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  //Agregar $ al frente del n. 
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);