import { useDispatch,useSelector } from "react-redux"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { wishlistActions } from "../store/wishlistSlice";

const WishlistItem =({item})=>{

  
  
  const dispatch= useDispatch()
  const handleRemoveItem=()=>{
        dispatch(wishlistActions.removeFromWishlist(item.id))
  }
  return(
<div className="card mb-3 bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={item.image}/>
    </div>
    <div className="item-right-part">
      <div className="company">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{item.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">{item.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart" onClick={handleRemoveItem}><RiDeleteBin6Fill /></div>
  </div>
  )
}
export default WishlistItem