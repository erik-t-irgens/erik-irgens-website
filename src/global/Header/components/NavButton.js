import React from "react"
import ScrollTo from 'react-scroll-into-view'

class NavButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonName: this.props.children.substring(0, 1),
            buttonStyle: {
                color: 'white',
                fontSize: '25px',
                transition: 'all .15s ease-in-out',
                position: 'relative',
                left: '0px',
                fontFamily: "'Major Mono Display', monospace",
                cursor: 'pointer',
                boxShadow: '1px 1px 1px black'

            },
            navLocation: this.props.navLocation
        }

    }

    onMouseOver = () => {
        this.setState({
            buttonName: this.props.children,
            buttonStyle: {
                ...this.state.buttonStyle,
                color: this.props.color,
                boxShadow: '5px 5px 5px black'
            }
        })
    }

    onMouseLeave = () => {
        this.setState({
            buttonName: this.props.children.substring(0, 1),
            buttonStyle: {
                ...this.state.buttonStyle,
                color: 'white',
                boxShadow: '1px 1px 1px black'
            }
        })
    }

    render() {
        const { buttonStyle, navLocation, buttonName } = this.state;

        return (
            <div onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseLeave} style={buttonStyle} className="nav-button">
                <ScrollTo alignToTop selector={`#${navLocation}`}>
                    <div className="nav-button-name">{buttonName}</div>
                </ScrollTo>
            </div>
        )
    }


}

export default NavButton;