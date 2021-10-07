import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Axios'
import { imgUrl, apiKey} from '../../constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then((Response) => {
            console.log(Response.data)
            setMovies(Response.data.results)
        }).catch(err => {
            alert('Network Error!')
        })
    }, [])

    const opts ={
        height:'390',
        width: '100%',
        playerVars:{
            autoplay: 1,
        }
    };

    const handleMovieTrialer = (id) =>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(Response=>{
            console.log(Response.data)
            if(Response.data.results.length!==0){
                setUrlId(Response.data.results[0])
            }
            else{
                console.log("Link not available")
            }
        })
    }
    return (
        <div className="row">
            <h1>{props.title}</h1>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={()=> handleMovieTrialer(obj.id)} className={props.isSmall ?"smallposter": "poster"} src={`${imgUrl + obj.backdrop_path}`} alt="Poster" />
                )}
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
        </div>
    )
}

export default RowPost
