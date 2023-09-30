import Link from "next/link"

export default function Button({children, icon, variant="primary", type="link", ...props}){
    const styles = {
        primary : "bg-lime-500 hover:bg-lime-700",
        secundary: "border-2 border-slate-50 hover:bg-slate-300" 
    }

    const variantClass = `flex items-center gap-2 px-6 py-1 rounded ${styles[variant]}`

    return (
        <>
        {type === "link"?
            <Link href="#" {...props} className={variantClass}>
                {icon}
                {children}
            </Link>
            :
            <button className={variantClass} {...props}>
                {icon}
                {children}
            </button>
        }
        </>
    )
}