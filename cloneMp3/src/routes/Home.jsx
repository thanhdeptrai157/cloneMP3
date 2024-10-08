
import '../style/Reponsive.css'
import Discover from "../component/Discover";
import Album from './Album';

const Home = () => {
    return (   
        <div className='flex flex-col w-full h-full'>
            <Discover />
        </div>
    )
}

export default Home;