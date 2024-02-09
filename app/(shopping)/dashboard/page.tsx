export default function DashoardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Total Belanja</h2>
          <p>Rp750.000</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Saldo</h2>
          <p>Rp500.000</p>
        </div>
      </div>
    </div>
  )
}