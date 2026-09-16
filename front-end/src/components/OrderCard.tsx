import { Calendar, Clock, User } from "lucide-react";

type cardPedidoType = {
  id: number;
  name: string;
  date: string;
  orderTime: string;
  deliveredTime?: string;
  total: number;
};
const OrderCard = ({
  id,
  name,
  date,
  orderTime,
  deliveredTime,
  total,
}: cardPedidoType) => {
  return (
    <div className="flex flex-col gap-2 rounded-md bg-[#F2DAAC] text-[#32343E]">
      <div className="m-2.5">
        <div className="flex items-center justify-between">
          <p>#{id}</p>
          <select
            name="selectedStatus"
            id=""
            className="border-none bg-[#F2DAAC] font-bold outline-none"
          >
            <option value="Pendente" className="font-bold">
              Pendente
            </option>
            <option value="Retirado" className="font-bold">
              Retirado
            </option>
            <option value="Cancelado" className="font-bold">
              Cancelado
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2 border-b py-2.5">
          <div className="flex items-center gap-1.5">
            <User size={14} color="#32343E" strokeWidth={3} />
            <p className="text-xs text-[#32343E]">{name}</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar size={14} color="#32343E" strokeWidth={3} />
            <p className="text-xs text-[#32343E]">{date}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock size={14} color="#32343E" strokeWidth={3} />
              <p className="text-xs text-[#32343E]">{orderTime}</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} color="#32343E" strokeWidth={3} />
              <p className="text-xs text-[#32343E]">
                {deliveredTime ? deliveredTime : "-"}
              </p>
            </div>
          </div>
        </div>
        <p className="text-right text-lg font-bold">R$ {total}</p>
      </div>
    </div>
  );
};
export default OrderCard;
