import type { NextPage } from "next"
import { css } from "@emotion/react"

const Header = () => {
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
      入力
    </div>
  )
}
export default Header

// const Header =()=>{
//     return(
//  <div css={headerStyle}>入力</div>
//     )
// }

// const headerStyle=css`
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     font-weight:bold;
//     height:50px;
//     width: 100vm;
//     background-color: #e6e6e6;
// `

// emotion css 上記の書き方や下記の書き方いろいろ出来る。
// 上記の記述だと、変数名を考えなくていい。基本的に上記の記述がおすすめ。
// JSXが読みにくい場合は、コンポーネントを分割して読みやすくすれば大体解決するから。
// ただ、条件によってCSSを切り替える場合など、複雑なロジックがカラム場合は、例外的にいったん
// 変数にCSSを入れるなどすることがある。
