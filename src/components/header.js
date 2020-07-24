import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import {SocialMediaIconsReact} from 'social-media-icons-react';
import Me from "../images/me.png";

const Header = ({ siteTitle }) => {
  const baseColor = "#32a852";
  const hoverColor = "black";
  const [reddit, setReddit] = useState(baseColor);
  const [twitter, setTwitter] = useState(baseColor);
  const [linkedin, setLinkedin] = useState(baseColor);
  const [github, setGithub] = useState(baseColor);

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
        width: `100%`,
        'alignItems': 'center',
        display: "flex",
        'flexDirection': 'column'
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div>
        <img className="me-image" src={Me} />
      </div>
      <div
      className="social-media"
      style={{
        marginBottom: `1.45rem`,
        width: `100%`,
        'alignItems': 'center',
        display: "flex",
        'flexDirection': 'row',
        justifyContent: "center"
      }}>
        <div onMouseEnter={() => setTwitter(hoverColor)} onMouseLeave={() => setTwitter(baseColor)}>
          <SocialMediaIconsReact backgroundColor={twitter} style={{padding: "1rem"}} icon="twitter" size={45} roundness={25} url="https://twitter.com/msieurmoustache"/>
        </div>
        <div onMouseEnter={() => setGithub(hoverColor)} onMouseLeave={() => setGithub(baseColor)}>
          <SocialMediaIconsReact backgroundColor={github} style={{margin: "auto"}} icon="github" size={45} roundness={25} url="https://github.com/msieurmoustache"/>
        </div>
        <div onMouseEnter={() => setLinkedin(hoverColor)} onMouseLeave={() => setLinkedin(baseColor)}>
          <SocialMediaIconsReact backgroundColor={linkedin} style={{margin: "auto"}} icon="linkedin" size={45} roundness={25} url="https://ca.linkedin.com/in/félix-bélanger-robillard-7115a37b"/>
        </div>  
        <div onMouseEnter={() => setReddit(hoverColor)} onMouseLeave={() => setReddit(baseColor)} >
          <SocialMediaIconsReact backgroundColor={reddit} style={{margin: "auto"}} icon="reddit" size={45} roundness={25} url="https://www.reddit.com/u/msieurmoustache"/>
        </div>
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
