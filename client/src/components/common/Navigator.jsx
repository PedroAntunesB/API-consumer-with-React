import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Navigator() {
  const { userData } = useContext(UserContext);
  const tokenVerify = () => {
    if (userData == undefined) {
      return (
        <>
          <li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/registrar">
              Registrar
            </a>
          </li>
        </>
      );
    } else {
      return (
        <li className="nav-item">
          <a className="nav-link" href={`/ver-conta?token=${userData.token}`}>
            Ver Conta
          </a>
        </li>
      );
    }
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Biblioteca Virtual</span>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          {tokenVerify()}
        </ul>
      </div>
    </nav>
  );
}

export default Navigator;
