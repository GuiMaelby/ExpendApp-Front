import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-slate-900 p-6">
            <ul className="flex items-end gap-12 text-slate-500">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-slate-100">
                            ExpendApp
                        </h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="despesas" && "text-slate-100"} href="/despesas">
                        compras
                    </Link>
                </li>
                <li>
                    <Link className={active=="contas" && "text-slate-100"} href="/contas">
                        saldo
                    </Link>
                </li>                
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>

        </nav>
    )
}