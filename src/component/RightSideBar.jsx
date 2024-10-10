import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Song from './Song';
import * as apis from '../apis/music';

const RightSideBar = ({ isShow }) => {
    const { curSongId, songs } = useSelector(state => state.music);
    const [song, setSong] = useState(null);

    useEffect(() => {
        const fetchSong = async () => {
            const response1 = await apis.getInforMusic(curSongId);
            if (response1.data.err === 0) {
                setSong(response1.data.data);
            }
            
        };
        fetchSong();
    }, [curSongId]);
    const style = "w-full bg-[#9B4DE0] text-white h-[70px]";

    return (
        <div className={`h-[calc(100vh-90px)] w-[330px] fixed right-0 z-[51] transition-all ease-in-out duration-300
            ${isShow ? 'translate-x-0' : 'translate-x-full'} bg-[#120822]`}>
            <div className='h-[70px] w-full bg-red-100'>
                <Song item={song} style={style} />
            </div>
            <div className='text-white'>Tiếp theo</div>
            <div className='overflow-y-auto' style={{ maxHeight: 'calc(100vh - 160px)' }}>
                {songs?.map((item, index) => (
                    <Song key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default RightSideBar;
