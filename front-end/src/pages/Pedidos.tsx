import { useState } from "react";
import { Link } from "react-router";
import OrderCard from "../components/OrderCard";

const Pedidos = () => {
  const [category, setCategory] = useState("Pendentes");

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getCategoryClass = (categoryName: string) => {
    const elementoSelecionado =
      "flex items-center justify-center p-2 text-sm md:text-base cursor-pointer h-[35px] max-w-[130px] min-w-[100px] cursor-pointer rounded-sm bg-[#F2DAAC] font-bold border border-[#F2DAAC]";
    const elementoNaoSelecionado =
      "flex items-center justify-center p-2 text-sm md:text-base cursor-pointer h-[35px] max-w-[130px] min-w-[100px] rounded-sm bg-transparent border-[#F2DAAC] border font-bold text-[#F2DAAC] border-[#F2DAAC] ";

    if (category === categoryName) {
      return elementoSelecionado;
    } else {
      return elementoNaoSelecionado;
    }
  };
  return (
    <div className="mx-auto flex w-full flex-col p-3 md:w-[737px]">
      <div className="flex gap-2">
        <Link to="">
          <div
            className={getCategoryClass("Pendentes")}
            onClick={() => handleChangeCategory("Pendentes")}
          >
            Pendentes
          </div>
        </Link>
        <Link to="">
          <div
            className={getCategoryClass("Retirados")}
            onClick={() => handleChangeCategory("Retirados")}
          >
            Retirados
          </div>
        </Link>
        <Link to="">
          <div
            className={getCategoryClass("Cancelados")}
            onClick={() => handleChangeCategory("Cancelados")}
          >
            Cancelados
          </div>
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        <OrderCard
          id={2}
          name="Mirian Harumi"
          date="11/08/2026"
          orderTime="17:00"
          deliveredTime="18:00"
          total={157.48}
        />
      </div>
    </div>
  );
};
export default Pedidos;
