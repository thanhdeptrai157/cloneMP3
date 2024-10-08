import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as apis from '../apis/music'
import { Heart, Ellipsis } from "../utils/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import * as funcs from '../utils/function'
import * as actions from '../store/actions/music'
import { faBackwardStep, faShuffle, faPause, faPlay, faForwardStep, faRepeat } from "@fortawesome/free-solid-svg-icons";

var intervalId

const Player = () => {
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const [songInfor, setSong] = useState(null);
    const [audio, setAudio ] = useState(new Audio());
    const [currentTime, setCurrentTime] = useState(0);
    const thumb = useRef();
    const track = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSong = async () => {
            const response1 = await apis.getInforMusic(curSongId)
            const response2 = await apis.getMusic(curSongId)
            if (response1.data.err === 0) {
                setSong(response1.data.data)
            }
            if (response2.data.err === 0) {
                audio.pause();
                setAudio(new Audio(response2.data.data['128']));
            }
        }
        fetchSong()
    }, [curSongId])

    useEffect(()=>{
        audio.load();
        if(isPlaying) audio.play();

    }, [audio])

    useEffect(()=>{
        intervalId && clearInterval(intervalId);
        audio.pause();
        audio.load();
        audio.currentTime = 0;
        if(isPlaying){
            audio.play();
            intervalId = setInterval(()=>{
                let percent = Math.round(audio.currentTime * 10000 / songInfor?.duration) / 100
                thumb.current.style = `right: ${100 - percent}% `
                setCurrentTime(Math.round(audio.currentTime));
            }, 500)
        }
    }, [audio])
    const handlePlayMusic = () =>{
        if(isPlaying ){
            audio.pause();
            dispatch(actions.setIsPlaying(false));
        } else{
            audio.play();
            dispatch(actions.setIsPlaying(true));
        }
       
    }
    const handleClickTrack = (e) =>{
        const trackRect = track.current.getBoundingClientRect();
        const percent = Math.round((e.clientX - trackRect.left)* 10000 /trackRect.width)/100;
        thumb.current.style = `right: ${100 - percent}% `;
        audio.currentTime = percent*songInfor?.duration /100;
        setCurrentTime(Math.round(percent*songInfor?.duration /100));
    }
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
                        onClick={() => handlePlayMusic()}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} color="white" size="1x" className="text-inherit ml-[1px]" />
                    </div>
                    <FontAwesomeIcon icon={faForwardStep} color="white" size="1x" className="cursor-pointer" />
                    <span className="cursor-pointer" title="Phát lại tất cả"><FontAwesomeIcon icon={faRepeat} color="white" size="1x" /></span>
                </div>

                <div className="w-full flex justify-center items-center mt-[4px] ">
                    <span className="text-[13px] text-[#6B6771] font-semibold mr-[10px] ">{funcs.calDuration(currentTime)}</span>
                    <div ref = {track} onClick={handleClickTrack} className="hover:h-[8px] w-[65%] h-[4px] bg-[#595460] relative group rounded-l-full rounded-r-full transition-all duration-300 ease-in-out cursor-pointer">
                        <div ref ={thumb} className="absolute group-hover:h-[8px] transition-all duration-300 ease-in-out top-0 left-0 bg-white z-10 h-[4px] rounded-l-full rounded-r-full"></div>
                    </div>
                <span className="text-[13px] text-white font-semibold ml-[10px]">{funcs.calDuration(songInfor?.duration)}</span>
                </div>
            </div>
            <div className="info w-1/4"></div>
        </div>

    )
}

export default Player;