import { useState} from 'react'
import instance from '../axios/axiosInstance'
import { useNavigate } from 'react-router-dom'

const FormAddGenre = () => {
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    const saveGenre = async (e)=>{
        e.preventDefault();
        try {
            await instance.post('/genres',{
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
                    <form onSubmit={saveGenre}>
                        <p className="has-text-centered">{msg}</p>
                        <div className="field">
                            <label className='label'>Name</label>
                            <div className="control">
                                <input type="text" className="input" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
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

export default FormAddGenre