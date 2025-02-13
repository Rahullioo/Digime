/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react'
import Layout from './Layout'
import FormEditAnimes from '../components/FormEditAnimes'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../features/authSlice'

const EditAnime = () => {
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
        <FormEditAnimes />
    </Layout>
  )
}

export default EditAnime