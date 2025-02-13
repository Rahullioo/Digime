import { useEffect } from "react"
import Layout from "./Layout"
import FormAddGenres from "../components/FormAddGenre"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const AddGenre = () => {
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
        <FormAddGenres />
    </Layout>
  )
}

export default AddGenre