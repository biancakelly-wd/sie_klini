import "./style.css";
import Header from "../components/header";
import Footer from "../components/footer";
import  VerRede from "../assets/img/envio.png"


   




function PageRedeCredenciada(){


    return(
        <>
        <Header/>
        <div className="col1-rede">
            <div className="titulo-redecred">
            <h1 className="titulo-redecredenciada">Encontre nossa rede:</h1></div>
                    <div className="sel-redes"></div>
                    <select name="rede" className="select-rede" >
                        <option value="escolha-plano">Escolha a rede desejada</option>
                        <option value="2">Rede Médica</option>
                        <option value="3">Rede Odontológica</option>                                           
                  </select>
                  <select name="Plano" className="select-rede" >
                        <option value="escolha-plano">Escolha seu Plano</option>
                        <option value="2">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>                       
                  </select>
                  <select name="serviço" className="select-rede" >
                        <option value="escolha-plano">Qual o tipo de serviço</option>
                        <option value="2">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>                       
                  </select>
                  <select name="cidade" className="select-rede" >
                        <option value="escolha-plano">Escolha a cidade</option>
                        <option value="2">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>                       
                  </select>
                  <select name="bairro" className="select-rede" >
                        <option value="escolha-plano">Escolha o bairro</option>
                        <option value="2">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>                       
                  </select>
                  <select name="especialidade" className="select-rede" >
                        <option value="escolha-plano">Escolha a especialidade</option>
                        <option value="2">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>
                        <option value="3">KLINI RIO</option>                       
                  </select>
                  <div className="verede-bottom">Ver rede médica<img className="envio"src={VerRede}/> </div>

        </div>
        <div className="col2-rede">
            
        </div>
        <Footer/>










    </>
  
    
 )  
}
export default PageRedeCredenciada;