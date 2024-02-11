'use server'

import { db } from "@/lib/db";
import { Deposit, Wallet } from "@/lib/schema";
import { eq } from "drizzle-orm";

export default async function SetIncomeAction(inputData: any) {
  const data = inputData

  await db.insert(Deposit).values({
    savedOn: data.savedOn,
    amount: data.amount,
    description: data.description
  })

  const wallet = await db.select().from(Wallet)

  await db.update(Wallet).set({
    balance: wallet[0].balance + parseInt(data.amount),
    income: wallet[0].income + parseInt(data.amount),
  })
}