import { NextPage } from "next"
import FooterSet from "../../common/FooterSet"
import Header from "../../common/Header"
import Height_input from "../../common/Height_input"

const Page: NextPage = () => {
  return (
    <>
      <Header title="設定" />
      <Height_input />
      <FooterSet />
    </>
  )
}
export default Page
