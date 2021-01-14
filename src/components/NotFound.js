import React from "react"
import styled from "styled-components"

const DivNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 40px;
`

const NotFound = () => {
  return <DivNotFound>Not found...</DivNotFound>
}

export default NotFound
