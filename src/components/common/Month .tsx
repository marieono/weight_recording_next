import { css } from "@emotion/react"
import Backbutton from "./Backbutton"
import Forwordbutton from "./Forwordbutton"

const Month = () => {
  const now = new Date()
  const year = now.getFullYear()
  const currentMonth = now.getMonth() + 1

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
        >
          <Forwordbutton />
        </div>
      </div>
    </>
  )
}

export default Month
