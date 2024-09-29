import SideBar from "./Sidebar";
import Player from "./Player";
import Navbar from "./Navbar";


const Home = ()=>{
    return (
        <div className="flex">
         <SideBar />
         <Navbar />
         {/* <Player /> */}
        </div>
       
    )
}
export default Home;