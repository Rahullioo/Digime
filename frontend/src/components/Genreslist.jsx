/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import instance from '../api/axiosInstance'
import ReactPaginate from 'react-paginate'

const Genreslist = () => {

    const [genres, setGenres] = useState([])
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(20);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [query, setQuery] = useState("");

    useEffect(()=>{
        getGenres()
    },[page, keyword])
    const getGenres = async () => {
        const response = await instance.get(`genres?search_query=${keyword}&page=${page}&limit=${limit}`)
        setGenres(response.data.data)
        setPage(response.data.page);
        setPages(response.data.totalPage);
        setRows(response.data.totalRows);
    }

    //Sorting Genres By Name
    const genresName = genres.sort((a, b)=>a.name.localeCompare(b.name))
    console.log(genresName)

    const searchData = (e)=>{
      e.preventDefault();
      setPage(0);
      setKeyword(query);
    }

    const changePage = ({selected})=>{
      setPage(selected);
  }


  return (
    <div className="genre-container">
        <div className="genre-title">
          Genres
        </div>
        <div className="search">
            <form onSubmit={searchData}>
                <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search Genre...' />
                <button type='submit'>Search</button>
            </form>
        </div>
        <div className="list">
            {genresName.map((genre)=>(
            <ul key={genre.uuid}>
                <li><a href={`genres/${genre.uuid}`}>{genre.name}</a></li>
            </ul>
        ))}
        </div>
        <div className="genre-paginate">
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

export default Genreslist