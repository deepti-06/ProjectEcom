import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
import HeroComponent from "../components/HeroComponent";
import Carousel from "../components/Carousel";

const Home =()=>{
  
  // const items=useSelector((store)=>store.items)
  
  return(
    <main>
      <HeroComponent/>
      <Carousel/>
    {/* <div className="items-container">
       {items.map((item)=>
      <HomeItem key={item.id} item={item} />
      )} 
    </div> */}
  </main>
  )
}
export default Home