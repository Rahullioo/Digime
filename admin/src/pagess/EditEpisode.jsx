/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import Layout from './Layout'
import FormEditEpisode from '../components/FormEditEpisode'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const EditEpisode = () => {
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
        <FormEditEpisode />
    </Layout>
  )
}

export default EditEpisode