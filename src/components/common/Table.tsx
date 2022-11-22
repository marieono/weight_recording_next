import { css } from "@emotion/react"

const Table = () => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <table
        css={css`
          ${tb}
        `}
      >
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
        <tr>
          <td
            css={css`
              ${tdpink}
            `}
          >
            1
          </td>
          <td
            css={css`
              ${tdpink}
            `}
          >
            50.0
          </td>
        </tr>
        <tr>
          <td
            css={css`
              ${tdwhite}
            `}
          >
            2
          </td>
          <td
            css={css`
              ${tdwhite}
            `}
          >
            50.0
          </td>
        </tr>
      </table>
      <table
        css={css`
          ${tb}
        `}
      >
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
        <tr>
          <td
            css={css`
              ${tdpink}
            `}
          >
            16
          </td>
          <td
            css={css`
              ${tdpink}
            `}
          >
            50.0
          </td>
        </tr>
        <tr>
          <td
            css={css`
              ${tdwhite}
            `}
          >
            17
          </td>
          <td
            css={css`
              ${tdwhite}
            `}
          >
            50.0
          </td>
        </tr>
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
`

const tdpink = css`
  background: #fee6ef;
  border-bottom: solid 1px #d9d9d9;
  text-align: center;
`
const tdwhite = css`
  background: white;
  border-bottom: solid 1px #d9d9d9;
  text-align: center;
`
