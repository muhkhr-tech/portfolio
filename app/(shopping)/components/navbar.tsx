import Link from "next/link";
import Menu from "../lib/navigation/menu";

export default function NavbarSection({pathname}: {pathname: string}) {
  const menu = Menu()

  return (
    <ul className="fixed bottom-0 flex justify-between w-screen py-4 px-14">
      {menu.map((item, index) => (
        <li key={index} className={pathname===item.path ? "bg-blue-700 text-white p-2 rounded-full": "p-2"}>
          <Link href={item.path}>{item.icon}</Link></li>
      ))}
    </ul>
  )
}