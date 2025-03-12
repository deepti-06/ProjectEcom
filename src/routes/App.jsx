import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeItem from "../components/HomeItem";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems"
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import Header1 from "../components/Header1";

function App() {
 
  const fetchStatus=useSelector((store)=> store.fetchStatus)
  return (
    <>
      <Header1 />
      <FetchItems/>
      {fetchStatus.currentlyFetching ?<LoadingSpinner/> :<Outlet/>}
     
      <Footer />
    </>
  );
}

export default App;
