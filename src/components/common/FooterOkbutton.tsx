import { css } from "@emotion/react"

const FooterOkbutton = () => {
  return (
    <button
      // onClick={}
      css={css`
        margin: 0 30px 0;
        border: none;
        cursor: pointer;
        background-color: #f95791;
        color: white;
        font-weight: bold;
      `}
    >
      OK
    </button>
  )
}

export default FooterOkbutton
