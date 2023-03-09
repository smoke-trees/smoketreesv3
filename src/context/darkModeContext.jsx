import React, { createContext, useState } from "react"
import { useCallback } from "react"

const DarkModeContext = createContext()

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(false)
  const [wasDark, setWasDark ] =  useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  
  const prodDetsOff = useCallback(() => {
    if (darkMode) {
      setWasDark(true)
      setDarkMode(false)
    }
  },[darkMode])
  const prodDetsUnMnt = useCallback(() => {
    if (wasDark) {
      setDarkMode(true)
    }
  },[wasDark])
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, prodDetsOff, prodDetsUnMnt }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  )
}

export { DarkModeContext, DarkModeProvider }
