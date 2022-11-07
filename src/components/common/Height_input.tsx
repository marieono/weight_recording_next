import { css } from "@emotion/react"

const Height_input = () => {
  return (
    <div
      css={css`
        margin-top: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 100vw;
        font-weight: bold;
        font-family: "Regular";
        font-style: 17px;
      `}
    >
      身長
      <div>
        <input
          type="text"
          css={css`
            margin: 15px;
            height: 40px;
            width: 83px;
            border: solid black 1px;
          `}
        ></input>
      </div>
      cm
    </div>
  )
}

export default Height_input
