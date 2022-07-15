import './style.css';
import Header from '../components/header';
import Envio from "../assets/img/envio.png"

function FaleConosco() {
    return(
        <>
        <Header />
        <div className='formulario'>
            <div id='col1'>
             <h1 className='white-bold'>Tem alguma dúvida ou quer conversar com a gente?</h1>
             <h3 className='grey-text'>Preencha o formulário ou entre em contato conosco através das nossas centrais:</h3>
            </div>

            <div id='col2'>
                <input type="text" name="assunto" className="assunto"/>
                <input type="text" name="nome" className="nome"/>
                <input type="email" name="email" className="email"/>
                <input type="number" name="number" className="number"/>
                <input type="text" name="mensagem" className="mensagem"/>
                <div className="send-bottom">Enviar mensagem<img className="envio"src={Envio}/> </div>   
            </div>
        </div>
        </>
    )
}

export default FaleConosco