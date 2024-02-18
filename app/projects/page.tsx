import Image from "next/image";
import Link from "next/link";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";

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
              <div className="card-actions">
              <div className="badge badge-error text-white py-3 font-semibold text-xs"><HiOutlineXCircle size={17}/> Sedang Dikerjakan</div>
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
              <div className="card-actions">
              <div className="badge badge-accent text-white py-3 font-semibold text-xs"><HiOutlineCheckCircle size={17}/> Selesai</div>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href={'/projects/taskmaster'}>
          <div className="card card-compact border rounded-lg w-full bg-base-100 shadow-md">
            <figure>
              <Image
                src="/no-image.jpg"
                width={900}
                height={300}
                alt="TaskMaster App"
              /></figure>
            <div className="card-body">
              <h2 className="card-title">Taskmaster</h2>
              <p>Pengembangan dari projek todolist, taskmaster untuk mengatur kegiatan jangka panjang yang memiliki due date.</p>
              <div className="card-actions">
                <div className="badge badge-error text-white py-3 font-semibold text-xs"><HiOutlineXCircle size={17}/> Sedang Dikerjakan</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}