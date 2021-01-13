import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "../routes/Home"
import Movies from "../routes/Movies"
import NotFound from "./NotFound"

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/movies" component={Movies} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
