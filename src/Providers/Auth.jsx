import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';

export const AuthContext = createContext(null);

// Componente da autentificação, contexto da aplicação
export const AuthProvider = ({ children }) => {

  const [planos, setPlanos] = useState(null);

  const handlePlano = async ()=> {
   const getPlanos = await axios.get(`http://localhost:3002/getPlano`,{
    });
    setPlanos({
        planosMed: getPlanos.data
    });
    console.log(getPlanos.data);
  }
    return (
    <AuthContext.Provider
      value={{
       planos: handlePlano,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);