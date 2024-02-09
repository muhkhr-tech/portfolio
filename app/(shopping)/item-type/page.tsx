import AddItemType from "./addItemType";
import ActivateButton from "./components/button/activate";

export default async function ItemTypePage() {

  const resp = await fetch("http://localhost:3000/api/item-type", {cache: 'no-store'})
  const rows = await resp.json()

  return (
    <div>
      <h4 className="ms-5">Jenis Barang</h4>
      <div className="p-5">
        <AddItemType />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 w-3">
                  No.
                </th>
                <th scope="col" className="px-6 py-3">
                  Jenis Barang
                </th>
                <th scope="col" className="px-6 py-3">
                  Active
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row: any, index: number) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{row.name}</td>
                  <td className="px-6 py-4">
                    <ActivateButton typeId={row.id} status={row.isActive} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}