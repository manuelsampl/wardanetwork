
import React from 'react'

import Layout from './src/layouts/index'



export const wrapPageElement = ({ element, props }) => {

    return (
        <div className={`${props?.pageContext?.edge?.slug === "landing" ? "landing" : ""}`}>
            <Layout className="landing" {...props}>{element}</Layout>
        </div>
    )
}
