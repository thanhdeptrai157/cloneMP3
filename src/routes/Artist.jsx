import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from '../apis/artist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import BlurAlbum from '../component/BlurAlbum'
import Song2 from '../component/Song2'
const Artist = () => {
  const { name } = useParams()
  const [artist, setArtist] = useState(null)
  useEffect(() => {
    const fetchArtist = async (aid) => {
      const respone = await apis.getArtistByName(aid)
      if (respone?.data?.err === 0) {
        setArtist(respone?.data?.data)
      }
      else {

      }
    }
    fetchArtist(name);
  }, [name])
  console.log(artist)
  return (
    artist &&
    <div className='text-white'>
      <div className='flex gap-[30px] pb-[20px] pt-[140px] px-[59px] bg-[#3E2649]'>
        <div className='w-[140px] h-[140px] rounded-full overflow-hidden'>
          <img src={artist?.thumbnailM} alt="" />
        </div>
        <div className=''>
          <div className='flex items-center gap-7'>
            <div className=' text-[60px] font-bold'>
              {artist?.name}
            </div>
            <div className='w-[52px] h-[52px] rounded-full bg-[#9B4DE0] flex items-center justify-center'><FontAwesomeIcon icon={faPlay} size='xl' /></div>
          </div>
          <div className='flex items-center'>
            <div className='text-[14px] font-medium'>
              {artist?.totalFollow.toLocaleString('vi-VN')} người quan tâm
            </div>
            <button className=' text-[12px] font-semibold border border-[#635574] px-[19px] py-[4px] rounded-[200px] bg-transparent ml-[24px] '><FontAwesomeIcon icon={faUserPlus} color='inherit' /><span className='ml-[10px]'>QUAN TÂM</span></button>
          </div>
        </div>
      </div>
      <div className='px-[59px] flex gap-[30px]'>
        {artist?.topAlbum && 
        <div className='w-1/3'>
          <div className='text-[20px] font-semibold mb-[20px] mt-[20px]'>
            Mới phát hành
          </div>
          <div className='p-[16px] bg-[#2E2738]  rounded-xl flex gap-4 group cursor-pointer' >
            <div className='w-[151px] h-[151px] flex-shrink-0'>
              <BlurAlbum album={artist?.topAlbum} />
            </div>
            <div>
              <div className='text-[12px] text-[#7C7883] font-semibold'>Album</div>
              <div className='font-semibold text-[14px]'>{artist?.topAlbum?.title}</div>
              {

                artist?.topAlbum?.artists.map((artist, index) => (
                  <a href="" className="text-[#7C7883] hover:text-[#9B4DE0] text-[12px] font-medium overflow-ellipsis" key={index}>{artist?.name} {index < artist?.topAlbum?.artists.length - 1 && ', '}</a>

                ))
              }
              <div className='text-[#7C7883] text-[12px] font-semibold'>
                {artist?.topAlbum.releaseDate}
              </div>
            </div>
          </div>
        </div>
        }
        <div className={`${artist?.topAlbum ? 'w-2/3' : 'w-full'}`}>
          <div className='text-[20px] font-semibold mb-[20px] mt-[20px]'>{artist?.sections[0].title}</div>
          <div className='flex flex-wrap'>
            {
              artist?.sections[0].items.map((song, index) =>(
              <div className='w-[49%]'>
                  <Song2 song={song} key={index} isInArtist={true} />
                  </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artist