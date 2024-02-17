'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HiArrowLongLeft, HiMiniXMark } from "react-icons/hi2"

export default function TodolistPage(params: any) {
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
          <p className="mb-2 text-sm">Pencatatan aktifitas harian dengan menggunakan 3 status akan, sedang, dan selesai.</p>
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
      <div>
        <h4 className="text-semibold">~ Tampilan UI Home:</h4>
        <Image
          src="/root-todolist.png"
          id="home"
          width={900}
          height={900}
          alt="home page"
          className="mb-4 border rounded-lg shadow-md cursor-pointer"
          onClick={handleToggle}
        />

        <input type="checkbox" checked={modal == 'home' ? true : false} className="modal-toggle" />
        <dialog className="modal" role="dialog">
          <div className="modal-box p-0 m-0 w-4/5 max-w-full">
            <div className="fixed top-2 right-2">
              <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
            </div>

            <div className="modal-action mt-0">
              <Image
                src="/root-todolist.png"
                width={900}
                height={900}
                alt="home page"
                className="w-full h-full"
              />
            </div>
          </div>
        </dialog>

        <h4 className="text-semibold">~ Tampilan UI DO:</h4>
        <Image
          src="/do-todolist.png"
          id="do-todolist"
          width={900}
          height={900}
          alt="dashboard page"
          className="mb-4 border rounded-lg shadow-md cursor-pointer w-full h-full"
          onClick={handleToggle}
        />

        <input type="checkbox" checked={modal == 'do-todolist' ? true : false} className="modal-toggle" />
        <dialog className="modal" role="dialog">
          <div className="modal-box p-0 m-0 w-4/5 max-w-full">
            <div className="fixed top-2 right-2">
              <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
            </div>

            <div className="modal-actionm mt-0">
              <Image
                src="/do-todolist.png"
                width={900}
                height={900}
                alt="dashboard page"
                className="w-full h-full"
              />
            </div>
          </div>
        </dialog>

        <h4 className="text-semibold">~ Tampilan UI DOING:</h4>
        <Image
          src="/doing-todolist.png"
          id="doing-todolist"
          width={900}
          height={900}
          alt="dashboard page"
          className="mb-4 border rounded-lg shadow-md cursor-pointer"
          onClick={handleToggle}
        />

        <input type="checkbox" checked={modal == 'doing-todolist' ? true : false} className="modal-toggle" />
        <dialog className="modal" role="dialog">
          <div className="modal-box p-0 m-0 w-4/5 max-w-full">
            <div className="fixed top-2 right-2">
              <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
            </div>

            <div className="modal-action mt-0">
              <Image
                src="/doing-todolist.png"
                width={900}
                height={900}
                alt="dashboard page"
                className="w-full h-full"
              />
            </div>
          </div>
        </dialog>

        <h4 className="text-semibold">~ Tampilan UI DONE:</h4>
        <Image
          src="/done-todolist.png"
          id="done-todolist"
          width={900}
          height={900}
          alt="dashboard page"
          className="mb-4 border rounded-lg shadow-md cursor-pointer"
          onClick={handleToggle}
        />

        <input type="checkbox" checked={modal == 'done-todolist' ? true : false} className="modal-toggle" />
        <dialog className="modal" role="dialog">
          <div className="modal-box p-0 m-0 w-4/5 max-w-full">
            <div className="fixed top-2 right-2">
              <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
            </div>

            <div className="modal-action mt-0">
              <Image
                src="/done-todolist.png"
                width={900}
                height={900}
                alt="dashboard page"
                className="w-full h-full"
              />
            </div>
          </div>
        </dialog>

        <h4 className="text-semibold">~ Tampilan UI HISTORY:</h4>
        <Image
          src="/history-todolist.png"
          id="history-todolist"
          width={900}
          height={900}
          alt="dashboard page"
          className="mb-4 border rounded-lg shadow-md cursor-pointer"
          onClick={handleToggle}
        />

        <input type="checkbox" checked={modal == 'history-todolist' ? true : false} className="modal-toggle" />
        <dialog className="modal" role="dialog">
          <div className="modal-box p-0 m-0 w-4/5 max-w-full">
            <div className="fixed top-2 right-2">
              <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
            </div>

            <div className="modal-action mt-0">
              <Image
                src="/history-todolist.png"
                width={900}
                height={900}
                alt="dashboard page"
                className="w-full h-full"
              />
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}