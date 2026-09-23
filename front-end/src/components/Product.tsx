import { ShoppingCart } from "lucide-react";
import type { ProductType } from "../types/Products";
import { formatterPrice } from "../util/formatterPrice";
import Button from "./Button";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Product = ({
  id,
  name,
  description,
  price,
  category,
  img,
  setProducts,
}: ProductType) => {
  const { user } = useContext(UserContext);
  const handleDeleteProduct = async (id: string) => {
    try {
      if (!id) {
        console.log("ID não encontrado");
        return;
      }
      const response = await fetch(
        `http://localhost:3000/delete-product/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );
      if (!response.ok) {
        console.log("Erro ao enviar requisição");
        return;
      }
      getProducts();
    } catch (error) {
      return;
    }
  };
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");

      const data = await response.json();
      setProducts?.(data);
    } catch (error) {
      return;
    }
  };
  return (
    <div className="">
      <div className="flex gap-2.5 text-white">
        <img src={`./produtos/${img}`} className="w-25 md:w-50" />
        <div className="flex w-full flex-col">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold uppercase md:text-lg">{name}</p>
            {user?.admin && (
              <Button
                type="button"
                title="deletar"
                variant="delete"
                onClick={() => handleDeleteProduct(id)}
              />
            )}
          </div>
          <p className="text-xs text-[#848484] md:text-lg">{description}</p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-base font-bold text-[#F2DAAC]">
              {formatterPrice(price)}
            </p>
            <ShoppingCart
              size={16}
              className="cursor-pointer"
              onClick={() => alert(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
