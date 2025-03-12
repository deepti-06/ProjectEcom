import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoPersonSharp  } from "react-icons/io5";

const Header =()=>{
  const bag=useSelector((store)=>store.bag) //bag is an array
  const wishlist=useSelector((store)=>store.wishlist) //wishlist is an array


 return(
  <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <Link to="/">
          <img
            className=" d-flex align-items-center mb-2 mb-lg-0 myntra_home"
            src="images/logo.jpg"
            alt="Myntra Home"
          />
        </Link>
        {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a> */}

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/apparels" className="nav-link px-2 text-white">Apparels</Link></li>
          <li><Link to="/beauty&skin" className="nav-link px-2 link-body-emphasis">Beauty & Skin</Link></li>
          <li><Link to="/footwears" className="nav-link px-2 link-body-emphasis">Footwears</Link></li>
          <li><Link to="/bags" className="nav-link px-2 link-body-emphasis">Backpacks</Link></li>

          
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <Link className="action_container" to="/profile">
        <IoPersonSharp />        
        <span className="action_name">Profile</span>

        </Link>

        <Link className="action_container_bag" to="/wishlist">
        <FaHeart />          
        <span className="action_name">Wishlist</span>
        <span className="bag-item-count">{wishlist.length}</span>

        </Link>

        <Link className="action_container_bag" to="/bag">
        <FaShoppingBag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
      </div>
  </header>
 )
}

export default Header