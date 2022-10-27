import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"

const Page: NextPage = () => {
  return (
    <>
      <Header title="カレンダー" />
      <Footer activeMenu="calendar" />
    </>
  )
}

export default Page
