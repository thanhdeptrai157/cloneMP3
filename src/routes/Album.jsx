import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../apis/music'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faPlay, faShuffle, faSort, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Ellipsis, Heart, Premium } from '../utils/icon'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actions/music'
import * as func from '../utils/function'
const Album = () => {
    const [data, setData] = useState(null)
    const dispatch = useDispatch()
    const {id } = useParams()
    const {songs } = useSelector(state => state.music);
    
    const handleClick = (id) => {
        dispatch(actions.setCurSongId(id))
        dispatch(actions.setIsPlaying(true));
    }
    useEffect(() => {
        const fetchPlaylist = async (id) => {
            const respone = await apis.getPlaylistMusic(id)
            if (respone.data.err === 0) {
                setData(respone.data.data)
                dispatch(actions.setPlaylist(respone?.data?.data.song.items));
            }
        }
        fetchPlaylist(id)
    }, id)
    return (
        <div>
            <div className="mt-[65px] flex gap-10 album_container transition-all duration-300 ease-in-out" >
                <div className='infor-playlist flex flex-col items-center text-center w-1/4 sticky top-[90px] h-[calc(100vh-200px)]'>
                    <div className='relative w-[300px] h-[300px] rounded-md overflow-hidden group img-container'>
                        <img src={data?.thumbnailM} alt="" width={"300px"} className='img-album w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-40' />
                        <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10'>
                            <button className='text-white w-[50px] h-[50px] text-[14px] rounded-full border border-white'>
                                <FontAwesomeIcon icon={faPlay} color='white' size='xl' />
                            </button>
                        </div>
                    </div>
                    <div className=' items-center info-album '>
                        <h3 className='text-white text-[20px] font-bold mt-4 title'>{data?.title}</h3>
                        <div className='text-gray-500 text-[12px] font-semibold'>Cập nhật: {func.calDayAlbum(data?.contentLastUpdate)}</div>
                        <div className='text-gray-500 text-[12px] font-semibold'>
                            {
                            data?.artists?.map((artist, index) => (
                                <a href="" className="text-[#7C7883] hover:text-[#9B4DE0] text-[12px] font-medium ">{artist.name}{index < data?.artists?.length - 1 && ', '}</a>
                            ))
                            }
                        </div>
                        <div className='text-gray-400 text-[12px] font-semibold'>{func.calLike(data?.like)} người yêu thích</div>
                        <div className='text-white text-[14px] hidden description-res mt-3' ><span className='text-gray-500 '>Lời tựa</span> {data?.sortDescription}</div>
                        <div className='btn-group-action'>
                            <button className='text-white bg-[#9B4DE0] px-[24px] py-[9px] text-[14px] rounded-3xl mt-5 hover:bg-purple-700'>
                                <FontAwesomeIcon icon={faPlay} className='mr-2' color='white' />PHÁT NGẪU NHIÊN
                            </button>
                            <div className='btn-action mt-5 flex justify-center'>
                                <button className='w-[30px] h-[30px] rounded-full mr-5 bg-[#231B2E] flex items-center justify-center'><Heart /></button>
                                <button className='w-[30px] h-[30px] rounded-full bg-[#231B2E] flex items-center justify-center'><Ellipsis /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-3/4 playlist-song">
                    <h3 className='text-white text-[14px] description '><span className='text-gray-500 '>Lời tựa</span> {data?.sortDescription}</h3>
                    <div className='flex justify-between text-[12px] text-gray-500 font-semibold border-b border-gray-800 py-3 pl-2 mt-3'>
                        <div className='w-[23%]'>
                            <FontAwesomeIcon icon={faSort} /><span className='ml-3'>BÀI HÁT</span>
                        </div>
                        <div>ALBUM</div>
                        <div className='mr-[10px]'>THỜI GIAN</div>

                    </div>
                    {songs?.map(song => (
                        <div className='flex items-center justify-between py-[10px] px-[10px] border-b border-gray-800 hover:bg-[#231B2E] hover:rounded-[5px] w-full' onClick={() => handleClick(song.encodeId)}>
                            <div className='flex items-center gap-3 w-[45%]'>
                                <FontAwesomeIcon icon={faMusic} color='gray' size='sm' />
                                <img src={song.thumbnail} alt="" width={"40px"} className='rounded-md cursor-pointer' />
                                <div className='flex flex-col w-[100%]'>
                                    <div className='flex items-center gap-5'>
                                        <div className='flex text-white text-[14px] font-medium truncate max-w-full min-w-0'>{song.title}</div>
                                        <div>{song.streamingStatus === 2 && <Premium />}</div>
                                    </div>
                                    <div className="">
                                        {
                                            song.artists?.map((artist, index) => (
                                                <a href="" className="text-[#7C7883] hover:text-[#9B4DE0] text-[12px] font-medium truncate overflow-ellipsis">{artist.name}{index < song.artists?.length - 1 && ', '}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='w-[30%]'>
                                <span className='text-[#7C7883] text-[12px] font-semibold'>{song.album?.title}</span>
                            </div>
                            <div className=''>
                                <span className='text-[#7C7883] text-[12px] font-semibold'>{func.calDuration(song.duration)}</span>
                            </div>
                        </div>
                    ))}
                    <div className='text-gray-400 text-[13px] font-semibold mt-5'>{data?.song.total} bài hát • {func.calTimeAlbum(data?.song.totalDuration)}</div>
                </div>
            </div>
            <h2 className='text-white text-[20px] font-bold mt-[100px]'>Nghệ Sĩ Tham Gia</h2>
            <div className={`flex ${data?.artists.length > 2 ? 'justify-between' : ""} mb-[300px] mt-5`}>
                {
                    data?.artists.map(artist => (
                        <div className='text-center mr-5'>
                            <div className='relative rounded-full overflow-hidden group min-w-[140px]'>
                                <img src={artist.thumbnailM} alt="" width={"250px"} className=' object-contain transition-transform duration-500 ease-in-out group-hover:scale-110 ' />
                                <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10'>
                                    <button className='text-white w-[50px] h-[50px] text-[14px] rounded-full border border-white'>
                                        <FontAwesomeIcon icon={faShuffle} color='white' size='xl' />
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <span className="text-white hover:text-[#9B4DE0] hover:decoration-inherit cursor-pointer text-[14px] font-semibold mt-4">{artist.name}</span>
                                <span className='text-gray-600 text-[12px] font-bold'>{func.calLike(artist.totalFollow)} quan tâm</span>
                            </div>
                            <button className='text-white text-[12px] font-semibold border border-[#362F40] px-[19px] py-[4px] rounded-[200px] bg-[#2F2739] mt-[15px]'><FontAwesomeIcon icon={faUserPlus} color='inherit' /> QUAN TÂM</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Album