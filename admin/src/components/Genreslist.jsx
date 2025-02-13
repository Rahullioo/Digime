import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import instance from '../axios/axiosInstance'

const Genreslist = () => {
    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        getGenres();
        },[]);

    const getGenres = async ()=>{
        const response = await instance.get('/genres');
        setGenres(response.data);
    }

    const deleteGenre = async (genreId) =>{
        try {
            await instance.delete(`/genres/${genreId}`);
            getGenres();     
        } catch (error) {
            if(error){
                alert("Terdapat Anime")
            }
        }

    }
    const confDelete = (genreId) => {
        const shouldDelete = confirm("Are you sure ? ")

        if(shouldDelete) {
            deleteGenre(genreId)
        }
    }

  return (
    <div>
        <h1 className="title">Genres</h1>
        <h2 className="subtitle">List of Genres</h2>
        <Link to={"/genres/add"} className='button is-primary mb-2'>Add New</Link>
        <div className='columns'>
            <div className='column'>
                <table className='table is-hoverable is-fullwidth' data-toggle="table">
                    <thead>
                        <tr>
                            <th className='has-text-centered is-vcentered'>No</th>
                            <th className='has-text-centered is-vcentered'>Name</th>
                            <th className='has-text-centered is-vcentered'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {genres.map((genre, index)=>(
                                <tr key={genre.uuid}>
                                    <td className='has-text-centered is-vcentered'>{index + 1}</td>
                                    <td className='has-text-centered is-vcentered'>{genre.name}</td>
                                    <td className='has-text-centered is-vcentered'>
                                        <Link to={`/genres/edit/${genre.uuid}`} className='button is-small is-info'>Edit</Link>
                                        <button onClick={()=>confDelete(genre.uuid)} className='button is-small is-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
  )
}

export default Genreslist