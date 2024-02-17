import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-xl mb-4 font-semibold text-center sm:text-left">PROJEK</h1>
      <div className="grid gird-cols-1 sm:grid-cols-2 gap-4">
        <Link
          href={'/projects/belanjainaja'}>
          <div className="card card-compact border rounded-lg w-full bg-base-100 shadow-md">
            <figure>
              <Image
                src="/dashboard.png"
                width={900}
                height={900}
                alt="dashboard page"
              /></figure>
            <div className="card-body">
              <h2 className="card-title">BelanjainAja</h2>
              <p>Sebuah aplikasi berbasis web untuk mengatur pengeluaran belanja bulanan.</p>
              <div className="card-actions items-end justify-between">
                <div>Status: <span className="text-red-500">Sedang Dikerjakan</span></div>
                <button className="btn btn-sm btn-primary">Detail</button>
              </div>
            </div>
          </div>
        </Link>
        
        <Link
          href={'/projects/todolist'}>
          <div className="card card-compact border rounded-lg w-full bg-base-100 shadow-md">
            <figure>
              <Image
                src="/do-todolist.png"
                width={900}
                height={900}
                alt="dashboard page"
              /></figure>
            <div className="card-body">
              <h2 className="card-title">Todo List</h2>
              <p>Pencatatan aktifitas harian dengan menggunakan 3 status akan, sedang, dan selesai.</p>
              <div className="card-actions items-end justify-between">
                <div>Status: <span className="text-red-500">Sedang Dikerjakan</span></div>
                <button className="btn btn-sm btn-primary">Detail</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}