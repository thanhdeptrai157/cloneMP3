import React from "react";
import Galery from "./Galery";
import NewRelease from "./NewRelease";
import Playlist from "./Playlist";
import ReleaseChart from "./ReleaseChart";
import WeekChart from "./WeekChart";
import ChartSection from "./ChartSection";
import Album from "../routes/Album";


const Discover = () => {
    return (
        <div className="flex flex-col h-full w-full">
            <Galery />
            <NewRelease />  
            <Playlist index1 = {0} index2 = {2}/>
            <ReleaseChart />
            <ChartSection />
            <WeekChart />
            
        </div>
    )
}


export default Discover;