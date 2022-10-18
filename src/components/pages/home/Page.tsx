import type { NextPage } from "next"
import { css } from "@emotion/react"
import Header from "../../common/Header"

const Page: NextPage = () => {
  return <Header />
}

const helloStyle = css({
  color: "blue",
})

export default Page
