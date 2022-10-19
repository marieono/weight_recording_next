import { css } from "@emotion/react"

const Header = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        height: 50px;
        width: 100vw;
        background-color: #e6e6e6;
      `}
    >
      入力
    </div>
  )
}
export default Header
