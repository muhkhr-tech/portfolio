'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import AddShopAction from "./components/action/addShop"

export default function AddShop({ items }: any) {
  const [modal, setModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isloadData, setLoadData] = useState(false)
  const [inputData, setInputData] = useState({
    purchaseDate: '',
    description: ''
  })
  const [itemSearched, setItemSearched] = useState(items)
  const [itemName, setItemName] = useState('')
  const [amount, setAmount] = useState<number[]>([])
  const [unit, setUnit] = useState<string[]>([])
  const [itemsChecked, setItemsChecked] = useState([])
  const [messageInfo, setMessageInfo] = useState({
    status: '',
    message: ''
  })

  const router = useRouter()

  const handleChange = (e: any) => {
    setModal(!modal)

    if (modal) {
      setInputData((prevData) => ({
        ...prevData,
        ['purchaseDate']: '',
        ['description']: ''
      }))

      setItemsChecked([])
    }
  }

  const hideMassageInfo = () => {
    setMessageInfo((prevData) => ({
      ...prevData,
      ["status"]: "",
      ["message"]: ""
    }))
  }

  const handleSearch = async (e: any) => {
    setItemName(e.target.value)

    setLoadData(true)

    try {
      const resp = await fetch(`/api/item?name=${e.target.value}`)
      const data = await resp.json()

      setItemSearched(data)
    } catch (err) {
      console.log(err)
    }

    setLoadData(false)
  }

  const handleCheck = (e: any) => {
    setItemsChecked((prevData: any) => {
      const isItemChecked = prevData.some(
        (item: any) => item.id === parseInt(e.target.value)
      )

      if (isItemChecked) {
        setAmount((prevAmount) => {
          const updatedAmount = [...prevAmount]
          updatedAmount[parseInt(e.target.id.split("-")[0])] = 0
          return updatedAmount
        })

        setUnit((prevUnit) => {
          const updatedUnit = [...prevUnit]
          updatedUnit[parseInt(e.target.id.split("-")[0])] = ''
          return updatedUnit
        })
        return prevData.filter((item: any) => item.id !== parseInt(e.target.value))
      } else {

        return [...prevData, {
          id: parseInt(e.target.value),
          price: parseInt(e.target.id.split('-')[1])
        }];
      }
    })
  }

  const handleInput = (e: any) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleAmountInput = (e: any) => {
    setAmount((prevData) => {
      const updatedAmount = [...prevData]
      updatedAmount[parseInt(e.target.id.split("-")[1])] = parseInt(e.target.value)
      return updatedAmount
    })
  }

  const handleUnitInput = (e: any) => {
    setUnit((prevData) => {
      const updatedUnit = [...prevData]
      updatedUnit[parseInt(e.target.id.split("-")[1])] = e.target.value
      return updatedUnit
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      await AddShopAction(inputData, itemsChecked, amount, unit)
      router.refresh()
      setModal(false)
      setMessageInfo((prevData) => ({
        ...prevData,
        ["status"]: "success",
        ["message"]: "Berhasil menambah data."
      }))

      setInputData((prevData) => ({
        ...prevData,
        ['purchaseDate']: '',
        ['description']: ''
      }))

      setItemsChecked([])

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
        <div className="modal-box w-2/5 max-w-full">
          <h3 className="font-bold text-lg mb-5 border-b-2 pb-2">Tambah Belanja</h3>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5">
              <div className="form-control">
                <div className="label">
                  <span className="label-text">Tanggal Beli</span>
                </div>
                <input
                  type="date"
                  name="purchaseDate"
                  value={inputData.purchaseDate}
                  onChange={handleInput}
                  required
                  className="input input-sm w-full input-bordered"
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
                  required
                  className="input input-sm w-full input-bordered"
                />
              </div>

              <div className="form-control">
                <div className="label">
                  <span className="label-text">Cari Barang</span>
                </div>
                <input
                  type="text"
                  value={itemName}
                  onChange={handleSearch}
                  autoComplete="off"
                  placeholder="minyak goreng"
                  className="input input-sm w-full input-bordered"
                />
              </div>
            </div>

            <div className="form-control mt-4">
              <div className="relative overflow-x-auto">
                {isloadData ? <span className="loading"></span>
                  : <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 w-1"></th>
                        <th scope="col" className="px-1 py-0 w-1">No.</th>
                        <th scope="col" className="px-6 py-0">Nama Barang</th>
                        <th scope="col" className="px-6 py-0">Harga</th>
                        <th scope="col" className="w-4">Jumlah</th>
                        <th scope="col" className="px-6 py-0 w-3">Satuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemSearched.map((row: any, index: any) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td>
                            <div className="form-control">
                              <label className="cursor-pointer label">
                                <input type="checkbox" checked={itemsChecked.some((item: any) => item.id === row.id)} value={row.id} id={index + "-" + row.price} onChange={handleCheck} className="checkbox checkbox-warning" />
                              </label>
                            </div>
                          </td>
                          <td className="px-1 w-1">{index + 1}</td>
                          <td className="px-6">{row.name}</td>
                          <td className="px-6">{row.price}</td>
                          <td className="">
                            <input
                              type="number"
                              min={1}
                              id={"amount-" + index}
                              value={amount[index] || ''}
                              onChange={handleAmountInput}
                              required
                              autoComplete="off"
                              placeholder="2"
                              disabled={!itemsChecked.some((item: any) => item.id === row.id)}
                              className="input input-sm w-full input-bordered"
                            />
                          </td>
                          <td className="px-6">
                            <input
                              type="text"
                              id={"unit-" + index}
                              value={unit[index] || ''}
                              onChange={handleUnitInput}
                              required
                              autoComplete="off"
                              placeholder="kg"
                              disabled={!itemsChecked.some((item: any) => item.id === row.id)}
                              className="input input-sm w-full input-bordered"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>}
              </div>
            </div>
            <div className="modal-action">
              {!isLoading ? (
                <div>
                  <button type="button" className="btn btn-sm me-2" onClick={handleChange}>
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