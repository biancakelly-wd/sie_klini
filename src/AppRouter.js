import {
    BrowserRouter as Router,
    Route as RouteDOM,
    Routes as RoutesDOM,
    Navigate,
  } from "react-router-dom";
import Header from "./views/components/header";
import Footer from "./views/components/footer";
  export const Rotas = () => (
    <>
    <RoutesDOM>
      <RouteDOM path="/header" element={<Header/>} />
      <RouteDOM path="/footer" element={<Footer/>} />
    </RoutesDOM>
    </>    
        )

  