/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../api/axiosInstance'
import { number } from 'prop-types'

const Streaming = () => {

    const [title, setTitle] = useState("")
    const[videolink, setVideolink] = useState("")
    const[videolink1, setVideolink1] = useState("")
    const[videolink2, setVideolink2] = useState("")
    const[videolink3, setVideolink3] = useState("")
    const[videolink4, setVideolink4] = useState("")
    const[videolink5, setVideolink5] = useState("")
    const [episodes, setEpisodes] = useState(0)

    const [deskripsi, setDeskripsi] = useState("")
    const [image, setImage] = useState("")
    const [status, setStatus] = useState("")
    const [genre, setGenre] = useState("")

    const [allEpisodes, setAllEpisodes] = useState([])
    allEpisodes.sort((a, b)=> a.episode - b.episode)

    const prevFilter = allEpisodes.filter(prev => prev.episode === episodes-1)
    const nextFilter = allEpisodes.filter(next => next.episode === episodes+1)

    const {id} = useParams()
    
    useEffect(()=>{
      getEpisodeById()
    },[id])
    
    const getEpisodeById = async () => {
        const response = await instance.get(`/episodes/${id}`)

        setTitle(response.data.anime.title)
        setEpisodes(response.data.episode)

        setVideolink(response.data.video_link)
        setVideolink1(response.data.video_link1)
        setVideolink2(response.data.video_link2)
        setVideolink3(response.data.video_link3)
        setVideolink4(response.data.video_link4)
        setVideolink5(response.data.video_link5)
        
        setDeskripsi(response.data.anime.deskripsi)
        setImage(response.data.anime.image)
        setStatus(response.data.anime.status)
        setGenre(response.data.anime.genre.name)
        
        //Prev Next
        setAllEpisodes(response.data.anime.episodes)

    }

    const video = new Array();
    //Server 1
    video[0] = videolink;
    video[1] = videolink1;
    video[2] = videolink2;
    //Server 2
    video[3] = videolink3;
    video[4] = videolink4;
    video[5] = videolink5;

    const videoComponent = document.querySelector('video')

    // Server 1
    function link0(){
      videoComponent.setAttribute("src", video[0])
    }
    function link1(){
      videoComponent.setAttribute("src", video[1])
    }
    function link2(){
      videoComponent.setAttribute("src", video[2])
    }
    // Server 2
    function link3(){
      videoComponent.setAttribute("src", video[3])
    }
    function link4(){
      videoComponent.setAttribute("src", video[4])
    }
    function link5(){
      videoComponent.setAttribute("src", video[5])
    }
    

  return (
    <div className="video-container">
      <div className="title">
        [EP {episodes}] {title} SUB INDO
      </div>
      <div className='video'>
        <video id='video' src={video[0]} controls>
            <source type='video/mp4' />
            Sorry, your browser doesnt support embedded videos
        </video>
      </div>
      <div className="link-video1">
        <p>Server 1</p>
        <button onClick={link0}>480p</button>
        <button onClick={link1}>720p</button>
        <button onClick={link2}>1080p</button>
      </div>
      <div className="link-video2">
        <p>Server 2</p>
        <button onClick={link3}>480p</button>
        <button onClick={link4}>720p</button>
        <button onClick={link5}>1080p</button>
      </div>
      <div className="banner1">
        <a href="#"><img className='ban1' src="https://img.freepik.com/free-photo/businessman-shouting-by-megaphone_1368-9342.jpg?t=st=1738476106~exp=1738479706~hmac=a587491dad333e0ecf89b5c47df35eb5a3d3ccb06bfa3ea07ac9e35e8310626c&w=360" alt="" /></a>
      </div>
      <div className="banner2">
        <a href="#"><img className='ban2' src="https://img.freepik.com/free-photo/businessman-shouting-by-megaphone_1368-9342.jpg?t=st=1738476106~exp=1738479706~hmac=a587491dad333e0ecf89b5c47df35eb5a3d3ccb06bfa3ea07ac9e35e8310626c&w=360" alt="" /></a>
      </div>

        <div className="nextprev">
          {prevFilter.map((item)=>(
            <a id='prev' key={item.uuid} href={`/${title}/episodes/${item.uuid}`}> &larr; Prev Episode</a>
          ))}
          {nextFilter.map((item)=>(
            <a id='next' key={item.uuid} href={`/${title}/episodes/${item.uuid}`}>Next Episode &rarr; </a>
          ))}
        </div>

      <div className="stream-deskripsi">
        <img src={image} alt="" />
        <div className="genrestatus">
          <p>Genre : <strong>{genre}</strong></p>
          <p>Status : <strong>{status}</strong></p>
        </div>
        <h3>{title}</h3>
        <p>{deskripsi}</p>
      </div>
    </div>
  )
}

export default Streaming