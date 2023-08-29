const Carousel = () =>{
    return(
        <div id="carouselExampleDark" className="carousel carousel-dark slide mb-3" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img src="carousel/1.webp" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src="carousel/3.webp" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src="carousel/2.webp" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src="carousel/4.webp" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    )
}

export default Carousel;