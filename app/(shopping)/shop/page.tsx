import { db } from "@/lib/db"
import { Item, Shopping } from "@/lib/schema"
import AddShop from "./addShop"

export default async function ShopPage() {
  const rows = await db.select().from(Shopping)

  const items = await db.select().from(Item)

  return (
    <div>
      <div className="p-5">
        <AddShop items={items} />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 w-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Tanggal Beli
                </th>
                <th scope="col" className="px-6 py-3">
                  Keterangan
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{new Intl.DateTimeFormat('id', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }).format(row.purchaseDate)}</td>
                  <td className="px-6 py-4">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}