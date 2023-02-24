import { useState, useEffect } from 'react'
import ConditionalWrapper from 'shared/ConditionalWrapper'

function Toast({messages, toastType}) {

  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (!open) {
      setOpen(true)
    }
  }, [messages]) // eslint-disable-line react-hooks/exhaustive-deps

  const createMessages = () => (
    messages.constructor === Array
    ?
    messages.map(m => <span key={m}>{m}</span>)
    :
    (<span>{messages.message}</span>))

  const openOrClosed = open ? "" : " closed"

  return (
    <div
    className={"toast " + toastType + openOrClosed}
    onClick={open => setOpen(!open)}
    >
        {createMessages()}
    </div>
  )
}

export default ConditionalWrapper(Toast)
