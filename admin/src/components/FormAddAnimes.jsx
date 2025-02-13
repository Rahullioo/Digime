/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react'
import instance from '../axios/axiosInstance'
import { useNavigate } from 'react-router-dom'

const FormAddAnimes = () => {
    const [title, setTitle] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [image, setImage] = useState("");
    const [status, setStatus] = useState("");
    const [genreId, setGenreId] = useState(0);
    const [msg, setMsg] = useState("");

    const [genresName, setGenresName] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        getGenres();
    },[]);

    const getGenres = async ()=>{
        const response = await instance.get('/genres');
        setGenresName(response.data)
    }

    const saveAnime = async (e)=>{
        e.preventDefault();
        try {
            await instance.post('/animes',{
                title: title,
                deskripsi: deskripsi,
                image: image,
                genreId: genreId,
                status: status
            });
            navigate("/animes");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }

  return (
    <div>
        <h1 className="title">Animes</h1>
        <h2 className="subtitle">Add New Anime</h2>
        <div className="card is-sahdowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={saveAnime}>
                        <p className="has-text-centered">{msg}</p>
                        <div className="field">
                            <label className='label'>Title</label>
                            <div className="control">
                                <input type="text" className="input" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Deskripsi</label>
                            <div className="control">
                                <textarea type="text" className="textarea " value={deskripsi} onChange={(e)=>setDeskripsi(e.target.value)} placeholder='Deskripsi' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Image</label>
                            <div className="control">
                                <input type="text" className="input" value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Image' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Genre</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={genreId} onChange={(e)=>setGenreId(e.target.value)}>
                                        <option>Select</option>
                                        {genresName.map((genre)=>(
                                            <option key={genre.uuid} value={genre.id}>{genre.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Status</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={status} onChange={(e)=>setStatus(e.target.value)} >
                                        <option>Select</option>
                                        <option value="ONGOING">ONGOING</option>
                                        <option value="FINISHED">FINISHED</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type="submit" className="button is-success">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddAnimes