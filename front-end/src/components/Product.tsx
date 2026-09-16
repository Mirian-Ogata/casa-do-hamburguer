import { ShoppingCart } from "lucide-react";
import type { ProductsType } from "../types/Products";
import { formatterPrice } from "../util/formatterPrice";

const Product = ({
  id,
  name,
  description,
  price,
  category,
  img,
}: ProductsType) => {
  return (
    <div className="">
      <div className="flex gap-2.5 text-white">
        <img
          src={`./produtos/${img}`}
          alt="duplo-da-casa"
          className="w-25 md:w-50"
        />
        <div className="flex w-full flex-col">
          <p className="text-sm font-bold uppercase md:text-lg">{name}</p>
          <p className="text-xs text-[#848484] md:text-lg">{description}</p>
          <div className="flex items-center justify-end gap-2">
            <p className="text-base font-bold text-[#F2DAAC]">
              {formatterPrice(price)}
            </p>
            <ShoppingCart size={16} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
