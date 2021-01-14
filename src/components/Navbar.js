import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const DivNav = styled.div`
  position: relative;
  top: 20px;
  margin: auto;
  width: 160px;
  background-color: black;
  border-radius: 30px;
  padding: 15px 10px;
  z-index: 1000;

  > a {
    text-decoration: none;
    padding: 20px;
    color: white;
  }
`

const Navbar = () => {
  return (
    <>
      <DivNav>
        <Link to="/">Home</Link>
        <Link to="/movies">Start</Link>
      </DivNav>
    </>
  )
}

export default Navbar
