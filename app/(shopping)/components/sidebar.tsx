import Link from "next/link";

export default function SidebarSection() {
  return (
    <ul className="menu w-56 mt-5">
      <li className="mb-1"><Link href={"/dashboard"}>Dasbor</Link></li>
      <li className="mb-1"><Link href={"/item"}>Barang</Link></li>
      <li className="mb-1"><Link href={"/item-type"}>Jenis Barang</Link></li>
      <li className="mb-1"><Link href={"/shop"}>Belanja</Link></li>
    </ul>
  )
}