import yo from 'yo-yo'
import fn from './functions'

module.exports = yo`
 <header>
  <a class="menuBoton" onclick=${fn.mostrarHeader} id="menuBoton"><i class="fa fa-bars" aria-hidden="true"></i></a>
  <nav id="nav">
   <section class="logoLine">
    <div class="logo"></div>
    <a class="salir" onclick=${fn.ocultarHeader} href="#">X</a>
   </section>
   <section class="menuLine">
    <div class="menu">
     <a href="#">INICIO</a>
     <a href="#">QUIENES SOMOS</a>
     <a href="#">REPERTORIO</a>
     <a href="#">MEDIA</a>
     <a href="#">CONTÁCTENOS</a>
    </div>
    <div class="futurosConciertos">
     <h3>FUTUROS CONCIERTOS</h3>
     <a class="concierto" href="">
       <div class="conciertoImagen"></div>
       <hgroup>
         <h2>Biblioteca De Chorrera</h>
         <h5>17 de diciembre de 2017</h5>
       </hgroup>
     </a>
     <a class="concierto" href="">
      <div class="conciertoImagen"></div>
      <hgroup>
       <h2>Biblioteca De Boquete</h2>
       <h5>23 de diciembre de 2017</h5>
      </hgroup>
     </a>
    </div>
   </section>
   <section class="subMenuLine"></section>
  </nav>
 </header>
`