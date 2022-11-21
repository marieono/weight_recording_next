import { css } from "@emotion/react"

const Table = () => {
  return (
    <table
      css={css`
        border-collapse: collapse;
      `}
    >
      <tr>
        <th
          css={css`
            ${th}
          `}
        >
          日付
        </th>
        <th
          css={css`
            ${th}
          `}
        >
          体重
        </th>
      </tr>
      <tr>
        <td
          css={css`
            ${td}
          `}
        >
          1
        </td>
        <td
          css={css`
            ${td}
          `}
        >
          50.0
        </td>
      </tr>
    </table>
  )
}

export default Table

// const tb = css`
//   border-bottom: solid 2px #d9d9d9;
// `

const th = css`
  color: white;
  background: #f95791;
  border-bottom: solid 2px #d9d9d9;
`

const td = css`
  background: #fee6ef;
  border-bottom: solid 1px #d9d9d9;
`
