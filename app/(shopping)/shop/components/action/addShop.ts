'use server'

import { db } from "@/lib/db";
import { Shopping, ShoppingItem } from "@/lib/schema";

export default async function AddShopAction(inputData: any, itemsChecked: any) {
  try {
    const shop = await db.insert(Shopping).values({
      description: inputData.description,
      purchaseDate: inputData.purchaseDate
    }).returning()

    itemsChecked.map(async (item: any) => {
      
      if (item.id !== 0) {
        await db.insert(ShoppingItem).values({
          itemId: item.id,
          shoppingId: shop[0].id,
          amount: item.amount,
          price: item.price,
          unit: item.unit,
          totalPrice: item.amount * item.price
        })
      }
    })

  } catch (err) {
    console.log(err)
  }
}