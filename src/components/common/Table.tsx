import { css } from "@emotion/react"
import { collection, query, where } from "firebase/firestore"
import type { Timestamp } from "firebase/firestore"
import { useMemo } from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import { db } from "../../firebase"

// ある月の日数を取得
const daysOfMonth = (date: Date): number => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return new Date(year, month, 0).getDate()
}

type Props = {
  targetMonth: Date
}

const Table = ({ targetMonth }: Props) => {
  const { nextMonth, leftDayList, rightDayList } = useMemo(() => {
    const nextMonth = new Date(
      targetMonth.getFullYear(),
      targetMonth.getMonth() + 1,
      1
    )
    const daysCount = daysOfMonth(targetMonth)
    const middle = Math.ceil(daysCount / 2)
    const leftDayList = Array.from({ length: middle }, (_, i) => i + 1)
    const rightDayList = Array.from(
      { length: daysCount - middle },
      (_, i) => i + middle + 1
    )
    return { nextMonth, leftDayList, rightDayList }
  }, [targetMonth])

  const [collections] = useCollection(
    query(
      collection(db, "weight-records"),
      where("date", ">=", targetMonth),
      where("date", "<", nextMonth)
    )
  )

  const weightMap = useMemo(() => {
    const weightMap = new Map<number, { weight: number }>()
    collections?.docs?.forEach((doc) => {
      const data = doc.data() as {
        date: Timestamp
        weight: number
      }
      const day = data.date.toDate().getDate()
      weightMap.set(day, { weight: data.weight })
    })
    return weightMap
  }, [collections])

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
      `}
    >
      <table
        css={css`
          ${tb}
        `}
      >
        <thead>
          <tr>
            <th
              css={css`
                ${th};
                width: 70px;
              `}
            >
              日付
            </th>
            <th
              css={css`
                ${th};
                width: 90px;
              `}
            >
              体重
            </th>
          </tr>
        </thead>
        <tbody>
          {leftDayList.map((day) => {
            const record = weightMap.get(day)
            return (
              <tr key={day} css={tr}>
                <td css={td}>{day}</td>
                <td css={td}>{record?.weight}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <table
        css={css`
          ${tb}
        `}
      >
        <thead>
          <tr>
            <th
              css={css`
                ${th};
                width: 70px;
              `}
            >
              日付
            </th>
            <th
              css={css`
                ${th};
                width: 90px;
              `}
            >
              体重
            </th>
          </tr>
        </thead>
        <tbody>
          {rightDayList.map((day) => {
            const record = weightMap.get(day)
            return (
              <tr key={day} css={tr}>
                <td css={td}>{day}</td>
                <td css={td}>{record?.weight}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table

const tb = css`
  border-collapse: collapse;
  margin: 25px 10px;
`

const th = css`
  color: white;
  background: #f95791;
  border-bottom: solid 1px #d9d9d9;
  text-align: center;
  line-height: 30px;
`

const td = css`
  border-bottom: solid 1px #d9d9d9;
  text-align: center;
`

const tr = css`
  &:nth-of-type(odd) {
    background: white;
  }
  &:nth-of-type(even) {
    background: #fee6ef;
  }
`
