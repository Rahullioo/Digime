/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

	const showItem = ()=>{
		const menu = document.querySelector('.menu');
		menu.classList.toggle('aktif');
	}
	
  return (
	<div className='container'>
		<a className='logo' href="/">Logo</a>
		<ul className='menu'>
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li>
				<NavLink to={"/animes"}>Animes</NavLink>
			</li>
			<li>
				<NavLink to={"/genres"}>Genres</NavLink>
			</li>
			
		</ul>
		<a onClick={showItem} className='tombol' href="#"><FaBars /></a>
	</div>
  )
}

export default Navbar