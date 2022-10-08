import React, { useEffect, useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { useParams } from "react-router-dom"
import KidsCur from "./kidscur"
import Menova from "./menova"
import MeriBachat from "./meri-bachat"

import "./project-name.scss"
import Ombhu from "./ombhu"
import AltiliumErp from "./altilium-erp"

export const ProjectName = () => {
  const { prodDetsOff, prodDetsUnMnt } = useContext(DarkModeContext)

  const { name } = useParams()


  useEffect(() => {
    window.scrollTo(0, 0)
    prodDetsOff()

    return () => {
      prodDetsUnMnt()
    }
  }, [])

  switch (name) {
    case "meri-bachat":
      return <MeriBachat />

    case "menova":
      return <Menova />

    case "kidscur":
      return <KidsCur />

    case "ombhu":
      return <Ombhu />

    case "altilium":
      return <AltiliumErp />

    default:
      return <h1>404 Not Found</h1>
  }
}
