import { css } from "@emotion/react"
import { useFormContext } from "react-hook-form"
import Registerbutton from "./Registerbutton"
import { WeightRecord } from "./types"

const Weight_input = () => {
  const {
    register,

    formState: { errors, isValid },
  } = useFormContext<WeightRecord>()

  return (
    <>
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
            type="text"
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
      <Registerbutton disabled={!isValid} />
    </>
  )
}

export default Weight_input
