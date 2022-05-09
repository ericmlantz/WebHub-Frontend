import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
<header className="p-3 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" className="nav-link px-2 text-primary">Home</a></li>
          <li><a href="/interests" className="nav-link px-2 text">Interests</a></li>
          <li><a href="/profile" className="nav-link px-2 text">Profile</a></li>
        </ul>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
    )
}

export default NavBar
