import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Date from "../../common/Date"
import Weight_input from "../../common/Weight_input"
import Registerbutton from "../../common/Registerbutton"
import { useState } from "react"
import Modal from "../../common/Modal"

const Page: NextPage = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Header title="入力" />
      <Date />
      <Weight_input />
      <Registerbutton onClick={() => setModalVisible(true)} />
      <Footer activeMenu="input" />
      {modalVisible && <Modal closeModal={() => setModalVisible(false)} />}
    </>
  )
}

export default Page
