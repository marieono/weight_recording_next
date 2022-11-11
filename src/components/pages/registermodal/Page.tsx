import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Date from "../../common/Date"
import Weight_input from "../../common/Weight_input"
import Registerbutton from "../../common/Registerbutton"
import Mordal from "../../common/Mordal"
import { css } from "@emotion/react"

const Page: NextPage = () => {
  return (
    <>
      <Header title="入力" />
      <Date />
      <Weight_input />
      <Registerbutton />
      <Mordal />
      <Footer activeMenu="input" />
      <div
        css={css`
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          position: fixed;
          background-color: rgba(0, 0, 0, 0.75);
        `}
      ></div>
    </>
  )
}

export default Page
