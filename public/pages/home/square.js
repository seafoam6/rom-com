

const Square = ({ children, special }) => {
  if (special) {
    return <div class="square special">{children}</div>
  }
  return <div class="square">{children}</div>
}

export default Square