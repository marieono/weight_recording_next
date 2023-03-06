import { css } from "@emotion/react"
import { useForm } from "react-hook-form"
import Backbutton from "./Backbutton"
import Forwordbutton from "./Forwordbutton"
import { WeightRecord } from "./types"

type Props = {
  title: string
}

const Date = ({ title }: Props) => {
  const {
    setValue,
    // formState:{errors,isValid}
  } = useForm<WeightRecord>({ mode: "onChange" })

  const onSubmit: SubmitHandler<WeightRecord> = async (data) => {
    try {
      await setValue("date", getDateText(new Date()))
    } catch (e) {
      alert(`FireStoreへの書き込み中にエラーが発生しました:${e}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {title}
          <input type="date" defaultValue={getDateText(new Date())} />
        </div>
        <div
          css={css`
            cursor: pointer;
          `}
        >
          <Forwordbutton />
        </div>
      </div>
    </form>
  )
}

export default Date
