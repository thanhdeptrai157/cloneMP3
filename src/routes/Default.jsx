import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Player from "../component/Player";
import RightSideBar from "../component/RightSideBar";
import { useState } from "react";
const Default = () => {
    const [isShow, setIsShow] = useState(false);
    
    return (
        <div className="flex w-full h-[100vh] flex-auto">
            <SideBar />
            <div className="flex flex-col flex-auto">
                <Navbar />
                <div className="home flex-grow ml-[240px] mt-[70px] transition-all duration-500 ease-in-out px-[59px] ">
                    <Outlet /> 
                </div>
                <Player setIsShow = {setIsShow}  />
            </div>
            <RightSideBar isShow = {isShow} />
        </div>
    )
}

export default Default