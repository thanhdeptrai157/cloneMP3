import { useSelector } from 'react-redux';
import React, { useState, useRef, useEffect } from "react";
import * as apis from '../apis/music';

const Lyric = ({ isShowLyric, setIsShowLyric, currentTime }) => {
    const { curSongId } = useSelector(state => state.music);
    const [lyric, setLyric] = useState(null);
    const canvasRef = useRef(null);
    const [now, setNow] = useState(0);
    const prevTimestamp = useRef(null);
    const animationFrameId = useRef(null);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(null);

    useEffect(() => {
        const smoothUpdate = (timestamp) => {
            if (prevTimestamp.current !== null) {
                const deltaTime = timestamp - prevTimestamp.current; 
                setNow(prevNow => prevNow + deltaTime); 
            }
            prevTimestamp.current = timestamp;
            animationFrameId.current = requestAnimationFrame(smoothUpdate);
        };

        animationFrameId.current = requestAnimationFrame(smoothUpdate);
        return () => cancelAnimationFrame(animationFrameId.current);
    }, []);

    useEffect(() => {
        setNow(currentTime * 1000); 
    }, [currentTime]);

    useEffect(() => {
        const fetchSong = async () => {
            const response = await apis.getLyric(curSongId);
            if (response.data.err === 0) {
                setLyric(response.data.data);
            }
        };
        fetchSong();
    }, [curSongId]);

    useEffect(() => {
        const index = lyric?.sentences?.findIndex(sentence => {
            const startTime = sentence.words[0]?.startTime;
            const endTime = sentence.words[sentence.words.length - 1]?.endTime;
            return now >= startTime && now <= endTime;
        });

        if (index !== -1) {
            setCurrentSentenceIndex(index);  
        }
    }, [now, lyric]);

    const currentSentence = lyric?.sentences?.[currentSentenceIndex];
    const nextSentence = lyric?.sentences?.[currentSentenceIndex + 1];    

    const drawLyrics = (context, currentSentence, nextSentence) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        context.font = '50px Inter';
        const offSet = 60;

        if (currentSentence) {
            let offsetX = 50; 
            currentSentence.words.forEach(word => {
                const wordStart = word.startTime;
                const wordDuration = word.endTime - word.startTime; 
                const progress = Math.min(1, (now - wordStart) / wordDuration); 

  
                context.fillStyle = '#FFFFFF';
                context.fillText(word.data, offsetX, currentSentenceIndex % 2 === 0 ? offSet : offSet + 90);
                context.save(); 
                context.beginPath();
                
                context.rect(offsetX, 0, context.measureText(word.data).width * progress, context.canvas.height);
                context.clip();

                context.fillStyle =currentSentenceIndex % 2 === 0 ? '#004CFF' : '#FF1493' 

                context.fillText(word.data, offsetX, currentSentenceIndex % 2 === 0 ? offSet : offSet + 90);

                context.restore(); 

                offsetX += context.measureText(word.data).width + 20; 
            });
        }
        if (nextSentence) {
            let offsetX = 50;
            context.fillStyle = '#FFFFFF';
            nextSentence.words.forEach(word => {
                context.fillText(word.data, offsetX, currentSentenceIndex % 2 !== 0 ? offSet : offSet + 90);
                offsetX += context.measureText(word.data).width + 20; 
            });
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (lyric?.sentences?.length) {
            drawLyrics(context, currentSentence, nextSentence);
        } else {
            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
            context.font = '50px Inter';
            context.fillStyle = '#FFFFFF';
            context.fillText('Karaoke đang được cập nhật', 50, 100); 
        }
    }, [currentSentenceIndex, now, lyric]);

    return (
        <div className={`fixed z-[100] transition-all ease-in-out duration-1000 ${isShowLyric ? 'translate-y-0' : 'translate-y-full'} bg-[#120822] p-[50px] h-[100vh] w-full`}>
            <button className='text-white' onClick={() => setIsShowLyric(flag => !flag)}>Close</button>
            <div className='flex justify-center items-center w-full h-[500px]'>
                <canvas id='karaoke-canvas' ref={canvasRef} width={"1000px"} height={"200px"} />
            </div>
        </div>
    );
};

export default Lyric;
