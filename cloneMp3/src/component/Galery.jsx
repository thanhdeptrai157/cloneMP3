import React from "react";
import { useSelector } from "react-redux";
import PATH from "../utils/path";
import { useNavigate } from "react-router-dom";
const Galery = () => {
    const { banner } = useSelector(state => state.app)
    const navigate = useNavigate();
    const handleClick = (item)=>{
        const tach = item.link.split('/', 4)
        if(tach[1] != 'bai-hat')
            navigate(PATH.ALBUM.replace(':type', tach[1]).replace(':name', tach[2]).replace(':id', tach[3].split('.')[0]))
        
    }
    return (
        <div className="galery flex gap-6 w-full overflow-hidden mt-[59px]">
            {
                banner.items?.map((item, index) => (
                    <img src={item.banner} key={index} className="flex-1 object-contain w-[31.7%] rounded-[5px]" onClick={()=>handleClick(item)}/>
                ))
            }
        </div>
    )
}

export default Galery;