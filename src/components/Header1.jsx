import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Header1 = () => {
  const bag = useSelector((store) => store.bag); //bag is an array
  const wishlist = useSelector((store) => store.wishlist); //wishlist is an array
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userActions.logout());
    alert("You are logged out!!");

    // Dispatch logoutUser action to trigger API call and Redux update
    //navigate('/logout');  // This redirects to the root route after logout
  };

  return (
    <>
      <header className="p-3 text-bg-light" >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
            <Link to="/" className="text-decoration-none">
              <img
                className=" d-flex align-items-center mb-2 mb-lg-0 myntra_home"
                src="images/logo.jpg"
                alt="Myntra Home"
              />
              <h6 className="logoName ">StyleNest</h6>

            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/apparels" className="nav-link px-2 text-black">
                  Apparels
                </Link>
              </li>
              <li>
                <Link to="/beauty&skin" className="nav-link px-2 text-black">
                  Beauty & Skin
                </Link>
              </li>
              <li>
                <Link to="/footwears" className="nav-link px-2 text-black">
                  Footwears
                </Link>
              </li>
              <li>
                <Link to="/bags" className="nav-link px-2 text-black">
                  Backpacks
                </Link>
              </li>
            </ul>

            <div className="text-end right_header">
              <Link className="action_container_bag" to="/profile">
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
              {user ? (
                <Link to="/login">
                  <button
                    type="button"
                    class="btn btn-warning login_btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button type="button" class="btn btn-warning login_btn">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header1;
