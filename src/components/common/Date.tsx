import { css } from "@emotion/react"
import Backbutton from "./Backbutton"
import Forwordbutton from "./Forwordbutton"

const Date = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      `}
    >
      <Backbutton />
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
        2022 9.19 MON
      </div>
      <Forwordbutton />
    </div>
  )
}

export default Date
