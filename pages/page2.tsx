import type { NextPage } from "next"
import FooterSet from "../src/components/common/FooterSet"
// import Height_input from "../src/components/common/Height_input"
import GoalWeight_input from "../src/components/common/GoalWeight_input"

const Page2: NextPage = () => {
  return (
    <>
      <GoalWeight_input />
      {/* <Height_input /> */}
      <FooterSet />
    </>
  )
}

export default Page2
