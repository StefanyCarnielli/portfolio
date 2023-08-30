import './Header.css'
import Logo from './../../assets/img/logo.png'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div><img className="logo-header" src={Logo} alt=""></img></div>
  
            <nav>
                <ul>
                    <li>
                        <Link texto='Início'/>
                    </li>
                    <li>
                        <Link texto='Sobre'/>
                    </li>
                    <li>
                        <Link texto='Imagens'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header