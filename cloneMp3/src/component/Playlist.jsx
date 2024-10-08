import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PATH from "../utils/path";
import { Ellipsis, Heart } from "../utils/icon";
const Playlist = ({index1, index2}) => {
    const { play_list } = useSelector(state => state.app);
    const navigate = useNavigate();
    const handleClick = (item) => {
        const tach = item.link.split('/', 4)
        navigate(PATH.ALBUM.replace(':type', tach[1]).replace(':name', tach[2]).replace(':id', tach[3].split('.')[0]))
        console.log(tach)
    }
    return (
        <div className="playlist mb-[50px]">
            {
                play_list?.slice(index1 , index2).map((item, key) => (
                    <div key={item.id} >
                        <h3 className="text-white text-[20px] font-bold mb-[25px]" >{item.title}</h3>
                        <div className="item-playlist flex gap-5 overflow-hidden">
                            {
                                item.items
                                    ?.sort(() => Math.random() - 0.5)
                                    .slice(0, 5)
                                    .map((album, key) => (
                                        <div className="flex flex-col w-[18.4%] " key = {key}>
                                            <div key={album.id} className="flex flex-col overflow-hidden rounded-[5px] ">
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
                                        <div className="text-[#7C7883] text-sm mt-3 font-[550] cursor-default">{album.sortDescription}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Playlist;
