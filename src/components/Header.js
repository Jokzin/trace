import React from "react"
import Nav from "./Nav"

function Header({ classNameProps = "" }) {
  return (
    <div className={`header ${classNameProps}`}>
      <Nav title="Trace" />
    </div>
  )
}

export default Header
