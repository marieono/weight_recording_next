import { css } from "@emotion/react"

type Props = { closeModal?: () => void }

const Modal = ({ closeModal }: Props) => {
  return (
    <div
      onClick={closeModal}
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
        onClick={(e) => e.stopPropagation()}
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
          onClick={closeModal}
          css={css`
            ${style};
            border-top: solid 1px #e6e6e6;
            cursor: pointer;
          `}
        >
          閉じる
        </div>
      </div>
    </div>
  )
}

export default Modal

const style = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`
