'use server'

import { db } from "@/lib/db";
import { Shopping, ShoppingItem, Wallet, Withdraw } from "@/lib/schema";

export default async function AddShopAction(inputData: any, itemsChecked: any) {
  try {
    const shop = await db.insert(Shopping).values({
      description: inputData.description,
      purchaseDate: inputData.purchaseDate
    }).returning()

    let totalPrice: number = 0

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

        totalPrice = totalPrice + (item.amount * item.price)
      }
    })

    await db.insert(Withdraw).values({
      pulledOn: shop[0].createdAt.toISOString(),
      amount: totalPrice,
      description: inputData.description
    })
  
    const wallet = await db.select().from(Wallet)
    
    await db.update(Wallet).set({
      balance: wallet[0].balance - totalPrice,
      expenditure: wallet[0].expenditure + totalPrice,
    })

  } catch (err) {
    console.log(err)
  }
}