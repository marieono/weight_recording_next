import { css } from "@emotion/react"
import Link from "next/link"
import Forwordbutton from "./Forwordbutton"

const Height = () => {
  return (
    <div
      css={css`
        margin: 160px 50px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        height: 90px;
        width: 335px auto;
      `}
    >
      身長
      <div
        css={css`
          display: flex;
          align-items: center;
          font-size: 18px;
          font-weight: bold;
          height: 90px;
          width: 335px auto;
        `}
      >
        cm
        <Link href="/config_weight">
          <a>
            {/* {" "} */}
            <Forwordbutton />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Height
