import React, { useState } from "react";
import { useSelector } from "react-redux";
import PATH from "../utils/path";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Galery = () => {
    const { galery } = useSelector((state) => state.app);
    const navigate = useNavigate();
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (item) => {
        const tach = item.link.split("/", 4);
        if (tach[1] !== "bai-hat")
            navigate(
                PATH.ALBUM.replace(":type", tach[1])
                    .replace(":name", tach[2])
                    .replace(":id", tach[3].split(".")[0])
            );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === galery.items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galery.items.length - 1 : prevIndex - 1
        );
    };

    const getItemsToShow = () => {
       
        const items = galery.items || [];
        if (items.length <= 3) {
            return items; 
        }

        
        const totalItems = items.length;
        return [
            items[currentIndex % totalItems],
            items[(currentIndex + 1) % totalItems],
            items[(currentIndex + 2) % totalItems],
        ];
    };

    return (
        <div className="relative w-full mt-[59px] ">
            <div className="galery flex gap-6 w-full overflow-hidden transition-transform duration-500 ease-in-out">
                {getItemsToShow().map((item, index) => (
                    <img
                        src={item.banner}
                        key={index}
                        className="flex-1 object-contain w-[31.7%] rounded-[5px]"
                        onClick={() => handleClick(item)}
                    />
                ))}
            </div>

            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full w-[45px] h-[45px]"
                onClick={handlePrev}
            >
                <FontAwesomeIcon icon = {faChevronLeft}/>
            </button>

            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 p-2 rounded-full  w-[45px] h-[45px]"
                onClick={handleNext}
            >
                <FontAwesomeIcon icon = {faChevronRight}/>
            </button>
        </div>
    );
};

export default Galery;
