import { useSelector } from "react-redux"
import HomeItem from "../components/HomeItem"

const Footwears =()=>{

  const allItems=useSelector(store=>store.items)
  let filterItem=[]
  allItems.forEach(item => {
     if(item.category==="footwears")
    filterItem.push(item)
    return filterItem
  })

  return(
    <div className="items-container">

    {filterItem.map((item)=><HomeItem key={item.id} item={item}/>)}
  </div>
  )
 }
 
 export default Footwears