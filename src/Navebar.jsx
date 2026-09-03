import { Link } from 'react-router-dom'

function Navebar() {
  return (
    <div>
      <nav>
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/about">About</Link>  
        </div>
        <div>
        <Link to="/contact">Contact</Link>
        </div>
        <div>
        <Link to="/dashboard">Dashboard</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navebar