import React from "react"

type childType = {
  children : React.ReactNode
}
const Card = ({children}:childType) => {
  return (
    <div className="card p-3">{children}</div>
  )
}

export default Card