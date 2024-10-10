import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Premium, Ellipsis } from '../utils/icon'
import * as func from '../utils/function'
const Song = ({item, handleClick, style}) => {
    return (
        <div className={`gap-4 p-[10px] group cursor-pointer ${style}`} onClick={() => handleClick(item)} >
            <div className="flex gap-4 items-center w-full">
                <div className="relative flex">
                    <img src={item?.thumbnail} alt="" width={"60px"} height={"60px"} className="rounded-[5px] group-hover:opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 ">
                        <FontAwesomeIcon icon={faPlay} color="white" />
                    </div>
                </div>
                <div className="flex flex-col justify-between overflow-hidden flex-1">
                    <div className="flex items-center">
                        <span className="text-white text-[14px] truncate hover:text-[#9B4DE0] cursor-pointer min-w-0">
                            {item?.title}
                        </span>
                        {item?.streamingStatus === 2 && (
                            <div className="flex-shrink-0 ml-2">
                                <Premium />
                            </div>
                        )}
                    </div>
                    <div className="">
                        {
                            item?.artists?.map((artist, index) => (
                                <a href="" className="text-[#7C7883] hover:text-[#9B4DE0] text-[12px] font-medium truncate overflow-ellipsis">{artist.name}{index < item?.artists?.length - 1 && ', '}</a>
                            ))
                        }
                    </div>
                    <span className="text-[#7C7883] text-[12px] font-semibold">{func.calDayRelease(parseInt(item?.releaseDate))}</span>
                </div>
                <div className="w-[40px] h-[40px] rounded-full hidden group-hover:flex hover:bg-gray-700 items-center justify-center transition-all duration-200 ease-in-out">
                    <Ellipsis />
                </div>
            </div>
        </div>
    )
}

export default Song