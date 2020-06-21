import React from "react"

function Header() {
  const firstName = "Fabrícia"

  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  const styles = {
    color: "#ebb434", 
    fontFamily: 'Courier New, sans-serif'
  }

  return (
    <header className="navbar">
      <h1 style={styles}>Good {timeOfDay}, {firstName}!</h1>
    </header>
  )
}

export default Header