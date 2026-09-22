"use server"

import {likeProduct as likeProductInDb } from "@/lib/products"
import { revalidatePath } from "next/cache"

export async function likeProductAction(lid: string) {
    const newLikes = await likeProductInDb(lid)
    revalidatePath(`/products/${lid}`)
    return newLikes
}