import { css } from "@emotion/react"
import { useFormContext } from "react-hook-form"
import Backbutton from "./Backbutton"
import Forwordbutton from "./Forwordbutton"
import { WeightRecord } from "./types"

const DateInput = () => {
  const {
    register,
    // setValue,
    // formState:{errors,isValid}
  } = useFormContext<WeightRecord>()

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      `}
    >
      <div
        css={css`
          cursor: pointer;
        `}
      >
        <Backbutton />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 22px 7px;
          height: 43px;
          width: 249px;
          font-size: 17px;
          background-color: #e6e6e6;
        `}
      >
        <input type="date" {...register("date")} />
      </div>
      <div
        css={css`
          cursor: pointer;
        `}
      >
        <Forwordbutton />
      </div>
    </div>
  )
}

export default DateInput
