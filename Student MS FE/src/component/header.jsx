export default function header(){
    return(
      <div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom" style={{ backgroundColor: '#e3f2fd' }}>
    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
      <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
    </a>

    <ul className="nav col-12 col-md-auto mb-2 justify-content-end">
      <li className="nav-item"><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 link-dark">About</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 link-dark">Courses</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 link-dark">Contact</a></li>
    </ul>

    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-outline-primary me-2">Login</button>
      <button type="button" className="btn btn-primary">Sign-up</button>
    </div>
  </header>
</div>

    
    
    )
}