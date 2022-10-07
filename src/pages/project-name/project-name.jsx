import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import MeriBachat from "./meri-bachat"

import "./project-name.scss"

export const ProjectName = () => {
  
  const {name} = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  switch (name) {
    case 'meri-bachat':
      return <MeriBachat />
    
    default:
      return <h1>404 Not Found</h1>
  }
}

