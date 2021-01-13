import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/" exact={true}>
        Home
      </Link>
      <Link to="/movies">Start</Link>
    </div>
  )
}

export default Navbar
