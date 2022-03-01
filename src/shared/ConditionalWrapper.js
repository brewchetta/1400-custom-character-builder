function WrapWithConditional(WrappedComponent) {
  return function ConditionalWrapper(props) {
    return (
      <>
        {
          !props.hasOwnProperty('displayCondition') || props.displayCondition
          ?
          <WrappedComponent {...props} />
          :
          null
        }
      </>
    )
  }
}
export default WrapWithConditional
