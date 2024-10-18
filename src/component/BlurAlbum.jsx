import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PATH from "../utils/path";
import { Ellipsis, Heart } from "../utils/icon";

const BlurAlbum = ({album, handleClick}) => {
    return (
        <div>
            <div className="flex flex-col overflow-hidden rounded-[5px] ">
                <div className='relative rounded-md overflow-hidden group ' onClick={() => handleClick(album)}>
                    <img src={album?.thumbnailM} alt="" width={"300px"} className=' w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-60' />
                    <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10'>
                        <Heart />
                        <button className='text-white w-[50px] h-[50px] text-[14px] rounded-full border border-white mr-5 ml-5'>
                            <FontAwesomeIcon icon={faPlay} color='white' size='xl' />
                        </button>
                        <Ellipsis />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlurAlbum