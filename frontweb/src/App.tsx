import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./App.css";

import Routes from "Routes";
import { AuthContext, AuthContextData } from "AuthContext";
import { ToastContainer } from "react-toastify";

function App() {

  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
  <AuthContext.Provider value={{authContextData, setAuthContextData}}>
    <Routes />
    <ToastContainer />
  </AuthContext.Provider>
  );
}

export default App;
