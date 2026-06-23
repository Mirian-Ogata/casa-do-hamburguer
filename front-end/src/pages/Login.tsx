import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <form
      className="flex h-screen flex-col items-center justify-center bg-[#161410]"
      onSubmit={handleSubmit}
    >
      <div className="mb-5 flex flex-col items-center justify-center gap-1.5">
        <Link to="/">
          <img src="./logo.svg" alt="Casa do Hamburguer" className="mb-5" />
        </Link>
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
        <div className="mt-5 flex w-full flex-col gap-1.5">
          <Button title="Login" variant="default" />
          <Link to="/register">
            <Button title="Não tenho uma conta" variant="outline" />
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
