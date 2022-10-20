import { css } from "@emotion/react"

const Date = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 22px 63px;
        height: 43px;
        width: 249px auto;
        font-size: 17px;
        font-weight: bold;
        background-color: #e6e6e6;
      `}
    >
      2022 9.19 MON
    </div>
  )
}

export default Date
