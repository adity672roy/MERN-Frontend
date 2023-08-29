const Footer = () =>{
    return(
        <div className="footer mt-auto bg-dark text-light">
    <div className="container py-3">
      <div className="row d-flex footer-items">
        <div className="col-lg-4">
          <h5>Categories</h5>
          <ul>
            <li><a href="">Suits</a></li>
            <li><a href="">Western</a></li>
            <li><a href="">Dresses</a></li>
            <li><a href="">Shirts</a></li>
            <li><a href="">Tops</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5>Useful Links</h5>
          <ul>
            <li><a href="">Terms</a></li>
            <li><a href="">Privacy</a></li>
            <li><a href="">About Us </a></li>
            <li><a href="">Mission</a></li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h5>Get Updates</h5>
          <div className="d-flex subscribe">
            <input type="text" className="form-control" />
            <button className="btn btn-warning">Subscribe</button>
          </div>
          <div className="mt-3">
            <div className="social-icons" role="group" aria-label="first group">
              <button type="button" className="btn btn-secondary mx-1">
                <i className="bi bi-instagram"></i>
              </button>
              <button type="button" className="btn btn-secondary mx-1">
                <i className="bi bi-twitter"></i>
              </button>
              <button type="button" className="btn btn-secondary mx-1">
                <i className="bi bi-facebook"></i>
              </button>
              <button type="button" className="btn btn-secondary mx-1">
                <i className="bi bi-youtube"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
   }
   
   export default Footer ;