import React from 'react'
import PropTypes from 'prop-types';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Banner from '../components/Banner';

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <div className="wrap">

        <div className='banner'>
          <Banner />
        </div>

        <div className='navbar'>
          <Navbar />
        </div>

        <div className="content">
          <main>{children}</main>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}
Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout