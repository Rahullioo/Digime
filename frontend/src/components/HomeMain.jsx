/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import gambar from "../assets/size128.png"
import instance from '../api/axiosInstance'
import ReactPaginate from 'react-paginate'

const HomeMain = () => {

  const [episodes, setEpisodes] = useState([])
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(()=>{
    getEpisodes()
  },[page, keyword])
  
  const getEpisodes = async () => {
    const response = await instance.get(`/episodes?search_query=${keyword}&page=${page}&limit=${limit}`)
    setEpisodes(response.data.data)
    setPage(response.data.page);
    setPages(response.data.totalPage);
    setRows(response.data.totalRows);
  }

  const searchData = (e)=>{
      e.preventDefault();
      setPage(0);
      setKeyword(query);
    }

  const changePage = ({selected})=>{
      setPage(selected);
  }

  //episodes.map((item)=>{
  //  const options = { weekday: 'long', year: 'numeric', month: 'numeric'};
  //  const date = new Date(item.createdAt)
  //  console.log(date.toLocaleTimeString("id-ID", options))
  //  
  //})


  return (
    <div className="container">
      <div className="title">
        News Update
      </div>
      <div className="card">
        <form onSubmit={searchData}>
            <input type="number" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search Episode...' />
            <button type='submit'>Search</button>
          </form>
        <div className="item">
          {episodes.map((episode)=>{

            const options = {day:'2-digit', weekday: 'long', year: 'numeric', month: 'numeric',hour:'2-digit',minute:'2-digit'};
            const date = new Date(episode.createdAt)

            return(
              <div key={episode.uuid} className="items">
                <img src={episode.anime.image} alt="" />
                <div className="text"><a href={`/${episode.anime.title}/episodes/${episode.uuid}`}>[EP {episode.episode}] {episode.anime.title} SUB INDO</a> </div>
                <div className="jam">UP {date.toLocaleTimeString("id-ID", options)}</div>
                <div className='author'>{episode.user.name}</div>
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
    </div>
  )
}

export default HomeMain