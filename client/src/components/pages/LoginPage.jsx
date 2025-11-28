import { useContext, useState } from "react";
import api from "../../api/api";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../context/UserContext";
function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "pedro@gmail.com",
    password: "1234",
  });
  const { changeStorage } = useContext(UserContext);
  const handleChange = (event) => {
    if (event.target.id === "inputEmail") {
      setLoginData({ ...loginData, email: event.target.value });
    } else if (event.target.id === "inputPassword") {
      setLoginData({ ...loginData, password: event.target.value });
    }
  };

  const fazerLogin = async () => {
    const data = {
      email: loginData.email,
      senha: loginData.password,
    };
    try {
      const response = await api.post("/login", data);
      console.log(response.data.response);
      const user = {
        email: data.email,
        token: response.data.response.token,
      };
      changeStorage(JSON.stringify(user));
      window.location.replace("/");
    } catch (error) {
      toast.error("Não foi possivel efetuar login");
      console.error(error);
    }
  };
  return (
    <div
      className="h-50 container p-4 border rounded shadow-sm"
      style={{ maxWidth: "600px" }}
    >
      <h1>Fazer login no site</h1>
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
            value="pedro@gmail.com"
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
            value="1234"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            fazerLogin();
          }}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
      <p>
        Não tem uma conta?
        <a href="/registrar" style={{ color: "red" }}>
          Criar uma conta
        </a>
      </p>
      <Toaster />
    </div>
  );
}

export default LoginPage;
