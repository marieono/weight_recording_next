import { css } from "@emotion/react"

const Backbutton = () => {
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
        d="M19.705 11.41L18.295 10L12.295 16L18.295 22L19.705 20.59L15.125 16L19.705 11.41Z"
        fill="black"
        fillOpacity="0.54"
      />
    </svg>
  )
}

export default Backbutton
