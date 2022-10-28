import type { NextPage } from "next"
import Footer from "../../common/Footer"
import GoalWeight from "../../common/GoalWeight"
import Header from "../../common/Header"
import Height from "../../common/Height"

const Page: NextPage = () => {
  return (
    <>
      <Header title="設定" />
      <Height />
      <GoalWeight />
      <Footer activeMenu="config" />
    </>
  )
}

export default Page
