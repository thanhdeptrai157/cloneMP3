import React from "react";
import { useEffect } from "react";
import * as apis from '../apis/home';
import { useSelector } from "react-redux";
const Galery = () => {

    const { banner } = useSelector(state => state.app)
    return (
        <div className="galery flex gap-6 w-full overflow-hidden mt-[59px]">
            {
                banner.items?.map((item, index) => (
                    <img src={item.banner} key={index} className="flex-1 object-contain w-[31.7%] rounded-[5px]" />
                ))
            }
        </div>
    )
}

export default Galery;