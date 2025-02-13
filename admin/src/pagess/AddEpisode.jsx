import { useEffect } from "react"
import Layout from "./Layout"
import FormAddEpisode from "../components/FormAddEpisode"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const AddEpisode = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} = useSelector((state)=> state.auth);
    
    useEffect(()=>{
    dispatch(getMe());
    },[dispatch]);
    
    useEffect(()=>{
    if(isError) {
        navigate("/");
    }
    },[isError, navigate]);
  return (
    <Layout>
        <FormAddEpisode />
    </Layout>
  )
}

export default AddEpisode