import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


import './layout.css'


import Cursor from '../components/cursor/cursor';


const Layout = ({ children }) => {


    const [mouseOver, setMouseOver] = useState(0)

    function handleMouseOver(e) {
        setMouseOver(e.target)
    }

    return (
        <div id="layoutcontainer">

            <Cursor mouseOver={mouseOver} />


            <main onMouseOver={(e) => handleMouseOver(e)} >{children}</main>



        </div>
    )

}


export default Layout