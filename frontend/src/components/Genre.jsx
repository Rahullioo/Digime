/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import instance from '../api/axiosInstance'
import ReactPaginate from 'react-paginate'

const Genre = () => {

  const {id} = useParams()

  const [name, setName] = useState("")
  const [animes, setAnimes] = useState([])
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(()=>{
    getGenreById()
  },[id, page])

  const getGenreById = async () => {
    const response = await instance.get(`/genres/${id}?page=${page}&limit=${limit}`) 
    setName(response.data.data.name)
    setAnimes(response.data.data.animes)
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
        {name}
      </div>
      <div className="card">
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
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            previousLabel={"<Prev"}
            nextLabel={"Next>"}
            pageCount={pages}
            onPageChange={changePage}
          />
        </nav>
      </div>
    </div>
  )
}

export default Genre