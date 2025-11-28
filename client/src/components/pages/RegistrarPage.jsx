import { useState } from "react";
import api from "../../api/api";
import toast, { Toaster } from "react-hot-toast";
function RegistrarPage() {
  const [RegistrarData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    if (event.target.id === "inputEmail") {
      setLoginData({ ...RegistrarData, email: event.target.value });
    } else if (event.target.id === "inputPassword") {
      setLoginData({ ...RegistrarData, password: event.target.value });
    }
    console.log(RegistrarData);
  };
  const fazerRegistro = async () => {
    const data = {
      email: RegistrarData.email,
      senha: RegistrarData.password,
    };
    console.log(data);
    try {
      const response = await api.post("/registrar", data);
      console.log(response.data);
      toast.success("Conta criada com sucesso, faça o login");
      window.location.replace("/login");
    } catch (error) {
      console.error("ERRO DO SERVIDOR:", error.response?.data);
      toast.error(error.response?.data?.error || "Erro ao registrar");
    }
  };
  return (
    <div
      className="container p-4 border rounded shadow-sm"
      style={{ maxWidth: "600px" }}
    >
      <h1>Criar Conta</h1>
      <form method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            id="inputPassword"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            fazerRegistro();
          }}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
      <Toaster />
    </div>
  );
}

export default RegistrarPage;
