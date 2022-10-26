import { css } from "@emotion/react"

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
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
      {title}
    </div>
  )
}
export default Header
