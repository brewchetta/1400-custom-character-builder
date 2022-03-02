import { useState, useEffect } from 'react'

function Toast({messages, toastType}) {

  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (!open) {
      setOpen(true)
    }
  }, [messages])

  const createMessages = () => (
    messages.constructor === Array
    ?
    messages.map(m => <span>{m}</span>)
    :
    (<span>{messages.message}</span>))

  const openOrClosed = open ? "" : " closed"
  const className = "toast " + toastType

  return (
    <div
      className={"toast " + toastType + openOrClosed}
      onClick={open => setOpen(!open)}
    >
        {createMessages()}
    </div>
  )
}

export default Toast
