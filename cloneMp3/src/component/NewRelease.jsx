import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { act, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Ellipsis, Premium } from "../utils/icon";
import * as action from '../store/actions/music'
import * as func from '../utils/function'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const NewRelease = () => {
    const dispatch = useDispatch()
    const handleClick = (item) => {
        // console.log(item.encodeId)
        dispatch(action.setCurSongId(item.encodeId));
        dispatch(action.setIsPlaying(true))
    }
    const { new_realease } = useSelector(state => state.app)


    const [selectedGenre, setSelectedGenre] = useState("TẤT CẢ");
    const isSelected = "bg-[#9B4DE0] border border-transparent";
    const notSelected = "border-[hsla(0,0%,100%,0.1)] border"



    const filteredItems = selectedGenre === "TẤT CẢ"
        ? new_realease.items?.all
        : selectedGenre === "VIỆT NAM"
            ? new_realease.items?.vPop
            : new_realease.items?.others;
    return (
        <div className="mt-[50px]">
            <h3 className="text-white mb-[20px] text-[20px] font-bold">Mới Phát Hành</h3>
            <div className="genre-select flex justify-between">
                <div className="btn-left flex gap-4 mb-5">
                    <button className={`px-[24px] py-[4px] text-white text-[12px] rounded-[100px] 
                        ${selectedGenre === "TẤT CẢ" ? isSelected : notSelected}
                    `}
                        onClick={() => setSelectedGenre("TẤT CẢ")}
                    >TẤT CẢ</button>
                    <button className={`px-[24px] py-[4px] text-white text-[12px] rounded-[100px] 
                        ${selectedGenre === "VIỆT NAM" ? isSelected : notSelected}
                    `}
                        onClick={() => setSelectedGenre("VIỆT NAM")}>VIỆT NAM</button>
                    <button className={`px-[24px] py-[4px] text-white text-[12px] rounded-[100px] 
                        ${selectedGenre === "QUỐC TẾ" ? isSelected : notSelected}
                    `}
                        onClick={() => setSelectedGenre("QUỐC TẾ")}>QUỐC TẾ</button>
                </div>
                <div className="btn-right">
                    <a href="" className="flex items-center gap-2 hover:text-[#9B4DE0] text-[#7C7883] hover:decoration-slice">
                        <span className="text-inherit text-[12px] font-bold ">TẤT CẢ</span>
                        <FontAwesomeIcon icon={faAngleRight} color="inherit" />
                    </a>
                </div>
            </div>
            <div className="flex flex-wrap mb-[50px]">
                {
                    filteredItems?.slice(0, 12).map((item, index) => (
                        <div className="gap-4 w-[32%] p-[10px] hover:bg-[#2C2436] group cursor-pointer" onClick={() => handleClick(item)} key={index}>
                            <div className="flex gap-4 items-center w-full">
                                <div className="relative flex">
                                    <img src={item.thumbnail} alt="" width={"60px"} height={"60px"} className="rounded-[5px] group-hover:opacity-40" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 ">
                                        <FontAwesomeIcon icon={faPlay} color="white" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between overflow-hidden flex-1">
                                    <div className="flex items-center">
                                        <span className="text-white text-[14px] truncate hover:text-[#9B4DE0] cursor-pointer min-w-0">
                                            {item.title}
                                        </span>
                                        {item.streamingStatus === 2 && (
                                            <div className="flex-shrink-0 ml-2">
                                                <Premium />
                                            </div>
                                        )}
                                    </div>
                                    <span className="text-[#7C7883] text-[12px] font-semibold">{item.artistsNames}</span>
                                    <span className="text-[#7C7883] text-[12px] font-semibold">{func.calDayRelease(parseInt(item.releaseDate))}</span>
                                </div>
                                <div className="w-[40px] h-[40px] rounded-full hidden group-hover:flex hover:bg-gray-700 items-center justify-center transition-all duration-200 ease-in-out">
                                    <Ellipsis />
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