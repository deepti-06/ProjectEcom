import {Link} from "react-router-dom"

const CategoryCards = ({link, image,title})=>{
  return(
 <div className=" card item-container">
  <Link to={link} style={{textDecoration:"none"}}>
      <img
        className="card-img-top " style={{height:"400px"}}
        src={image}
        alt="item image"
      />
      <div class="card-body">
      <div className="item-name "></div>
       <p className="cardText">{title}</p>
     
      </div>
      </Link>
    </div>


  )
}

export default CategoryCards