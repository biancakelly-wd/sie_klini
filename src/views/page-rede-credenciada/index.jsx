import "./style.css";
import Header from "../components/header";
import Footer from "../components/footer";
import VerRede from "../assets/img/envio.png"
import SetaIndica from "../assets/img/seta-indica.png";







function PageRedeCredenciada() {


      return (
            <>
                  <Header />
                  <div className="colrede-cred">
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
                              <div className="verede-bottom">Ver rede médica<img className="envio" src={VerRede} /> </div>

                        </div>

                        <div className="col2-rede">
                              <div className="section1-nome">
                                    <h2 className="nome-d">Nome</h2>
                                    <img className="seta-indica" src={SetaIndica} />
                                    <div id="linha-nomer"></div>
                                    <h3 className="Corpo-Movimento">Corpo e Movimento</h3>
                                    <h4 className="aculputura">Acupuntura</h4>
                                    <h4 className="endereço-r">Conde De Porto Alegre, 406<br></br> Rua Jardim Vinte E Cinco De Agosto<br></br> 25070-350
                                    </h4>
                                    <h4 className="tel-rede">Telefone: (21) 3672-8789 / 99382-0685</h4>
                              </div>
                              <div className="section2-Bairror">
                                    <h2 className="nome-d">Bairro</h2>
                                    <img className="seta-indica" src={SetaIndica} />
                                    <div id="linha-bairro"></div>
                                    <h2 className="end-mapa">Duque De Caxias<span> Ver no mapa</span></h2>
                                    <div id="linha-sectionr"></div>
                              </div>
                              


                        </div>
                  </div>



                  <Footer />










            </>


      )
}
export default PageRedeCredenciada;