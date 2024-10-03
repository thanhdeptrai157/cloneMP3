import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Player from "../component/Player";
const Default = () => {
    return (
        <div className="flex w-full h-[100vh] flex-auto">
            <SideBar />
            <div className="flex flex-col flex-auto">
                <Navbar />
                <div className="home flex-grow ml-[240px] mt-[70px] transition-all duration-500 ease-in-out px-[59px] ">
                    <Outlet /> 
                </div>
                <Player />
            </div>
        </div>
    )
}

export default Default