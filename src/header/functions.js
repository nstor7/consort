function mostrarHeader(){
 var nav = document.getElementById('nav')
 nav.classList.add('mostrado')
}

function ocultarHeader(){
 var nav = document.getElementById('nav')
 nav.classList.remove('mostrado')
}
module.exports = {mostrarHeader, ocultarHeader}