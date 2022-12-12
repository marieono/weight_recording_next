import { css } from "@emotion/react"

type Props = {
  disabled?: boolean
  onClick?: () => void
}
const Registerbutton = ({ onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 50px auto;
        font-weight: bold;
        height: 50px;
        width: 250px;
        border-radius: 30px;
        font-size: 17px;
        background-color: #f95791;
        &:disabled {
          opacity: 0.5;
        }

        color: white;
        border: none;
        cursor: pointer;
      `}
      type="submit"
      disabled={disabled}
    >
      登録する
    </button>
  )
}

export default Registerbutton
