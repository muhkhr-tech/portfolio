import { db } from "@/lib/db"
import { Item } from "@/lib/schema"
import { ilike } from "drizzle-orm"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const name = searchParams.get('name')

    const resp = await db.select().from(Item).where(ilike(Item.name, "%"+name+"%"))
    
    return new Response(JSON.stringify(resp))
}