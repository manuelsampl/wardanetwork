import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


import './layout.css'
import Footer from '../components/footer/footer';

import Cursor from '../components/cursor/cursor';


const Layout = ({ children }) => {




    return (
        <div id="layoutcontainer">

            <Cursor />


            <main>{children}</main>


            <Footer></Footer>
        </div>
    )

}


export default Layout