import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Player from "../component/Player";
import RightSideBar from "../component/RightSideBar";
import { useState } from "react";
import Lyric from "../component/Lyric";
const Default = () => {
    const [isShowRightSideBar, setIsShowRightSideBar] = useState(false);

    return (
        <div className="flex w-full h-[100vh] flex-auto">
            <SideBar />
            <div className="flex flex-col flex-auto">
                <Navbar />
                <div className="home flex-grow ml-[240px] transition-all duration-500 ease-in-out">
                    <Outlet /> 
                </div>
                <Player setIsShowRightSideBar = {setIsShowRightSideBar} />
            </div>
            <RightSideBar isShow = {isShowRightSideBar} />
        </div>
    )
}

export default Default