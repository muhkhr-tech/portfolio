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
  const [amount, setAmount] = useState([0])
  const [unit, setUnit] = useState([''])
  const [itemsChecked, setItemsChecked] = useState([{
    id: 0,
    price: 0
  }])
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
    setItemsChecked((prevData) => {
      const isItemChecked = prevData.some(
        (item) => item.id === parseInt(e.target.value)
      )

      if (isItemChecked) {
        amount.splice(prevData.findIndex((item) => item.id === parseInt(e.target.value)))
        setAmount(amount)

        unit.splice(prevData.findIndex((item) => item.id === parseInt(e.target.value)))
        setUnit(unit)
        return prevData.filter((item) => item.id !== parseInt(e.target.value))
      } else {
        return [...prevData, {
          id: parseInt(e.target.value),
          price: parseInt(e.target.id.split('-')[1])
        }];
      }
    })

    console.log(itemsChecked,'---')
    console.log(amount,'............')
    console.log(unit,'+++++')
  }

  const handleInput = (e: any) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }

  const handleAmountInput = (e: any) => {
    if (amount.length > 0) {
      console.log('1')
    amount.splice(itemsChecked.findIndex((item) => item.id == e.target.id.split("-")[1]), 1, parseInt(e.target.value))
    } else {
      console.log('2')
      amount.splice(itemsChecked.findIndex((item) => item.id == e.target.id.split("-")[1]), 0, parseInt(e.target.value))
    }
    setAmount(amount)
    // setAmount((prevData) => {
    //   return prevData.map((prevItem, index) => {
    //     if (index===itemsChecked.findIndex((item) => item.id===e.target.id.split("-")[1])) {
    //       return parseInt(e.target.value)
    //     } else {
    //       return prevItem
    //     }
    //   })
    // })
  }

  const handleUnitInput = (e: any) => {
    // if (unit.length > 0) {
    //   unit.splice(itemsChecked.findIndex((item) => item.id == e.target.id.split("-")[1]), 1, e.target.value)
    //   } else {
    //     unit.splice(itemsChecked.findIndex((item) => item.id == e.target.id.split("-")[1]), 0, e.target.value)
    //   }
    //   setUnit(unit)
    setUnit((prevData) => {
      return prevData.map((prevItem, index) => {
        if (index===itemsChecked.findIndex((item) => item.id===e.target.id.split("-")[1])) {
          return e.target.value
        } else {
          return prevItem
        }
      })
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    // setLoading(false)

    console.log(itemsChecked)
    console.log(amount,'amount')
    console.log(unit,'unit')

    // try {
    //   await AddShopAction(inputData, itemsChecked, amount, unit)
    //   router.refresh()
    //   setModal(false)
    //   setMessageInfo((prevData) => ({
    //     ...prevData,
    //     ["status"]: "success",
    //     ["message"]: "Berhasil menambah data."
    //   }))

    //   setInputData((prevData) => ({
    //     ...prevData,
    //     ['purchaseDate']: '',
    //     ['description']: ''
    //   }))

    //   setItemsChecked([])

    // } catch (err) {
    //   setMessageInfo((prevData) => ({
    //     ...prevData,
    //     ["status"]: "error",
    //     ["message"]: "Gagal menambah data."
    //   }))

    // } finally {
    //   setLoading(false)
    //   setTimeout(hideMassageInfo, 2000)
    // }
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
                        <th scope="col" className="px-6 py-0 w-3">Jumlah</th>
                        <th scope="col" className="px-6 py-0 w-3">Satuan</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itemSearched.map((row: any, index: any) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td>
                            <div className="form-control">
                              <label className="cursor-pointer label">
                                <input type="checkbox" checked={itemsChecked.some((item) => item.id === row.id)} value={row.id} id={row.id+"-"+row.price} onChange={handleCheck} className="checkbox checkbox-warning" />
                              </label>
                            </div>
                          </td>
                          <td className="px-1 w-1">{index + 1}</td>
                          <td className="px-6">{row.name}</td>
                          <td className="px-6">{row.price}</td>
                          <td className="px-6">
                            <input
                              type="number"
                              min={1}
                              id={"amount-" + row.id}
                              value={amount[itemsChecked.findIndex((item) => item.id === row.id)]}
                              onChange={handleAmountInput}
                              required
                              autoComplete="off"
                              placeholder="2"
                              disabled={!itemsChecked.some((item) => item.id === row.id)}
                              className="input input-sm w-full input-bordered"
                            />
                          </td>
                          <td className="px-6">
                            <input
                              type="text"
                              id={"unit-" + row.id}
                              // value={unit[itemsChecked.findIndex((item) => item.id === row.id)]}
                              onChange={handleUnitInput}
                              required
                              autoComplete="off"
                              placeholder="kg"
                              disabled={!itemsChecked.some((item) => item.id === row.id)}
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