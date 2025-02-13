/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import instance from '../axios/axiosInstance'
import ReactPaginate from 'react-paginate'

const Episodeslist = () => {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(5);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState(0);
    const [query, setQuery] = useState("");


    useEffect(()=>{
        getEpisodes();
    },[page, keyword]);

    const getEpisodes = async ()=>{
        const response = await instance.get(`/episodes?search_query=${keyword}&page=${page}&limit=${limit}`);
        setEpisodes(response.data.data);
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

    const deleteEpisode = async (episodeId) =>{
        try {
            await instance.delete(`/episodes/${episodeId}`);
            getEpisodes();    
        } catch (error) {
            if(error){
                alert("Akses Terbatas")
            }
        }
    }

    const confDelete = (episodeId) => {
        const shouldDelete = confirm("Are you sure ? ")

        if(shouldDelete) {
            deleteEpisode(episodeId)
        }
    }

  return (
    <div>
        <h1 className="title">Episodes</h1>
        <h2 className="subtitle">List of Episode</h2>
        <Link to={"/episodes/add"} className='button is-primary mb-2'>Add New</Link>
        <div className='columns'>
            <div className='column is-centered'>
                <form onSubmit={searchData}>
                    <div className="field has-addons mb-2">
                        <div className="control is-expanded">
                            <input type="number" className="input" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search by ID Anime' />
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
                            <th className='has-text-centered is-vcentered'>Anime</th>
                            <th className='has-text-centered is-vcentered'>Episode</th>
                            <th className='has-text-centered is-vcentered'>Tanggal Upload</th>
                            <th className='has-text-centered is-vcentered'>Video Link</th>
                            <th className='has-text-centered is-vcentered'>Author</th>
                            <th className='has-text-centered is-vcentered'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {episodes.map((episode)=>{
                            const options = {day:'2-digit', weekday: 'long', year: 'numeric', month: 'numeric',hour:'2-digit',minute:'2-digit'};
                            const date = new Date(episode.createdAt)

                            return (
                                <tr key={episode.uuid}>
                                    <td className='has-text-centered is-vcentered'>{episode.anime.id}</td>
                                    <td className='has-text-centered is-vcentered'>{episode.anime.title}</td>
                                    <td className='has-text-centered is-vcentered'>{episode.episode}</td>
                                    <td className='has-text-centered is-vcentered'>{date.toLocaleTimeString("id-ID", options)}</td>
                                    <td className='has-text-centered is-vcentered'>Ada</td>
                                    <td className='has-text-centered is-vcentered'>{episode.user.name}</td>
                                    <td className='has-text-centered is-vcentered'>
                                        <Link to={`/episodes/edit/${episode.uuid}`} className='button is-small is-info'>Edit</Link>
                                        <button onClick={()=>confDelete(episode.uuid)} className='button is-small is-danger'>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
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

export default Episodeslist