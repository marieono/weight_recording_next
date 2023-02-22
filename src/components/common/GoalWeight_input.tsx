import { css } from "@emotion/react"
import { addDoc, collection } from "firebase/firestore"
import { SubmitHandler, useForm } from "react-hook-form"
import { db } from "../../firebase"
import { WeightGoalRecord } from "./types"

const GoalWeight_input = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WeightGoalRecord>({ mode: "onChange" })

  const onSubmit: SubmitHandler<WeightGoalRecord> = async (data) => {
    try {
      await addDoc(collection(db, "weight-records"), data)
    } catch (e) {
      alert(`FireStoreへの書き込み中にエラーが発生しました:${e}`)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          css={css`
            margin-top: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70px;
            width: 100vw;
            font-weight: bold;
            font-family: "Regular";
            font-style: 17px;
          `}
        >
          目標体重
          <div>
            <input
              type="text"
              css={css`
                margin: 15px;
                height: 40px;
                width: 83px;
                border: solid black 1px;
              `}
              {...register("weight", {
                required: "入力してください。",

                valueAsNumber: true,
                validate: (value) =>
                  !isNaN(value) || "半角数字で入力してください。",
              })}
            ></input>
          </div>
          kg
        </div>
        <div
          css={css`
            min-height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            font-size: 15px;
            color: red;
          `}
        >
          {errors.weight?.message}
        </div>
      </form>
    </>
  )
}

export default GoalWeight_input
