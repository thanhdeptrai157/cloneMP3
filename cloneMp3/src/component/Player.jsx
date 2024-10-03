import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as apis from '../apis/music'
import { Heart, Ellipsis } from "../utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { faBackwardStep, faShuffle, faPause, faPlay, faForwardStep, faRepeat } from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    const { curSongId } = useSelector(state => state.music)
    const {isPlaying} = useSelector(state =>state.music)
    const [songInfor, setSong] = useState(null);
    const [song, setCurSong] = useState(null);
    const [play, setIsPlay] = useState(false);
    const audioRef = useRef(new Audio());
    useEffect(() => {
        const fetchSong = async () => {
            const response1 = await apis.getInforMusic(curSongId)
            const response2 = await apis.getMusic(curSongId)
            //console.log(response2);
            if (response1.data.err === 0) {
                setSong(response1.data.data)
            }
            if (response2.data.err === 0) {
                setCurSong(response2.data.data['128']);
            }
        }
        fetchSong()
        
    }, [curSongId])

    useEffect(()=>{
        if(song){
            audioRef.current.src = song;
            if(play){
                audioRef.current.play()
            }
        }
    },[song])

    useEffect(() => {
        if (play) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [play]);

    useEffect(()=>{
        setIsPlay(isPlaying)
    },[isPlaying])


    return (
        <div className="player-controls h-[87px] w-full bg-[#130C1C] fixed bottom-0 z-[1000] flex px-[20px]">
            <div className="infor w-1/4 flex items-center">
                <div className="flex items-center gap-3" >
                    <img src={songInfor?.thumbnail} alt="" width={"64px"} height={"64px"} className="rounded-[5px]" />
                    <div className="flex flex-col mr-5">
                        <span className="text-white font-medium text-[14px]">{songInfor?.title}</span>
                        <span className="text-[#7C7883] font-semibold text-[12px]">{songInfor?.artistsNames}</span>
                    </div>
                    <div className="flex gap-5">
                        <Heart />
                        <Ellipsis />
                    </div>
                </div>
            </div>
            <div className="infor w-1/2 py-[15px]">
                <div className="control flex justify-center gap-7 items-center">
                    <span className="cursor-pointer" title="Bật phát ngẫu nhiên" ><FontAwesomeIcon icon={faShuffle} color="white" size="1x" /></span>
                    <FontAwesomeIcon icon={faBackwardStep} color="white" size="1x" className="cursor-pointer" />
                    <div className="rounded-full border-white border w-[37px] h-[37px] flex items-center justify-center cursor-pointer hover:border-[#9B4DE0] hover:text-[#9B4DE0] text-white "
                        onClick={() => setIsPlay(!play)}>
                        <FontAwesomeIcon icon={play ? faPause : faPlay} color="white" size="1x" className="text-inherit ml-[1px]" />
                    </div>
                    <FontAwesomeIcon icon={faForwardStep} color="white" size="1x" className="cursor-pointer" />
                    <span className="cursor-pointer" title="Phát lại tất cả"><FontAwesomeIcon icon={faRepeat} color="white" size="1x" /></span>
                </div>
            </div>
            <div className="infor bg-yellow-400 w-1/4"></div>
        </div>

    )
}

export default Player;