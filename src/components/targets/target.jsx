import React, { useEffect } from "react"
import gsap from 'gsap'

function onMouseEnter() {
  gsap.to("#cursor", {
    width: 60,
    height: 60,
    borderWidth: 1,
    duration: 0.25
  })
}

function onMouseLeave() {
  gsap.to("#cursor", {
    width: 30,
    height: 30,
    borderWidth: 1,
    duration: 0.25
  })
}

export default function Target({ children }) {
  useEffect(() => {

  }, [])

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={ onMouseLeave} className="target" >
      {children}
    </div>
  )
}