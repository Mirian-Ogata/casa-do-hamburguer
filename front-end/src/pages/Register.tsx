import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  async function HandleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!name || !email || !password || !cep) {
        setError("Todas as informações são obrigatórias");
        return;
      }
      if (password !== confirmPassword) {
        setError("As senhas não coincidem. Tente novamente");
        return;
      }
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, cep }),
      });

      switch (response.status) {
        case 409:
          setError("E-mail já cadastrado");
          break;
        case 400:
          setError("Todas as informações são obrigatórias");
          break;
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setCep("");
          setError("");
          break;
        case 500:
          setError("Tente novamente mais tarde");
          break;
        default:
          setError("");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      return;
    }
  }
  return (
    <form
      className="flex h-screen flex-col items-center justify-center bg-[#161410]"
      onSubmit={HandleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-1.5">
        <Link to="/">
          <img src="./logo.svg" alt="Casa do Hamburguer" />
        </Link>
        <div className="my-5 flex w-full flex-col gap-1.5">
          <Input
            placeholder="Nome Completo"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            placeholder="E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Input
            placeholder="Confirme a sua senha"
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <Input
            placeholder="CEP"
            type="number"
            onChange={(e) => setCep(e.target.value)}
            value={cep}
          />
          <p className="text-xs text-red-500">{error}</p>
        </div>
        <Button title="Criar conta" />
        <Link to="/login" className="w-full">
          <Button title="Já  tenho uma conta" variant="outline-orange" />
        </Link>
      </div>
    </form>
  );
};

export default Register;
