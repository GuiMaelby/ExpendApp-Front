export default function Button({children, icon, variant="primary", type="link", ...props}) {
    const styles = {
        primary : "bg-emerald-200 hover:text-slate-950",
        secundary: "border-2 border-slate-400 text-slate-500 hover:text-slate-950"
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
            <button className={variantClass}>
                {icon}
                {children} 
            </button>
        }
        </>
        
    )

}