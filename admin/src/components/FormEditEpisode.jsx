import { useState, useEffect} from 'react'
import instance from '../axios/axiosInstance'
import { useNavigate,useParams } from 'react-router-dom'


const FormEditEpisode = () => {
    const [animeId, setAnimeId] = useState(0);
    const [episode, setEpisode] = useState(0);
    const [videolink, setVideolink] = useState("");
    const [videolink1, setVideolink1] = useState("");
    const [videolink2, setVideolink2] = useState("");
    const [videolink3, setVideolink3] = useState("");
    const [videolink4, setVideolink4] = useState("");
    const [videolink5, setVideolink5] = useState("");
    const [msg, setMsg] = useState("");

    const [animes, setAnimes] = useState([]);

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getEpisodeById = async()=>{
            try {
                const response = await instance.get(`/episodes/${id}`);
                setAnimeId(response.data.animeId);
                setEpisode(response.data.episode);
                setVideolink(response.data.video_link);
                setVideolink1(response.data.video_link1);
                setVideolink2(response.data.video_link2);
                setVideolink3(response.data.video_link3);
                setVideolink4(response.data.video_link4);
                setVideolink5(response.data.video_link5);
                setAnimes(response.data.anime.title);
            } catch (error) {
                if(error.response){
                setMsg(error.response.data.msg);
            }
            }
        }
        getEpisodeById();
    },[id]);

    const updateEpisode = async (e)=>{
        e.preventDefault();
        try {
            await instance.patch(`/episodes/${id}`,{
                animeId: animeId,
                episode: episode,
                video_link: videolink,
                video_link1: videolink1,
                video_link2: videolink2,
                video_link3: videolink3,
                video_link4: videolink4,
                video_link5: videolink5
            });
            navigate("/episodes");
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div>
        <h1 className="title">Episodes</h1>
        <h2 className="subtitle">Update Episode</h2>
        <div className="card is-sahdowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={updateEpisode}>
                        <p className="has-text-centered">{msg}</p>
                        <h3 className='label'>{animes}</h3>
                        <div className="field">
                            <label className='label'>Episode</label>
                            <div className="control">
                                <input disabled type="number" className="input" value={episode} onChange={(e)=>setEpisode(e.target.value)} placeholder='Episode' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Server 1 Video Link 480p</label>
                            <div className="control">
                                <textarea type="text" className="textarea " value={videolink || ""} onChange={(e)=>setVideolink(e.target.value)} placeholder='Server 1 Video Link 480p ' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Server 1 Video Link 720p</label>
                            <div className="control">
                                <textarea type="text" className="textarea " value={videolink1 || ""} onChange={(e)=>setVideolink1(e.target.value)} placeholder='Server 1 Video Link 720p' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Server 1 Video Link 1080p</label>
                            <div className="control">
                                <textarea type="text" className="textarea " value={videolink2 || ""} onChange={(e)=>setVideolink2(e.target.value)} placeholder='Server 1 Video Link 1080p' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'> Server 2 Video Link 480p</label>
                            <div className="control">
                                <textarea type="text" className="textarea " value={videolink3 || ""} onChange={(e)=>setVideolink3(e.target.value)} placeholder='Server 2 Video Link 480p' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'> Server 2 Video Link 720p</label>
                            <div className="control">
                                <textarea type="text" className="textarea " value={videolink4 || ""} onChange={(e)=>setVideolink4(e.target.value)} placeholder='Server 2 Video Link 720p' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'> Server 2 Video Link 1080p</label>
                            <div className="control">
                                <textarea type="text" className="textarea " value={videolink5 || ""} onChange={(e)=>setVideolink5(e.target.value)} placeholder='Server 2 Video Link 1080p' />
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

export default FormEditEpisode