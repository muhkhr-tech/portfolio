'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import AddItemTypeAction from "./components/action/addItemType"

export default function AddItemType() {
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [messageInfo, setMessageInfo] = useState({
    status: '',
    message: ''
  })

  const router = useRouter()

  const handleChange = (e: any) => {
    setModal(!modal)

    if (modal) {
      setName('')
    }
  }

  const hideMassageInfo = () => {
    setMessageInfo((prevData) => ({
      ...prevData,
      ["status"]: "",
      ["message"]: ""
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)

    try {
      await AddItemTypeAction(name)
      router.refresh()
      setModal(false)
      setMessageInfo((prevData) => ({
        ...prevData,
        ["status"]: "success",
        ["message"]: "Berhasil menambah data."
      }))

      setName('')

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
            <span>{messageInfo.message}</span>
          </div>
        </div>}

        {messageInfo.status == "error" &&
        <div className="toast toast-center z-50">
          <div className="alert alert-error text-white py-2">
            <span>{messageInfo.message}</span>
          </div>
        </div>}

      <button className="btn btn-sm mb-5 btn-success" onClick={handleChange}>
        + Tambah
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5 border-b-2 pb-2">Tambah Jenis Barang</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="label">
                <span className="label-text">Jenis Barang</span>
              </div>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-sm w-full input-bordered"
                placeholder="Sabun"
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