import { NextPage } from "next"
import FooterSet from "../../common/FooterSet"
import GoalWeight_input from "../../common/GoalWeight_input"
import Header from "../../common/Header"

const Page: NextPage = () => {
  return (
    <>
      <Header title="設定" />
      <GoalWeight_input />
      <FooterSet />
    </>
  )
}

export default Page
