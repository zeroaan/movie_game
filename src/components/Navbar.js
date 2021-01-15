import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import styled from "styled-components"

const DivNav = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% - 90px);
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
const DivBackLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  z-index: -1;
  opacity: 0.6;
  background: center/cover no-repeat url(${(props) => props.poster});

  @media screen and (max-width: 700px) {
    width: 100vw;
  }
`
const DivBackRight = styled(DivBackLeft)`
  left: 50%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`

const Navbar = () => {
  const { moviesData, score } = useSelector((state) => state.movie)

  return (
    <>
      <DivNav>
        <Link to="/">Home</Link>
        <Link to="/movies">Start</Link>
      </DivNav>
      <DivBackLeft poster={moviesData[score].poster} />
      <DivBackRight poster={moviesData[score].poster} />
    </>
  )
}

export default Navbar
