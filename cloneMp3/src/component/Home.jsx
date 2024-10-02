import SideBar from "./Sidebar";
import Navbar from "./Navbar";
import '../style/Reponsive.css'
import Discover from "./Discover";
const Home = () => {
    return (
        <div className="flex w-full h-[100vh]">
            <SideBar />
            <div className="flex flex-col flex-grow">
                <Navbar />
                <div className="home flex-grow ml-[240px] mt-[70px] transition-all duration-500 ease-in-out px-[59px] ">
                    <Discover />
                </div>
            </div>
        </div>
    )
}

export default Home;