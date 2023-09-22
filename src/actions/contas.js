"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/contas"

export async function create(formData){
    "use server"

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

export async function getContas() {
    const resp = await fetch(url)
    return resp.json()
  }