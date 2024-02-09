import { db } from "@/lib/db"
import { Item } from "@/lib/schema"
import { ilike } from "drizzle-orm"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  let resp = null
  
  if (name) {
    resp = await db.select().from(Item).where(ilike(Item.name, "%" + name + "%"))
  } else {
    resp = await db.select().from(Item)
  }

  return new Response(JSON.stringify(resp))
}