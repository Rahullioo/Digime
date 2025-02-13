/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'
import instance from '../api/axiosInstance'
import { useParams } from 'react-router-dom'

const Anime = () => {

  const {id} = useParams()
  
  const [title, setTitle] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [image, setImage] = useState("")
  const [genre, setGenre] = useState("")
  const [status, setStatus] = useState("")
  const [author, setAuthor] = useState("")

  const [episodes, setEpisodes] = useState([])

  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(()=>{
    getAnimeById()
  },[id, page])

  const getAnimeById = async () => {
    const response = await instance.get(`/animes/${id}?page=${page}&limit=${limit}`)
    setTitle(response.data.data.title)
    setDeskripsi(response.data.data.deskripsi)
    setImage(response.data.data.image)
    setGenre(response.data.data.genre.name)
    setStatus(response.data.data.status)
    setEpisodes(response.data.data.episodes)
    setAuthor(response.data.data.user.name)
    
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  }
  

  const changePage = ({selected})=>{
      setPage(selected);
  }

  return (
    <div className="container">
      <div className="title">
        {title}
      </div>
      <div className="card">
        <div className="item">
          {episodes.map((episode)=>{

            const options = {day:'2-digit', weekday: 'long', year: 'numeric', month: 'numeric',hour:'2-digit',minute:'2-digit'};
            const date = new Date(episode.createdAt)
            

            return(
              <div key={episode.uuid} className="items">
                <img src={image} alt="" />
                <div className="text"><a href={`/${title}/episodes/${episode.uuid}`}>[EP {episode.episode}] {title} SUB INDO</a> </div>
                <div className="jam">UP {date.toLocaleTimeString("id-ID", options)}</div>
                <div className='author'>{author}</div>
              </div>

            )
          })}
          
        </div>
        <p>Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}</p>
        <nav className="pagination" key={rows} role='navigation' aria-label='pagination' >
          <ReactPaginate
            containerClassName={"pagination-container"}
            breakClassName={'pagination-break'}
            pageClassName={"pagination-page"}
            previousClassName={'pagination-next-prev'}
            nextClassName={'pagination-next-prev'}
            activeClassName={"pagination-active"}
            marginPagesDisplayed={0}
            pageRangeDisplayed={3}
            previousLabel={"<Prev"}
            nextLabel={"Next>"}
            breakLabel={"-"}
            pageCount={pages}
            onPageChange={changePage}
          />
        </nav>
      </div>
      <div className="deskripsi">
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

export default Anime