import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Verconta() {
  const { userData } = useContext(UserContext);
  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-3">Conta</h2>
        <p className="text-center fs-5">
          <strong>Email:</strong> {userData.email}
        </p>
        <p className="text-center fs-8">
          <strong>Seu token de acesso:</strong> {userData.token}
        </p>
      </div>
    </div>
  );
}
