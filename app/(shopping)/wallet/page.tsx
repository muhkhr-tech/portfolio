import SetIncome from "./setIncome"

export default async function WalletPage() {

  return (
    <div>
     
      <div className="hidden sm:block">
        <SetIncome />
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
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}