import { db } from "@/lib/db";
import AddButton from "./components/button/add";
import { User } from "@/lib/schema";

export default async function Cart({
  params
}: {
  params: { user: string }
}): Promise<JSX.Element> {

  const rows = await db.select().from(User)

  return (
    <div className=" p-5">
      <AddButton/>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nomor
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}