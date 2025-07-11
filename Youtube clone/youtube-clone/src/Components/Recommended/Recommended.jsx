import React, { useEffect, useState } from 'react'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import './Recommended.css'
import { API_KEY, views } from '../../data'
import { Link } from 'react-router-dom'

const Recommended = ({ categoryId }) => {
    const [apiData, setapiData] = useState([]);

    const fetchrecommendeddata = async () => {
        const recommendurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(recommendurl).then(res => res.json()).then(data => setapiData(data.items))
    }
    useEffect(() => {
        fetchrecommendeddata()
    }, [])
    return (
        <div className="recommended">
            {apiData.map((item,index) => {
                return (
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
                        <img src={item.snippet.thumbnails.medium.url} alt="" />
                        <div className="video-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p>{views(item.statistics.viewCount)} views</p>
                        </div>
                    </Link>

                 )
            })} 


        </div>

    )
}

export default Recommended
