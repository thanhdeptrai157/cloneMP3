import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faPlay, faShuffle, faSort, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Ellipsis, Heart, Kara } from '../utils/icon'
import { Premium } from '../utils/icon'
import * as func from '../utils/function'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as action from '../store/actions/music'
import PATH from '../utils/path'
const Song2 = ({ song, isInAlbum, isInArtist }) => {
    const dispatch = useDispatch()
    const handleClick = (encodeId) => {
        dispatch(action.setCurSongId(encodeId));
        dispatch(action.setIsPlaying(true))
    }
    const navigate = useNavigate()
    const handleArtistClick = (item) => {
        navigate(PATH.ARTIST.replace(':name', item))
    }
    return (
        <div className='flex items-center py-[10px] px-[10px] border-b border-gray-800 hover:bg-[#231B2E] hover:rounded-[5px] w-full group flex-1' onDoubleClick={() => handleClick(song.encodeId)}>
            <div className={`flex items-center gap-3  ${isInAlbum ? 'w-[50%]' : 'w-[80%]'}`}>
                {isInAlbum && <FontAwesomeIcon icon={faMusic} color='gray' size='sm' />}
                <div className="relative flex flex-shrink-0">
                    <img src={song?.thumbnail} alt="" width={"40px"} className='rounded-md cursor-pointer group-hover:opacity-60 ' />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 ">
                        <FontAwesomeIcon icon={faPlay} color="white" />
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex items-center  gap-5'>
                        <div className='flex text-white text-[14px]  font-medium  min-w-0 hover:text-[#9B4DE0] cursor-pointer'>{song?.title} </div>
                        <div className='flex-shrink-0'>{song?.streamingStatus === 2 && <Premium />}</div>
                    </div>
                    <div className="flex truncate text-[#7C7883] max-w-[200px]">
                        {
                            song?.artists?.map((artist, index) => (
                                <span key={index}>
                                    <a
                                        className=" hover:text-[#9B4DE0] text-[12px] font-medium cursor-pointer hover:underline"
                                        onClick={() => handleArtistClick(artist?.alias)}
                                    >
                                        { artist.name}
                                    </a>
                                    {index < song?.artists?.length - 1 && <span className='mr-1'>, </span>}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
            {isInAlbum &&
                <div className='w-0 max-w-[350px] truncate text-[#7C7883] flex-grow flex-shrink' >
                    <span className='text-[12px] font-semibold '>{song?.album?.title}</span>
                </div>
            }
            {(isInAlbum || isInArtist) &&
                <div className='flex flex-shrink-0 flex-grow-0 '>
                    <div className='group-hover:hidden '>
                        <span className='text-[#7C7883] text-[12px] font-semibold'>{func.calDuration(song?.duration)}</span>
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full hidden group-hover:flex hover:bg-gray-700 items-center justify-center transition-all duration-200 ease-in-out">
                        <Kara />
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full hidden group-hover:flex hover:bg-gray-700 items-center justify-center transition-all duration-200 ease-in-out">
                        <Heart />
                    </div>
                    <div className="w-[40px] h-[40px] rounded-full hidden group-hover:flex hover:bg-gray-700 items-center justify-center transition-all duration-200 ease-in-out">
                        <Ellipsis />
                    </div>
                </div>
            }
        </div>
    )
}

export default Song2