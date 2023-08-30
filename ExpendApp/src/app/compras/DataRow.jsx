import DropMenu from "@/components/DropMenu";
import { CreditCardIcon } from "@heroicons/react/24/outline";

export default function DataRow({compra}){
    return (
        <div id="data-row" className="flex items-center justify-between hover:bg-slate-800 p-2 rounded cursor-pointer">
            <div className="flex gap-2">
              <CreditCardIcon className="h-6 w-6" />
              <span>{compra.nome}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span>R$150.00</span>
              <DropMenu />
            </div>
        </div>
    )
}