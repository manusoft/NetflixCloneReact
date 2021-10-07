import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../Axios'
import {apiKey,imgUrl} from '../../constants/Constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((Response)=>{
            //console.log(Response.data.results[0])
            setMovie(Response.data.results[0])
        })
    }, [])
    return (
        <div style={{backgroundImage:`url(${movie ? imgUrl + movie.backdrop_path:""})`}} className="banner">
            <div className="content">
                <h1 className="title">{movie ? movie.name: ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview:""}</h1>
            </div>
            div.bottom
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
