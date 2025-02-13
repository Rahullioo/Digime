/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import gambar from "../assets/size128.png"
import instance from '../api/axiosInstance'
import ReactPaginate from 'react-paginate'

const Animeslist = () => {

  const [animes, setAnimes] = useState([])
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  useEffect(()=>{
    getAnimes()
  },[page, keyword])
  
  const getAnimes = async () => {
    const response = await instance.get(`/animes?search_query=${keyword}&page=${page}&limit=${limit}`)
    setAnimes(response.data.data)
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

  return (
      <div className="container">
        <div className="title">
          Animes
        </div>
        <div className="card">
          <form onSubmit={searchData}>
            <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search Anime...' />
            <button type='submit'>Search</button>
          </form>
          <div className="item">
            {animes.map((anime)=>(
              <div key={anime.uuid} className="items">
                <img src={anime.image} alt="" />
                <div className="text"><a href={`/animes/${anime.uuid}`}>{anime.title}</a> </div>
              </div>    
            ))}
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

export default Animeslist