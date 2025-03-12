import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { FaHeart } from "react-icons/fa6";
import { wishlistActions } from "../store/wishlistSlice";
import { IoMdHeartDislike } from "react-icons/io";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const itemfound = bagItems.indexOf(item.id) >= 0; // returns -1 if element not founf

  const wishlistItems = useSelector((store) => store.wishlist);
  const wishlistitemfound = wishlistItems.indexOf(item.id) >= 0; // returns -1 if element not founf

  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };
  const handleWishlist = () => {
    dispatch(wishlistActions.addToWishlist(item.id));
  };
  const handleRemoveWishlist = () => {
    dispatch(wishlistActions.removeFromWishlist(item.id));
  };
  return (
    <div className=" card item-container">
      <img
        className="card-img-top item-image "
        src={item.image}
        alt="item image"
      />
      <div class="card-body">
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>

          {wishlistitemfound ? (
            <button
              className="btn btn-warning btn-wish"
              onClick={handleRemoveWishlist}
            >
              <IoMdHeartDislike />
            </button>
          ) : (
            <button
              className="btn btn-danger btn-wish"
              onClick={handleWishlist}
            >
              <FaHeart />
            </button>
          )}
        </div>
        {itemfound ? (
          <button className="btn-add-bag btn btn-danger" onClick={handleRemove}>
            Remove
          </button>
        ) : (
          <button
            className="btn-add-bag btn btn-success"
            onClick={handleAddToBag}
          >
            Add to Bag{" "}
          </button>
        )}
      </div>
    </div>
  );
};
export default HomeItem;
