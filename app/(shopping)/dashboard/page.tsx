import Example from "./chart"

export default async function DashoardPage() {
  const currentDate = new Date()

  const resp = await fetch(`${process.env.BASE_URL}/api/wallet`, { cache: 'no-store' })
  const wallet = await resp.json()

  const resp_deposit = await fetch(`${process.env.BASE_URL}/api/deposit?date=${currentDate}`, { cache: 'no-store' })
  const deposit = await resp_deposit.json()

  const resp_withdraw = await fetch(`${process.env.BASE_URL}/api/withdraw?date=${currentDate}`, { cache: 'no-store' })
  const withdraw = await resp_withdraw.json()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
      <div className="hidden sm:block col-span-4">
        <Example/>
      </div>
      <div>
      <div className="card bg-green-200 card-compact shadow-sm mb-2">
          <div className="card-body">
            <h2 className="card-title">Status</h2>
            <p className="text-green-700 inline-flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg> Belanjain Aja</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-sm border border-slate-50 mb-2">
          <div className="card-body">
            <h2 className="card-title">Transaksi</h2>
            <p className="font-semibold text-slate-500">Pemasukan</p>
            <p className="">Rp{wallet[0].income}</p>
            <hr />
            <p className="font-semibold text-slate-500">Pengeluaran</p>
            <p className="">Rp{wallet[0].expenditure}</p>
            <hr />
            <p className="font-semibold text-slate-500">Saldo</p>
            <p className="text-warning">Rp{wallet[0].balance}</p>
          </div>
        </div>
      </div>
    </div>
  )
}