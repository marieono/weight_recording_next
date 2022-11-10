import { css } from "@emotion/react"

const Mordal = () => {
  return (
    <div
      css={css`
        width: 260px;
        height: 120px;
        margin: 65px auto;
        border: #e6e6e6;
        border-radius: 10px;
        box-shadow: 2px 2px 4px #e6e6e6;
        background-color: white;
        text-align: center;
      `}
    >
      <div
        css={css`
          /* display: table-cell;
          vertical-align: middle; */
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 15px;
        `}
      >
        入力完了
      </div>
      <div
        css={css`
          border-bottom: solid 1px #e6e6e6;
          padding: 10px 0;
        `}
      ></div>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px;
        `}
      >
        閉じる
      </div>
    </div>
  )
}

export default Mordal
