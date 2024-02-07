'use server'

import { db } from "@/lib/db";
import { User } from "@/lib/schema";
import { redirect } from "next/navigation";

export default async function AddUser(inputData: any) {
    
    await db.insert(User).values({
        name: inputData.name,
        email: inputData.email
    })

    redirect('/test')
}