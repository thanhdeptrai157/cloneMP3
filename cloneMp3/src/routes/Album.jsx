import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../apis/music'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Premium } from '../utils/icon'
import { useDispatch } from 'react-redux'
import * as actions from '../store/actions/music'
const Album = () => {
    const { type, id } = useParams()
    const [data, setData] = useState(null)
    const dispatch = useDispatch()
    const calDay = (unixStamp) => {
        return new Date(unixStamp * 1000).toLocaleDateString('vi-VN')
    }
    const calLike = (like) => {
        if (like < 1000) return like
        else return Math.round(like / 1000) + "K"
    }
    const calDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60).toString().padStart(2,'0');
        const remainingSeconds = (seconds % 60).toString().padStart(2,'0');
        return `${minutes}:${remainingSeconds}`;
    }
    const handleClick = (id) =>{
        dispatch(actions.setCurSongId(id))
    }
    useEffect(() => {
        const fetchPlaylist = async (id) => {
            const respone = await apis.getPlaylistMusic(id)
            if (respone.data.err === 0) {
                setData(respone.data.data)
            }
        }
        fetchPlaylist(id)
    }, id)
    return (
        <div className="mt-[65px] flex gap-10" >
            <div className='infor-playlist flex flex-col items-center text-center w-1/4 sticky top-[110px]'>
                <div className='w-[300px] h-[300px] rounded-md overflow-hidden'>
                    <img src={data?.thumbnailM} alt="" width={"300px"} className='hover:scale-110 transition-all duration-500 ease-in-out' />
                </div>
                <h3 className='text-white text-[20px] font-bold mt-4'>{data?.title}</h3>
                <span className='text-gray-500 text-[12px] font-semibold'>Cập nhật: {calDay(data?.contentLastUpdate)}</span>
                <span className='text-gray-500 text-[12px] font-semibold'>{data?.artistsNames}</span>
                <span className='text-gray-400 text-[12px] font-semibold'>{calLike(data?.like)} người yêu thích</span>
                <button className='text-white bg-[#9B4DE0] px-[24px] py-[9px] text-[14px] rounded-3xl'><FontAwesomeIcon icon={faPlay} className='mr-2' color='white' />PHÁT NGẪU NHIÊN</button>
            </div>
            <div className="w-3/4 ">
                <h3 className='text-white text-[14px]'>Lời tựa: {data?.sortDescription}</h3>
                {data?.song.items.map(song => (
                    <div className='flex items-center justify-between py-[14px] border-b border-gray-800 hover:bg-[#231B2E] ' onClick={()=> handleClick(song.encodeId)}>
                        <div className='flex items-center gap-3 w-1/2'>
                            <FontAwesomeIcon icon={faMusic} color='gray' size='sm'/>
                            <img src={song.thumbnail} alt="" width={"40px"} className='rounded-md cursor-pointer' />
                            <div className='flex flex-col'>
                                <div className='flex gap-2 items-center'>
                                    <span className='text-white text-[14px] font-medium'>{song.title}</span>
                                    {song.streamingStatus === 2 && <Premium />}
                                </div>
                                <span className='text-[#7C7883] text-[12px] font-bold'>{song.artistsNames}</span>
                            </div>
                        </div>
                        <div className='w-1/3'>
                            <span className='text-[#7C7883] text-[12px] font-semibold'>{song.album?.title}</span>
                        </div>
                        <div className=''>
                            <span className='text-[#7C7883] text-[12px] font-semibold'>{calDuration(song.duration)}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Album