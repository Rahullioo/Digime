/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import Layout from './Layout'
import FormEditGenre from "../components/FormEditGenre"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const EditGenre = () => {
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
        <FormEditGenre />
    </Layout>
  )
}

export default EditGenre