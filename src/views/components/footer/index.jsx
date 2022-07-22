import "./style.css";
import AnsDesktop from "../../assets/img/ans-desktop.png" 
import AnsPreta from "../../assets/img/ans-preta.png"
import AnsBranca from "../../assets/img/ans-branca.png"
import Termos from "../../assets/img/Termos.png"
import KliniLogo from "../../assets/img/klini-cor.png"
import FooterDivi from "../../assets/img/footer-divi.png"
import LogoKlini from "../../assets/img/Logo-Klini.png"
import Face from "../../assets/img/face.png"
import Insta from "../../assets/img/instan.png"
import lik from "../../assets/img/lik.png"



   function Footer(){


    return(
        <>

        <div className="divisoria">
            <img className="footer-divi" src={FooterDivi}/>
            
        </div>

        <div className="contatos">
            <img className="logo-klini" src={LogoKlini}/>

            <div className="contatos-atendimento">
                <div className="atendimento">
                    <h1 >Atendimento</h1>
                  <div className="canais-m">  
                    <h1 className="canais-mob">(21) 3952-9191</h1>
                    <h1 className="canais-mob">(21) 0800-941-7920</h1>
                    <h2 className="text-canais">Central de Atendimento SAC</h2>
                    <h1 className="canais-mob">0800-941-9601 </h1>
                    <h2 className="text-canais">Atendimento Deficiente Auditivo</h2>
                    </div>
                </div>
                <div className="canais-mobile">
                    <h1 className="canais-mob">(21) 3952-9110</h1>
                    <h2 className="text-canais">Atendimento Ouvidoria</h2>
                    <h1 className="canais-mob">(21) 39529190</h1>
                    <h2 className="text-canais">Atendimento Serviços</h2>
                    <div id="linha-verticall"></div>
                </div>
                        <div className="redes-sociais">
                            <h2 className="rede-s">Redes sociais</h2>
                                <div className="icon-redes">
                                    <img className="face" src={Face} />
                                    <img className="insta" src={Insta} />
                                    <img className="lik" src={lik} /> 
                                </div>   
                        </div>
                
                
                 </div>
        </div>               
        <div className="menu">
            <div className="sobre-klini">
                <h1>Sobre a Klini</h1>
                <h2>Conheça a klini</h2>
                <h2>Rede klini</h2>
                <h2>Blog</h2>
                <h2>Pergutas frequentes</h2>
                <h2>Trabalhe Conosco</h2>
                <h2>Politica de privacidade</h2>
            </div>

            <div className="cliente-klini">
                <h1>Cliente Klini</h1> 
                <h2>Área do Cliente</h2>
                <h2>Carteirinha virtual</h2>
                <h2>Carência</h2>
                <h2>Proograma Klini Viva Bem</h2>           
            </div>

            <div className="credenciado">
                <h1>Credenciado</h1>
                <h2>Área do Credenciado</h2>
            </div>

            <div className="Corretores">
                <h1>Corretores</h1>
                <h2>Area do corretor</h2>
            </div>   



            
        </div>

        <div className="rodape">
            <img className="ans-desktop" src={AnsDesktop}/>
            <img className="ans-preta" src={AnsPreta}/>
            <img className="ans-branca" src={AnsBranca}/>
            <img className="termos" src={Termos}/>
            <img className="klini-logo" src={KliniLogo}/>
        </div>    










    </>
  
    
 )  
}
export default Footer;