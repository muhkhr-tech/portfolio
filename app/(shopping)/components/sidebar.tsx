import Link from "next/link";
import Menu from "../lib/navigation/menu";

export default function SidebarSection({pathname}: {pathname: string}) {
  const menu = Menu()

  return (
    <ul className="menu w-56 h-full min-h-screen bg-slate-100">
      {menu.map((item, index) => (
        <li key={index} className={pathname === item.path ? 'mb-1 bg-blue-700 text-blue-200 rounded-md': 'mb-1'}>
          <Link href={item.path}>{item.icon}</Link></li>
      ))}
    </ul>
  )
}