import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Date from "../../common/Date"
import Weight_input from "../../common/Weight_input"
import Registerbutton from "../../common/Registerbutton"
import GoalWeight from "../../common/GoalWeight"
import Height from "../../common/Height"

const Page: NextPage = () => {
  return (
    <>
      <Header />
      <Date />
      <Weight_input />
      <Registerbutton />
      <Height />
      <GoalWeight />
      <Footer />
    </>
  )
}

export default Page
