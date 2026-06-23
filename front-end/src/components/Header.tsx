import { Link } from "react-router";
import Button from "./Button";

const Header = () => {
  return (
    <div className="bg-[#161410]">
      <div className="md:pd-0 mx-auto flex w-full items-center justify-between p-3 md:w-[737px]">
        <img src="./logo.svg" alt="Casa do Hamburguer" />
        <Link to="/login">
          <Button title="Entrar" variant="default-users" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
