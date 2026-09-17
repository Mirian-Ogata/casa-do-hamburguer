import { Minus, Plus, Trash } from "lucide-react";
import { formatterPrice } from "../util/formatterPrice";

const CartItem = () => {
  return (
    <div className="flex items-center gap-3">
      <img src="./produtos/duplo-da-casa.png" alt="" className="w-[100px]" />
      <div className="flex-1">
        <p className="text-lg font-bold uppercase">duplo da casa</p>
        <p className="text-base font-bold text-[#32343E]">
          {formatterPrice(28)}
        </p>
        <div className="mt-1 flex items-center gap-4">
          <Minus
            size={24}
            strokeWidth={3}
            color="#F2DAAC"
            className="cursor-pointer rounded-sm bg-[#C92A0E] p-1"
          />
          <p className="text-lg font-bold">1</p>
          <Plus
            size={24}
            strokeWidth={3}
            color="#F2DAAC"
            className="cursor-pointer rounded-sm bg-[#C92A0E] p-1"
          />
        </div>
      </div>
      <Trash size={18} strokeWidth={3} className="cursor-pointer" />
    </div>
  );
};
export default CartItem;
