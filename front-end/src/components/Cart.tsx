import { X } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";

type CartTypeProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  showCart: boolean;
};
const Cart = ({ setShowCart, showCart }: CartTypeProps) => {
  return (
    <div className="absolute right-0 flex h-screen w-[375px] flex-col bg-[#F2DAAC] p-5">
      <div className="flex items-center justify-between text-[#161410]">
        <X
          size={24}
          className="cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        />
        <p className="text-lg font-bold uppercase">meu carrinho</p>
      </div>
      <div className="mt-10 flex flex-1 flex-col gap-3">
        <CartItem />
        <CartItem />
      </div>
      <Button title="Finalizar Pedido" />
    </div>
  );
};

export default Cart;
