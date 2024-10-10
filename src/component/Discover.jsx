import React from "react";
import Galery from "./Galery";
import NewRelease from "./NewRelease";
import Playlist from "./Playlist";
import ReleaseChart from "./ReleaseChart";
import WeekChart from "./WeekChart";
import ChartSection from "./ChartSection";
import { useSelector } from "react-redux";
import Radio from "./Radio";


const Discover = () => {

    const { play_list1, play_list2, hot_album, top100} = useSelector(state => state.app)
    console.log(play_list1)
    return (
        <div className="flex flex-col h-full w-full">
            <Galery />
            <NewRelease />  
            <Playlist play_list={play_list1}/>
            <Playlist play_list={play_list2}/>
            <ReleaseChart />
            <ChartSection />
            <WeekChart />
            <Playlist play_list={top100}/>
            <Playlist play_list={hot_album}/>
            <Radio />
        </div>
    )
}


export default Discover;