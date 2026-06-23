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

  function HandleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, password, confirmPassword, cep });
  }
  return (
    <form
      className="flex h-screen flex-col items-center justify-center bg-[#161410]"
      onSubmit={HandleSubmit}
    >
      <div className="flex flex-col items-center justify-center gap-1.5">
        <Link to="/">
          <img src="./logo.svg" alt="Casa do Hamburguer" className="mb-5" />
        </Link>
        <Input
          placeholder="Nome Completo"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme a sua senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="number"
          onChange={(e) => setCep(e.target.value)}
        />
        <div className="mt-5 flex w-full flex-col gap-1.5">
          <Button title="Criar conta" />

          <Link to="/login">
            <Button title="Já  tenho uma conta" variant="outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
