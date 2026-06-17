
type buttons = {
  children: React.ReactNode,
  myStyle : string
}

const Button = ({myStyle,children}: buttons) => {
  return (
    <div className={`${myStyle}`}>{children}</div>
  )
}

export default Button