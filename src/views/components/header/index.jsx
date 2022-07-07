import "./style.css";
import LogoKlini from "../../assets/img/klini-cor.png"
import IconFace from "../../assets/img/icon-face.png"
import IconInsta from "../../assets/img/icon-insta.png"
import IconLinkd from "../../assets/img/icon-linkd.png"
import User from "../../assets/img/User.png"

   




function Header(){


    return(
        <>
        
        <div className="componentes">
            <img className="logo-klini" src={LogoKlini}/>
            <div className="menu-opition">
                <h1>Conheça a klini<div id="linha"></div></h1>
                <h1>Rede klini</h1>
                <h1>Blog</h1>
                <h1>FAQ</h1>
                <h1>Fale Conosco</h1>
            </div>
            
            <div className="icones-social"> 
                <img className="icon-face" src={IconFace} />
                <img className="icon-insta" src={IconInsta} />
                <img className="icon-linkd" src={IconLinkd} /> 
                <img className="user" src={User} />
            </div>   

        </div>
        
        










    </>
  
    
 )  
}
export default Header;