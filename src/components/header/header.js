import React, { useState, Suspense } from "react"
import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Spin as Hamburger } from 'hamburger-react'
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"

import TransitionLink from '../transitionlink/transition'
import Model from './model'




import './header.css'

const Header = (transparent) => {
  const data = useStaticQuery(graphql`
    query {
        wp{
        siteOptions {
            siteOptions {
              wardaLogo {
                altText
                sourceUrl
              }
              wardaLogoWhite {
                altText
                sourceUrl
              }
              workColor
                contactColor
                aboutColor
                jobsColor
            }
          }
        }

        allWpMenu(filter: {slug: {eq: "main-menu"}}) {
            nodes {
              name
              menuItems {
                nodes {
                  target
                  path
                  label
                }
              }
            }
          }
          wpPage {
            id
            title
            pageSettings {
              navbarTransparent
            }
          }
    }
        `);

  const logo = data?.wp
  const navigation = data?.allWpMenu

  const [isOpen, setOpen] = useState(false)
  const [brandSmall, setBrandSmall] = useState(false)




  const isSSR = typeof window === "undefined"


  function doScrolling(e) {
    if (e.target.scrollingElement.scrollTop > 100) {
      setBrandSmall(true)
    } else {
      setBrandSmall(false)
    }
  }

  if (!isSSR) {
    window.addEventListener("scroll", (e) => doScrolling(e));
  }


  return (
    <motion.div animate={{ paddingTop: brandSmall ? '0px' : '8px', paddingBottom: brandSmall ? '0px' : '8px', height: brandSmall ? '63px' : '75px' }} className={`navbar navbar-expand-md navbar-light fixed-top ${transparent.transparent === true ? 'navbar-transparent' : ''}`} expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">

          {transparent.transparent === true ? isOpen === true ?
            <>

              <svg id="Warda_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 62">
                <motion.g animate={{ transform: brandSmall ? 'translate(-150px, 0px) scale(0)' : 'translate(0px, 0px) scale(1)' }} id="type">
                  <polygon points="127.84 26.08 124.86 15.08 123.85 15.08 120.87 26.08 118.17 15.08 117.14 15.08 120.34 27.73 121.33 27.73 124.35 16.72 127.37 27.73 128.36 27.73 131.56 15.08 130.54 15.08 127.84 26.08" fill="#000000" />
                  <polygon points="92.8 49.66 85.41 38.7 84.44 38.7 84.44 51.35 85.41 51.35 85.41 40.35 92.8 51.35 93.77 51.35 93.77 38.7 92.8 38.7 92.8 49.66" fill="#000000" />
                  <polygon points="102.86 51.35 110.63 51.35 110.63 50.5 103.83 50.5 103.83 45.4 109.62 45.4 109.62 44.54 103.83 44.54 103.83 39.55 110.63 39.55 110.63 38.7 102.86 38.7 102.86 51.35" fill="#000000" />
                  <polygon points="117.66 39.55 121.47 39.55 121.47 51.35 122.44 51.35 122.44 39.55 126.27 39.55 126.27 38.7 117.66 38.7 117.66 39.55" fill="#000000" />
                  <polygon points="143.72 49.7 140.73 38.7 139.73 38.7 136.74 49.7 134.04 38.7 133.02 38.7 136.22 51.35 137.21 51.35 140.23 40.33 143.25 51.35 144.24 51.35 147.44 38.7 146.42 38.7 143.72 49.7" fill="#000000" />
                  <path d="M142.54,15.08h-.86l-4.71,12.65h1.04l1.11-3.07h5.97l1.11,3.07h1.04l-4.71-12.65Zm-3.11,8.72l2.68-7.44,2.68,7.44h-5.36Z" fill="#000000" />
                  <path d="M160.58,21.89c1.8-.3,2.95-1.51,2.95-3.41,0-2.2-1.58-3.39-3.67-3.39h-4.87v12.65h.97v-5.83h3.52l3.06,5.83h1.13l-3.09-5.84Zm-4.62-.84v-5.12h3.78c1.66,0,2.82,.8,2.82,2.56s-1.17,2.56-2.82,2.56h-3.78Z" fill="#000000" />
                  <path d="M176.58,15.08h-4.3v12.65h4.3c1.35,0,2.43-.39,3.2-1.15,1.29-1.28,1.24-3.64,1.24-5.35s.05-3.71-1.24-4.99c-.77-.76-1.85-1.15-3.2-1.15Zm2.52,10.82c-.74,.76-1.73,.98-2.75,.98h-3.09V15.93h3.09c1.03,0,2.01,.21,2.75,.98,1.01,1.05,.95,2.9,.95,4.32s.05,3.62-.95,4.67Z" fill="#000000" />
                  <path d="M193.11,15.08h-.86l-4.71,12.65h1.04l1.11-3.07h5.97l1.11,3.07h1.04l-4.71-12.65Zm-3.11,8.72l2.68-7.44,2.68,7.44h-5.36Z" fill="#000000" />
                  <path d="M161.99,39.89c-.85-.83-1.98-1.3-3.2-1.3s-2.36,.46-3.2,1.3c-1.17,1.16-1.19,2.27-1.19,5.13s.02,3.98,1.19,5.13c.85,.84,1.98,1.3,3.2,1.3s2.36-.46,3.2-1.3c1.17-1.15,1.19-2.29,1.19-5.13s-.02-3.98-1.19-5.13Zm-.77,9.74c-.65,.64-1.51,.98-2.43,.98s-1.78-.34-2.43-.98c-.92-.91-.99-1.9-.99-4.6s.07-3.7,.99-4.6c.65-.64,1.51-.98,2.43-.98s1.78,.34,2.43,.98c.92,.91,.99,1.9,.99,4.6s-.07,3.7-.99,4.6Z" fill="#000000" />
                  <path d="M177.35,45.5c1.8-.3,2.95-1.51,2.95-3.41,0-2.2-1.58-3.39-3.67-3.39h-4.87v12.65h.97v-5.83h3.53l3.06,5.83h1.13l-3.09-5.85Zm-4.62-.84v-5.12h3.78c1.65,0,2.82,.8,2.82,2.56s-1.17,2.56-2.82,2.56h-3.78Z" fill="#000000" />
                  <polygon points="193.38 43.53 197.33 38.7 196.16 38.7 189.67 46.6 189.67 38.7 188.7 38.7 188.7 51.35 189.67 51.35 189.67 47.92 192.73 44.26 196.85 51.35 198 51.35 193.38 43.53" fill="#000000" />
                </motion.g>
                <motion.polygon animate={{ transform: brandSmall ? 'scale(0)' : 'scale(1)' }} id="slash" points="88.69 0 39.73 61.69 40.13 62 89.09 .31 88.69 0" fill="#000000" />
                <polygon id="W" points="42.76 17.06 0 17.06 0 45.1 19.89 19.61 19.89 45.1 42.76 17.06" fill="#000000" />
              </svg>
            </>
            :
            <>

              <svg id="Warda_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 62">
                <motion.g animate={{ transform: brandSmall ? 'translate(-150px, 0px) scale(0)' : 'translate(0px, 0px) scale(1)' }} id="type">
                  <polygon points="127.84 26.08 124.86 15.08 123.85 15.08 120.87 26.08 118.17 15.08 117.14 15.08 120.34 27.73 121.33 27.73 124.35 16.72 127.37 27.73 128.36 27.73 131.56 15.08 130.54 15.08 127.84 26.08" fill="#ffffff" />
                  <polygon points="92.8 49.66 85.41 38.7 84.44 38.7 84.44 51.35 85.41 51.35 85.41 40.35 92.8 51.35 93.77 51.35 93.77 38.7 92.8 38.7 92.8 49.66" fill="#ffffff" />
                  <polygon points="102.86 51.35 110.63 51.35 110.63 50.5 103.83 50.5 103.83 45.4 109.62 45.4 109.62 44.54 103.83 44.54 103.83 39.55 110.63 39.55 110.63 38.7 102.86 38.7 102.86 51.35" fill="#ffffff" />
                  <polygon points="117.66 39.55 121.47 39.55 121.47 51.35 122.44 51.35 122.44 39.55 126.27 39.55 126.27 38.7 117.66 38.7 117.66 39.55" fill="#ffffff" />
                  <polygon points="143.72 49.7 140.73 38.7 139.73 38.7 136.74 49.7 134.04 38.7 133.02 38.7 136.22 51.35 137.21 51.35 140.23 40.33 143.25 51.35 144.24 51.35 147.44 38.7 146.42 38.7 143.72 49.7" fill="#ffffff" />
                  <path d="M142.54,15.08h-.86l-4.71,12.65h1.04l1.11-3.07h5.97l1.11,3.07h1.04l-4.71-12.65Zm-3.11,8.72l2.68-7.44,2.68,7.44h-5.36Z" fill="#ffffff" />
                  <path d="M160.58,21.89c1.8-.3,2.95-1.51,2.95-3.41,0-2.2-1.58-3.39-3.67-3.39h-4.87v12.65h.97v-5.83h3.52l3.06,5.83h1.13l-3.09-5.84Zm-4.62-.84v-5.12h3.78c1.66,0,2.82,.8,2.82,2.56s-1.17,2.56-2.82,2.56h-3.78Z" fill="#ffffff" />
                  <path d="M176.58,15.08h-4.3v12.65h4.3c1.35,0,2.43-.39,3.2-1.15,1.29-1.28,1.24-3.64,1.24-5.35s.05-3.71-1.24-4.99c-.77-.76-1.85-1.15-3.2-1.15Zm2.52,10.82c-.74,.76-1.73,.98-2.75,.98h-3.09V15.93h3.09c1.03,0,2.01,.21,2.75,.98,1.01,1.05,.95,2.9,.95,4.32s.05,3.62-.95,4.67Z" fill="#ffffff" />
                  <path d="M193.11,15.08h-.86l-4.71,12.65h1.04l1.11-3.07h5.97l1.11,3.07h1.04l-4.71-12.65Zm-3.11,8.72l2.68-7.44,2.68,7.44h-5.36Z" fill="#ffffff" />
                  <path d="M161.99,39.89c-.85-.83-1.98-1.3-3.2-1.3s-2.36,.46-3.2,1.3c-1.17,1.16-1.19,2.27-1.19,5.13s.02,3.98,1.19,5.13c.85,.84,1.98,1.3,3.2,1.3s2.36-.46,3.2-1.3c1.17-1.15,1.19-2.29,1.19-5.13s-.02-3.98-1.19-5.13Zm-.77,9.74c-.65,.64-1.51,.98-2.43,.98s-1.78-.34-2.43-.98c-.92-.91-.99-1.9-.99-4.6s.07-3.7,.99-4.6c.65-.64,1.51-.98,2.43-.98s1.78,.34,2.43,.98c.92,.91,.99,1.9,.99,4.6s-.07,3.7-.99,4.6Z" fill="#ffffff" />
                  <path d="M177.35,45.5c1.8-.3,2.95-1.51,2.95-3.41,0-2.2-1.58-3.39-3.67-3.39h-4.87v12.65h.97v-5.83h3.53l3.06,5.83h1.13l-3.09-5.85Zm-4.62-.84v-5.12h3.78c1.65,0,2.82,.8,2.82,2.56s-1.17,2.56-2.82,2.56h-3.78Z" fill="#ffffff" />
                  <polygon points="193.38 43.53 197.33 38.7 196.16 38.7 189.67 46.6 189.67 38.7 188.7 38.7 188.7 51.35 189.67 51.35 189.67 47.92 192.73 44.26 196.85 51.35 198 51.35 193.38 43.53" fill="#ffffff" />
                </motion.g>
                <motion.polygon animate={{ transform: brandSmall ? 'scale(0)' : 'scale(1)' }} id="slash" points="88.69 0 39.73 61.69 40.13 62 89.09 .31 88.69 0" fill="#ffffff" />
                <polygon id="W" points="42.76 17.06 0 17.06 0 45.1 19.89 19.61 19.89 45.1 42.76 17.06" fill="#ffffff" />
              </svg>
            </>
            :
            <>

              <svg id="Warda_logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 62">
                <motion.g animate={{ transform: brandSmall ? 'translate(-150px, 0px) scale(0)' : 'translate(0px, 0px) scale(1)' }} id="type">
                  <polygon points="127.84 26.08 124.86 15.08 123.85 15.08 120.87 26.08 118.17 15.08 117.14 15.08 120.34 27.73 121.33 27.73 124.35 16.72 127.37 27.73 128.36 27.73 131.56 15.08 130.54 15.08 127.84 26.08" fill="#000000" />
                  <polygon points="92.8 49.66 85.41 38.7 84.44 38.7 84.44 51.35 85.41 51.35 85.41 40.35 92.8 51.35 93.77 51.35 93.77 38.7 92.8 38.7 92.8 49.66" fill="#000000" />
                  <polygon points="102.86 51.35 110.63 51.35 110.63 50.5 103.83 50.5 103.83 45.4 109.62 45.4 109.62 44.54 103.83 44.54 103.83 39.55 110.63 39.55 110.63 38.7 102.86 38.7 102.86 51.35" fill="#000000" />
                  <polygon points="117.66 39.55 121.47 39.55 121.47 51.35 122.44 51.35 122.44 39.55 126.27 39.55 126.27 38.7 117.66 38.7 117.66 39.55" fill="#000000" />
                  <polygon points="143.72 49.7 140.73 38.7 139.73 38.7 136.74 49.7 134.04 38.7 133.02 38.7 136.22 51.35 137.21 51.35 140.23 40.33 143.25 51.35 144.24 51.35 147.44 38.7 146.42 38.7 143.72 49.7" fill="#000000" />
                  <path d="M142.54,15.08h-.86l-4.71,12.65h1.04l1.11-3.07h5.97l1.11,3.07h1.04l-4.71-12.65Zm-3.11,8.72l2.68-7.44,2.68,7.44h-5.36Z" fill="#000000" />
                  <path d="M160.58,21.89c1.8-.3,2.95-1.51,2.95-3.41,0-2.2-1.58-3.39-3.67-3.39h-4.87v12.65h.97v-5.83h3.52l3.06,5.83h1.13l-3.09-5.84Zm-4.62-.84v-5.12h3.78c1.66,0,2.82,.8,2.82,2.56s-1.17,2.56-2.82,2.56h-3.78Z" fill="#000000" />
                  <path d="M176.58,15.08h-4.3v12.65h4.3c1.35,0,2.43-.39,3.2-1.15,1.29-1.28,1.24-3.64,1.24-5.35s.05-3.71-1.24-4.99c-.77-.76-1.85-1.15-3.2-1.15Zm2.52,10.82c-.74,.76-1.73,.98-2.75,.98h-3.09V15.93h3.09c1.03,0,2.01,.21,2.75,.98,1.01,1.05,.95,2.9,.95,4.32s.05,3.62-.95,4.67Z" fill="#000000" />
                  <path d="M193.11,15.08h-.86l-4.71,12.65h1.04l1.11-3.07h5.97l1.11,3.07h1.04l-4.71-12.65Zm-3.11,8.72l2.68-7.44,2.68,7.44h-5.36Z" fill="#000000" />
                  <path d="M161.99,39.89c-.85-.83-1.98-1.3-3.2-1.3s-2.36,.46-3.2,1.3c-1.17,1.16-1.19,2.27-1.19,5.13s.02,3.98,1.19,5.13c.85,.84,1.98,1.3,3.2,1.3s2.36-.46,3.2-1.3c1.17-1.15,1.19-2.29,1.19-5.13s-.02-3.98-1.19-5.13Zm-.77,9.74c-.65,.64-1.51,.98-2.43,.98s-1.78-.34-2.43-.98c-.92-.91-.99-1.9-.99-4.6s.07-3.7,.99-4.6c.65-.64,1.51-.98,2.43-.98s1.78,.34,2.43,.98c.92,.91,.99,1.9,.99,4.6s-.07,3.7-.99,4.6Z" fill="#000000" />
                  <path d="M177.35,45.5c1.8-.3,2.95-1.51,2.95-3.41,0-2.2-1.58-3.39-3.67-3.39h-4.87v12.65h.97v-5.83h3.53l3.06,5.83h1.13l-3.09-5.85Zm-4.62-.84v-5.12h3.78c1.65,0,2.82,.8,2.82,2.56s-1.17,2.56-2.82,2.56h-3.78Z" fill="#000000" />
                  <polygon points="193.38 43.53 197.33 38.7 196.16 38.7 189.67 46.6 189.67 38.7 188.7 38.7 188.7 51.35 189.67 51.35 189.67 47.92 192.73 44.26 196.85 51.35 198 51.35 193.38 43.53" fill="#000000" />
                </motion.g>
                <motion.polygon animate={{ transform: brandSmall ? 'scale(0)' : 'scale(1)' }} id="slash" points="88.69 0 39.73 61.69 40.13 62 89.09 .31 88.69 0" fill="#000000" />
                <polygon id="W" points="42.76 17.06 0 17.06 0 45.1 19.89 19.61 19.89 45.1 42.76 17.06" fill="#000000" />
              </svg>
            </>
          }
        </Navbar.Brand>

        <Hamburger toggled={isOpen} toggle={setOpen} size={30} className='navbar-toggler' easing="ease-in" direction="right" color={`${transparent.transparent === true ? isOpen === false ? '#f0f2f4' : '#101820' : '#101820'}`} />

        <Navbar className={`navbar-toggled ${transparent.transparent === true ? 'navbar-transparent' : ''} ${isOpen === true ? ' opacity1' : ' opacity0'}`} id={`${isOpen === true ? 'showNavbar' : ''}`} >
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {navigation.nodes[0].menuItems.nodes.map((item, i, data) => {
              return (
                <TransitionLink className="nav-link" key={i} index={i} path={item?.path} workColor={logo.siteOptions?.siteOptions?.workColor} aboutColor={logo.siteOptions?.siteOptions?.aboutColor} jobsColor={logo.siteOptions?.siteOptions?.jobsColor} contactColor={logo.siteOptions?.siteOptions?.contactColor} target={item?.target}>{item?.label}</TransitionLink>
              )

            })}
          </Nav>
        </Navbar>
      </Container >

    </motion.div>

  )
}

export default Header