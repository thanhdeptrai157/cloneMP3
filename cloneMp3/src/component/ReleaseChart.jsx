import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import * as func from '../utils/function'
const ReleaseChart = () => {
    const { newReleaseChart } = useSelector(state => state.app)
    
    const [index, setCurrentIndex] = useState(0)
    const setClickNext = (index)=>{
        if(index == 6 ){
            index = 0
        }
        else
            index += 3
        setCurrentIndex(index)
    }
    const setClickBack = (index)=>{
        if(index == 0){
            index = 6
        }
        else
            index-=3
        setCurrentIndex(index)
    }
    
    return (
        <div>
            <div className='text-white text-[20px] font-bold'>BXH Nhạc Mới</div>
            <div className='mt-6 mb-[50px] flex w-full gap-[20px] relative '>
            {
                newReleaseChart?.items?.slice(index, index + 3).map((item, key) => (
                    <div className={`bxh w-[32%] flex p-[10px] bg-[#362F40] flex-1 items-center rounded-md group min-w-[250px] transition-all duration-300 `} key={key}>
                        <div className='relative rounded-md overflow-hidden group '>
                            <img src={item?.thumbnailM} alt="" width={"120px"} className='min-w-[120px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-60' />
                            <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10'>
                                <button className='text-white w-[50px] h-[50px] text-[14px] rounded-full border border-white'>
                                    <FontAwesomeIcon icon={faPlay} color='white' size='xl' />
                                </button>
                            </div>
                        </div>
                        <div className='ml-3 flex flex-col h-full w-2/3'>
                            <div className='flex-1'>
                                <div className='text-white text-[14px] font-[550] flex-grow'>{item.title}</div>
                                <div className='text-[12px] font-bold text-gray-500 flex-grow mt-1'>{item.artistsNames}</div>
                            </div>
                            <div className='flex items-end justify-between'>
                                <div className='text-[40px] font-bold text-stroke text-transparent leading-none'># {key+ index + 1}</div>
                                <div className='text-gray-400 font-semibold text-[14px]'>{func.calDayRankNewRelease(item.releaseDate)}</div>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
            <div className={`bxh w-[32%] flex p-[10px] h-[140px] bg-[#362F40] flex-1 items-center justify-center rounded-md group min-w-[350px] ${index == 6 ? "block" : "hidden"} `}>
                <span className='text-purple-600'>XEM TẤT CẢ</span>
            </div>
            <button className='absolute w-[40px] h-[40px] rounded-full bg-white -left-[20px] bottom-[55px]' onClick={()=>setClickBack(index)}>
                <FontAwesomeIcon icon = {faChevronLeft}/></button>
            <button className='absolute w-[40px] h-[40px] rounded-full bg-white -right-[20px] bottom-[55px]' onClick={()=>setClickNext(index)}>
                <FontAwesomeIcon icon = {faChevronRight}/></button>
        </div>
        </div>
    )
}

export default ReleaseChart