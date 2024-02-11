'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import SetIncomeAction from "./components/action/setIncome"

export default function SetIncome() {
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [inputData, setInputData] = useState({
    savedOn: '',
    amount: 0,
    description: ''
  })
  const [messageInfo, setMessageInfo] = useState({
    status: '',
    message: ''
  })

  const router = useRouter()

  const handleChange = (e: any) => {
    setModal(!modal)

    if (modal) {
      setInputData({
        savedOn: '',
        amount: 0,
        description: ''
      })
    }
  }

  const hideMassageInfo = () => {
    setMessageInfo((prevData) => ({
      ...prevData,
      ["status"]: "",
      ["message"]: ""
    }))
  }

  const handleInput = (e: any) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)

    try {
      await SetIncomeAction(inputData)
      router.refresh()
      setModal(false)
      setMessageInfo((prevData) => ({
        ...prevData,
        ["status"]: "success",
        ["message"]: "Berhasil menambah data."
      }))

      setInputData({
        savedOn: '',
        amount: 0,
        description: ''
      })

    } catch (err) {
      setMessageInfo((prevData) => ({
        ...prevData,
        ["status"]: "error",
        ["message"]: "Gagal menambah data."
      }))

    } finally {
      setLoading(false)
      setTimeout(hideMassageInfo, 2000)
    }
  }

  return (
    <div>
      {messageInfo.status == "success" &&
        <div className="toast toast-center z-50">
          <div className="alert alert-success text-white py-2">
            <span className="text-sm">{messageInfo.message}</span>
          </div>
        </div>}

      {messageInfo.status == "error" &&
        <div className="toast toast-center z-50">
          <div className="alert alert-error text-white py-2">
            <span className="text-sm">{messageInfo.message}</span>
          </div>
        </div>}

      <button className="btn btn-sm mb-5 text-white btn-success" onClick={handleChange}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
        </svg> Tambah
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5 border-b-2 pb-2">Tambah Saldo</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Tanggal</span>
              </div>
              <input
                type="date"
                name="savedOn"
                value={inputData.savedOn}
                onChange={handleInput}
                className="input input-sm w-full input-bordered"
              />
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Jumlah</span>
              </div>
              <input
                type="number"
                name="amount"
                value={inputData.amount}
                onChange={handleInput}
                className="input input-sm w-full input-bordered"
                placeholder="1000000"
              />
            </div>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Keterangan</span>
              </div>
              <input
                type="text"
                name="description"
                value={inputData.description}
                onChange={handleInput}
                className="input input-sm w-full input-bordered"
                placeholder="Gaji bulan januari"
              />
            </div>
            <div className="modal-action">
              {!isLoading ? (
                <div>
                  <button type="button" className="btn btn-sm me-1" onClick={handleChange}>
                    Batal
                  </button>
                  <button type="submit" className="btn btn-sm btn-primary">
                    Simpan
                  </button>
                </div>
              ) : (
                <button type="button" className="btn btn-sm loading"></button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}