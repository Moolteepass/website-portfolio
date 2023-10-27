import React from "react"
import { useState } from "react"
import { GiHamburger } from "react-icons/gi"
import { BiCollapseAlt } from "react-icons/bi"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    /* Nav toggle, set nav to whatever it is not */
    setNav(!nav)
    console.log(nav)
  }

  return (
    <div className="navbar">
      <div className="logo">
        <img src="./assets/MonkeyMediaNoOutline.svg" alt="Monkey Media Logo" />
        <p>Monkey Media</p>
      </div>
      <div className="burger-menu" onClick={handleClick}>
        {!nav ? <GiHamburger /> : <BiCollapseAlt />}
      </div>
      <div className={nav ? "clicked" : "navigation-container"}>
        <ul className="navigation">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
