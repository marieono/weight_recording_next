import { css } from "@emotion/react"
import Link from "next/link"

const Registerbutton = () => {
  return (
    <Link href="/registermordal" passHref>
      <a
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
      </a>
    </Link>
  )
}

// onClick={register}
// const register = () => {
//   ;
// }
export default Registerbutton
