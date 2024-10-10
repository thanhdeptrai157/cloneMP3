import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { act, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from '../store/actions/music'
import Song from "./Song";
const NewRelease = () => {
    const dispatch = useDispatch()
    const handleClick = (item) => {
        dispatch(action.setCurSongId(item.encodeId));
        dispatch(action.setIsPlaying(true))
    }
    const { new_realease } = useSelector(state => state.app)


    const [selectedGenre, setSelectedGenre] = useState("TẤT CẢ");
    const isSelected = "bg-[#9B4DE0] border border-transparent";
    const notSelected = "border-[hsla(0,0%,100%,0.1)] border"

    const style ="w-[32%] hover:bg-[#2C2436] "

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
            <div className="flex flex-wrap mb-[50px] justify-between">
                {
                    filteredItems?.slice(0, 12).map((item, index) => (
                        <Song item = {item} handleClick={handleClick} style={style} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}

export default NewRelease;