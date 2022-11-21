import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Date from "../../common/Date"
import Table from "../../common/Table"

const Page: NextPage = () => {
  return (
    <>
      <Header title="カレンダー" />
      <Footer activeMenu="calendar" />
      <Date title="2022年 9月" />
      <Table />
    </>
  )
}

export default Page
