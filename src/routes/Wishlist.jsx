import WishlistItem from "../components/WishlistItem"
import { useSelector } from "react-redux"

const Wishlist =()=>{
  const wishlistItems=useSelector(store=>store.wishlist)
  const itemList=useSelector(store=>store.items)
  const finalItem = itemList.filter(item=>{
    const itemIndex= wishlistItems.indexOf(item.id)
      return itemIndex >=0
  })

  return(
    <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map((item)=> <WishlistItem item={item}/>)}
         
        </div>
      </div>
    </main>
  </>
  )
}
export default Wishlist;