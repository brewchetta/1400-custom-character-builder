import { useState, useEffect } from 'react'

export default function useToggleOnCondition(condition) {
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    if (!isOn && condition) {
      setIsOn(true)
    }
  }, [condition]) // eslint-disable-line react-hooks/exhaustive-deps

  return isOn
}
