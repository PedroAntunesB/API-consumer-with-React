import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api/api";

export default function VerCatalogo() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token = params.get("token");

  useEffect(() => {
    const fetchLivros = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get("/livros");
        setLivros(response.data.response);
      } catch (error) {
        console.error("Erro ao buscar livros", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLivros();
  }, [token]);
  if (!token) {
    return (
      <h1 className="text-center mt-5 text-danger">
        É necessário ter um token de acesso
      </h1>
    );
  }

  if (loading) {
    return <h2 className="text-center mt-5">Carregando catálogo...</h2>;
  }
  return (
    <div className="row g-4">
      {livros.length === 0 ? (
        <h4 className="text-center text-muted">Nenhum livro encontrado</h4>
      ) : (
        livros.map((livro, index) => (
          <div className="col-md-2" key={index}>
            <div className="card shadow-sm h-100">
              <img
                src={livro.capa}
                className="card-img-top"
                alt={livro.titulo}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{livro.titulo}</h5>

                <p className="card-text text-muted">{livro.resumo}</p>

                <h6 className="fw-bold">R$ {livro.valor.toFixed(2)}</h6>
              </div>

              <div className="card-footer text-center"></div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
