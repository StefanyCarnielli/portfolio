import './Header.css'
import Logo from './../../assets/img/logo.png'
import LinkNav from '../linknav/LinkNav'
function Header(){
    return(
        <header>
            <div><img className="logo-header" src={Logo} alt=""></img></div>
  
            <nav>
                <ul>
                    <li><LinkNav url="/" texto='Home'/> </li>
                    <li><LinkNav url="/noticias" texto='Notícia'/></li>
                    <li><LinkNav url="/sobre" texto='Sobre'/></li>
                    <li><LinkNav url="/contato" texto='Contato'/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header