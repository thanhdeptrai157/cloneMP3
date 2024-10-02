import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Premium } from "../utils/icon";


const NewRelease = () => {
    const calDay = (unixStamp) => {
        const unixTimestamp = Math.floor(Date.now() / 1000); 
        const differenceInSeconds = unixTimestamp - unixStamp; 
        const daysPassed = Math.floor(differenceInSeconds / 86400); 
        if(daysPassed == 0 ) return "Hôm nay"
        else if(daysPassed == 1) return "Hôm qua"
        else return daysPassed + " Ngày trước";
    }
    const { new_realease } = useSelector(state => state.app)
    console.log(new_realease);
    return (
        <div className="mt-[50px]">
            <h3 className="text-white mb-[20px] text-[20px] font-bold">Mới Phát Hành</h3>
            <div className="genre-select flex justify-between">
                <div className="btn-left flex gap-4 mb-5">
                    <button className="px-[24px] py-[4px] text-white text-[12px] rounded-[100px] bg-[#9B4DE0]">TẤT CẢ</button>
                    <button className="px-[24px] py-[4px] text-white text-[12px] border-[1px] border-[hsla(0,0%,100%,0.1)] rounded-[100px]">VIỆT NAM</button>
                    <button className="px-[24px] py-[4px] text-white text-[12px] border-[1px] border-[hsla(0,0%,100%,0.1)] rounded-[100px]">QUỐC TẾ</button>
                </div>
                <div className="btn-right">
                    <a href="" className="flex items-center gap-2">
                        <span className="text-[#6F6A77] text-[12px] font-bold">TẤT CẢ</span>
                        <FontAwesomeIcon icon={faAngleRight} color="#6F6A77" />
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    new_realease.items?.all.map((item, index) => (
                        <div className="gap-4 w-[32%] p-[10px] hover:bg-[#2C2436]">
                            <div className="flex gap-4">
                            <img src={item.thumbnail} alt="" key={index} width={"60px"} height={"60px"} className="rounded-[5px]"/>
                            <div className="flex flex-col justify-between overflow-hidden">
                                <div className="flex items-center gap-2"><span className="text-white text-[14px] truncate hover:text-[#9B4DE0] cursor-pointer flex-1 min-w-0">{item.title} </span>
                                    {item.streamingStatus === 2 && <Premium />}
                                </div>
                                <span className="text-[#7C7883] text-[12px] font-semibold">{item.artistsNames}</span>
                                <span className="text-[#7C7883] text-[12px] font-semibold">{calDay(parseInt(item.releaseDate))}</span>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NewRelease;