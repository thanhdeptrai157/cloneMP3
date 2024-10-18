import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PATH from "../utils/path";
import { Ellipsis, Heart } from "../utils/icon";
import BlurAlbum from "./BlurAlbum";

const Playlist = ({ play_list }) => {
    const navigate = useNavigate();
    const handleClick = (item) => {
        const tach = item.link.split('/', 4)
        navigate(PATH.ALBUM.replace(':type', tach[1]).replace(':name', tach[2]).replace(':id', tach[3].split('.')[0]))
    }
    return (
        <div className="playlist mb-[20px]">
            <h3 className="text-white text-[20px] font-bold mb-[25px]" >{play_list?.title}</h3>
            <div className="item-playlist flex gap-5 overflow-hidden">
                {
                    play_list?.items
                        ?.sort(() => Math.random() - 0.5)
                        .slice(0, 5)
                        .map((album, key) => (
                            <div className="flex flex-col w-[18.4%] " key={key}>
                            <BlurAlbum album={album} handleClick={handleClick}/>
                            <div className="text-[#7C7883] text-sm mt-3 font-[550] cursor-default">
                            {
                                album.sortDescription.length > 100 || album.sortDescription.length == 0? 
                                (
                                    album?.artists?.map((artist, index) => (
                                        <a href="" className="text-[#7C7883] hover:text-[#9B4DE0] text-[14px] font-medium overflow-ellipsis" key={index}>{artist.name}{index < album?.artists?.length - 1 && ', '}</a>
                                    ))
                                 ) : album.sortDescription
                            }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Playlist;
