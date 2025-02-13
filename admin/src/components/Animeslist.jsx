/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import instance from '../axios/axiosInstance'
import ReactPaginate from 'react-paginate'

const Animeslist = () => {
    const [animes, setAnimes] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(5);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [query, setQuery] = useState("");

    useEffect(()=>{
        getAnimes();
    },[page, keyword]);

    const getAnimes = async () =>{
        const response = await instance.get(`/animes?search_query=${keyword}&page=${page}&limit=${limit}`);
        setAnimes(response.data.data)
        setPage(response.data.page);
        setPages(response.data.totalPage);
        setRows(response.data.totalRows);
    }

    const changePage = ({selected})=>{
        setPage(selected);
    }

    const searchData = (e)=>{
        e.preventDefault();
        setPage(0);
        setKeyword(query);
    }

    const deleteAnime = async (animeId) =>{
        try {
            await instance.delete(`/animes/${animeId}`);
            getAnimes();   
        } catch (error) {
            if(error){
                alert("Akses Terbatas")
            }
        }
    }

    const confDelete = (animeId) => {
        const shouldDelete = confirm("Are you sure ? ")

        if(shouldDelete) {
            deleteAnime(animeId)
        }
    }

  return (
    <div>
        <h1 className="title">Animes</h1>
        <h2 className="subtitle">List of Animes</h2>
        <Link to={"/animes/add"} className='button is-primary mb-2'>Add New</Link>
        <div className='columns'>
            <div className='column is-centered'>
                <form onSubmit={searchData}>
                    <div className="field has-addons mb-2">
                        <div className="control is-expanded">
                            <input type="text" className="input" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search by Title' />
                        </div>
                        <div className="control">
                            <button type="submit" className="button is-info">Search</button>
                        </div>
                    </div>
                </form>
                <table className='table is-hoverable is-fullwidth' data-toggle="table">
                    <thead>
                        <tr>
                            <th className='has-text-centered is-vcentered'>ID</th>
                            <th className='has-text-centered is-vcentered'>Title</th>
                            <th className='has-text-centered is-vcentered'>Image</th>
                            <th className='has-text-centered is-vcentered'>Status</th>
                            <th className='has-text-centered is-vcentered'>Genre</th>
                            <th className='has-text-centered is-vcentered'>Author</th>
                            <th className='has-text-centered is-vcentered'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {animes.map((anime)=>(
                            <tr key={anime.uuid}>
                                <td className='has-text-centered is-vcentered'>{anime.id}</td>
                                <td className='has-text-centered is-vcentered'>{anime.title}</td>
                                <td className='has-text-centered is-vcentered'>
                                    <div className="card-image has-text-centered">
                                        <figure className="image is-64x64 is-inline-block">
                                            <img src={anime.image} />
                                        </figure>
                                    </div>
                                </td>
                                <td className='has-text-centered is-vcentered'>{anime.status}</td>
                                <td className='has-text-centered is-vcentered'>{anime.genre.name}</td>
                                <td className='has-text-centered is-vcentered'>{anime.user.name}</td>
                                <td className='has-text-centered is-vcentered'>
                                    <Link to={`/animes/edit/${anime.uuid}`} className='button is-small is-info'>Edit</Link>
                                    <button onClick={()=>confDelete(anime.uuid)} className='button is-small is-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>Total Rows: {rows} Page: {rows ? page + 1 : 0} of {pages}</p>
                <nav className="pagination is-centered" key={rows} role='navigation' aria-label='pagination' >
                    <ReactPaginate
                        previousLabel={"<Prev"}
                        nextLabel={"Next>"}
                        breakLabel={"..."}
                        pageCount={pages}
                        onPageChange={changePage}
                        marginPagesDisplayed={0}
                        pageRangeDisplayed={3}
                        containerClassName={"pagination-list"}
                        pageLinkClassName={"pagination-link"}
                        previousLinkClassName={"pagination-previous"}
                        nextLinkClassName={"pagination-next"}
                        activeLinkClassName={"pagination-link is-current"}
                        disabledLinkClassName={"pagination-link is-disabled"} 
                    />
                </nav>
            </div>
        </div>
        
    </div>
  )
}

export default Animeslist