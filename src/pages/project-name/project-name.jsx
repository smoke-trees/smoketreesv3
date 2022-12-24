import React, { useEffect, useContext } from "react"
import { DarkModeContext } from "../../context/darkModeContext"
import { useParams } from "react-router-dom"
import KidsCur from "./kidscur"
import Menova from "./menova"
import MeriBachat from "./meri-bachat"

import "./project-name.scss"
import Ombhu from "./ombhu"
import AltiliumErp from "./altilium-erp"
import CommingSoon from "./comming-soon"

export const ProjectName = () => {
  const { prodDetsOff, prodDetsUnMnt } = useContext(DarkModeContext)

  const { name } = useParams()


  useEffect(() => {
    window.scrollTo(0, 0)
    prodDetsOff()

    return () => {
      prodDetsUnMnt()
    }
  }, [prodDetsOff, prodDetsUnMnt])

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

    case "me-time":
      return (
        <CommingSoon
          name="MEtime Mandala"
          desc="A platform working on digitizing trauma-informed, participatory programmed and print media that has been tested with +15,000 people in SA, India, the Philippines and Sudan since 2011. Being made in conjunction with EduSOIL Pvt. Ltd. a group of mental wellness experts situated in the UK, the platform is a culturally responsive, customizable and gamified  platform, empowering children and teachers to learn and lead 10 min mental health breaks."
        />
      )

    default:
      return <h1>404 Not Found</h1>
  }
}
