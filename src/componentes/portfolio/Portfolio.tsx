
import Imagem from "./../../assets/img/eu.jpeg";
import './Portfolio.css';

function Portfolio(){
    return(
        <div className="portfolio-content">
            <img src={Imagem} alt="" />
            <div className="text-portfolio">
                <h1>Quem sou eu?</h1>
                <p>Sou Stefany Carnielli, tenho 17 anos de idade, sou nativa de Naviraí - MS, onde resido atualmente e estou no sexto semestre em Informática para Internet no Instituto Federal do Mato Grosso do Sul.</p>
                <p>Tenho grande interesse na área da tecnologia e planos de cursar Direito posteriormente.</p>
                <p>Sou uma pessoa proativa e colaborativa que valoriza o trabalho em equipe.</p>
                <button className="contact-button">Entre em Contato</button>
            </div>
        </div>
    )
}

export default Portfolio


