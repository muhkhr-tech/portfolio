import AddItem from "./addItem";
import EditItem from "./editItem";

export default async function ItemPage() {
  const resp_item = await fetch("http://localhost:3000/api/item", {cache: "no-store"})
  const rows = await resp_item.json()

  const resp_item_type = await fetch("http://localhost:3000/api/item-type", {cache: "no-store"})
  const itemTypes = await resp_item_type.json()

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
            {rows.map((row: any, index: number) => (
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