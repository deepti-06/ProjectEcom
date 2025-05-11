import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import CategoryCards from "./CategoryCards";

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
        <CategoryCards 
        link="/apparels"
        image="images/11.jpg"
        title="Clothing"   
        
        />
         <CategoryCards 
        link="/beauty&skin"
        image="images/9.jpg"
        title="MakeUp"   
        
        />
         <CategoryCards 
        link="/footwears"
        image="images/16.jpg"
        title="Footwears"   
        
        />
         <CategoryCards 
        link="/bags"
        image="images/14.jpg"
        title="Backpacks"   
        
        />
        {/* <Link
          to="/apparels"
          className="card "
          style={{ width: "100%", height: "100%", textDecoration: "none" }}
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
            width: "100%",
            height: "100%",
            marginLeft: "50px",
            textDecoration: "none",
          }}
        >
          <img src="images/9.jpg" class="card-img-top cardImg" style={{height:"50%"}} alt="makeup" />
          <div class="card-body">
            <p class="card-text ">MakeUp</p>
          </div>
        </Link>
        <Link
          to="/footwears"
          className="card "
          style={{
            width: "100%",
            height: "100%",
            marginLeft: "50px",
            textDecoration: "none",
          }}
        >
          <img
            src="images/16.jpg"
            class="card-img-top cardImg "
            alt="footwear"
          />
          <div class="card-body">
            <p class="card-text cardTextName">Footwears</p>
          </div>
        </Link>
        <Link
          to="/bags"
          className="card "
          style={{
            width: "100%",
            height: "100%",
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
            <p class="card-text" >Backpacks</p>
          </div>
        </Link> */}
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
