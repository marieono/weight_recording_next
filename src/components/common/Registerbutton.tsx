import { css } from "@emotion/react"

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
        background-color: #f95791;
        opacity: 0.5;
        color: white;
        border: none;
        cursor: pointer;
      `}
    >
      登録する
    </button>
  )
}

// onClick={register}
// const register = () => {
//   ;
// }
export default Registerbutton
