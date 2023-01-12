import { useContext } from "react"
import { Link } from "react-router-dom"
import MBLarge from "../../assets/images/meri-bachat-big.png"
import { DarkModeContext } from "../../context/darkModeContext"

export function FifthSection() {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <>
      <div className="bottom-mb__container">
          <Link to="/project/meri-bachat">
            <div className={`more-projects__title ${darkMode ? "dark-mode__color1" : "light-mode__color1"}`}>MeriBachat</div>
            <img src={MBLarge} alt="" style={{ width: "100%" }} />
          </Link>
        </div>
    </>
  )
}