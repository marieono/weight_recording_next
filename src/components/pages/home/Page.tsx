import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Date from "../../common/Date"
import Weight_input from "../../common/Weight_input"

const Page: NextPage = () => {
  return (
    <>
      <Header />
      <Date />
      <Weight_input />
      <Footer />
    </>
  )
}

export default Page
