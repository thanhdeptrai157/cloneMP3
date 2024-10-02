import React, { useState } from "react";
import '../style/Sidebar.css';
import { Lib, Radio, Dics, Chart, Star, Type, Bxh, Plus, ZingIcon } from "../utils/icon";
import '../style/Reponsive.css'
import Player from "./Player";
const SideBar = () => {

    return (
        <div className="w-[240px] h-screen flex flex-col justify-between fixed sidebar bg-[#231B2E] transition-all duration-500 ease-in-out" >
            <div>
                <nav>
                    <div className="logo_container w-full h-[70px] top-10 flex pr-[25px] pl-[28px]" >
                        <button><div alt="" className="w-[120px] h-[40px] logo " ></div></button>
                    </div>
                </nav>
                <nav>
                    <ul>
                        <li><a href="" className="flex px-[21px] py-3" ><Lib /><span className="hover:text-white text-gray-400 font-semibold text-[14px] flex items-center">Thư Viện</span></a></li>
                        <li><a href="" className="flex px-[21px] py-3" ><Dics /><span className="hover:text-white text-gray-400 font-semibold text-[14px]"  >Khám Phá</span></a></li>
                        <li><a href="" className="flex px-[21px] py-3" ><Chart /><span className="hover:text-white text-gray-400 font-semibold text-[14px] flex items-center" >#zingchart</span></a></li>
                        <li><a href="" className="flex px-[21px] py-3" ><Radio /><span className="hover:text-white text-gray-400 font-semibold text-[14px] flex items-center" >Radio </span> <span className="ml-3 flex items-center" ><img src="https://zjs.zmdcdn.me/zmp3-desktop/dev/147506/static/media/live-tag.e25dd240.svg" alt="" /></span></a></li>
                    </ul>
                </nav>
                <div className="px-5 mt-4"><div className="sidebar-divine"></div></div>
                <nav className="mt-5">
                    <ul>
                        <li><a href="" className="flex px-[21px] py-3" ><Bxh /><span className="hover:text-white text-gray-400 font-semibold text-[14px] flex items-center">BXH Nhạc Mới</span></a></li>
                        <li><a href="" className="flex px-[21px] py-3"><Type /><span className="hover:text-white text-gray-400 font-semibold text-[14px]"  >Chủ Đề & Thể Loại</span></a></li>
                        <li><a href="" className="flex px-[21px] py-3" ><Star /><span className="hover:text-white text-gray-400 font-semibold text-[14px] flex items-center" >Top 100</span></a></li>
                    </ul>
                </nav>
                <div className="px-5 mt-4 flex-1 login_container">
                    <div className="login-container-content rounded-lg">
                        <div className="text-white font-semibold text-[12px] mb-2">Đăng nhập để khám phá playlist dành riêng cho bạn</div>
                        <button className="btn text-white hover:text-[rgb(231, 228, 228)] text-[12px]"><span>ĐĂNG NHẬP</span></button>
                    </div>
                </div>
            </div>
            <button className=" new_playlist_button flex items-center w-[240px] px-[21px] bg-[#231B2E] h-[54px] sidebar-divine transition-all duration-500 ease-in-out fixed bottom-[90px]">
                <div className=" text-gray-400 hover:text-white font-semibold text-[14px] flex items-center">
                    <Plus/><span className="new_playlist_text">Tạo playlist mới</span>
                </div>
            </button>
            <Player />

           
        </div>
    )
}

export default SideBar;
