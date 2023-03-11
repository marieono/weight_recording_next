import { addDoc, collection } from "firebase/firestore"
import type { NextPage } from "next"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { db } from "../../../firebase"
import Footer from "../../common/Footer"
import GoalWeight from "../../common/GoalWeight"
import Header from "../../common/Header"
import Height from "../../common/Height"
import { HeightRecord } from "../../common/types"

const Page: NextPage = () => {
  const methods = useForm<HeightRecord>({
    mode: "onChange",
  })
  const { handleSubmit } = methods

  const onSubmit: SubmitHandler<HeightRecord> = async (data) => {
    try {
      await addDoc(collection(db, "weight-records"), data)
    } catch (e) {
      alert(`FireStoreへの書き込み中にエラーが発生しました:${e}`)
    }
  }

  return (
    <>
      <Header title="設定" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Height />
          <GoalWeight />
        </form>
      </FormProvider>
      <Footer activeMenu="config" />
    </>
  )
}

export default Page
