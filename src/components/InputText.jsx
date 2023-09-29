export default function InputText({label, id, name, register=()=>{}, ...props}){
    return (
        <div className="flex flex-col gap-1 my-2">
            <label htmlFor={id} className="text-slate-950">{label}</label>
            <input id={id} type="text" {...props} className="bg-emerald-950 px-1 py-2 rounded outline-none focus:ring-1 focus:ring-lime-500"/>
        </div>
   
    )
}