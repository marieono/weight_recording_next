const Month = () => {
  const today = new Date()
  const currentMonth = today.getMonth() + 1

  return (
    <>
      <div>{currentMonth}</div>
    </>
  )
}

export default Month
