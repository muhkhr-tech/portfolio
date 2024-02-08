'use server'

import { db } from "@/lib/db";
import { Shopping, ShoppingItem } from "@/lib/schema";

export default async function AddShopAction(inputData: any, itemsChecked: any, amounts: any, units: any) {
  try {
    const shop = await db.insert(Shopping).values({
      description: inputData.description,
      purchaseDate: inputData.purchaseDate
    }).returning()

    itemsChecked.map(async (item, index) => {
      await db.insert(ShoppingItem).values({
        itemId: item.id,
        shoppingId: shop[0].id,
        amount: amounts[index],
        price: item.price,
        unit: units[index],
        totalPrice: amounts[index] * item.price
      })
    })

  } catch (err) {
    console.log(err)
  }
}