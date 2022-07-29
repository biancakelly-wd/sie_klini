import "./style.css";
import { useAuth } from "../../../Providers/Auth";
import { useNavigate } from "react-router-dom";
import icon1 from "../../../assets/atualizacao cadastral.png";
import icon2 from "../../../assets/alterar senha.png";
import icon3 from "../../../assets/carencia.png";
import icon4 from "../../../assets/rede-credenciada.png";
import icon5 from "../../../assets/ans-mobile.png"
import logo from "../../../assets/layer.png"
import Avatar from "../../../assets/avatar.png"
import Fechar from "../../../assets/fechar.png"
import $ from "jquery";

function MenuSandwich() {
const navigate = useNavigate();
const { user } = useAuth();

const handleSubmit = (e) => {
  e.preventDefault();
  //logout();
  navigate('/cliente_klini/area/');
  
}
 $('.menu-popup').hide()
 const showMenu = (e) =>{
    $('.menu-popup').show()
   }

   const hideMenu = (e)=>{
    $('.menu-popup').hide()
   }

    return(
    <>
    <div className="Menu-sandwich">   
        <div id="menu" onClick={showMenu}></div>     
        </div>
        <div className="menu-popup">

          <img src={logo} className="logo-mobile"/> 
          <img src={Fechar} className="fechar" onClick={hideMenu}/>
             
             
                  
                <div id="menu-popup">
                  <img src={Avatar} className="avatar"/> 
                <h1 className="nome-lateral">{user?.planos[0].NomeAssociado}</h1>
                <ul id="menu-opition">
                  <li><a href="/atualiza-dados"><img src={icon1} className="icon-opition"/> Atualização Cadastral</a></li>
                  <li><a href="/pass"><img src={icon2} className="icon-opition"/> Alterar senha </a></li>
                  <li><a href="/carencia"><img src={icon3} className="icon-opition"/> Carência </a></li>
                  <li><a href="/rede"><img src={icon4} className="icon-opition"/> Rede Credenciada </a></li>
                  </ul>
                <a href="https://klinisaude.com.br"><div className="back-home"> Sair</div></a>
                <img src={icon5} className="ans-mobile"/>
                </div>
            </div>


    </>
)
  }
export default MenuSandwich;