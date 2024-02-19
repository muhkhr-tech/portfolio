'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HiArrowLongLeft, HiMiniXMark } from "react-icons/hi2"

export default function DoDoingDonePage(params: any) {
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
          <div>
          <h4 className="text-semibold">~ Tampilan UI Home:</h4>
            <Image
              src="/home-dodoingdone.png"
              id="home-dodoingdone"
              width={900}
              height={900}
              alt="home-dodoingdone page"
              className="mb-4 border rounded-lg shadow-md cursor-pointer"
              onClick={handleToggle}
            />

            <input type="checkbox" checked={modal=='home-dodoingdone'? true: false} className="modal-toggle" />
            <dialog className="modal" role="dialog">
              <div className="modal-box p-0 m-0 w-4/5 max-w-full">
              <div className="fixed top-2 right-2">
                  <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
                </div>

                <div className="modal-action mt-0">
                  <Image
                    src="/home-dodoingdone.png"
                    width={900}
                    height={900}
                    alt="home-dodoingdone page"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </dialog>

            <h4 className="text-semibold">~ Tampilan UI Projects:</h4>
            <Image
              src="/projects-dodoingdone.png"
              id="projects-dodoingdone"
              width={900}
              height={900}
              alt="dashboard page"
              className="mb-4 border rounded-lg shadow-md cursor-pointer w-full h-full"
              onClick={handleToggle}
            />

            <input type="checkbox" checked={modal=='projects-dodoingdone'? true: false} className="modal-toggle" />
            <dialog className="modal" role="dialog">
              <div className="modal-box p-0 m-0 w-4/5 max-w-full">
                <div className="fixed top-2 right-2">
                  <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
                </div>

                <div className="modal-actionm mt-0">
                  <Image
                    src="/projects-dodoingdone.png"
                    width={900}
                    height={900}
                    alt="dashboard page"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </dialog>

            <h4 className="text-semibold">~ Tampilan UI Form Add Project:</h4>
            <Image
              src="/addproject-dodoingdone.png"
              id="addproject-dodoingdone"
              width={900}
              height={900}
              alt="dashboard page"
              className="mb-4 border rounded-lg shadow-md cursor-pointer"
              onClick={handleToggle}
            />

            <input type="checkbox" checked={modal=='addproject-dodoingdone'? true: false} className="modal-toggle" />
            <dialog className="modal" role="dialog">
              <div className="modal-box p-0 m-0 w-4/5 max-w-full">
              <div className="fixed top-2 right-2">
                  <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
                </div>

                <div className="modal-action mt-0">
                  <Image
                    src="/addproject-dodoingdone.png"
                    width={900}
                    height={900}
                    alt="dashboard page"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </dialog>
          </div>
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  )
}