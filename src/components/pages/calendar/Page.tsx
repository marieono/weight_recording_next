import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Date from "../../common/Date"

const Page: NextPage = () => {
  return (
    <>
      <Header title="カレンダー" />
      <Footer activeMenu="calendar" />
      <Date title="2022年 9月" />
    </>
  )
}

export default Page
