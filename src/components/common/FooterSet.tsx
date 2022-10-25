import { css } from "@emotion/react"

const FooterSet = () => {
  return (
    <footer
      css={css`
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        height: 50px;
        width: 100vw;
        background-color: #f95791;
        color: white;
      `}
    >
      <div
        css={css`
          margin: 0 30px 0;
        `}
      >
        キャンセル
      </div>
      <div
        css={css`
          margin: 0 30px 0;
        `}
      >
        OK
      </div>
    </footer>
  )
}

export default FooterSet
