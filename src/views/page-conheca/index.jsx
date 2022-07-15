import "./style.css";
import Header from "../components/header";
import Footer from "../components/footer";
import KliniVideo from "../assets/klini-video.mp4";
import Setas from "../assets/img/setas.png";
import GestãoIntegrada from "../assets/img/Gestão-Integrada.png";
import SaudeVerticalizada from "../assets/img/Saúde-Verticalizada.png";
import Acolhimento from "../assets/img/Acolhimento.png";

   




function PageConheca(){


    return(
        <>
        <Header/>
            <div className="conheca">
                <div className="cabecalho">
                    <h1 className="titulo">Nós somos a Klini:</h1>
                    <h1 className="sub-titulo">O plano de saúde do Rio de Janeiro</h1>
                    <h3 className="text-princ">Com a Klini você tem acesso a uma rede médica qualificada, equipamentos de ponta, equipe especializada e atendimento humanizado em unidades espalhadas pela cidade. </h3><br></br>
                    <h3> Oferecemos tudo o que você precisa para se sentir em casa.</h3>
                </div>
                <img className="klini-video" controls autoPlay src={KliniVideo}type="video/mp4"/>
                
            </div>
            <img className="setas" src={Setas}/>
            <div className="divisoria-quadrados">
                <img className="preventiva" src={GestãoIntegrada}/>
                <img className="verticalizada" src={SaudeVerticalizada}/>
                <img className="acolhimento" src={Acolhimento}/>









            </div>
                                                                                                                
        
        
         
        
        
        
        
        
        
        
        
        <Footer/>










    </>
  
    
 )  
}
export default PageConheca;