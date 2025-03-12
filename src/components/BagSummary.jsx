import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BagSummary = () => {

  const { user } = useSelector((state) => state.user);

 
  const  CONVINIENCE_FEES =99
  const bagItems=useSelector(store=>store.bag)
  const itemList=useSelector(store=>store.items)
  const finalItem = itemList.filter(item=>{
    const itemIndex= bagItems.indexOf(item.id)
      return itemIndex >=0
  })

  const totalItem= bagItems.length

     let totalMRP=0
     let totalDiscount =0
     finalItem.forEach((bagItem) => {
      totalMRP += bagItem.original_price;
      totalDiscount += bagItem.original_price - bagItem.current_price;
    });
  
     let finalPayment = totalMRP -totalDiscount + CONVINIENCE_FEES



  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      {user ? <button className="btn-place-order" onClick={()=>alert("Thank you for plaicng the order")}>
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>: 
            <Link to ="/login">

      <button className="btn-place-order"  >
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
      </Link>
    }
      
    </div>
  );
};
export default BagSummary
