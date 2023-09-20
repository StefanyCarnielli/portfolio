import './Footer.css'
import Twitter from './../../assets/img/twitter.png'
import Facebook from './../../assets/img/facebook.png'
import Instagram from './../../assets/img/instagram.png'
import Telegram from './../../assets/img/telegram.png'
import Youtube from './../../assets/img/youtube.png'

  function Footer(){
    return(
      <footer>
        <div className="rodape">
        

            <div className="imagens">
            <div><img className="img-icones" src={Twitter} alt=""></img></div>
            <div><img className="img-icones" src= {Facebook} alt=""></img></div>
            <div><img className="img-icones" src={Instagram} alt=""></img></div>
            <div><img className="img-icones" src={Telegram} alt=""></img></div>
            <div><img className="img-icones" src={Youtube} alt=""></img></div>
            </div>
               
            </div>
      
        
      <nav>
        <ul>
            <li><h1>Produtos</h1></li>
            <li><a href="#">Curso de informática para internet</a></li>
            <li><a href="#">Curso de Lógica de programação com Arduino</a></li>
            <li><a href="#">Curso de Programação de Robótica Lego EV3</a></li>
            <li><a href="#">Curso de Introdução á lógica de programação Arduino</a></li>
            <li><a href="#">Curso de Desenvolvimento Front-End</a></li>
            <li><a href="#">Curso de Banco de Dados</a></li>
            <li><a href="#">Curso de Frameworks</a></li>
        
        </ul>
        <ul>
        <li><h1>Slogans</h1></li>
            <li><a href="#">Inovação Digital</a></li>
            <li><a href="#">Tecnologia Avançada</a></li>
            <li><a href="#">Soluções Inteligentes</a></li>
            <li><a href="#">Excelência em TI</a></li>
            <li><a href="#">Transformação Digital</a></li>
            <li><a href="#">Sistemas Eficientes</a></li>
        </ul>

        <ul>
        <li><h1>Contato</h1></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">Youtube</a></li>
            </ul>
      

      </nav>
      </footer>
    )
  }


export default Footer