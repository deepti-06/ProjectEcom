const Carousel =()=>{
  return(
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade carousel_container" > 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/img1.jpg" className="d-block w-100" alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src="images/img2.jpg" className="d-block w-100" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src="images/img3.jpg" className="d-block w-100" alt="img3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
export default Carousel