/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../api/axiosInstance'
import { number } from 'prop-types'
import Banner1 from '../assets/Banner/728x90px.png'
import Banner2 from '../assets/Banner/130x500px.png'

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

    const videoComponent = document.querySelector('iframe')

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
      <div className="banner1">
        <a href="#"><img className='ban1' src={Banner2} alt="" /></a>
      </div>
      <div className="banner2">
        <a href="#"><img className='ban2' src={Banner2} alt="" /></a>
      </div>
      <div className='video'>
        <iframe src={video[0]} allowFullScreen ></iframe>
      </div>
      <div className="banner3">
        <a href="#"><img className='ban3' src={Banner1} alt="" /></a>
      </div>
      <div className="banner4">
        <a href="#"><img className='ban4' src={Banner1} alt="" /></a>
      </div>
      <div className="link-video1">
        <h3>Server 1</h3>
        <button onClick={link0}>480p</button>
        <button onClick={link1}>720p</button>
        <button onClick={link2}>1080p</button>
      </div>
      <div className="link-video2">
        <h3>Server 2</h3>
        <button onClick={link3}>480p</button>
        <button onClick={link4}>720p</button>
        <button onClick={link5}>1080p</button>
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
        <div className="imgdes">
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <div className="genrestatus">
          <h4>Genre : <strong>{genre}</strong></h4>
          <h4>Status : <strong>{status}</strong></h4>
        </div>
        <text>{deskripsi}</text>
      </div>
    </div>
  )
}

export default Streaming