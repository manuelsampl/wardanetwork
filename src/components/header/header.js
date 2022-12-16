import React, { useState } from "react"

import { graphql, useStaticQuery } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Spin as Hamburger } from 'hamburger-react'

import TransitionLink from '../transitionlink/transition'




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

        allWpMenu {
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




  return (
    <Navbar className={`${transparent.transparent === true ? 'navbar-transparent' : ''}`} expand="md" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/"><img src={`${transparent.transparent === true ? isOpen === true ? logo.siteOptions.siteOptions.wardaLogo?.sourceUrl : logo.siteOptions.siteOptions.wardaLogoWhite?.sourceUrl : logo.siteOptions.siteOptions.wardaLogo?.sourceUrl}`} alt={logo.siteOptions.siteOptions.wardaLogo?.altText} /></Navbar.Brand>

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

    </Navbar >

  )
}

export default Header