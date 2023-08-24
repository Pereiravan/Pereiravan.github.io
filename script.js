const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')


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
maquinaDeEscrever(h2)
