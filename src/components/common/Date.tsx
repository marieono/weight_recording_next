import { css } from "@emotion/react"

const Date = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 22px 63px;
        height: 43px;
        width: 249px auto;
        font-size: 17px;
        font-weight: bold;
        background-color: #e6e6e6;
      `}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.705 11.41L18.295 10L12.295 16L18.295 22L19.705 20.59L15.125 16L19.705 11.41Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
      2022 9.19 MON
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.705 10L12.295 11.41L16.875 16L12.295 20.59L13.705 22L19.705 16L13.705 10Z"
          fill="black"
          fill-opacity="0.54"
        />
      </svg>
    </div>
  )
}

export default Date
