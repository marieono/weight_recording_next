import type { NextPage } from "next";
import { css } from '@emotion/react'


const Header =()=>{
    return(
 <div css={headerStyle}>入力</div>
    )
}

const headerStyle=css`
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    height:50px;
    width: 100vm;
    background-color: #e6e6e6;
`
export default Header;