export default function OngoingProjectsSection() {
  return (
    <div className="mb-10 transition ease-in duration-300" id="ongoing">
      <h2 className="text-3xl text-slate-700 mb-5">Ongoing Projects</h2>
      <ul className="mb-5">
        <p>~ “Belanjain Aja”</p>
        <p className="mb-2 text-sm">
          Sebuah website yang berfungsi untuk mengatur belanja bulanan sesuai dengan budget yang ada.
        </p>
        <div className="mb-2 text-sm">
          <p className="text-slate-500">Latar Belakang :</p>
          <p>
            Sulitnya mengatur pengeluaran bulanan kami.
          </p>
        </div>
        <div className="text-sm">
          <p className="text-slate-500">Teknologi yang digunakan :</p>
          NextJs
        </div>
      </ul>
    </div>
  )
}