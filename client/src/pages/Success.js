import React from "react"
import { useHistory } from "react-router-dom"
import "./Success.css"

function Success() {
  const history = useHistory()

  const routeChange = () => {
    let path = `/`
    history.push(path)
  }
  return (
    <div className="success">
      <div class="success-note">
        <div class="tick-icon">
          <i class="fas fa-check"></i>
        </div>
        <h1 class="success-text">Product Created Succesfully</h1>
      </div>
      <button onClick={routeChange}>Go to Homepage</button>
    </div>
  )
}

export default Success
