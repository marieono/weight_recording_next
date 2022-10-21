import { css } from "@emotion/react"

const Registerbutton = () => {
  return (
    <div
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
      `}
    >
      登録する
    </div>
  )
}
export default Registerbutton
