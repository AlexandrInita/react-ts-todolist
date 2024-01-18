import { useEffect, useState } from "react"

export default function useLocalStorage<T>(init: T, key: string) {
  const [state, setState] = useState(() => {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : init
  })
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))  
  }, [state, key])

  return [ state, setState ]
}