import { css } from "@emotion/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { HeightRecord } from "./types"

const Height_input = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HeightRecord>({ mode: "onChange" })

  const onSubmit: SubmitHandler<HeightRecord> = (data) => console.log(data)
  return (
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
        身長
        <div>
          <input
            type="text"
            css={css`
              margin: 15px;
              height: 40px;
              width: 83px;
              border: solid black 1px;
            `}
            {...register("height", {
              required: "入力してください。",

              valueAsNumber: true,
              validate: (value) =>
                !isNaN(value) || "半角数字で入力してください。",
            })}
          ></input>
        </div>
        cm
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
        {errors.height?.message}
      </div>
    </form>
  )
}

export default Height_input
