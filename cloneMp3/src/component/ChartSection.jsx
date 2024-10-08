import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import '../style/Reponsive.css'
import * as func from '../utils/function'

const ChartSection = () => {
    const { chart } = useSelector(state => state.app);
    const [data, setData] = useState({ labels: [], datasets: [] });
    const chartRef = useRef(null); // Ref for chart responsiveness

    var filteredLabels = []

    useEffect(() => {
        Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

        if (chart) {
            const labels = chart?.chart?.times?.map(item => parseInt(item.hour)) || [];
            filteredLabels = labels.filter((_, index) => index % 2 === 0);

            const datasets = []
            if (chart && chart.chart && chart.chart.items) { 
                const itemKeys = Object.keys(chart.chart.items); 
                for (let i = 0; i < 3; i++) {
                    if (i < itemKeys.length) {
                        const datasetData = chart.chart.items[itemKeys[i]]?.map(item => item.counter) || [];
                        const borderColor = itemKeys[i] === chart.items[0]?.encodeId
                            ? '#4B8BDA'
                            : itemKeys[i] === chart.items[1]?.encodeId
                                ? '#4BA5A1'
                                : '#D44B51';

                        datasets.push({
                            data: datasetData,
                            borderColor: borderColor,
                            tension: 0.2,
                            borderWidth: 2,
                            pointBackgroundColor: 'white',
                            pointHoverRadius: 5,
                            pointBorderColor: borderColor,
                            pointHoverBorderWidth: 3,
                        });
                    }
                }
            }

            setData({ labels, datasets });
        }
    }, [chart]);

    const options = {
        responsive: true, 
        maintainAspectRatio: false, // Makes chart responsive
        pointRadius: 0,
        scales: {
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: true,
                    drawBorder: false,
                    drawTicks: false,
                    color: 'rgba(255,255,255,0.2)',
                },
                border: { dash: [3, 4] },
                min: chart?.chart?.minScore,
                max: chart?.chart?.maxScore, 
            },
            x: {
                ticks: { 
                    color: 'white',
                    callback: (value) => filteredLabels[value] || '',
                },
                display: true,
                grid: {
                    display: false,
                },
            },
        },
        interaction: {
            mode: 'dataset',
            intersect: false,
        },
        plugins: {},
        hover: {
            mode: 'dataset',
            intersect: false,
        }
    };

    return (
        <div className='bg-zingchartmain p-[20px] mb-[50px] w-full'>
            <div className='chart-header flex items-center gap-2 '>
                <div className='text-[28px] font-bold bg-zingchart bg-clip-text text-transparent'>#zingchart</div>
                <button className='w-[25px] h-[25px] rounded-full bg-white flex items-center justify-center'>
                    <FontAwesomeIcon icon={faPlay} size='xs' />
                </button>
            </div>
            <div className='chart-content mt-3 flex gap-3 w-full'>
                <div className='w-[70%] list-rank'>
                    {
                        chart?.items?.slice(0, 3).map((item, key) => {
                            const customClass = key === 0 ? 'order-top1' : key === 1 ? 'order-top2' : key === 2 ? 'order-top3' : '';
                            return (
                                <div key={item.id} className={`flex bg-[#4B2565] mb-3 py-[10px] px-[15px] items-center w-full rounded-md hover:bg-[#654579] group`}>
                                    <span className={`text-[32px] font-bold mr-6 ${customClass} text-transparent`}>{key + 1}</span>
                                    <div className='relative'>
                                        <img src={item.thumbnailM} alt="" className='w-[60px] h-[60px] mr-2 group-hover:brightness-50' />
                                        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                                            <button><FontAwesomeIcon icon={faPlay} color='white' /></button>
                                        </div>
                                    </div>
                                    <div className='text-[#A590B3] flex-1'>
                                        <span className='font-[550]'>{item.title}</span><br />
                                        <span className='text-[13px] font-medium'>{item.artistsNames}</span>
                                    </div>
                                    <div className='text-white font-bold'>{func.calPercent(item.score, chart?.chart.totalScore)}%</div>
                                </div>
                            );
                        })
                    }
                    <div className='flex justify-center'>
                        <button className='text-white py-[5px] px-[25px] rounded-[20px] border border-white hover:bg-[#654579]'>Xem thêm</button>
                    </div>
                </div>
                <div className='chart-section w-full h-[300px]' ref={chartRef}>
                    {data.labels.length > 0 && data.datasets.length > 0 ? (
                        <Line data={data} options={options} />
                    ) : (
                        <div className='text-white'>Loading chart...</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChartSection;
