import { css } from "@emotion/react"
import Link from "next/link"
import FooterOkbutton from "./FooterOkbutton"

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
      <Link href="/config" passHref>
        <a
          css={css`
            margin: 0 30px 0;
          `}
        >
          キャンセル
        </a>
      </Link>
      <FooterOkbutton />
    </footer>
  )
}

export default FooterSet
