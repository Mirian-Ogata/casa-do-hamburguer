import { Link, useLocation } from "react-router";
import Button from "./Button";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect } from "react";
import { Box, LayoutGrid, LogOut, Plus, ShoppingCart } from "lucide-react";

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();

  console.log(location.pathname);

  const handleAuthUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/me", {
        credentials: "include",
      });

      if (response.status !== 200) {
        return;
      }

      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      return;
    }
  };

  const handleLogOut = async () => {
    try {
      const response = await fetch("http://localhost:3000/logout", {
        credentials: "include",
        method: "POST",
      });
      if (!response.ok) {
        console.log("não deu certo");
        return;
      }
      setUser(null);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    handleAuthUser();
  }, []);
  const getNavItemClass = (path: string) => {
    const baseClass =
      "flex h-[35px] w-[35px] items-center justify-center rounded-sm border";

    if (location.pathname === path) {
      return `${baseClass} bg-[#F2DAAC] text-[#161410]`;
    } else {
      return baseClass;
    }
  };
  return (
    <div className="bg-[#161410]">
      <div className="mx-auto flex w-full items-center justify-between p-3 md:w-[737px]">
        <Link to="/">
          <img src="./logo.svg" alt="Casa do Hamburguer" />
        </Link>
        {user ? (
          <div className="flex items-center gap-8">
            {user.admin && (
              <div className="hidden cursor-pointer items-center gap-2.5 text-[#F2DAAC] md:flex">
                <Link to="/">
                  <div className={getNavItemClass("/")}>
                    <Box />
                  </div>
                </Link>
                <Link to="/pedidos">
                  <div className={getNavItemClass("/pedidos")}>
                    <LayoutGrid />
                  </div>
                </Link>
                <Link to="">
                  <div className={getNavItemClass("")}>
                    <Plus />
                  </div>
                </Link>
              </div>
            )}

            <div className="relative cursor-pointer">
              <ShoppingCart size={18} color="white" />
              <p className="absolute -top-3 -right-3 flex h-4 w-4 items-center justify-center rounded-full bg-[#F2DAAC] text-[#161410]">
                1
              </p>
            </div>
            <div className="flex items-center gap-3 text-white">
              <p>{user.name}</p>
              <LogOut
                color="white"
                size={18}
                className="cursor-pointer"
                onClick={handleLogOut}
              />
            </div>
          </div>
        ) : (
          <Link to="/login">
            <Button title="Entrar" variant="default-beige" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
