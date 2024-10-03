import { split } from "postcss/lib/list";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PATH from "../utils/path";
const Playlist = () => {
    const { play_list } = useSelector(state => state.app);
    const navigate = useNavigate();
    const handleClick = (item)=>{
        const tach = item.link.split('/', 4)
        navigate(PATH.ALBUM.replace(':type', tach[1]).replace(':name', tach[2]).replace(':id', tach[3].split('.')[0]))
        console.log(tach)
    }
    return (
        <div className="playlist mb-[100px]">
            {
                play_list?.map(item => (
                    <div key={item.id}> 
                        <h3 className="text-white text-[20px] font-bold mb-[25px]">{item.title}</h3>
                        <div className="item-playlist flex gap-5 overflow-hidden">
                            {
                                item.items
                                    ?.sort(() => Math.random() - 0.5)
                                    .slice(0, 5)
                                    .map(album => (
                                        <div className="flex flex-col w-[18.4%] min-w-[177px]" onClick={()=>handleClick(album)}>
                                        <div key={album.id} className="flex flex-col overflow-hidden rounded-[5px] ">
                                            <div className="w-full ">
                                                <img src={album.thumbnail} alt="" className="w-full rounded-[5px] h-auto transition-all duration-500 ease-in-out hover:scale-110 hover:z-[-10] " />
                                            </div>
                                        </div>
                                        <div className="text-[#7C7883] text-sm mt-2 font-bold">{album.sortDescription}</div>
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
