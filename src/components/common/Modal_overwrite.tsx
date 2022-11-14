import { css } from "@emotion/react"

const Modal_overwrite = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 100;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.75);
      `}
    >
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
        <div
          css={css`
            ${style};
          `}
        >
          既にデータが登録されています。
          <br />
          上書きしますか？
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <div
            css={css`
              ${overwrite};
            `}
          >
            キャンセル
          </div>

          <div
            css={css`
              ${overwrite};
              border-left: solid 1px #e6e6e6;
            `}
          >
            上書き
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal_overwrite

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`

const overwrite = css`
  border-top: solid 1px #e6e6e6;
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding: 15px 0;
`
