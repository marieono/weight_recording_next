import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"

const Page: NextPage = () => {
  return (
    <>
      <Header title="設定" />
      <Footer activeMenu="config" />
    </>
  )
}

export default Page
