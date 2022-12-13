import React from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/header/header'

import './layout.css'
import Footer from '../components/footer/footer';

import Cursor from '../components/cursor/cursor';


const Layout = ({ children }) => {

    return (
        <div>
            <Cursor />
            <Header transparent={children?.props?.pageContext?.edge?.pageSettings?.navbarTransparent}></Header>

            <main>{children}</main>

            <Footer></Footer>
        </div>
    )

}


export default Layout