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
const DivBack = styled.div`
  position: absolute;
  top: 0;
  left: 0%;
  width: 50vw;
  height: 100vh;
  z-index: -1;
`

const Navbar = () => {
  return (
    <>
      <DivNav>
        <Link to="/">Home</Link>
        <Link to="/movies">Start</Link>
      </DivNav>

      <div
        className="movie__background--left"
        style={{
          background: `center/cover no-repeat url(${movie.poster})`,
          opacity: "0.4",
        }}
      ></div>
      <div
        className="movie__background--right"
        style={{
          background: `center/cover no-repeat url(${movie.poster})`,
          opacity: "0.4",
        }}
      ></div>
    </>
  )
}

export default Navbar
