import { css } from "@emotion/react"
import Backbutton from "./Backbutton"
import Forwordbutton from "./Forwordbutton"

type Props = {
  targetMonth: Date
  addMonth: () => void
  subMonth: () => void
}

const Month = ({ targetMonth, addMonth, subMonth }: Props) => {
  const year = targetMonth.getFullYear()
  const currentMonth = targetMonth.getMonth() + 1

  return (
    <>
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
          onClick={subMonth}
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
          {year}年{currentMonth}月
        </div>
        <div
          css={css`
            cursor: pointer;
          `}
          onClick={addMonth}
        >
          <Forwordbutton />
        </div>
      </div>
    </>
  )
}

export default Month
