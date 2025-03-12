import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const HeroComponent = () => {
  return (
    <>
      <div className="hero_container">
        <img src="images/hero.jpg " className="hero_image" alt="hero image" />
      </div>

      <div className="category">
        <span className="category_name">Shop By Category</span>
      </div>
      <div className="card_category">
        <Link
          to="/apparels"
          className="card "
          style={{ width: "12rem", height: "18rem", textDecoration: "none" }}
        >
          <img
            src="images/11.jpg"
            class="card-img-top cardImg"
            alt="clothing"
          />
          <div class="card-body">
            <p class="card-text">Clothing</p>
          </div>
        </Link>
        <Link
          to="/beauty&skin"
          className="card "
          style={{
            width: "12rem",
            height: "18rem",
            marginLeft: "50px",
            textDecoration: "none",
          }}
        >
          <img src="images/9.jpg" class="card-img-top cardImg" alt="makeup" />
          <div class="card-body">
            <p class="card-text">MakeUp</p>
          </div>
        </Link>
        <Link
          to="/footwears"
          className="card "
          style={{
            width: "12rem",
            height: "18rem",
            marginLeft: "50px",
            textDecoration: "none",
          }}
        >
          <img
            src="images/12.jpg"
            class="card-img-top cardImg"
            alt="footwear"
          />
          <div class="card-body">
            <p class="card-text">Footwears</p>
          </div>
        </Link>
        <Link
          to="/bags"
          className="card "
          style={{
            width: "12rem",
            height: "18rem",
            marginLeft: "50px",
            textDecoration: "none",
          }}
        >
          <img
            src="images/14.jpg"
            class="card-img-top cardImg"
            alt="footwear"
          />
          <div class="card-body">
            <p class="card-text">Backpacks</p>
          </div>
        </Link>
      </div>
      <div className="allCategory">
        <Link to ="/all">
       <button type="button" class="btn btn-info">View All Categories <IoArrowForwardCircleOutline /></button>
       </Link>
        
      </div>
    </>
  );
};
export default HeroComponent;
