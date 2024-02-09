import { db } from "@/lib/db"
import { Item } from "@/lib/schema"

export async function GET(request: Request) {

    const resp = await db.select().from(Item)
    
    return new Response(JSON.stringify(resp))
}