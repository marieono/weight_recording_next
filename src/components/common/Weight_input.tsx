import { css } from "@emotion/react"
import { useForm } from "react-hook-form"
import { WeightRecord } from "./types"

const Weight_input = () => {
  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors, isValid },
  } = useForm<WeightRecord>({ mode: "onChange" })

  return (
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
            error={errors.weight != null}
            helperText={errors.weight?.message ?? " "}
          ></input>
        </form>
      </div>
      kg
    </div>
  )
}

export default Weight_input
