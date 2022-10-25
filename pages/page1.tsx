import type { NextPage } from "next"
import GoalWeight from "../src/components/common/GoalWeight"
import Height from "../src/components/common/Height"

const Page1: NextPage = () => {
  return (
    <>
      <Height />
      <GoalWeight />
    </>
  )
}

export default Page1
