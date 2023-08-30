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
            <li><a href="#">Mobile Apps</a></li>
            <li><a href="#">Database Designer</a></li>
            <li><a href="#">Business Process Editor</a></li>
            <li><a href="#">Web Apps Designer</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Sucess Stories</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Product Uptades</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Plataforms Comparison</a></li>
        </ul>
        <ul>
        <li><h1>Company</h1></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Partner program</a></li>
            <li><a href="#">Find a partner</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">For Investors</a></li>
            <li><a href="#">Professional Services</a></li>
        </ul>

        <ul>
        <li><h1>Learn & get help</h1></li>
            <li><a href="#">AppMaster 101</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">ROI Calculator</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Roadmap</a></li>
            </ul>
            <ul>
        <li><h1>Community</h1></li>
            <li><a href="#">Discord Community</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Comparioson</a></li>
            <li><a href="#">AppMaster vs Adalo</a></li>
            <li><a href="#">AppMAster vs Webflow</a></li>
            </ul>

      </nav>
      </footer>
    )
  }


export default Footer