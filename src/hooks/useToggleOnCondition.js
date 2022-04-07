import { useState, useEffect } from 'react'

export default function useToggleOnCondition(condition) {
  const [isOn, setIsOn] = useState(false)

  useEffect(() => {
    if (!isOn && condition) {
      setIsOn(true)
    }
  }, [condition])

  return isOn
}
