import { css } from "@emotion/react"

const Weight_input = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        width: 100vw;
        background-color: #fee6ef;
        font-family: "Regular";
        font-weight: bold;
        font-style: 17px;
      `}
    >
      体重
      <div
        css={css`
          margin: 15px;
          height: 40px;
          width: 83px;
          background-color: white;
          border: solid #d9d9d9 1px;
        `}
      ></div>
      kg
    </div>
  )
}

export default Weight_input

// import { css } from "@emotion/react"

// const Header = () => {
//   return (
//     <div
//       css={css`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-weight: bold;
//         height: 50px;
//         width: 100vw;
//         background-color: #e6e6e6;
//       `}
//     >
//       入力
//     </div>
//   )
// }
// export default Header