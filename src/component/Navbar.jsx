import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faGear, faMagnifyingGlass, } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons/faArrowRightLong";
import { Download } from "../utils/icon";
import '../style/Reponsive.css'
const Navbar = ()=>{
    return (
        <div className="navbar h-[70px] bg-[#170F23] px-[59px] flex items-center fixed left-[240px] right-0 min-w-[660px] transition-all duration-500 ease-in-out opacity-90 z-50">
            <div className="navbar-items flex justify-between flex-1 items-center">
                <div className="item-left flex gap-5 flex-1 mr-[10px]">
                    <button className="mr-[5px]"><FontAwesomeIcon icon= {faArrowLeftLong} color="#5B5564" size="lg"/></button>
                    <button className="mr-[5px]"><FontAwesomeIcon icon = {faArrowRightLong} color="#5B5564" size="lg"/></button>
                    <div className="seach__container flex items-center h-[40px] bg-[#2F2739] rounded-[20px] w-[100%] max-w-[440px] px-[10px]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="white" />
                        <input type="text" placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..." className="py-[5px] bg-transparent h-[34px] m-0 w-[95%] text-[14px] border-0 ml-2 text-white outline-none" />
                    </div>
                </div>
                <div className="item-right flex items-center justify-end">
                    <a className="text-white font-semibold text-[14px] upgrade_account px-[20px] py-[10px] rounded-[100px] bg-[#A55FE3] h-[40px] mr-3 cursor-pointer">Nâng cấp tài khoản</a>
                    <div className="bg-[#2F2739] rounded-[999px] mr-3 ">
                        <a className="flex cursor-pointer items-center px-[24px] h-[40px]">
                          <div className="flex gap-[5px]">
                            <Download />  
                          <div className="text-[#9B5FBE] font-[600] text-[14px]">Tải bản Windows</div>
                          </div>
                        </a>
                    </div>
                    <button className="w-[40px] h-[40px] bg-[#2F2739] rounded-[100%] mr-3">
                        <FontAwesomeIcon icon={faGear} color="white"/>
                    </button>
                    <div className="avartar-frame  w-[38px]">
                        <button className=""><img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.10.47/static/media/user-default.3ff115bb.png" alt="" className="w-full overflow-hidden object-cover rounded-full"/></button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar;