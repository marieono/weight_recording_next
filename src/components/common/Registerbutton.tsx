import { css } from "@emotion/react"
import { WeightRecord } from "./types"

type Props = { onClick?: () => void }
const Registerbutton = ({ onClick }: Props) => {
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
      disabled={true}
      variant="contained"
      type="submit"
      disabled={!isValid}
    >
      登録する
    </button>
  )
}

export default Registerbutton
