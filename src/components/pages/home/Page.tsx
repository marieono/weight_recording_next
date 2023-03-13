import type { NextPage } from "next"
import Footer from "../../common/Footer"
import Header from "../../common/Header"
import DateInput from "../../common/DateInput"
import Weight_input from "../../common/Weight_input"
import { useMemo, useState } from "react"
import Modal from "../../common/Modal"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { WeightRecord } from "../../common/types"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../../firebase"

/**
 * 日付データをハイフン区切りのテキストに変換
 */
const getDateText = (date: Date): string => {
  return [
    date.getFullYear(),
    (date.getMonth() + 1).toString().padStart(2, "0"),
    date.getDate().toString().padStart(2, "0"),
  ].join("-")
}

const Page: NextPage = () => {
  const today = useMemo(() => getDateText(new Date()), [])
  const methods = useForm<WeightRecord>({
    mode: "onChange",
    defaultValues: { date: today },
  })
  const { handleSubmit } = methods
  const [modalVisible, setModalVisible] = useState(false)

  const onSubmit: SubmitHandler<WeightRecord> = async (data) => {
    try {
      await addDoc(collection(db, "weight-records"), {
        ...data,
        date: new Date(data.date),
      })
      setModalVisible(true)
    } catch (e) {
      alert(`FireStoreへの書き込み中にエラーが発生しました:${e}`)
    }
  }
  return (
    <>
      <Header title="入力" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DateInput />
          <Weight_input />
        </form>
      </FormProvider>
      <Footer activeMenu="input" />
      {modalVisible && <Modal closeModal={() => setModalVisible(false)} />}
    </>
  )
}

export default Page
