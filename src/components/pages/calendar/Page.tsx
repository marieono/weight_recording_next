import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import DateInput from "../../common/DateInput"
import Table from "../../common/Table"

const Page: NextPage = () => {
  return (
    <>
      <Header title="カレンダー" />
      <Footer activeMenu="calendar" />
      <DateInput />
      <Table />
    </>
  )
}

export default Page
