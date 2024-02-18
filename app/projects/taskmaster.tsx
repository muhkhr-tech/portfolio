'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HiArrowLongLeft, HiMiniXMark } from "react-icons/hi2"

export default function TaskmasterPage(params: any) {
  const [modal, setModal] = useState('')

  const handleToggle = (e: any) => {
    setModal(e.target.id)
  }

  return (
    <div>
      <div className="block sm:flex justify-between mb-5 items-center">
        <Link href={'/projects'} className="flex items-center gap-3"><HiArrowLongLeft /> <span>Kembali</span></Link>
        <h2 className="mt-2 sm:mt-0 text-lg sm:text-2xl text-slate-700">{params.slug == 'todolist' ? 'Todo List' : ''}</h2>
      </div>

      <div className="mb-10 transition ease-in duration-300">
        <ul className="mb-5">
          <p className="mb-2 text-sm">Menagatur deadline dari suatu target dengan menggunakan 3 status akan, sedang, dan selesai.</p>
          <div className="mb-2 text-sm">
            <p className="text-slate-500">Latar Belakang :</p>
            <p>
              Untuk meningkatkan produktifitas, kami membuat target dengan todo harian di dalamnya. Kami menyatat todo tersebut pada kertas, dan hal ini memiliki kekurangan berupa banyaknya kertas yang kami butuhkan setiap kali ingin membuat suatu target. Selain itu kami kesulitan dalam melakukan evaluasi. 
            </p>
          </div>
          <div className="mb-2 text-sm">
            <p className="text-slate-500">Hasil :</p>
            <p>
              Kami bisa membuat banyak target dan menentukan due date dari masing-masing target dan kami bisa melakukan evaluasi.
            </p>
          </div>
          <div className="text-sm mb-7">
            <p className="text-slate-500">Teknologi yang digunakan :</p>
            <ul className="ms-4 list-disc">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Postgres Serverless</li>
              <li>Drizzle ORM</li>
              <li>React-icons</li>
              <li>Vercel</li>
            </ul>
          </div>
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  )
}