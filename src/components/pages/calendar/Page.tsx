import type { NextPage } from "next"
import { useCallback, useState } from "react"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Month from "../../common/Month "
import Table from "../../common/Table"

const startOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

const Page: NextPage = () => {
  const [targetMonth, setTargetMonth] = useState(() => startOfMonth(new Date()))
  const addMonth = useCallback(() => {
    setTargetMonth(
      (month) => new Date(month.getFullYear(), month.getMonth() + 1, 1)
    )
  }, [])
  const subMonth = useCallback(() => {
    setTargetMonth(
      (month) => new Date(month.getFullYear(), month.getMonth() - 1, 1)
    )
  }, [])

  return (
    <>
      <Header title="カレンダー" />
      <Month
        targetMonth={targetMonth}
        addMonth={addMonth}
        subMonth={subMonth}
      />
      <Table targetMonth={targetMonth} />
      <Footer activeMenu="calendar" />
    </>
  )
}

export default Page
