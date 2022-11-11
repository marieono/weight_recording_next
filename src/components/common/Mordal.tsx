import { css } from "@emotion/react"

const Mordal = () => {
  return (
    <div
      css={css`
        width: 260px;
        margin: 65px auto;
        border: #e6e6e6;
        border-radius: 10px;
        box-shadow: 2px 2px 4px #e6e6e6;
        background-color: white;
        text-align: center;
      `}
    >
      <div css={style}>入力完了</div>
      <div
        css={
          // (css`
          //   border-top: solid 1px #e6e6e6;
          // `)
          style
        }
      >
        閉じる
      </div>
    </div>
  )
}

export default Mordal

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`
