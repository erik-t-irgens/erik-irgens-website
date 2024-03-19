import React from "react"
// https://www.npmjs.com/package/react-scroll-into-view

import NavButton from "./components/NavButton"
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tagStyle: {
                position: 'fixed',
                color: 'white',
                fontFamily: "'Major Mono Display', monospace",
                cursor: 'pointer',
                fontSize: '5px',
                zIndex: 10,
                left: '50px',
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: .8,
                backgroundColor: 'black',
                width: '40px',
            },

            headerStyle: {
                // position: 'fixed',
                zIndex: 10,
                // left: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
                top: '50%',
                // transform: 'translateY(-50%)',
                opacity: .8,
                backgroundColor: 'black',
                // width: '40px',
            }
        }

    }


    render() {

        const { headerStyle,
            // tagStyle
        } = this.state
        return (
            <div className="nav-bar-wrapper">
                {/* <div style={tagStyle} className="nav-bar-tag"><h1>>></h1></div> */}

                <div style={headerStyle} className="side-nav-bar">
                    <NavButton navLocation="welcome-section" color="#42f5d1">&#8593;ToTop</NavButton>
                    <NavButton navLocation="about-section" color="#ffb619">About</NavButton>

                    <NavButton navLocation="portfolio-section" color="#ff4242">Portfolio</NavButton>
                    <NavButton navLocation="contact-section" color="#80ffa2">Contact</NavButton>
                </div>
            </div>

        )
    }


}

export default Header;