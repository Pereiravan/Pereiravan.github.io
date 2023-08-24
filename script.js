const h1 = document.querySelector('h1')


function maquinaDeEscrever(event){
  const txt = event.innerHTML.split('');
  event.innerHTML = ''
  txt.forEach((cadaLetra, index) => {
    setTimeout(function(){
      event.innerHTML += cadaLetra
    } , 100 * index)
  });
}

maquinaDeEscrever(h1)
