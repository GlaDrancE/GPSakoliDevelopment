import React, { useState, useEffect } from 'react';
import {Slider} from '../components/Slider';
import ModalImage from 'react-modal-image';

export default function GPSInNews() {
    const [newses, setNewses] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const response = await fetch("https://gpsakoli.ac.in/public/api/connection.php?gps-newses", {
                method: "GET"
            });

            const data = await response.json();
            setNewses(data.data);
        };

        fetchNews();
    }, []);

    return (
        <>
            <Slider />
            <div className="image-gallery">
                {newses.map((news, index) => (
                    <div key={index} className="image-thumbnail" style={{ margin: '10px' }}>
                        
                    </div>
                ))}
            </div>
            <div className="main-container">
                <div className="text-center">
                    <h1 className="heading"><span className="heading-red">GPS </span>In News</h1>
                </div>
                <div className="card-container">
                    {newses.map((news, index) => (
                        <div className="news-card" style={{ width: '300px' }} key={index}>
                            <div className='overflow-hidden' style={{ width: '300px', height: '300px' }}>
                                {/* <img 
                                    src={'https://gpsakoli.ac.in' + news.news_article_image} 
                                    alt={news.news_title}
                                    className="w-full h-full" 
                                    style={{ objectFit: 'cover' }} 
                                /> */}
                                <ModalImage
                                className='object-cover'
                            small={'https://gpsakoli.ac.in' + news.news_article_image}
                            large={'https://gpsakoli.ac.in' + news.news_article_image}
                            alt={news.news_title}
                        />
                            </div>
                            <div className="date text-right">
                                {news.date_of_event}
                            </div>
                            <div className="card-content text-center">
                                {news.news_title.slice(0, 1).toUpperCase() + news.news_title.slice(1)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
