import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export function Home() {
  const { userData } = useContext(UserContext);
  const verifyData = () => {
    if (userData == undefined) {
      return (
        <a href={"/login"} style={{ color: "red" }}>
          Faça login para acessar o catalogo
        </a>
      );
    } else {
      return (
        <button className="btn btn-primary btn-lg mt-3">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={`/ver-catalogo?token=${userData.token}`}
          >
            Ver catálogo de livros
          </Link>
        </button>
      );
    }
  };
  return (
    <div className="vh-100 d-flex justify-content-center">
      <main className="container  text-center py-5">
        <h1 className="fw-bold mb-3">Bem-vindo à Biblioteca Virtual</h1>
        <p className="text-muted fs-5">
          Explore milhares de livros e descubra novas histórias.
        </p>
        {verifyData()}
      </main>
    </div>
  );
}

export default Home;
