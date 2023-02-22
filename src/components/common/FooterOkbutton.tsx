import { css } from "@emotion/react"

type Props = {
  onClick?: () => void
}

const FooterOkbutton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      css={css`
        margin: 0 30px 0;
        border: none;
        cursor: pointer;
        background-color: #f95791;
        color: white;
        font-weight: bold;
      `}
      type="submit"
    >
      OK
    </button>
  )
}

export default FooterOkbutton
