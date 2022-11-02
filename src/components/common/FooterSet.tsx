import { css } from "@emotion/react"
import Link from "next/link"

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
      <Link href="/config" passHref>
        <a
          css={css`
            margin: 0 30px 0;
          `}
        >
          OK
        </a>
      </Link>
    </footer>
  )
}

export default FooterSet
