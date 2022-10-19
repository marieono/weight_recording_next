import { css } from "@emotion/react"

const Footer = () => {
  return (
    <footer
      css={css`
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;
        height: 50px;
        width: 100vw;
        background-color: #e6e6e6;
      `}
    >
      <span
        css={css`
          color: #f95791;
        `}
      >
        入力
      </span>
      <span>カレンダー</span>
      <span>設定</span>
    </footer>
  )
}

export default Footer
