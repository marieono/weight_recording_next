import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Date from "../../common/Date"
import Weight_input from "../../common/Weight_input"
import Registerbutton from "../../common/Registerbutton"

const Page: NextPage = () => {
  return (
    <>
      <Header title="入力" />
      <Date />
      <Weight_input />
      <Registerbutton />
      <Footer activeMenu="input" />
    </>
  )
}

export default Page
