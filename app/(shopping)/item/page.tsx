import { db } from "@/lib/db"
import { Item, ItemType } from "@/lib/schema"
import AddItem from "./addItem";
import EditItem from "./editItem";

export default async function ItemPage() {
  const rows = await db.select().from(Item)

  const itemTypes = await db.select().from(ItemType)

  return (
    <div className=" p-5">
      <AddItem itemTypes={itemTypes}/>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 w-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Nama Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Jenis Barang
              </th>
              <th scope="col" className="px-6 py-3">
                Harga Barang (Rp)
              </th>
              <th scope="col" className="px-6 py-3">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.typeId}</td>
                <td className="px-6 py-4">{row.price}</td>
                <td>
                  <EditItem itemId={row.id} itemTypes={itemTypes}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}