import {
    BrowserRouter as Router,
    Route as RouteDOM,
    Routes as RoutesDOM,
    Navigate,
  } from "react-router-dom";
import Header from "./views/components/header";
import Footer from "./views/components/footer";
import PageConheca from "./views/page-conheca";
import PageRedeCredenciada from "./views/page-rede-credenciada";
import PageFaleConosco from "./views/page-fale-conosco";

  export const Rotas = () => (
    <>
    <RoutesDOM>
      <RouteDOM path="/header" element={<Header/>} />
      <RouteDOM path="/footer" element={<Footer/>} />
      <RouteDOM path="/conheca" element={<PageConheca/>}/>
      <RouteDOM path="/rede-credenciada" element={<PageRedeCredenciada/>}/>
      <RouteDOM path="/fale-conosco" element={<PageFaleConosco/>}/>
    </RoutesDOM>
    </>    
        )

  