import { css } from "@emotion/react"
import { SubmitHandler, useForm } from "react-hook-form"
import Registerbutton from "./Registerbutton"
import { WeightRecord } from "./types"

const Weight_input = () => {
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors, isValid },
  } = useForm<WeightRecord>({ mode: "onChange" })

  const onSubmit: SubmitHandler<WeightRecord> = (data) => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70px;
            width: 100vw;
            background-color: #fee6ef;
            font-family: "Regular";
            font-weight: bold;
            font-style: 17px;
          `}
        >
          体重
          <div>
            <input
              type="tel"
              css={css`
                margin: 15px;
                height: 40px;
                width: 83px;
                background-color: white;
                border: solid #d9d9d9 1px;
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
        <div>
          <Registerbutton disabled={!isValid} />
        </div>
      </form>
    </>
  )
}

export default Weight_input
