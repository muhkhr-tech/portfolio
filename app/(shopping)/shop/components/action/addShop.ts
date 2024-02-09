'use server'

import { db } from "@/lib/db";
import { Shopping, ShoppingItem } from "@/lib/schema";

export default async function AddShopAction(inputData: any, itemsChecked: any, amounts: any, units: any) {
  try {
    const shop = await db.insert(Shopping).values({
      description: inputData.description,
      purchaseDate: inputData.purchaseDate
    }).returning()

    itemsChecked.map(async (item: any, index: any) => {
      let amount = 0
      let unit = ''
      let isNotValid = true
      let idx = index
      while (isNotValid) {
        if (amounts[idx] > 0 && units[idx] !== '') {
          amount = amounts[idx]
          unit = units[idx]
          isNotValid = false
        }
        idx = idx + 1
      }
      
      await db.insert(ShoppingItem).values({
        itemId: item.id,
        shoppingId: shop[0].id,
        amount: amount,
        price: item.price,
        unit: unit,
        totalPrice: amount * item.price
      })
    })

  } catch (err) {
    console.log(err)
  }
}