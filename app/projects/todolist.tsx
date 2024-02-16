import Link from "next/link"
import { HiArrowLongLeft } from "react-icons/hi2"

export default function TodolistPage(params: any) {
  return (
    <div>
    <div className="block sm:flex justify-between mb-5 items-center">
      <Link href={'/projects'} className="flex items-center gap-3"><HiArrowLongLeft /> <span>Kembali</span></Link>
      <h2 className="mt-2 sm:mt-0 text-lg sm:text-2xl text-slate-700">{params.slug == 'todolist' ? 'Todo List' : ''}</h2>
    </div>

    <div className="mb-10 transition ease-in duration-300">
      <ul className="mb-5">
        <p className="mb-2 text-sm">Pencatatan aktifitas harian dengan menggunakan 3 status "akan", "sedang", dan "selesai".</p>
        <div className="mb-2 text-sm">
          <p className="text-slate-500">Latar Belakang :</p>
          <p>
            Kami merasa aktifitas harian kami kurang produktif, hal ini dikarenakan kami tidak mengatur rencana kegiatan yang akan kami lakukan tiap harinya.
          </p>
        </div>
        <div className="mb-2 text-sm">
          <p className="text-slate-500">Hasil :</p>
          <p>
            Kami bisa membuat rencana aktifitas harian dan kami bisa mengetahui apa saja kegiatan yang akan, sedang, dan telah kami lakukan.
          </p>
        </div>
        <div className="text-sm mb-7">
          <p className="text-slate-500">Teknologi yang digunakan :</p>
          <ul className="ms-4 list-disc">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Sqlite</li>
            <li>Drizzle ORM</li>
            <li>React-icons</li>
            <li>Vercel</li>
          </ul>
        </div>
        
      </ul>
    </div>
  </div>
  )
}