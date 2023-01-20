import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import Date from "../../common/Date"
import Weight_input from "../../common/Weight_input"
import { useState } from "react"
import Modal from "../../common/Modal"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { WeightRecord } from "../../common/types"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../firebase"

const Page: NextPage = () => {
  const methods = useForm<WeightRecord>({ mode: "onChange" })
  const { handleSubmit } = methods
  const [modalVisible, setModalVisible] = useState(false)

  const onSubmit: SubmitHandler<WeightRecord> = async (data) => {
    try {
      await addDoc(collection(db, "weight-records"), data)
      setModalVisible(true)
    } catch (e) {
      alert(`FireSoreへの書き込み中にエラーが発生しました:${e}`)
    }
  }
  return (
    <>
      <Header title="入力" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Date title="2022 9.19 MON" />
          <Weight_input />
        </form>
      </FormProvider>
      <Footer activeMenu="input" />
      {modalVisible && <Modal closeModal={() => setModalVisible(false)} />}
    </>
  )
}

export default Page
