import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Month from "../../common/Month "
import Table from "../../common/Table"

const Page: NextPage = () => {
  return (
    <>
      <Header title="カレンダー" />
      <Month />
      <Table />
      <Footer activeMenu="calendar" />
    </>
  )
}

export default Page
