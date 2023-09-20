import Informatica from './../../assets/img/informatica.png'
import Logica from './../../assets/img/logica.png'
import Robotica from './../../assets/img/robotica.png'
import Arduino from './../../assets/img/arduino.png'
import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'

<div className="foto_projeto">
<div><img src={Informatica} alt=""></img></div>
<div><img src= {Logica} alt=""></img></div>
<div><img src={Robotica} alt=""></img></div>
<div><img src={Arduino} alt=""></img></div>
</div>

type ProjetoType = {
    id:number,
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
  

    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Informática para internet',
            descricao:"O técnico em Informática para Internet desenvolve programas de computador e aplicativos para dispositivos móveis, utiliza ferramentas de desenvolvimento de sistemas para construir soluções que auxiliam o processo de criação de interfaces e aplicativos empregados no comércio e marketing eletrônicos.",
            imagem:'src/assets/img/informatica.png'
        },
        {
            id:2,
            titulo:'Lógica de programação com Arduino',
            descricao:'Conceitos e Sintaxe da Linguagem de Programação para Aplicações prática, como:  Imprimindo uma mensagem no LCD, Alterando a frequência com que o LED pisca, Semáforo de Carros e Pedestres, Termômetro, Piano, Alarme, Projeto Alarme Multipropósito e Portão Eletrônico',
            imagem:'src/assets/img/logica.png'
        },
        {
            id:3,
            titulo:'Programação de Robótica Lego EV3',
            descricao:'Introdução ao Software Lego Mindstorm EV3  e suas principais funcionalidades. Entendendo sobre motores, sensores para detecção de obstáculos e comutação. Tratamento de Erros.  Personalizar Blocos. Estratégia de seguidor de linha.',
            imagem:'src/assets/img/robotica.png'
        },

        {
            id:4,
            titulo:'Introdução á lógica de programação Arduino',
            descricao:'Introdução ao Software Lego Mindstorm EV3  e suas principais funcionalidades. Entendendo sobre motores, sensores para detecção de obstáculos e comutação. Tratamento de Erros.  Personalizar Blocos. Estratégia de seguidor de linha.',
            imagem:'src/assets/img/arduino.png'
        }
    ]






    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
      
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um curso</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um curso'
                       onChange={TrataTexto} />
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
               
                {
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto
                                key={projeto.id}
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }

                
            </main>
        </>
    )
}