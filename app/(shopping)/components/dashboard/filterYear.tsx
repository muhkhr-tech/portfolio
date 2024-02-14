'use client'

import { useRouter } from "next/navigation"

export default function FilterYear() {
  const router = useRouter()

  const startDate = 2020
  let endDate = new Date().getFullYear()

    let years: any = []

    for(endDate ; endDate>startDate ; endDate--) {
      years.push(endDate)
    }

    const handleOption = (e: any) => {
      console.log(e.target.value)
      router.push(`/dashboard?year=${e.target.value}`)
    }
    
    return (
        <select name="" id="" onChange={handleOption} className="select select-sm select-bordered">
          {years.map((year: any, index: any) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
    )
}