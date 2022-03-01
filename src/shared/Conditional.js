function Conditional({condition, children}) {
  return (
    <>
      {
        condition
        ?
        [children]
        :
        null
      }
    </>
  )
}

export default Conditional
