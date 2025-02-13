import { useEffect } from "react"
import Layout from "./Layout"
import Genreslist from "../components/Genreslist"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const Genres = () => {
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
        <Genreslist />
    </Layout>
  )
}

export default Genres