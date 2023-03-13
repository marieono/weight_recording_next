import { css } from "@emotion/react"
import Link from "next/link"

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
      <Link href="/" passHref>
        <a css={activeMenu === "input" && activeMenuStyle}>入力</a>
      </Link>
      <Link href="/calendar" passHref>
        <a css={activeMenu === "calendar" && activeMenuStyle}>カレンダー</a>
      </Link>
    </footer>
  )
}

export default Footer

const activeMenuStyle = css`
  color: #f95791;
`
