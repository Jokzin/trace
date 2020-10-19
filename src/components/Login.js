import React from "react"

function Login() {
  return (
    <div className="login">
      <form id="loginForm">
        <input type="text" placeholder="login" />
        <input type="password" placeholder="Password" />
        <button type="submit" form="loginForm" value="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Login
