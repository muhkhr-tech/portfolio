import { db } from "@/lib/db"
import { ShoppingItem } from "@/lib/schema"
import { eq } from "drizzle-orm"

export async function GET(request: Request, {params}: {params: {id: number}}) {
    
    const resp = await db.select().from(ShoppingItem).where(eq(ShoppingItem.shoppingId, params.id))
    
    return new Response(JSON.stringify(resp))
}