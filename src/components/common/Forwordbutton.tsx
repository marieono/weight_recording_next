import { css } from "@emotion/react"

const Forwordbutton = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        css={css`
          cursor: pointer;
        `}
        d="M13.705 10L12.295 11.41L16.875 16L12.295 20.59L13.705 22L19.705 16L13.705 10Z"
        fill="black"
        fillOpacity="0.54"
      />
    </svg>
  )
}

export default Forwordbutton
