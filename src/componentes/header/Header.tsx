import './Header.css'
import Link from './../link/Link'
function Header(){
    return(
        <header>
            <div className='logo-header'><img src="src\assets\img\logo.png"/>
  </div>
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