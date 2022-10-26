import { css } from "@emotion/react"

type ActiveMenuType = "input" | "calendar" | "config"

type Props = {
  activeMenu: ActiveMenuType
}

const Footer = ({ activeMenu }: Props) => {
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
      <span css={activeMenu === "input" && activeMenuStyle}>入力</span>
      <span css={activeMenu === "calendar" && activeMenuStyle}>カレンダー</span>
      <span css={activeMenu === "config" && activeMenuStyle}>設定</span>
    </footer>
  )
}

export default Footer

const activeMenuStyle = css`
  color: #f95791;
`
