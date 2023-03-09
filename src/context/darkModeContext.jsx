import React, { createContext, useState } from "react"
import { useCallback } from "react"

const DarkModeContext = createContext()

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  let wasDark = false
  const prodDetsOff = useCallback(() => {
    if (darkMode) {
      wasDark = true
      setDarkMode(false)
    }
  },[])
  const prodDetsUnMnt = useCallback(() => {
    if (wasDark) {
      setDarkMode(true)
    }
  },[])
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, prodDetsOff, prodDetsUnMnt }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}

export { DarkModeContext, DarkModeProvider }
