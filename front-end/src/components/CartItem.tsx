import { Minus, Plus, Trash } from "lucide-react";
import { formatterPrice } from "../util/formatterPrice";

type CartItemType = {
  title: string;
  price: number;
  img: string;
  id: string;
};
const CartItem = ({ title, price, img, id }: CartItemType) => {
  return (
    <div className="flex items-center gap-3">
      <img src={`./produtos/${img}`} alt="" className="w-[100px]" />
      <div className="flex-1">
        <p className="text-sm font-bold uppercase">{title}</p>
        <p className="text-sm font-bold text-[#32343E]">
          {formatterPrice(price)}
        </p>
        <div className="mt-1 flex items-center gap-4">
          <Minus
            size={24}
            strokeWidth={3}
            color="#F2DAAC"
            className="cursor-pointer rounded-sm bg-[#C92A0E] p-1"
          />
          <p className="text-base font-bold">1</p>
          <Plus
            size={24}
            strokeWidth={3}
            color="#F2DAAC"
            className="cursor-pointer rounded-sm bg-[#C92A0E] p-1"
          />
        </div>
      </div>
      <Trash
        size={18}
        strokeWidth={3}
        className="cursor-pointer"
        onClick={() => alert(id)}
      />
    </div>
  );
};
export default CartItem;
