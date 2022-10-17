import type { NextPage } from "next";
import { css } from '@emotion/react'

const Hom: NextPage = () => {
  return (
    <h1 css={helloStyle}>Hello</h1>
  );
};

const helloStyle = css({
  color: 'red'
});

// 以下のような書き方でもOK
// const helloStyle = css`
//   color: red;
// `

export default Hom;