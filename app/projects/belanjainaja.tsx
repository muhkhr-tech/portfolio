'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiArrowLongLeft, HiMiniXMark } from "react-icons/hi2";

export default function BelanjainajaPage(params: any) {
  const [modal, setModal] = useState('')

  const handleToggle = (e: any) => {
    setModal(e.target.id)
  }

  return (
    <div>
      <div className="block sm:flex justify-between mb-5 items-center">
        <Link href={'/projects'} className="flex items-center gap-3"><HiArrowLongLeft /> <span>Kembali</span></Link>
        <h2 className="mt-2 sm:mt-0 text-lg sm:text-2xl text-slate-700">{params.slug == 'belanjainaja' ? 'Belanjain Aja' : ''}</h2>
      </div>

      <div className="mb-10 transition ease-in duration-300">
        <ul className="mb-5">
          <p className="mb-2 text-sm">Sebuah aplikasi berbasis web untuk mengatur pengeluaran belanja bulanan.</p>
          <div className="mb-2 text-sm">
            <p className="text-slate-500">Latar Belakang :</p>
            <p>
              Berdasarkan pengalaman kami, cukup sulit mengatur pengeluaran bulanan karena tidak adanya catatan pengeluaran belanja.
              Sehingga kami membuat aplikasi yang bisa mencatat histori pengeluaran belanja kami.
            </p>
          </div>
          <div className="text-sm mb-7">
            <p className="text-slate-500">Teknologi yang digunakan :</p>
            <ul className="ms-4 list-disc">
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Postgres Serverless SQL</li>
              <li>Drizzle ORM</li>
              <li>Vercel</li>
            </ul>
          </div>
          <div>
            <h4 className="text-semibold">~ Tampilan UI Dashboard:</h4>
            <Image
              src="/dashboard.png"
              id="dashboard"
              width={900}
              height={900}
              alt="dashboard page"
              className="mb-4 border rounded-lg shadow-md cursor-pointer"
              onClick={handleToggle}
            />

            <input type="checkbox" checked={modal=='dashboard'? true: false} className="modal-toggle" />
            <dialog className="modal" role="dialog">
              <div className="modal-box p-0 m-0 w-4/5 max-w-full">
              <div className="fixed top-2 right-2">
                  <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
                </div>

                <div className="modal-action mt-0">
                  <Image
                    src="/dashboard.png"
                    width={900}
                    height={900}
                    alt="dashboard page"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </dialog>

            <h4 className="text-semibold">~ Tampilan UI Shop:</h4>
            <Image
              src="/shop.png"
              id="shop"
              width={900}
              height={900}
              alt="dashboard page"
              className="mb-4 border rounded-lg shadow-md cursor-pointer w-full h-full"
              onClick={handleToggle}
            />

            <input type="checkbox" checked={modal=='shop'? true: false} className="modal-toggle" />
            <dialog className="modal" role="dialog">
              <div className="modal-box p-0 m-0 w-4/5 max-w-full">
                <div className="fixed top-2 right-2">
                  <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
                </div>

                <div className="modal-actionm mt-0">
                  <Image
                    src="/shop.png"
                    width={900}
                    height={900}
                    alt="dashboard page"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </dialog>

            <h4 className="text-semibold">~ Tampilan UI Wallet:</h4>
            <Image
              src="/wallet.png"
              id="wallet"
              width={900}
              height={900}
              alt="dashboard page"
              className="mb-4 border rounded-lg shadow-md cursor-pointer"
              onClick={handleToggle}
            />

            <input type="checkbox" checked={modal=='wallet'? true: false} className="modal-toggle" />
            <dialog className="modal" role="dialog">
              <div className="modal-box p-0 m-0 w-4/5 max-w-full">
              <div className="fixed top-2 right-2">
                  <button onClick={handleToggle}><HiMiniXMark size={25} /></button>
                </div>

                <div className="modal-action mt-0">
                  <Image
                    src="/wallet.png"
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
    </div>
  )
}