/* eslint-disable no-unused-vars */
import React,{useState, useEffect} from 'react'
import instance from '../axios/axiosInstance'
import { useNavigate, useParams } from 'react-router-dom'

const FormEditGenre = () => {
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getGenreById = async()=>{
            try {
                const response = await instance.get(`/genres/${id}`);
                setName(response.data.name);
            } catch (error) {
                if(error.response){
                setMsg(error.response.data.msg);
            }
            }
        }
        getGenreById();
    },[id]);

    const updateGenre = async (e)=>{
        e.preventDefault();
        try {
            await instance.patch(`/genres/${id}`,{
                name: name
            });
            navigate("/genres");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div>
        <h1 className="title">Genres</h1>
        <h2 className="subtitle">Add New Genre</h2>
        <div className="card is-sahdowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={updateGenre}>
                        <p className="has-text-centered">{msg}</p>
                        <div className="field">
                            <label className='label'>Name</label>
                            <div className="control">
                                <input type="text" className="input" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type="submit" className="button is-success">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditGenre