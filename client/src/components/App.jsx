import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigator from "./common/Navigator";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegistrarPage from "./pages/RegistrarPage";
import { UserProvider } from "./provider/UserProvider";
import Verconta from "./pages/Verconta";
import VerCatalogo from "./pages/VerCatalogo";
function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Navigator />
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registrar" element={<RegistrarPage />} />
            <Route path="/ver-conta" element={<Verconta />} />
            <Route path="/ver-catalogo" element={<VerCatalogo />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
