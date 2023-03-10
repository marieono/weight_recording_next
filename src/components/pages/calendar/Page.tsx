import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Table from "../../common/Table"

const Page: NextPage = () => {
  return (
    <>
      <Header title="カレンダー" />
      <Table />
      <Footer activeMenu="calendar" />
    </>
  )
}

export default Page
