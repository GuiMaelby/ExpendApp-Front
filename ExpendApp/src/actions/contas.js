"use server"

import { revalidatePath } from "next/cache"

export async function create(formData){
    "use server"
    const url = "http//localhost:8080/api/contas"
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers:{
            "Content-type": "applicantion/json"
        }
    }
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        return {message: "Erro ao adicionar"}
    }

    revalidatePath("/contas")
    return {message: "ok"}
}