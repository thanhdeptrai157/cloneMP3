import React from 'react'
import { useSelector } from 'react-redux'
const WeekChart = () => {
  const {weekChart} = useSelector(state => state.app)
  return (
    <div className='flex w-full mb-[100px] justify-between gap-[2%]'>
        {
          weekChart?.items?.map((item, key)=>(
            <div className=' overflow-hidden rounded-md w-[33%]' key={key}>
              <img src={item.cover} alt="" width={"100%"} className='object-contain hover:scale-110 transition-all duration-1000 ease-out'/>
            </div>
          )
        ) 
      }
    </div>
  )
}

export default WeekChart